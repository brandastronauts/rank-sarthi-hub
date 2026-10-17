import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/institutes/InstitutePage";
import { instituteHead } from "@/lib/institute-seo";

export const Route = createFileRoute("/institutes/")({ head: () => instituteHead("/institutes"), component: Overview });
function Overview() { return <InstitutePage url="/institutes" />; }