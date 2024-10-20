import { IssuesStatusBadge } from "@/app/components";
import { Heading, Flex, Card } from "@radix-ui/themes";
import ReactMarkDown from "react-markdown";
import React from "react";
import { Issue } from "@prisma/client";

function IssueDetail({ issue }: { issue: Issue }) {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap={"4"} mt="3" mb="3">
        <IssuesStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card className="prose max-w-full" mt="2">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </>
  );
}

export default IssueDetail;
