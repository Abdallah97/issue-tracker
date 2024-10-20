import { Button } from "@radix-ui/themes";
import React from "react";

function DeleteIssueButton({ issueId }: { issueId: number }) {
  return <Button color="red">Delete</Button>;
}

export default DeleteIssueButton;
