import { urlRecords } from "./urls";
import { topicAliases } from "./topic-aliases";
import { getUrl } from "./registry";
import type { Platform, UrlRecord } from "./types";

/**
 * Registry-driven syllabus topic resolver.
 *
 * Maps a syllabus unit/topic label to an existing BUILT academic route.
 * There is no second manual link map: every candidate comes from the route
 * registry, scoped by platform and subject so a JEE label can never resolve
 * to a NEET/NDA destination (or vice versa). Labels without a built match
 * stay plain text — umbrella headings and planned routes are never linked.
 */

function normalise(label: string): string {
  const base = label
    .toLowerCase()
    /* Paper/part prefixes are structural, not part of the academic name. */
    .replace(/^part\s+[a-z]\s*[:\-–]\s*/i, "")
    .replace(/\(advanced\)/g, " ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(and|the|of|in|a|an|to|its)\b/g, " ");
  return base.split(/\s+/).filter(Boolean).join(" ");
}

/** Secondary key: ignores word breaks so "Co-ordination" == "Coordination". */
function tight(label: string): string {
  return normalise(label).replace(/\s+/g, "");
}

/** Subject token used in registry section names, normalised to one form. */
function subjectKey(subject: string): string {
  const s = subject.toLowerCase();
  if (s.includes("math")) return "maths";
  if (s.includes("phys")) return "physics";
  if (s.includes("chem")) return "chemistry";
  if (s.includes("bio")) return "biology";
  if (s.includes("gat") || s.includes("general ability")) return "gat";
  return s.trim();
}

function recordSubjects(record: UrlRecord): string[] {
  const keys = new Set<string>();
  const section = record.section.toLowerCase();
  for (const token of ["maths", "mathematics", "physics", "chemistry", "biology"]) {
    if (section.includes(token)) keys.add(subjectKey(token));
  }
  /* URL segment is the authoritative subject for /{platform}/{subject}/... */
  const segment = record.url.split("/")[2];
  if (segment) keys.add(subjectKey(segment));
  return [...keys];
}

type Candidate = { record: UrlRecord; subjects: string[] };

const candidates: Candidate[] = urlRecords
  .filter(
    (r) =>
      r.buildStatus === "built" &&
      (r.section.startsWith("Chapter") || r.section.startsWith("Topic")),
  )
  .map((r) => ({ record: r, subjects: recordSubjects(r) }));

type Index = Map<string, Candidate[]>;

const byName: Index = new Map();
const byTight: Index = new Map();

function push(index: Index, key: string, candidate: Candidate) {
  if (!key) return;
  const list = index.get(key);
  if (list) list.push(candidate);
  else index.set(key, [candidate]);
}

for (const candidate of candidates) {
  const { record } = candidate;
  const slug = record.url.split("/").pop() ?? "";
  for (const label of [record.name, slug]) {
    push(byName, `${record.platform}|${normalise(label)}`, candidate);
    push(byTight, `${record.platform}|${tight(label)}`, candidate);
  }
}

/**
 * Alias index: `${subjectKey}|${normalisedLabel}` → ordered candidate slugs.
 * Aliases only point at slugs that must still resolve to a BUILT route.
 */
const aliasIndex = new Map<string, string[]>();
const aliasHash = new Map<string, string>();
for (const alias of topicAliases) {
  for (const label of alias.labels) {
    aliasIndex.set(`${alias.subject}|${normalise(label)}`, alias.slugs);
    if (alias.hash) aliasHash.set(`${alias.subject}|${normalise(label)}`, alias.hash);
  }
}

/** First built candidate owning `slug` for this platform (and subject, if scoped). */
function resolveSlug(
  platform: Platform,
  slug: string,
  wanted: string | undefined,
): UrlRecord | undefined {
  const matches = candidates.filter(
    (c) =>
      c.record.platform === platform &&
      c.record.url.endsWith(`/${slug}`) &&
      (!wanted || c.subjects.includes(wanted)),
  );
  return matches.length === 1 ? matches[0]!.record : undefined;
}

export type TopicLinkScope = {
  platform: Platform;
  /** Restrict to one subject when the page is subject-scoped. */
  subject?: string;
};

/**
 * Resolve a syllabus label to a built route, or undefined when no
 * unambiguous built destination exists.
 */
export function resolveTopicRoute(
  label: string,
  scope: TopicLinkScope,
): UrlRecord | undefined {
  const clean = label.trim();
  if (!clean || clean.length < 3 || /^\d+$/.test(clean)) return undefined;

  const wanted = scope.subject ? subjectKey(scope.subject) : undefined;

  /* A label that is itself a registry path links only when that route is built. */
  if (clean.startsWith("/")) {
    const record = getUrl(clean);
    return record?.buildStatus === "built" ? record : undefined;
  }

  for (const index of [byName, byTight]) {
    const key = index === byName ? normalise(clean) : tight(clean);
    const list = index.get(`${scope.platform}|${key}`);
    if (!list?.length) continue;
    const scoped = wanted ? list.filter((c) => c.subjects.includes(wanted)) : list;
    const pool = scoped.length ? scoped : wanted ? [] : list;
    /* Ambiguous matches are left as plain text rather than guessed. */
    if (pool.length === 1) return pool[0]!.record;
    if (pool.length > 1) {
      const unique = new Set(pool.map((c) => c.record.url));
      if (unique.size === 1) return pool[0]!.record;
    }
  }

  /* Alias fallback: official wording differs from the Rank Sarthi route title. */
  const aliasSlugs = aliasIndex.get(`${wanted ?? ""}|${normalise(clean)}`);
  if (aliasSlugs) {
    for (const slug of aliasSlugs) {
      const record = resolveSlug(scope.platform, slug, wanted);
      if (record) return record;
    }
  }

  return undefined;
}

/** In-page anchor for a label whose alias targets a section of its destination. */
export function resolveTopicHash(label: string, scope: TopicLinkScope): string | undefined {
  const wanted = scope.subject ? subjectKey(scope.subject) : "";
  return aliasHash.get(`${wanted}|${normalise(label.trim())}`);
}
