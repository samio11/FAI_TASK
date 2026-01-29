import { Badge } from "@/components/ui/badge";
import { StatsGrid } from "../_DashboardComponents/StatCard";
import { CallTrendsChart } from "../_DashboardComponents/CallTrendsChart";
import { RecentActivity } from "../_DashboardComponents/RecentActivity";
import { TopRepairRequests } from "../_DashboardComponents/TopRepairRequests";

export function DashboardPage() {
  return (
    <div className="flex-1">
      {/* Page Header */}
      <div className="bg-[#0f1535] border-b border-[#1a2038] px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <h1 className="text-white text-base sm:text-xl font-semibold">
            Dashboard Overview
          </h1>
          <Badge className="bg-pink-500 text-white border-0 hidden sm:inline-flex">
            Ms. Abdun Noor
          </Badge>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <StatsGrid />
        <CallTrendsChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <RecentActivity />
          <TopRepairRequests />
        </div>
      </div>
    </div>
  );
}
