import { allChapters } from "@/content/chapters";
import { chapterContentSchema } from "@/content/schemas";
import { getUrl } from "@/content/registry";
let bad = 0;
for (const c of allChapters()) {
  const r = chapterContentSchema.safeParse(c);
  const rec = getUrl(c.url);
  console.log(
    `${r.success ? "PASS" : "FAIL"} ${c.url} status=${c.contentStatus} build=${rec?.buildStatus} index=${rec?.indexation} concepts=${c.conceptBlocks.length} formulas=${c.formulas?.length ?? 0} mistakes=${c.mistakes?.length ?? 0} faqs=${c.faqs?.length ?? 0} tables=${c.tables?.length ?? 0} pyqs=${c.pyqs?.length ?? 0} trends=${c.trends?.length ?? 0} priority=${c.priority?.length ?? 0} author=${c.authorId ?? "-"} reviewer=${c.reviewerId ?? "-"}`,
  );
  if (!r.success) { bad++; console.log(JSON.stringify(r.error.issues.slice(0,5), null, 1)); }
  // link integrity
  for (const l of [...c.prerequisites, ...c.relatedChapters, ...(c.links ?? [])]) {
    if (l.url.startsWith("http")) console.log(`  EXTERNAL-LINK ${c.url} -> ${l.url}`);
    else if (!getUrl(l.url)) console.log(`  UNREGISTERED ${c.url} -> ${l.url}`);
  }
}
console.log(bad === 0 ? "ALL ZOD PASS" : `ZOD FAILURES: ${bad}`);
