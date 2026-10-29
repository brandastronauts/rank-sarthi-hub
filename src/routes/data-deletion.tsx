import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead, type LegalPageConfig } from "@/components/legal/legal-route";
import md from "@/content/legal/data-deletion.md?raw";

const c: LegalPageConfig = {
  url: "/data-deletion",
  h1: "User Data Deletion Instructions",
  title: "User Data Deletion Instructions | Rank Sarthi",
  description:
    "Learn how to request deletion of your Rank Sarthi account information and data associated with Facebook or Instagram integrations.",
  markdown: md,
  related: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Contact Rank Sarthi", to: "/contact" },
  ],
};

export const Route = createFileRoute("/data-deletion")({
  head: () => legalHead(c),
  component: () => <LegalPage c={c} />,
});
