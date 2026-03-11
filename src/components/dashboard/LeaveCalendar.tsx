import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarEvent {
  date: number;
  type: "approved" | "pending" | "rejected" | "event" | "holiday";
  label: string;
  employee?: string;
}

const currentMonth = "March 2026";
const daysInMonth = 31;
const startDay = 0; // Sunday

const events: CalendarEvent[] = [
  { date: 2, type: "approved", label: "Annual Leave", employee: "Sarah K." },
  { date: 3, type: "approved", label: "Annual Leave", employee: "Sarah K." },
  { date: 5, type: "pending", label: "Sick Leave", employee: "Rahul M." },
  { date: 9, type: "event", label: "Team Standup" },
  { date: 12, type: "holiday", label: "Company Holiday" },
  { date: 14, type: "rejected", label: "Personal Leave", employee: "Aisha T." },
  { date: 18, type: "approved", label: "Work From Home", employee: "James L." },
  { date: 20, type: "event", label: "Company Meeting" },
  { date: 22, type: "pending", label: "Maternity Leave", employee: "Nina P." },
  { date: 25, type: "holiday", label: "Public Holiday" },
  { date: 28, type: "approved", label: "Casual Leave", employee: "Dev S." },
];

const typeColors: Record<string, string> = {
  approved: "bg-status-approved",
  pending: "bg-status-pending",
  rejected: "bg-destructive",
  event: "bg-status-info",
  holiday: "bg-primary",
};

const typeBadgeVariant: Record<string, string> = {
  approved: "bg-status-approved/10 text-status-approved border-0",
  pending: "bg-status-pending/10 text-status-pending border-0",
  rejected: "bg-destructive/10 text-destructive border-0",
  event: "bg-status-info/10 text-status-info border-0",
  holiday: "bg-primary/10 text-primary border-0",
};

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function LeaveCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const days = Array.from({ length: startDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const getEventsForDay = (day: number) => events.filter((e) => e.date === day);

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="font-heading text-base font-semibold">
          Leave Calendar
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium px-2">{currentMonth}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
          {[
            { label: "Approved", cls: "bg-status-approved" },
            { label: "Pending", cls: "bg-status-pending" },
            { label: "Rejected", cls: "bg-destructive" },
            { label: "Events", cls: "bg-status-info" },
            { label: "Holidays", cls: "bg-primary" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${l.cls}`} />
              {l.label}
            </div>
          ))}
        </div>

        <div className={`transition-opacity ${selectedEvent ? "opacity-40" : "opacity-100"}`}>
          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1.5">
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7">
            {days.map((day, idx) => {
              const dayEvents = day ? getEventsForDay(day) : [];
              return (
                <div
                  key={idx}
                  className={`min-h-[72px] border-t border-border p-1 ${
                    day ? "cursor-pointer hover:bg-muted/30 transition-colors" : ""
                  }`}
                  onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                >
                  {day && (
                    <>
                      <span className="text-xs text-muted-foreground">{day}</span>
                      <div className="mt-0.5 space-y-0.5">
                        {dayEvents.map((e, i) => (
                          <div
                            key={i}
                            className={`${typeColors[e.type]} rounded px-1 py-0.5 text-[10px] text-primary-foreground truncate`}
                          >
                            {e.label}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        {selectedEvent && (
          <div className="absolute top-0 right-0 w-full sm:w-1/3 h-full bg-card border-l shadow-lg animate-slide-in-right p-5 flex flex-col z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-sm">Details</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setSelectedEvent(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Badge className={typeBadgeVariant[selectedEvent.type] + " w-fit mb-3"}>
              {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
            </Badge>
            <p className="text-sm font-medium text-foreground">{selectedEvent.label}</p>
            {selectedEvent.employee && (
              <p className="text-sm text-muted-foreground mt-1">
                {selectedEvent.employee}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              {currentMonth.split(" ")[0]} {selectedEvent.date}, {currentMonth.split(" ")[1]}
            </p>

            {selectedEvent.type === "pending" && (
              <div className="flex gap-2 mt-auto">
                <Button size="sm" className="flex-1">
                  Approve
                </Button>
                <Button size="sm" variant="destructive" className="flex-1">
                  Reject
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
