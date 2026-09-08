import { allChapters } from "@/content/chapters";
import { chapterContentSchema } from "@/content/schemas";
import { allUrls, getUrl } from "@/content/registry";
import { allSubjectHubs } from "@/content/subjects";
import { sources } from "@/content/sources";

let fail = 0;
const math = allChapters().filter((c) => c.url.startsWith("/jee/mathematics/"));
console.log("mathematics records:", math.length, "unique:", new Set(math.map((c) => c.url)).size);
for (const c of math) {
  const r = chapterContentSchema.safeParse(c);
  if (!r.success) {
    fail++;
    console.log("ZOD FAIL", c.url, JSON.stringify(r.error.issues.slice(0, 3)));
  }
  const rec = getUrl(c.url);
  if (!rec || rec.buildStatus !== "built" || rec.indexation !== "noindex") {
    fail++;
    console.log("STATE FAIL", c.url, rec?.buildStatus, rec?.indexation);
  }
}
const kids = allUrls().filter((u) => u.parent === "/jee/mathematics");
console.log("registry children:", kids.length, "built:", kids.filter((k) => k.buildStatus === "built").length);
const missing = kids.filter((k) => !math.some((c) => c.url === k.url));
if (missing.length) {
  fail++;
  console.log("MISSING RECORDS", missing.map((m) => m.url));
}
const json = JSON.stringify(math);
for (const m of json.matchAll(/"(\/jee[a-z0-9\-\/]*)"/g)) {
  if (!getUrl(m[1])) {
    fail++;
    console.log("DEAD LINK", m[1]);
  }
}
for (const c of math) {
  for (const id of (c as any).sourceRefs ?? []) {
    if (!sources[id]) {
      fail++;
      console.log("BAD SOURCE", c.url, id);
    }
  }
}
const banned = /weightage|expected questions|trend percentage|most repeated/i;
for (const c of math) {
  const s = JSON.stringify(c);
  if (/reviewerId|authorId/.test(s) && !/unassigned/i.test(s)) console.log("CHECK CONTRIB", c.url);
  const hits = s.match(banned);
  if (hits) console.log("CHECK CLAIM", c.url, hits[0]);
}
const hub = allSubjectHubs().find((h) => h.url === "/jee/mathematics");
if (!hub) {
  fail++;
  console.log("HUB MISSING");
} else {
  console.log("hub notes:", hub.chapterMap.notes.length, "contextual:", hub.chapterMap.notes.filter((n: any) => n.contextual).length);
  for (const n of hub.chapterMap.notes) if (!getUrl(n.url)) { fail++; console.log("HUB DEAD LINK", n.url); }
}
console.log(fail === 0 ? "ALL OK" : `FAILURES: ${fail}`);
