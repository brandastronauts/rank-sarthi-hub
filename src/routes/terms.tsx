import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead, type LegalPageConfig } from "@/components/legal/legal-route";
import md from "@/content/legal/terms.md?raw";

const c: LegalPageConfig = {
  url: "/terms",
  h1: "Terms & Conditions",
  title: "Terms & Conditions | Rank Sarthi",
  description:
    "The terms governing access to and use of Rank Sarthi, including ranksarthi.com, accounts, academic content, tests, packages and related services.",
  markdown: md,
  related: [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Contact Rank Sarthi", to: "/contact" },
  ],
};

export const Route = createFileRoute("/terms")({
  head: () => legalHead(c),
  component: () => <LegalPage c={c} />,
});
