import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead, type LegalPageConfig } from "@/components/legal/legal-route";
import md from "@/content/legal/refund-policy.md?raw";

const c: LegalPageConfig = {
  url: "/refund-policy",
  h1: "Refund Policy",
  title: "Refund Policy | Rank Sarthi",
  description:
    "Rank Sarthi's refund policy for test series, packages, subscriptions and other paid services, including eligibility, usage and how to request a refund.",
  markdown: md,
  related: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Contact Rank Sarthi", to: "/contact" },
  ],
};

export const Route = createFileRoute("/refund-policy")({
  head: () => legalHead(c),
  component: () => <LegalPage c={c} />,
});
