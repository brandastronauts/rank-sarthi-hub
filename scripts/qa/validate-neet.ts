/**
 * NEET batch validation (data-layer only).
 * Checks the 45-route scope: registry state, content presence, classification
 * counts and internal-link integrity. No network, no rendering.
 */
import { allUrls, getUrl } from "../../src/content/registry";
import { allChapters } from "../../src/content/chapters";
const chapters = allChapters();
import { allSubjectHubs } from "../../src/content/subjects";
import { infoPages } from "../../src/content/info";
import { getSyllabus } from "../../src/content/syllabus";
import { getSources } from "../../src/content/sources";

const FOUNDATION = [
  "/neet",
  "/neet/neet-exam",
  "/neet/ncert-mapping",
  "/neet/syllabus",
  "/neet/syllabus/biology",
  "/neet/ncert-important-pages",
];

const bioTopics = allUrls()
  .filter((r) => r.url.startsWith("/neet/biology/"))
  .map((r) => r.url);

const target = [...FOUNDATION, "/neet/biology", ...bioTopics];
const fail: string[] = [];
const ok = (cond: boolean, msg: string) => {
  if (!cond) fail.push(msg);
};

ok(target.length === 45, `expected 45 routes, got ${target.length}`);
ok(new Set(target).size === 45, "duplicate route in scope");

for (const url of target) {
  const r = getUrl(url);
  ok(!!r, `missing registry record ${url}`);
  ok(r?.buildStatus === "built", `${url} not built`);
  ok(r?.indexation === "noindex", `${url} not noindex`);
}

// Content presence
const neetChapters = chapters.filter((c) => c.platform === "neet" && c.subjectSlug === "biology");
ok(neetChapters.length === 38, `expected 38 NEET chapter records, got ${neetChapters.length}`);
for (const url of bioTopics) {
  ok(!!neetChapters.find((c) => c.url === url), `no chapter record for ${url}`);
}
for (const c of neetChapters) {
  ok(c.contentStatus === "draft", `${c.url} contentStatus not draft`);
  ok(!c.authorId && !c.reviewerId, `${c.url} has a contributor id`);
  ok(!c.pyqs?.length && !c.trends?.length && !c.priority?.length, `${c.url} has forbidden pyq/trend/priority data`);
  ok(getSources(c.sources).length === c.sources.length, `${c.url} references an unknown source id`);
}

const hub = allSubjectHubs().find((h) => h.url === "/neet/biology");
ok(!!hub, "missing /neet/biology hub record");
if (hub) {
  ok(hub.chapterMap.notes.length === 38, `hub notes = ${hub.chapterMap.notes.length}, expected 38`);
  const contextual = hub.chapterMap.notes.filter((n) => n.contextual).map((n) => n.url).sort();
  const expected = [
    "/neet/biology/digestion-absorption",
    "/neet/biology/environmental-issues",
    "/neet/biology/transport-in-plants",
  ];
  ok(
    JSON.stringify(contextual) === JSON.stringify(expected),
    `contextual routes = ${contextual.join(", ")}`,
  );
  for (const n of hub.chapterMap.notes) ok(!!getUrl(n.url), `hub note points at unknown ${n.url}`);
}

for (const url of ["/neet/neet-exam", "/neet/ncert-mapping", "/neet/ncert-important-pages", "/neet/syllabus/biology"]) {
  ok(!!infoPages.find((p) => p.url === url), `missing info page record ${url}`);
}
ok(!!getSyllabus("neet"), "missing NEET syllabus record");

// Internal-link integrity across every NEET record.
const linkUrls: { from: string; url: string }[] = [];
const collect = (from: string, links?: { url: string }[]) => {
  for (const l of links ?? []) if (l.url.startsWith("/")) linkUrls.push({ from, url: l.url });
};
for (const c of neetChapters) {
  collect(c.url, c.prerequisites);
  collect(c.url, c.relatedChapters);
  collect(c.url, c.links);
  linkUrls.push({ from: c.url, url: c.syllabusMapping.syllabusUrl });
}
if (hub) collect(hub.url, hub.relatedLinks);
for (const p of infoPages.filter((p) => p.platform === "neet")) collect(p.url, p.relatedLinks);

for (const { from, url } of linkUrls) {
  const r = getUrl(url);
  ok(!!r, `dead link ${url} (from ${from})`);
  ok(r?.buildStatus === "built", `link to unbuilt ${url} (from ${from})`);
}

console.log(`routes: ${target.length} | chapters: ${neetChapters.length} | links checked: ${linkUrls.length}`);
if (fail.length) {
  console.error(`FAIL (${fail.length}):`);
  for (const f of fail.slice(0, 60)) console.error("  - " + f);
  process.exit(1);
}
console.log("NEET batch validation PASSED");
