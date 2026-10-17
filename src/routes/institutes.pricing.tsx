import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/institutes/InstitutePage";
import { instituteHead } from "@/lib/institute-seo";

export const Route = createFileRoute("/institutes/pricing")({ head: () => instituteHead("/institutes/pricing"), component: Plans });
function Plans() { return <InstitutePage url="/institutes/pricing" />; }