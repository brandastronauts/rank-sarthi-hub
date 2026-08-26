import { absolute, ancestorsOf, getUrl } from "@/content/registry";
import { site } from "@/content/site";
import { getPerson } from "@/content/people";
import type { UrlRecord } from "@/content/types";

/**
 * JSON-LD builders.
 * Rules: emit only what is visible and factual on the page; author/reviewer
 * properties appear only for real verified people on types that support them.
 */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.origin}/`,
    inLanguage: "en-IN",
    description: site.description,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: `${site.origin}/`,
    description: site.tagline,
  };
}

/** BreadcrumbList for any non-root page, built from the registry parent chain. */
export function breadcrumbSchema(url: string) {
  const record = getUrl(url);
  if (!record || record.url === "/") return undefined;
  const chain: UrlRecord[] = [...ancestorsOf(url), record];
  const home = getUrl("/");
  const items = (home && chain[0]?.url !== "/" ? [home, ...chain] : chain).map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: r.name,
    item: absolute(r.url),
  }));
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

export function collectionPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  items?: { name: string; url: string }[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: absolute(opts.url),
    inLanguage: "en-IN",
  };
  if (opts.items?.length) {
    schema["mainEntity"] = {
      "@type": "ItemList",
      itemListElement: opts.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absolute(item.url),
      })),
    };
  }
  return schema;
}

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  updated?: string;
  authorId?: string;
  reviewerId?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: absolute(opts.url),
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: site.legalName, url: `${site.origin}/` },
  };
  if (opts.updated) schema["dateModified"] = opts.updated;

  const author = getPerson(opts.authorId);
  if (author) schema["author"] = { "@type": "Person", name: author.name, jobTitle: author.role };

  const reviewer = getPerson(opts.reviewerId);
  if (reviewer) schema["reviewedBy"] = { "@type": "Person", name: reviewer.name, jobTitle: reviewer.role };

  return schema;
}

export function learningResourceSchema(opts: {
  url: string;
  name: string;
  description: string;
  subject: string;
  exam: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: opts.name,
    description: opts.description,
    url: absolute(opts.url),
    inLanguage: "en-IN",
    learningResourceType: "Chapter guide",
    about: opts.subject,
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "educationalSubject",
      targetName: opts.exam,
    },
  };
}

/** FAQPage — only ever emitted from questions actually rendered on the page. */
export function faqSchema(items: { q: string; a: string }[]) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
