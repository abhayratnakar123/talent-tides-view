import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { LeaveCharts } from "@/components/dashboard/LeaveCharts";
import { LeaveCalendar } from "@/components/dashboard/LeaveCalendar";
import { PendingLeavesTable } from "@/components/dashboard/PendingLeavesTable";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { EmployeeLeaveSummary } from "@/components/dashboard/EmployeeLeaveSummary";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {/* Quick Actions */}
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Dashboard
              </h2>
              <QuickActions />
            </div>

            {/* Stats - horizontal scroll */}
            <StatsCards />

            {/* Employee Leave Summary */}
            <EmployeeLeaveSummary />

            {/* Charts */}
            <LeaveCharts />

            {/* Calendar */}
            <LeaveCalendar />

            {/* Pending + Events side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PendingLeavesTable />
              </div>
              <div>
                <UpcomingEvents />
              </div>
            </div>

            {/* Activity Feed */}
            <ActivityFeed />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
