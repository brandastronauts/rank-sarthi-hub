import { getSyllabus } from "@/content/syllabus/index";
import { infoPages } from "@/content/info/index";
import { urlRecords } from "@/content/urls";
import { resolveTopicRoute } from "@/content/topic-links";

const SUB_PAGES = ["/jee/syllabus/physics","/jee/syllabus/chemistry","/jee/syllabus/mathematics","/jee/jee-advanced/syllabus","/neet/syllabus/physics","/neet/syllabus/chemistry","/neet/syllabus/biology","/nda/syllabus/mathematics","/nda/syllabus/gat"];
type Row = {page:string;subject:string;label:string;clickable:boolean;url?:string};
const rows: Row[] = [];

for (const p of ["jee","neet","nda"]) {
  const s = getSyllabus(p)!;
  const secs = [...(s.sections??[]), ...((s.hierarchies??[]).flatMap(h=>h.sections))];
  for (const sec of secs) for (const u of sec.units) {
    for (const label of [u.name, ...u.topics]) {
      const r = resolveTopicRoute(label, {platform: p as any, subject: sec.subject});
      rows.push({page:`/${p}/syllabus`, subject: sec.subject, label, clickable: !!r, url: r?.url});
    }
  }
}
const infoAny = infoPages as any;
const list: any[] = Array.isArray(infoAny) ? infoAny : Object.values(infoAny);
for (const url of SUB_PAGES) {
  const c = list.find((x)=>x?.url===url);
  if (!c) { console.log("MISSING CONTENT", url); continue; }
  const last = url.split("/").pop()!;
  const subject = /^(syllabus|jee-advanced|jee-main)$/.test(last) ? undefined : last;
  const labels: string[] = [];
  for (const b of c.blocks ?? []) {
    if (b.kind === "table") {
      const cols: string[] = b.columns ?? [];
      b.rows?.forEach((r: string[]) => r.forEach((cell, j) => { if (/unit|topic|chapter|route/i.test(cols[j]??"")) labels.push(cell); }));
    }
    if (b.kind === "prose") for (const cc of b.concepts ?? []) labels.push(cc.title);
  }
  for (const label of labels) {
    if (!label || label.length<3 || /^\d+$/.test(label)) continue;
    const r = resolveTopicRoute(label, {platform: c.platform, subject});
    rows.push({page:url, subject: subject??"-", label, clickable: !!r, url: r?.url});
  }
}
const byPage = new Map<string, Row[]>();
for (const r of rows) { (byPage.get(r.page) ?? byPage.set(r.page,[]).get(r.page)!).push(r); }
for (const [page, rs] of byPage) console.log(page, "total", rs.length, "clickable", rs.filter(r=>r.clickable).length);
console.log("\n=== NON-CLICKABLE ===");
for (const [page, rs] of byPage) {
  const nc = rs.filter(r=>!r.clickable);
  console.log("\n##", page, nc.length);
  for (const r of nc) console.log(` [${r.subject}] ${r.label}`);
}

/* --- QA: destination integrity --- */
const recs = new Map(urlRecords.map((r)=>[r.url,r] as const));
let bad = 0;
for (const r of rows) {
  if (!r.url) continue;
  const rec = recs.get(r.url)!;
  const platform = r.page.split("/")[1];
  if (!rec) { console.log("QA MISSING", r.url); bad++; continue; }
  if (rec.buildStatus !== "built") { console.log("QA UNBUILT", r.url); bad++; }
  if (rec.platform !== platform) { console.log("QA WRONG EXAM", r.page, r.label, r.url); bad++; }
}
console.log("\nQA problems:", bad);
for (const [page, rs] of byPage) {
  const seen = new Map<string,string[]>();
  rs.filter(r=>r.url).forEach(r=>{ (seen.get(r.url!) ?? seen.set(r.url!,[]).get(r.url!)!).push(r.label); });
  const dupes = [...seen].filter(([,l])=>new Set(l).size>1);
  if (dupes.length) { console.log("\nshared destinations on", page); dupes.forEach(([u,l])=>console.log("  ",u,"←",[...new Set(l)].join(" | "))); }
}
console.log("\nUNIQUE DESTINATIONS:", new Set(rows.filter(r=>r.url).map(r=>r.url)).size);
