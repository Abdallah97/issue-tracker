import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

function page() {
  return (
    <div>
      <IssueForm />
    </div>
  );
}

export default page;
