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

  return undefined;
}
