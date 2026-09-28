import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead, type LegalPageConfig } from "@/components/legal/legal-route";
import md from "@/content/legal/privacy-policy.md?raw";

const c: LegalPageConfig = {
  url: "/privacy-policy",
  h1: "Privacy Policy",
  title: "Privacy Policy | Rank Sarthi",
  description:
    "How Rank Sarthi Next Gen Private Limited collects, uses, stores and protects personal information across ranksarthi.com, accounts, tests, tools and enquiries.",
  markdown: md,
  related: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Contact Rank Sarthi", to: "/contact" },
  ],
};

export const Route = createFileRoute("/privacy-policy")({
  head: () => legalHead(c),
  component: () => <LegalPage c={c} />,
});
