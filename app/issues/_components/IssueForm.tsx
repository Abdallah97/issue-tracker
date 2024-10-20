"use client";
import { ErrorMessage, Spinner } from "@/app/components";
import { IssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type IssueFormProps = z.infer<typeof IssueSchema>;

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormProps>({
    resolver: zodResolver(IssueSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: IssueFormProps) => {
    setIsSubmitting(true);
    try {
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
        router.push(`/issues/${issue.id}`);
        return;
      } else {
        await axios.post("/api/issues", data);
        router.push("/issues");
        router.refresh();
      }
    } catch (error: any) {
      setError(error.response.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-2">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Issue title"
          {...register("title")}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting} type="submit">
          {issue ? "Update" : "Create"} Issue
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
