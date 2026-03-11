import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const leaveStatusData = [
  { name: "Engineering", approved: 24, pending: 4, rejected: 2 },
  { name: "Design", approved: 12, pending: 3, rejected: 1 },
  { name: "Marketing", approved: 18, pending: 2, rejected: 1 },
  { name: "HR", approved: 8, pending: 1, rejected: 0 },
  { name: "Sales", approved: 15, pending: 2, rejected: 3 },
];

const monthlyData = [
  { month: "Jan", leaves: 12 },
  { month: "Feb", leaves: 19 },
  { month: "Mar", leaves: 15 },
  { month: "Apr", leaves: 22 },
  { month: "May", leaves: 28 },
  { month: "Jun", leaves: 35 },
  { month: "Jul", leaves: 18 },
  { month: "Aug", leaves: 14 },
  { month: "Sep", leaves: 20 },
  { month: "Oct", leaves: 16 },
  { month: "Nov", leaves: 11 },
  { month: "Dec", leaves: 8 },
];

export function LeaveCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stacked bar - leave status by department */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-base font-semibold">
            Leave Status by Department
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={leaveStatusData} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  fontSize: 13,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="approved" stackId="a" fill="hsl(var(--status-approved))" radius={[0, 0, 0, 0]} name="Approved" />
              <Bar dataKey="pending" stackId="a" fill="hsl(var(--status-pending))" name="Pending" />
              <Bar dataKey="rejected" stackId="a" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} name="Rejected" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly leave trend */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="font-heading text-base font-semibold">
            Monthly Leave Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  fontSize: 13,
                }}
              />
              <Bar dataKey="leaves" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Leaves" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
