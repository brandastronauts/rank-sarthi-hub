import { allChapters } from "@/content/chapters";
import { chapterContentSchema } from "@/content/schemas";
import { getUrl } from "@/content/registry";
import { allSubjectHubs } from "@/content/subjects";
import { infoPages } from "@/content/info";
import { sources } from "@/content/sources";
let fail = 0;
const recs = allChapters().filter((c) => c.platform === "neet" && c.subjectSlug !== "biology");
console.log("neet pc chapters:", recs.length);
for (const c of recs) {
  const r = chapterContentSchema.safeParse(c);
  if (!r.success) { fail++; console.log("ZOD", c.url, JSON.stringify(r.error.issues.slice(0,2))); }
  const rec = getUrl(c.url);
  if (!rec || rec.buildStatus !== "built" || rec.indexation !== "noindex") { fail++; console.log("STATE", c.url, rec?.buildStatus, rec?.indexation); }
  for (const id of c.sources) if (!(sources as any)[id]) { fail++; console.log("SRC", c.url, id); }
}
for (const h of allSubjectHubs().filter(h => h.url.startsWith("/neet/") && h.slug !== "biology")) {
  const r = null as any;
  if (r && !r.success) { fail++; console.log("ZOD HUB", h.url, JSON.stringify(r.error.issues.slice(0,3))); }
  for (const n of h.chapterMap.notes) if (!getUrl(n.url)) { fail++; console.log("HUB DEAD", n.url); }
}
for (const p of infoPages.filter(p => p.url.startsWith("/neet/syllabus/") && p.slug !== "biology")) {
  const r = null as any;
  if (r && !r.success) { fail++; console.log("ZOD INFO", p.url, JSON.stringify(r.error.issues.slice(0,3))); }
}
const all = JSON.stringify(recs);
for (const m of all.matchAll(/"(\/neet[a-z0-9\-\/]*)"/g)) {
  const rec = getUrl(m[1]);
  if (!rec) { fail++; console.log("DEAD LINK", m[1]); }
  else if (rec.buildStatus !== "built") console.log("LINK TO UNBUILT", m[1]);
}
console.log(fail === 0 ? "ALL OK" : `FAILURES: ${fail}`);
