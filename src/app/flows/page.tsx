import { getFlowModules } from "@/share/api/flowApi";
import { FlowBuilder } from "@/share/component/control/FlowBuilder";

export default function FlowsPage() {
  const modules = getFlowModules();

  return (
    <section className="cug-flow-page">
      <div className="cug-dashboard-header">
        <div className="cug-dashboard-title-group">
          <p className="cug-eyebrow">Flow Builder</p>
          <h1 className="cug-page-title">Build flow bang keo tha module</h1>
          <p className="cug-page-description">
            Tao workflow Start, AI Agent, HTTP Request va Output tren canvas.
          </p>
        </div>
      </div>

      <FlowBuilder modules={modules} />
    </section>
  );
}
