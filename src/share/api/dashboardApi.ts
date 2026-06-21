export type DashboardStat = {
  label: string;
  value: string;
  helper: string;
};

export type CompletedJob = {
  id: string;
  name: string;
  completedAt: string;
  duration: string;
};

export function getDashboardOverview() {
  return {
    stats: [
      {
        label: "So lan chay trong ngay",
        value: "128",
        helper: "+18% so voi hom qua"
      },
      {
        label: "Cong viec da hoan thanh",
        value: "94",
        helper: "73% tong workflow da chay"
      },
      {
        label: "Dang xu ly",
        value: "12",
        helper: "8 workflow trong hang doi"
      },
      {
        label: "Loi can xem",
        value: "3",
        helper: "Can kiem tra log gan nhat"
      }
    ] satisfies DashboardStat[],
    completedJobs: [
      {
        id: "job-001",
        name: "Phan tich yeu cau khach hang",
        completedAt: "09:15",
        duration: "42s"
      },
      {
        id: "job-002",
        name: "Gui ket qua toi CRM",
        completedAt: "10:40",
        duration: "18s"
      },
      {
        id: "job-003",
        name: "Tong hop bao cao ngay",
        completedAt: "13:05",
        duration: "1m 12s"
      }
    ] satisfies CompletedJob[]
  };
}
