import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    initials: "RM",
    message: "Rahul Mehta applied for sick leave",
    time: "10 min ago",
  },
  {
    id: 2,
    initials: "AK",
    message: "Manager approved Sarah's annual leave",
    time: "1 hour ago",
  },
  {
    id: 3,
    initials: "SY",
    message: "New company event created: Team Outing",
    time: "3 hours ago",
  },
  {
    id: 4,
    initials: "AT",
    message: "Aisha's personal leave request rejected",
    time: "5 hours ago",
  },
  {
    id: 5,
    initials: "NP",
    message: "Nina Patel applied for maternity leave",
    time: "Yesterday",
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-base font-semibold">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex items-start gap-3 py-3 relative">
            {/* Timeline line */}
            {idx < activities.length - 1 && (
              <div className="absolute left-4 top-12 w-px h-[calc(100%-24px)] bg-border" />
            )}
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0 z-10">
              <span className="text-[10px] font-medium text-muted-foreground">
                {activity.initials}
              </span>
            </div>
            <div>
              <p className="text-sm text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
