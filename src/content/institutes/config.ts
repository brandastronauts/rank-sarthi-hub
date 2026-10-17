import pages from "./pages.json";
import type { InstitutePath } from "./policy";
export { INSTITUTE_PATHS, INSTITUTE_REDIRECTS, INSTITUTE_INTAKE, instituteRedirect, instituteIntakeReady, type InstitutePath } from "./policy";

export const institutePages = pages;
export function institutePage(url: InstitutePath) {
  const page = pages.find((p) => p.url === url);
  if (!page) throw new Error("Institute page is missing");
  return page;
}