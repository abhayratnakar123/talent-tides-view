import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const notifications = [
  { id: 1, message: "Leave request approved by Manager", time: "2 min ago", read: false },
  { id: 2, message: "New company event: Team Outing", time: "1 hour ago", read: false },
  { id: 3, message: "Rahul submitted a leave request", time: "3 hours ago", read: true },
  { id: 4, message: "Leave request rejected", time: "Yesterday", read: true },
];

export function NotificationsDropdown() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-medium">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-3 border-b">
          <h4 className="font-heading font-semibold text-sm">Notifications</h4>
        </div>
        <div className="max-h-72 overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`px-3 py-2.5 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer transition-colors ${
                !n.read ? "bg-primary/5" : ""
              }`}
            >
              <p className="text-sm text-foreground">{n.message}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
