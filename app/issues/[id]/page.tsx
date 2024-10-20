import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";
import DeleteIssueButton from "./DeleteIssueButton";

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
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap={"2"}>
      <Box className="col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      <Box>
        <Flex direction={"column"} gap={"4"}>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
}

export default IssueDetailsPage;
