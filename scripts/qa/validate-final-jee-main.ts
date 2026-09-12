import { infoPages } from "@/content/info";
import { urlRecords } from "@/content/urls";
import { sources } from "@/content/sources";
const byUrl = new Map(urlRecords.map(r=>[r.url,r]));
const target = ["/jee/blog","/jee/syllabus/physics","/jee/syllabus/chemistry","/jee/syllabus/mathematics","/jee/jee-advanced/syllabus","/jee/jee-advanced/result","/jee/jee-advanced/eligibility","/about","/how-it-works","/blog","/faq","/resources","/for-institutes","/404",
"/jee/jee-advanced/thermodynamics-advanced","/jee/jee-advanced/electrostatics-advanced","/jee/jee-advanced/rotational-dynamics","/jee/jee-advanced/organic-chemistry-advanced","/jee/jee-advanced/coordination-chemistry-advanced","/jee/jee-advanced/calculus-advanced","/jee/jee-advanced/vectors-3d-advanced","/jee/jee-advanced/probability-advanced","/jee/jee-advanced/complex-numbers-advanced","/jee/jee-advanced/mechanics-advanced","/jee/jee-advanced/modern-physics-advanced","/jee/jee-advanced/chemical-equilibrium-advanced","/jee/jee-advanced/electrochemistry-advanced","/jee/jee-advanced/coordinate-geometry-advanced","/jee/jee-advanced/integral-calculus-advanced"];
let fail=0;
const seen=new Set<string>();
for(const p of infoPages){ if(seen.has(p.url)){console.log("DUP",p.url);fail++;} seen.add(p.url); }
for(const u of target){
  const rec=byUrl.get(u); const page=infoPages.find(p=>p.url===u);
  if(!page){console.log("NO CONTENT",u);fail++;continue;}
  if(rec?.buildStatus!=="built"||rec?.indexation!=="noindex"){console.log("STATE",u,rec?.buildStatus,rec?.indexation);fail++;}
  if(page.contentStatus!=="draft"){console.log("NOT DRAFT",u);fail++;}
  for(const s of page.sourceRefs??[]) if(!sources[s]){console.log("BAD SOURCE",u,s);fail++;}
  const bad=(page.relatedLinks??[]).filter(l=>!byUrl.has(l.url));
  if(bad.length){console.log("UNKNOWN LINK",u,bad.map(b=>b.url));fail++;}
  for(const b of page.blocks) if(b.kind==="links"){ const un=b.items.filter(i=>!byUrl.has(i.url)); if(un.length){console.log("UNKNOWN CARD",u,un.map(x=>x.url));fail++;} const live=b.items.filter(i=>byUrl.get(i.url)?.buildStatus==="built"); if(!live.length){console.log("EMPTY CARD BLOCK",u,b.id);fail++;} }
}
const builtCount=urlRecords.filter(r=>r.buildStatus==="built").length;
const idx=urlRecords.filter(r=>r.buildStatus==="built"&&r.indexation==="index").length;
console.log("target",target.length,"records",infoPages.length,"built total",builtCount,"indexable built",idx,"failures",fail);
