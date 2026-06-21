import type { DashboardStat } from "@/share/api/dashboardApi";

type StatCardProps = {
  stat: DashboardStat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="cug-stat-card">
      <p className="cug-stat-label">{stat.label}</p>
      <p className="cug-stat-value">{stat.value}</p>
      <p className="cug-stat-helper">{stat.helper}</p>
    </article>
  );
}
