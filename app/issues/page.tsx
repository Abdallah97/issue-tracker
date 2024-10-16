"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Issue title"></TextField.Root>
      <TextArea placeholder="Description" />
      <Button type="submit">Create issue</Button>
    </div>
  );
};

export default NewIssuePage;
