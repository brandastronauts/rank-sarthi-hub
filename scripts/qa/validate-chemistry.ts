import { allChapters } from "@/content/chapters";
import { chapterContentSchema } from "@/content/schemas";
import { allUrls, getUrl } from "@/content/registry";
import { allSubjectHubs } from "@/content/subjects";
import { sources } from "@/content/sources";

let fail = 0;
const chem = allChapters().filter((c) => c.url.startsWith("/jee/chemistry/"));
console.log("chemistry records:", chem.length, "unique:", new Set(chem.map(c=>c.url)).size);
for (const c of chem) {
  const r = chapterContentSchema.safeParse(c);
  if (!r.success) { fail++; console.log("ZOD FAIL", c.url, JSON.stringify(r.error.issues.slice(0,3))); }
  const rec = getUrl(c.url);
  if (!rec || rec.buildStatus !== "built" || rec.indexation !== "noindex") { fail++; console.log("STATE FAIL", c.url, rec?.buildStatus, rec?.indexation); }
}
// registry children
const kids = allUrls().filter(u => u.parent === "/jee/chemistry");
console.log("registry children:", kids.length, "built:", kids.filter(k=>k.buildStatus==="built").length);
const missing = kids.filter(k => !chem.some(c=>c.url===k.url));
if (missing.length) { fail++; console.log("MISSING RECORDS", missing.map(m=>m.url)); }
// link + source validation
const json = JSON.stringify(chem);
for (const m of json.matchAll(/"(\/jee[a-z0-9\-\/]*)"/g)) {
  if (!getUrl(m[1])) { fail++; console.log("DEAD LINK", m[1]); }
}
for (const c of chem) {
  for (const id of (c as any).sourceRefs ?? []) if (!sources[id]) { fail++; console.log("BAD SOURCE", c.url, id); }
}
// contributors must be unassigned
for (const c of chem) {
  const s = JSON.stringify(c);
  if (/reviewerId|authorId/.test(s) && !/unassigned/i.test(s)) console.log("CHECK CONTRIB", c.url);
}
console.log("hubs:", allSubjectHubs().map(h=>h.url).join(", "));
console.log(fail === 0 ? "ALL OK" : `FAILURES: ${fail}`);
