import { IssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const { id } = params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!issue) {
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });
  }
  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(id),
    },
    data: validation.data,
  });
  return NextResponse.json(updatedIssue, { status: 200 });
}
