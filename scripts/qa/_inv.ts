import { urlRecords } from "@/content/urls";
for (const r of urlRecords) {
  if (!/^(Chapter|Topic)/.test(r.section)) continue;
  console.log([r.platform, r.buildStatus, r.url, "|", r.name].join(" "));
}
