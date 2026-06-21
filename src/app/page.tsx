import { getDashboardOverview } from "@/share/api/dashboardApi";
import { StatCard } from "@/share/component/control/StatCard";

export default function Home() {
  const dashboard = getDashboardOverview();

  return (
    <section className="cug-dashboard">
      <div className="cug-dashboard-header">
        <div className="cug-dashboard-title-group">
          <p className="cug-eyebrow">
            Dashboard
          </p>
          <h1 className="cug-page-title">
            Tong quan van hanh workflow
          </h1>
          <p className="cug-page-description">
            Theo doi so lan chay trong ngay, tien do hoan thanh va cac cong
            viec gan nhat.
          </p>
        </div>
        <div className="cug-date-pill">
          Hom nay: 23/05/2026
        </div>
      </div>

      <div className="cug-stat-grid">
        {dashboard.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="cug-dashboard-grid">
        <section className="cug-panel">
          <div className="cug-panel-header">
            <div>
              <h2 className="cug-panel-title">Cong viec da hoan thanh</h2>
              <p className="cug-panel-description">
                Danh sach workflow hoan tat trong ngay.
              </p>
            </div>
            <span className="cug-status-badge">
              94 done
            </span>
          </div>

          <div className="cug-table-wrap">
            <table className="cug-table">
              <thead className="cug-table-head">
                <tr>
                  <th className="cug-table-cell cug-table-heading">Cong viec</th>
                  <th className="cug-table-cell cug-table-heading">Hoan thanh</th>
                  <th className="cug-table-cell cug-table-heading">Thoi gian chay</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.completedJobs.map((job) => (
                  <tr className="cug-table-row" key={job.id}>
                    <td className="cug-table-cell cug-table-primary">{job.name}</td>
                    <td className="cug-table-cell cug-table-muted">
                      {job.completedAt}
                    </td>
                    <td className="cug-table-cell cug-table-muted">
                      {job.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="cug-panel">
          <h2 className="cug-panel-title">Trang thai hom nay</h2>
          <div className="cug-status-stack">
            <div>
              <div className="cug-progress-label-row">
                <span className="cug-muted-text">Hoan thanh</span>
                <span className="cug-medium-text">73%</span>
              </div>
              <div className="cug-progress-track">
                <div className="cug-progress-fill" />
              </div>
            </div>
            <div className="cug-status-list">
              <div className="cug-status-row">
                <span className="cug-muted-text">Tong lan chay</span>
                <span className="cug-medium-text">128</span>
              </div>
              <div className="cug-status-row">
                <span className="cug-muted-text">Thanh cong</span>
                <span className="cug-medium-text">94</span>
              </div>
              <div className="cug-status-row">
                <span className="cug-muted-text">That bai</span>
                <span className="cug-medium-text">3</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
