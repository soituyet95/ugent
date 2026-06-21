import { FLOW_MODULES, FLOW_NODE_TYPES } from "@/share/ultil/flowConstants";

export function getFlowSummary() {
  return {
    name: "MVP Flow",
    description: "Start -> AI Agent -> HTTP Request -> Output",
    nodes: FLOW_NODE_TYPES
  };
}

export function getFlowModules() {
  return FLOW_MODULES;
}
