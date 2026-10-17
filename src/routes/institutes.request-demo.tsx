import { createFileRoute } from "@tanstack/react-router";
import { InstitutePage } from "@/components/institutes/InstitutePage";
import { instituteHead } from "@/lib/institute-seo";

export const Route = createFileRoute("/institutes/request-demo")({ head: () => instituteHead("/institutes/request-demo"), component: Demo });
function Demo() { return <InstitutePage url="/institutes/request-demo" />; }