import { institutePage, type InstitutePath } from "@/content/institutes/config";
import { absolute } from "@/content/registry";
import { buildHead } from "./seo";
import { breadcrumbSchema } from "./schema";

export function instituteHead(url: InstitutePath) {
  const page = institutePage(url);
  return buildHead({ url, title: page.title, description: page.description, ogType: "website", jsonLd: [{ "@context": "https://schema.org", "@type": url === "/institutes/request-demo" ? "ContactPage" : "WebPage", name: page.heading, description: page.description, url: absolute(url) }, breadcrumbSchema(url)] });
}