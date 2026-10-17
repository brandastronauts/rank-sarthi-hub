import { instituteLanding } from "@/content/institutes/landing";
import type { InstitutePath } from "@/content/institutes/policy";
import { absolute } from "@/content/registry";
import { buildHead } from "./seo";
import { breadcrumbSchema } from "./schema";

export function instituteHead(url: InstitutePath) {
  const page = instituteLanding;
  return buildHead({ url, title: page.title, description: page.description, ogType: "website", jsonLd: [{ "@context": "https://schema.org", "@type": "WebPage", name: page.heading, description: page.description, url: absolute(url) }, breadcrumbSchema(url)] });
}