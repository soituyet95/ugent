import {
  Handle,
  Position,
  type Node,
  type NodeProps
} from "@xyflow/react";

export type ConditionNodeData = {
  label: string;
  description: string;
  type: "condition";
  config: Record<string, string>;
};

export type ConditionFlowNode = Node<ConditionNodeData, "conditionNode">;

export function ConditionNode({ data, selected }: NodeProps<ConditionFlowNode>) {
  return (
    <div
      className={`cug-condition-node ${
        selected ? "cug-condition-node-selected" : ""
      }`}
    >
      <Handle
        className="cug-flow-handle cug-condition-input"
        position={Position.Left}
        type="target"
      />

      <div className="cug-condition-node-content">
        <p className="cug-flow-node-title">{data.label}</p>
        <p className="cug-flow-node-description">{data.description}</p>
      </div>

      <Handle
        className="cug-flow-handle cug-condition-if-handle"
        id="if"
        position={Position.Right}
        type="source"
      />
      <span className="cug-condition-branch-label cug-condition-if-label">
        If
      </span>

      <Handle
        className="cug-flow-handle cug-condition-else-handle"
        id="else"
        position={Position.Bottom}
        type="source"
      />
      <span className="cug-condition-branch-label cug-condition-else-label">
        Else
      </span>
    </div>
  );
}
