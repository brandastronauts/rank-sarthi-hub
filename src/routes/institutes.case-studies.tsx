import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/institutes/InstitutePage";
import { instituteHead } from "@/lib/institute-seo";

export const Route = createFileRoute("/institutes/case-studies")({ head: () => instituteHead("/institutes/case-studies"), component: UseCases });
function UseCases() { return <InstitutePage url="/institutes/case-studies" />; }