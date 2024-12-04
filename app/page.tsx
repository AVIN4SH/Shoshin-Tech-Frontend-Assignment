import { StatCard } from "@/components/cards/stat-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingSchedule } from "@/components/dashboard/upcoming-schedule";
import { Announcements } from "@/components/dashboard/announcements";
import { TrendChart } from "@/components/dashboard/trend-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:grid md:gap-4 md:grid-cols-3 xl:grid-cols-5">
      <div className="md:col-span-3 md:space-y-4 max-md:space-y-4">
        <h1 className="text-2xl font-semibold max-md::mb-4">Dashboard</h1>

        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Available Position"
            value="24"
            subtitle="4 Urgently needed"
            className="bg-rose-50"
          />
          <StatCard
            title="Job Open"
            value="10"
            subtitle="4 Active hiring"
            className="bg-blue-50"
          />
          <StatCard
            title="New Employees"
            value="24"
            subtitle="4 Department"
            className="bg-purple-50"
          />
        </div>
        <>
          <div className="grid gap-4 sm:grid-cols-2 md:mb-4">
            <StatCard
              title="Total Employees"
              value="216"
              subtitle="120 Men • 96 Women"
              trend={{ value: 25, label: "Past month" }}
              chart={<TrendChart data={[30, 40, 45, 50, 49, 60, 70, 91]} />}
            />
            <StatCard
              title="Talent Request"
              value="16"
              subtitle="6 Men • 10 Women"
              trend={{ value: 25, label: "Past month" }}
              chart={<TrendChart data={[30, 40, 45, 50, 49, 60, 70, 91]} />}
            />
          </div>
          <Announcements className="sm:col-span-2" />
        </>
      </div>
      <div className="xl:col-span-2 space-y-4 sm:max-md:flex sm:max-md:flex-row sm:max-md:gap-4 md:max-xl:flex md:max-xl:flex-row md:max-xl:col-span-3 md:max-xl:space-x-4">
        <div className="flex-1 md:max-xl:w-[30%]">
          <RecentActivity />
        </div>
        <div className="flex-1 md:max-xl:w-[70%]">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}
