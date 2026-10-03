import { platformOrigins } from "@/content/site";

export type DiagnosticExam = "jee" | "neet" | "nda";

const ATTRIBUTION_KEYS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "fbclid",
]);

export function buildRankUpHandoff({
  exam,
  search = "",
  entryPath,
  cta,
}: {
  exam: DiagnosticExam;
  search?: string;
  entryPath: string;
  cta: string;
}): string {
  const destination = new URL(platformOrigins[exam]);
  const inbound = new URLSearchParams(search);

  for (const [key, value] of inbound) {
    if (ATTRIBUTION_KEYS.has(key) && value) destination.searchParams.set(key, value);
  }

  destination.searchParams.set("rs_source", "ranksarthi");
  destination.searchParams.set("rs_exam", exam);
  destination.searchParams.set("rs_entry_path", normaliseEntryPath(entryPath));
  destination.searchParams.set("rs_cta", cta);
  return destination.toString();
}

function normaliseEntryPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return "/";
  return path.split("?")[0]?.split("#")[0] || "/";
}