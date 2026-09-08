import { allChapters } from "@/content/chapters";
import { chapterContentSchema } from "@/content/schemas";
import { getUrl } from "@/content/registry";

let fail = 0;
const chapters = allChapters();
for (const c of chapters) {
  const r = chapterContentSchema.safeParse(c);
  if (!r.success) {
    fail++;
    console.log("ZOD FAIL", c.url, JSON.stringify(r.error.issues.slice(0, 4)));
  }
  const rec = getUrl(c.url);
  if (!rec) { fail++; console.log("NO REGISTRY", c.url); }
  else if (rec.buildStatus !== "built" || rec.indexation !== "noindex") {
    fail++; console.log("STATE", c.url, rec.buildStatus, rec.indexation);
  }
  const links = [...(c.prerequisites ?? []), ...(c.relatedChapters ?? []), ...(c.links ?? [])];
  for (const l of links) {
    if (!getUrl(l.url)) { fail++; console.log("DEAD LINK", c.url, "->", l.url); }
  }
  const text = JSON.stringify(c);
  if (text.includes("\u2014")) { fail++; console.log("EM DASH", c.url); }
  if ((c as any).pyqs?.length || (c as any).trends?.length || (c as any).priority?.length) {
    fail++; console.log("EVIDENCE LEAK", c.url);
  }
  if ((c as any).authorId || (c as any).reviewerId) { fail++; console.log("NAMED CONTRIBUTOR", c.url); }
}
console.log("chapters:", chapters.length, fail === 0 ? "ALL CHECKS PASS" : `FAILURES: ${fail}`);
