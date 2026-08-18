import type { FlowModuleField } from "@/share/ultil/flowConstants";

type ModuleConfigFieldsProps = {
  fields: readonly FlowModuleField[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
};

export function ModuleConfigFields({
  fields,
  values,
  onChange
}: ModuleConfigFieldsProps) {
  if (fields.length === 0) {
    return null;
  }

  const containsSecret = fields.some((field) => field.control === "password");

  return (
    <div className="cug-module-config">
      <div>
        <p className="cug-eyebrow">Module config</p>
        <p className="cug-panel-description">
          Cau hinh du lieu dau vao va ket noi cho node nay.
        </p>
      </div>

      {fields.map((field) => (
        <label className="cug-flow-field" key={field.key}>
          <span className="cug-flow-field-label">
            {field.label}
            {field.required ? " *" : ""}
          </span>

          {field.control === "code" ? (
            <textarea
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className={`cug-flow-textarea cug-module-code-input cug-module-code-input-${field.language ?? "plain"}`}
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              spellCheck={false}
              value={values[field.key] ?? ""}
              wrap="off"
            />
          ) : null}

          {field.control === "textarea" ? (
            <textarea
              className="cug-flow-textarea cug-module-code-input"
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              value={values[field.key] ?? ""}
            />
          ) : null}

          {field.control === "select" ? (
            <select
              className="cug-flow-input"
              onChange={(event) => onChange(field.key, event.target.value)}
              required={field.required}
              value={values[field.key] ?? ""}
            >
              {(field.options ?? []).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}

          {field.control === "text" || field.control === "password" ? (
            <input
              autoComplete={field.control === "password" ? "new-password" : "off"}
              className="cug-flow-input"
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              type={field.control}
              value={values[field.key] ?? ""}
            />
          ) : null}
        </label>
      ))}

      {containsSecret ? (
        <p className="cug-module-security-note">
          Secret chi nam trong flow dang soan. Runtime backend phai ma hoa va
          thuc hien ket noi, khong goi truc tiep tu trinh duyet.
        </p>
      ) : null}
    </div>
  );
}
