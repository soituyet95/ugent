export const FLOW_NODE_TYPES = [
  "Start",
  "AI Agent",
  "HTTP Request",
  "Output"
] as const;

export type FlowModuleType = "start" | "ai_agent" | "http_request" | "output";

export type FlowModule = {
  type: FlowModuleType;
  label: string;
  description: string;
};

export const FLOW_MODULES: FlowModule[] = [
  {
    type: "start",
    label: "Start",
    description: "Nhan input dau vao"
  },
  {
    type: "ai_agent",
    label: "AI Agent",
    description: "Xu ly prompt bang model AI"
  },
  {
    type: "http_request",
    label: "HTTP Request",
    description: "Goi API ben ngoai"
  },
  {
    type: "output",
    label: "Output",
    description: "Tra ket qua cuoi"
  }
];
