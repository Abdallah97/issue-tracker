import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

function IssuesStatusBadge({ status }: { status: Status }) {
  const StatusMap: Record<
    Status,
    { label: string; color: "red" | "violet" | "green" }
  > = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "In Progress", color: "violet" },
    CLOSED: { label: "Closed", color: "green" },
  };

  return (
    <Badge color={StatusMap[status].color}>{StatusMap[status].label}</Badge>
  );
}

export default IssuesStatusBadge;
