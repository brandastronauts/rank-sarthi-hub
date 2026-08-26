import { urlRecords } from "./urls";
import type { Platform, TemplateId, UrlRecord } from "./types";

const byUrl = new Map<string, UrlRecord>(urlRecords.map((r) => [r.url, r]));

export const SITE_ORIGIN = "https://ranksarthi.com";

export function allUrls(): UrlRecord[] {
  return urlRecords;
}

export function getUrl(url: string): UrlRecord | undefined {
  return byUrl.get(normalise(url));
}

export function requireUrl(url: string): UrlRecord {
  const record = getUrl(url);
  if (!record) throw new Error(`URL not in registry: ${url}`);
  return record;
}

export function normalise(url: string): string {
  if (!url.startsWith("/")) url = `/${url}`;
  return url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
}

export function absolute(url: string): string {
  const path = normalise(url);
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

/** A page is indexable only when it is built AND marked index. */
export function isIndexable(record: UrlRecord | undefined): boolean {
  return !!record && record.buildStatus === "built" && record.indexation === "index";
}

/** Sitemap inclusion never depends on optional/proof block availability. */
export function sitemapUrls(): UrlRecord[] {
  return urlRecords.filter(isIndexable);
}

export function builtUrls(): UrlRecord[] {
  return urlRecords.filter((r) => r.buildStatus === "built");
}

export function childrenOf(url: string): UrlRecord[] {
  const parent = normalise(url);
  return urlRecords.filter((r) => r.parent === parent);
}

export function byPlatform(platform: Platform): UrlRecord[] {
  return urlRecords.filter((r) => r.platform === platform);
}

export function byTemplate(template: TemplateId): UrlRecord[] {
  return urlRecords.filter((r) => r.template === template);
}

/** Ancestor chain, root first, excluding the page itself. */
export function ancestorsOf(url: string): UrlRecord[] {
  const chain: UrlRecord[] = [];
  let cursor = getUrl(url)?.parent ?? null;
  let guard = 0;
  while (cursor && guard++ < 10) {
    const record = getUrl(cursor);
    if (!record) break;
    chain.unshift(record);
    cursor = record.parent;
  }
  return chain;
}

/**
 * Built + indexable pages that nothing links to from the registry graph.
 * Used as a build-time QA check, not at request time.
 */
export function orphanUrls(): UrlRecord[] {
  return sitemapUrls().filter((r) => r.url !== "/" && (!r.parent || !getUrl(r.parent)));
}

export function registrySummary() {
  const counts: Record<string, number> = {};
  for (const r of urlRecords) counts[r.platform] = (counts[r.platform] ?? 0) + 1;
  return {
    total: urlRecords.length,
    byPlatform: counts,
    built: builtUrls().length,
    indexable: sitemapUrls().length,
  };
}
