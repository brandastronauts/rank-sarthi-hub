import { absolute, getUrl, isIndexable } from "@/content/registry";
import { site } from "@/content/site";
import type { PageMeta } from "@/content/types";

export interface HeadInput extends PageMeta {
  /** Registry path for this page. */
  url: string;
  jsonLd?: unknown[];
}

/**
 * Builds the per-route head() payload: unique title/description, canonical,
 * Open Graph, robots and JSON-LD. Robots follows the registry, so a page that
 * is renderable but not content-gate-approved emits noindex.
 */
export function buildHead(input: HeadInput) {
  const record = getUrl(input.url);
  const canonical = absolute(input.url);
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;

  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: site.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
  ];

  if (input.ogImage) {
    meta.push({ property: "og:image", content: input.ogImage });
    meta.push({ name: "twitter:image", content: input.ogImage });
  }

  if (record && !isIndexable(record)) {
    meta.push({ name: "robots", content: "noindex, follow" });
  }

  const scripts = (input.jsonLd ?? [])
    .filter(Boolean)
    .map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) }));

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
    ...(scripts.length ? { scripts } : {}),
  };
}
