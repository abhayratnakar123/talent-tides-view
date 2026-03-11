import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: { value: string; up: boolean };
  accent?: "default" | "approved" | "pending" | "destructive";
}

function StatCard({ label, value, trend, accent = "default" }: StatCardProps) {
  const accentBar: Record<string, string> = {
    default: "bg-primary",
    approved: "bg-status-approved",
    pending: "bg-status-pending",
    destructive: "bg-destructive",
  };

  return (
    <Card className="min-w-[220px] snap-start shrink-0 relative overflow-hidden hover:shadow-md transition-shadow">
      <div className={`absolute top-0 left-0 w-1 h-full ${accentBar[accent]}`} />
      <CardContent className="p-5 pl-6">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-1.5">
            {trend.up ? (
              <TrendingUp className="h-3.5 w-3.5 text-status-approved" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-destructive" />
            )}
            <span
              className={`text-xs font-medium ${
                trend.up ? "text-status-approved" : "text-destructive"
              }`}
            >
              {trend.value}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const stats: StatCardProps[] = [
  { label: "Pending Requests", value: 12, trend: { value: "+3 this week", up: true }, accent: "pending" },
  { label: "Approved Leaves", value: 84, trend: { value: "+8% vs last month", up: true }, accent: "approved" },
  { label: "Rejected Leaves", value: 7, trend: { value: "-2 vs last month", up: false }, accent: "destructive" },
  { label: "Total Leaves", value: 103, trend: { value: "+12% this quarter", up: true } },
  { label: "Upcoming Events", value: 5 },
  { label: "Total Employees", value: 248, trend: { value: "+4 new hires", up: true } },
];

export function StatsCards() {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
