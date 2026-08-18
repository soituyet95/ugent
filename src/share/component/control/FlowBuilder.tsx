"use client";

import {
  addEdge,
  Background,
  Controls,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Connection,
  type Edge,
  type Node,
  type NodeProps
} from "@xyflow/react";
import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type DragEvent
} from "react";
import type { FlowModule, FlowModuleType } from "@/share/ultil/flowConstants";
import {
  ConditionNode,
  type ConditionFlowNode
} from "@/share/component/module/ConditionNode";
import { ModuleConfigFields } from "@/share/component/module/ModuleConfigFields";

type FlowNodeData = {
  label: string;
  description: string;
  type: FlowModuleType;
  config: Record<string, string>;
};

type FlowNode = Node<FlowNodeData, "flowNode">;
type BuilderNode = FlowNode | ConditionFlowNode;

type FlowBuilderProps = {
  modules: FlowModule[];
};

function createDefaultConfig(flowModule: FlowModule) {
  return Object.fromEntries(
    (flowModule.fields ?? []).map((field) => [
      field.key,
      field.control === "select" ? field.options?.[0]?.value ?? "" : ""
    ])
  );
}

function createBuilderNode(
  flowModule: FlowModule,
  id: string,
  position: { x: number; y: number }
): BuilderNode {
  if (flowModule.type === "condition") {
    return {
      id,
      type: "conditionNode",
      position,
      data: {
        label: flowModule.label,
        description: flowModule.description,
        type: "condition",
        config: createDefaultConfig(flowModule)
      }
    };
  }

  return {
    id,
    type: "flowNode",
    position,
    data: {
      label: flowModule.label,
      description: flowModule.description,
      type: flowModule.type,
      config: createDefaultConfig(flowModule)
    }
  };
}

const initialNodes: FlowNode[] = [
  {
    id: "start-1",
    type: "flowNode",
    position: { x: 80, y: 120 },
    data: {
      label: "Start",
      description: "Nhan input dau vao",
      type: "start",
      config: {}
    }
  },
  {
    id: "output-1",
    type: "flowNode",
    position: { x: 520, y: 120 },
    data: {
      label: "Output",
      description: "Tra ket qua cuoi",
      type: "output",
      config: {}
    }
  }
];

const initialEdges: Edge[] = [
  {
    id: "edge-start-output",
    source: "start-1",
    target: "output-1"
  }
];

function FlowNodeCard({ data, selected }: NodeProps<FlowNode>) {
  return (
    <div
      className={`cug-flow-node cug-flow-node-${data.type} ${
        selected ? "cug-flow-node-selected" : ""
      }`}
    >
      <Handle className="cug-flow-handle" position={Position.Left} type="target" />
      <p className="cug-flow-node-title">{data.label}</p>
      <p className="cug-flow-node-description">{data.description}</p>
      <Handle className="cug-flow-handle" position={Position.Right} type="source" />
    </div>
  );
}

function FlowCanvas({ modules }: FlowBuilderProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<BuilderNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const { screenToFlowPosition } = useReactFlow();
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);
  const selectedModule = modules.find(
    (module) => module.type === selectedNode?.data.type
  );

  const nodeTypes = useMemo(
    () => ({
      flowNode: FlowNodeCard,
      conditionNode: ConditionNode
    }),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) => addEdge(connection, currentEdges));
    },
    [setEdges]
  );

  const onDragStart = useCallback(
    (event: DragEvent<HTMLButtonElement>, module: FlowModule) => {
      event.dataTransfer.setData("application/ugent-flow-module", module.type);
      event.dataTransfer.effectAllowed = "move";
    },
    []
  );

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const moduleType = event.dataTransfer.getData(
        "application/ugent-flow-module"
      ) as FlowModuleType;
      const flowModule = modules.find((module) => module.type === moduleType);

      if (!flowModule) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      });

      setNodes((currentNodes) => [
        ...currentNodes,
        createBuilderNode(
          flowModule,
          `${flowModule.type}-${Date.now()}`,
          position
        )
      ]);
    },
    [modules, screenToFlowPosition, setNodes]
  );

  const addNodeAfterSelected = useCallback(
    (flowModule: FlowModule) => {
      if (!selectedNode) {
        return;
      }

      const nodeId = `${flowModule.type}-${Date.now()}`;

      setNodes((currentNodes) => [
        ...currentNodes,
        createBuilderNode(flowModule, nodeId, {
          x: selectedNode.position.x + 260,
          y: selectedNode.position.y
        })
      ]);

      setEdges((currentEdges) => [
        ...currentEdges,
        {
          id: `edge-${selectedNode.id}-${nodeId}`,
          source: selectedNode.id,
          target: nodeId
        }
      ]);

      setSelectedNodeId(nodeId);
    },
    [selectedNode, setEdges, setNodes]
  );

  const deleteSelectedNode = useCallback(() => {
    if (!selectedNode) {
      return;
    }

    setNodes((currentNodes) =>
      currentNodes.filter((node) => node.id !== selectedNode.id)
    );
    setEdges((currentEdges) =>
      currentEdges.filter(
        (edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id
      )
    );
    setSelectedNodeId(null);
  }, [selectedNode, setEdges, setNodes]);

  const updateSelectedNodeData = useCallback(
    (field: "label" | "description", value: string) => {
      if (!selectedNode) {
        return;
      }

      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === selectedNode.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  [field]: value
                }
              } as BuilderNode
            : node
        )
      );
    },
    [selectedNode, setNodes]
  );

  const updateSelectedNodeConfig = useCallback(
    (key: string, value: string) => {
      if (!selectedNode) {
        return;
      }

      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === selectedNode.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  config: {
                    ...node.data.config,
                    [key]: value
                  }
                }
              } as BuilderNode
            : node
        )
      );
    },
    [selectedNode, setNodes]
  );

  return (
    <div className="cug-flow-builder">
      <aside className="cug-flow-sidebar">
        <div>
          <p className="cug-eyebrow">Modules</p>
          <h2 className="cug-panel-title">Keo module vao canvas</h2>
          <p className="cug-panel-description">
            Chon block can dung va tha vao vung build flow.
          </p>
        </div>
        <div className="cug-flow-module-list">
          {modules.map((module) => (
            <button
              className="cug-flow-module"
              draggable
              key={module.type}
              onDragStart={(event) => onDragStart(event, module)}
              type="button"
            >
              <span className="cug-flow-module-title">{module.label}</span>
              <span className="cug-flow-module-description">
                {module.description}
              </span>
            </button>
          ))}
        </div>

        <div className="cug-flow-node-actions">
          <div>
            <p className="cug-eyebrow">Node actions</p>
            <h2 className="cug-panel-title">
              {selectedNode ? selectedNode.data.label : "Chua chon node"}
            </h2>
            <p className="cug-panel-description">
              Click vao node tren canvas de them, xoa hoac cap nhat.
            </p>
          </div>

          {selectedNode ? (
            <div className="cug-flow-action-stack">
              <label className="cug-flow-field">
                <span className="cug-flow-field-label">Ten node</span>
                <input
                  className="cug-flow-input"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateSelectedNodeData("label", event.target.value)
                  }
                  value={selectedNode.data.label}
                />
              </label>

              <label className="cug-flow-field">
                <span className="cug-flow-field-label">Mo ta</span>
                <textarea
                  className="cug-flow-textarea"
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                    updateSelectedNodeData("description", event.target.value)
                  }
                  value={selectedNode.data.description}
                />
              </label>

              <ModuleConfigFields
                fields={selectedModule?.fields ?? []}
                onChange={updateSelectedNodeConfig}
                values={selectedNode.data.config}
              />

              <div className="cug-flow-field">
                <span className="cug-flow-field-label">Them node moi</span>
                <div className="cug-flow-action-grid">
                  {modules.map((module) => (
                    <button
                      className="cug-flow-action-button"
                      key={module.type}
                      onClick={() => addNodeAfterSelected(module)}
                      type="button"
                    >
                      {module.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="cug-flow-danger-button"
                onClick={deleteSelectedNode}
                type="button"
              >
                Xoa node hien tai
              </button>
            </div>
          ) : null}
        </div>
      </aside>

      <section className="cug-flow-canvas-panel">
        <div className="cug-flow-toolbar">
          <div>
            <h2 className="cug-panel-title">Flow canvas</h2>
            <p className="cug-panel-description">
              Keo module, noi cac node va sap xep luong chay.
            </p>
          </div>
          <span className="cug-status-badge">{nodes.length} nodes</span>
        </div>
        <div className="cug-flow-canvas" onDragOver={onDragOver} onDrop={onDrop}>
          <ReactFlow
            edges={edges}
            fitView
            nodeTypes={nodeTypes}
            nodes={nodes}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
            onNodeClick={(_event, node) => setSelectedNodeId(node.id)}
            onNodesChange={onNodesChange}
            onPaneClick={() => setSelectedNodeId(null)}
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </section>
    </div>
  );
}

export function FlowBuilder(props: FlowBuilderProps) {
  return (
    <ReactFlowProvider>
      <FlowCanvas {...props} />
    </ReactFlowProvider>
  );
}
