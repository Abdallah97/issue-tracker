import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkDown from "react-markdown";

interface Props {
  params: {
    id: string;
  };
}

async function IssueDetailsPage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }
  await delay(2000);
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap={"4"} mt="3" mb="3">
        <IssuesStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card className="prose" mt="2">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </div>
  );
}

export default IssueDetailsPage;
