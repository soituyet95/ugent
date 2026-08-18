export const FLOW_NODE_TYPES = [
  "Start",
  "AI Agent",
  "HTTP Request",
  "Condition",
  "Telegram Hook",
  "Zalo Hook",
  "Messenger Hook",
  "Facebook Hook",
  "Google Sheets Get",
  "Google Sheets Push",
  "JavaScript",
  "HTML / CSS / JS",
  "AI Content",
  "AI Image",
  "AI Video",
  "Output"
] as const;

export type FlowModuleType =
  | "start"
  | "ai_agent"
  | "http_request"
  | "condition"
  | "telegram_hook"
  | "zalo_hook"
  | "messenger_hook"
  | "facebook_hook"
  | "google_sheets_get"
  | "google_sheets_push"
  | "javascript"
  | "html_control"
  | "ai_content"
  | "ai_image"
  | "ai_video"
  | "output";

export type FlowModule = {
  type: FlowModuleType;
  label: string;
  description: string;
  fields?: readonly FlowModuleField[];
};

export type FlowModuleField = {
  key: string;
  label: string;
  control: "text" | "password" | "textarea" | "select" | "code";
  placeholder?: string;
  required?: boolean;
  language?: "html" | "css" | "javascript";
  options?: readonly {
    label: string;
    value: string;
  }[];
};

const HOOK_FIELDS: readonly FlowModuleField[] = [
  {
    key: "clientId",
    label: "Client ID",
    control: "text",
    placeholder: "Nhap client ID",
    required: true
  },
  {
    key: "secretKey",
    label: "Secret key",
    control: "password",
    placeholder: "Nhap secret key hoac bot token",
    required: true
  },
  {
    key: "webhookUrl",
    label: "Webhook URL",
    control: "text",
    placeholder: "https://api.example.com/webhooks/..."
  }
];

const AI_FIELDS: readonly FlowModuleField[] = [
  {
    key: "endpoint",
    label: "AI API endpoint",
    control: "text",
    placeholder: "https://api.example.com/v1/...",
    required: true
  },
  {
    key: "apiKey",
    label: "API key",
    control: "password",
    placeholder: "Nhap API key",
    required: true
  },
  {
    key: "model",
    label: "Model",
    control: "text",
    placeholder: "Ten model",
    required: true
  },
  {
    key: "prompt",
    label: "Prompt",
    control: "textarea",
    placeholder: "Mo ta noi dung can AI tao",
    required: true
  }
];

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
    type: "condition",
    label: "If / Else",
    description: "Re nhanh flow theo dieu kien"
  },
  {
    type: "telegram_hook",
    label: "Telegram Hook",
    description: "Nhan tin nhan va su kien tu Telegram",
    fields: HOOK_FIELDS
  },
  {
    type: "zalo_hook",
    label: "Zalo Hook",
    description: "Nhan tin nhan va su kien tu Zalo OA",
    fields: HOOK_FIELDS
  },
  {
    type: "messenger_hook",
    label: "Messenger Hook",
    description: "Nhan tin nhan tu Facebook Messenger",
    fields: HOOK_FIELDS
  },
  {
    type: "facebook_hook",
    label: "Facebook Hook",
    description: "Nhan su kien tu Facebook Page",
    fields: HOOK_FIELDS
  },
  {
    type: "google_sheets_get",
    label: "Google Sheets Get",
    description: "Doc du lieu tu Google Sheets",
    fields: [
      {
        key: "connectionId",
        label: "Google connection ID",
        control: "text",
        placeholder: "Ket noi Google da luu o backend",
        required: true
      },
      {
        key: "spreadsheetId",
        label: "Spreadsheet ID",
        control: "text",
        placeholder: "ID cua Google Sheet",
        required: true
      },
      {
        key: "range",
        label: "Range",
        control: "text",
        placeholder: "Sheet1!A1:Z100",
        required: true
      }
    ]
  },
  {
    type: "google_sheets_push",
    label: "Google Sheets Push",
    description: "Them du lieu vao Google Sheets",
    fields: [
      {
        key: "connectionId",
        label: "Google connection ID",
        control: "text",
        placeholder: "Ket noi Google da luu o backend",
        required: true
      },
      {
        key: "spreadsheetId",
        label: "Spreadsheet ID",
        control: "text",
        placeholder: "ID cua Google Sheet",
        required: true
      },
      {
        key: "range",
        label: "Range",
        control: "text",
        placeholder: "Sheet1!A:Z",
        required: true
      },
      {
        key: "values",
        label: "Values JSON",
        control: "textarea",
        placeholder: "[[{{input.name}}, {{input.email}}]]",
        required: true
      }
    ]
  },
  {
    type: "javascript",
    label: "JavaScript",
    description: "Bien doi du lieu bang ma JavaScript",
    fields: [
      {
        key: "code",
        label: "JavaScript code",
        control: "textarea",
        placeholder: "return { ...input, processed: true };",
        required: true
      }
    ]
  },
  {
    type: "html_control",
    label: "HTML / CSS / JS",
    description: "Viet control HTML co style va JavaScript",
    fields: [
      {
        key: "html",
        label: "HTML",
        control: "code",
        language: "html",
        placeholder: "<section class=\"my-control\">...</section>",
        required: true
      },
      {
        key: "css",
        label: "CSS",
        control: "code",
        language: "css",
        placeholder: ".my-control { color: #16745f; }"
      },
      {
        key: "javascript",
        label: "JavaScript",
        control: "code",
        language: "javascript",
        placeholder: "const root = document.querySelector('.my-control');"
      }
    ]
  },
  {
    type: "ai_content",
    label: "AI Content",
    description: "Tao noi dung tu API AI",
    fields: AI_FIELDS
  },
  {
    type: "ai_image",
    label: "AI Image",
    description: "Tao hinh anh bang AI",
    fields: [
      ...AI_FIELDS,
      {
        key: "size",
        label: "Image size",
        control: "select",
        options: [
          { label: "1024 x 1024", value: "1024x1024" },
          { label: "1536 x 1024", value: "1536x1024" },
          { label: "1024 x 1536", value: "1024x1536" }
        ]
      }
    ]
  },
  {
    type: "ai_video",
    label: "AI Video",
    description: "Tao video bang AI",
    fields: [
      ...AI_FIELDS,
      {
        key: "duration",
        label: "Duration",
        control: "select",
        options: [
          { label: "5 seconds", value: "5" },
          { label: "10 seconds", value: "10" },
          { label: "15 seconds", value: "15" }
        ]
      }
    ]
  },
  {
    type: "output",
    label: "Output",
    description: "Tra ket qua cuoi"
  }
];
