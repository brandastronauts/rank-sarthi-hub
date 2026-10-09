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

/** Controlled rs_cta vocabulary shared with the RankUp team. */
export const RS_CTA_VALUES = ["header", "hero", "sticky", "section", "final", "pricing", "offer"] as const;
export type RsCta = (typeof RS_CTA_VALUES)[number];

const CTA_ALIASES: Record<string, RsCta> = {
  mobile_menu: "header",
  mobile_sticky: "sticky",
  final_cta: "final",
  diagnostic_page: "section",
};

export function normaliseCta(cta: string): RsCta {
  if ((RS_CTA_VALUES as readonly string[]).includes(cta)) return cta as RsCta;
  return CTA_ALIASES[cta] ?? "section";
}

export function buildRankUpHandoff({
  exam,
  search = "",
  entryPath,
  cta,
  path = "/",
  params,
}: {
  exam: DiagnosticExam;
  search?: string;
  entryPath: string;
  cta: string;
  /** Path on the RankUp origin, e.g. "/redeem" for coupon links. */
  path?: string;
  /** Fields the RankUp destination itself defines (coupon links); never overwritten. */
  params?: URLSearchParams;
}): string {
  const destination = new URL(platformOrigins[exam]);
  if (path.startsWith("/") && !path.startsWith("//")) destination.pathname = path;
  const inbound = new URLSearchParams(search);

  const fixed = new Set<string>();
  for (const [key, value] of params ?? []) {
    if (key.startsWith("rs_")) continue;
    destination.searchParams.set(key, value);
    fixed.add(key);
  }
  for (const [key, value] of inbound) {
    if (ATTRIBUTION_KEYS.has(key) && value && !fixed.has(key))
      destination.searchParams.set(key, value);
  }

  destination.searchParams.set("rs_source", "ranksarthi");
  destination.searchParams.set("rs_exam", exam);
  destination.searchParams.set("rs_entry_path", normaliseEntryPath(entryPath));
  destination.searchParams.set("rs_cta", normaliseCta(cta));
  return destination.toString();
}

function normaliseEntryPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return "/";
  return path.split("?")[0]?.split("#")[0] || "/";
}