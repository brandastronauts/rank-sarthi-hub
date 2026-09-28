import { PageFrame } from "@/components/shell/PageFrame";
import { LegalDocument } from "./LegalDocument";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { absolute } from "@/content/registry";

export const LEGAL_LAST_UPDATED = "28 September 2026";

export interface LegalPageConfig {
  url: string;
  h1: string;
  title: string;
  description: string;
  markdown: string;
  related: { label: string; to: string }[];
}

export function legalHead(c: LegalPageConfig) {
  return buildHead({
    url: c.url,
    title: c.title,
    description: c.description,
    ogType: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: c.h1,
        url: absolute(c.url),
        description: c.description,
        dateModified: "2026-09-28",
        publisher: { "@type": "Organization", name: "Rank Sarthi Next Gen Private Limited", url: absolute("/") },
      },
      breadcrumbSchema(c.url),
    ].filter(Boolean),
  });
}

export function LegalPage({ c }: { c: LegalPageConfig }) {
  return (
    <PageFrame frame="F2" url={c.url}>
      <LegalDocument title={c.h1} lastUpdated={LEGAL_LAST_UPDATED} markdown={c.markdown} related={c.related} />
    </PageFrame>
  );
}
