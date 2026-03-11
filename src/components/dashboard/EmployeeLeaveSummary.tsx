import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

const leaveSummary = [
  { label: "Total Balance", value: 20 },
  { label: "Used", value: 8 },
  { label: "Remaining", value: 12 },
  { label: "Pending", value: 1 },
];

export function EmployeeLeaveSummary() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-base font-semibold">
            My Leave Summary
          </CardTitle>
          <Button size="sm" className="h-8 text-xs gap-1">
            <CalendarPlus className="h-3.5 w-3.5" />
            Apply Leave
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {leaveSummary.map((item) => (
            <div
              key={item.label}
              className="p-3 rounded-lg bg-muted/50 text-center"
            >
              <p className="text-2xl font-heading font-bold text-foreground">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
