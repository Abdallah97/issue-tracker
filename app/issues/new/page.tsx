"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type NewIssueFormProps = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewIssueFormProps>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-2">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An error occurred. Please try again.");
          }
        })}
      >
        <TextField.Root
          placeholder="Issue title"
          {...register("title")}
        ></TextField.Root>
        {errors.title && (
          <Text color="red" as="div">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        {errors.description && (
          <Text color="red" as="div">
            {errors.description.message}
          </Text>
        )}
        <Button type="submit">Create issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
