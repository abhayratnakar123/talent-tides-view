import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, Eye } from "lucide-react";

const pendingRequests = [
  {
    id: 1,
    name: "Rahul Mehta",
    initials: "RM",
    type: "Sick Leave",
    from: "Mar 5, 2026",
    to: "Mar 6, 2026",
    reason: "Feeling unwell",
  },
  {
    id: 2,
    name: "Nina Patel",
    initials: "NP",
    type: "Maternity Leave",
    from: "Mar 22, 2026",
    to: "Jun 22, 2026",
    reason: "Maternity",
  },
  {
    id: 3,
    name: "Liam Johnson",
    initials: "LJ",
    type: "Personal Leave",
    from: "Mar 15, 2026",
    to: "Mar 15, 2026",
    reason: "Personal errand",
  },
  {
    id: 4,
    name: "Priya Singh",
    initials: "PS",
    type: "Annual Leave",
    from: "Mar 20, 2026",
    to: "Mar 24, 2026",
    reason: "Family vacation",
  },
];

export function PendingLeavesTable() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-base font-semibold">
            Pending Leave Requests
          </CardTitle>
          <Badge variant="secondary" className="font-body text-xs">
            {pendingRequests.length} pending
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6">Employee</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">From</TableHead>
              <TableHead className="hidden md:table-cell">To</TableHead>
              <TableHead className="hidden lg:table-cell">Reason</TableHead>
              <TableHead className="text-right pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingRequests.map((req) => (
              <TableRow key={req.id}>
                <TableCell className="pl-6">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground">
                        {req.initials}
                      </span>
                    </div>
                    <span className="font-medium text-sm">{req.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-status-pending/10 text-status-pending border-0 text-xs"
                  >
                    {req.type}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                  {req.from}
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                  {req.to}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-muted-foreground max-w-[160px] truncate">
                  {req.reason}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-status-approved hover:bg-status-approved/10">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                      <X className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
