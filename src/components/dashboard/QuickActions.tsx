import { Button } from "@/components/ui/button";
import { CalendarPlus, PartyPopper, Calendar, Users } from "lucide-react";

const actions = [
  { label: "Apply Leave", icon: CalendarPlus },
  { label: "Create Event", icon: PartyPopper },
  { label: "View Calendar", icon: Calendar },
  { label: "Manage Employees", icon: Users },
];

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          className="gap-1.5 h-9 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <action.icon className="h-3.5 w-3.5" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
