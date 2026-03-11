import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus, Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const upcomingEvents = [
  {
    id: 1,
    title: "Company All-Hands",
    date: "Mar 20, 2026",
    time: "10:00 AM",
    description: "Quarterly company-wide meeting",
  },
  {
    id: 2,
    title: "Team Outing",
    date: "Mar 25, 2026",
    time: "2:00 PM",
    description: "Outdoor team-building activity",
  },
  {
    id: 3,
    title: "Public Holiday",
    date: "Mar 25, 2026",
    time: "All day",
    description: "National observance",
  },
  {
    id: 4,
    title: "Sarah's Birthday 🎂",
    date: "Mar 28, 2026",
    time: "",
    description: "Birthday celebration in the lounge",
  },
];

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-base font-semibold">
            Upcoming Events
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="h-8 text-xs gap-1">
                <Plus className="h-3.5 w-3.5" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-heading">Create Event</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div>
                  <Label>Title</Label>
                  <Input placeholder="Event name" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Date</Label>
                    <Input type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label>Time</Label>
                    <Input type="time" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea placeholder="Details..." className="mt-1" />
                </div>
                <Button className="w-full">Create Event</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="h-9 w-9 rounded-lg bg-status-info/10 flex items-center justify-center shrink-0">
              <CalendarDays className="h-4 w-4 text-status-info" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {event.date}
                {event.time && ` · ${event.time}`}
              </p>
              {event.description && (
                <p className="text-xs text-muted-foreground mt-0.5 truncate">
                  {event.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Pencil className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
