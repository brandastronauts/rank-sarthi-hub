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

/** RankUp pages a handoff lands on; the same paths exist on all three sites. */
export const RANKUP_PATHS = { start: "/signup", login: "/login" } as const;
export type RankUpIntent = keyof typeof RANKUP_PATHS;

/** Primary student CTA wording, used by every main conversion button. */
export const PRIMARY_CTA_LABEL = "Rank Up My Score with Sarthi";

/**
 * RankUp products currently open for student onboarding. NDARankUp is
 * temporarily withheld by the product team: NDA stays an exam category with
 * all its content, but no signup, login or offer link points at it.
 */
export const ONBOARDING_EXAMS = ["jee", "neet"] as const satisfies readonly DiagnosticExam[];
export function isOnboardingOpen(exam: DiagnosticExam): boolean {
  return (ONBOARDING_EXAMS as readonly string[]).includes(exam);
}

/** Where NDA visitors are sent while NDARankUp onboarding is withheld. */
export const NDA_RESOURCES_PATH = "/nda/previous-year-papers";

/** Exam a page belongs to, from its path ("/jee/physics" → "jee"); null for general pages. */
export function examForPath(pathname: string): DiagnosticExam | null {
  const first = pathname.split("/")[1];
  return first === "jee" || first === "neet" || first === "nda" ? first : null;
}

export function normaliseCta(cta: string): RsCta {
  if ((RS_CTA_VALUES as readonly string[]).includes(cta)) return cta as RsCta;
  return CTA_ALIASES[cta] ?? "section";
}

export function buildRankUpHandoff({
  exam,
  search = "",
  entryPath,
  cta,
  path = RANKUP_PATHS.start,
  params,
}: {
  exam: DiagnosticExam;
  search?: string;
  entryPath: string;
  cta: string;
  /** Path on the RankUp origin: signup (default), login, or "/redeem" for coupon links. */
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

  const entry = normaliseEntryPath(entryPath);
  const rsCta = normaliseCta(cta);

  // RankUp records attribution from utm_* only. A visit that arrived without
  // its own campaign source is credited to Rank Sarthi, by button and page;
  // an inbound campaign (an ad, a coupon link) is never mixed with ours.
  if (!destination.searchParams.has("utm_source")) {
    destination.searchParams.set("utm_source", "ranksarthi");
    if (!destination.searchParams.has("utm_medium")) destination.searchParams.set("utm_medium", rsCta);
    if (!destination.searchParams.has("utm_campaign")) destination.searchParams.set("utm_campaign", campaignFor(entry));
  }

  destination.searchParams.set("rs_source", "ranksarthi");
  destination.searchParams.set("rs_exam", exam);
  destination.searchParams.set("rs_entry_path", entry);
  destination.searchParams.set("rs_cta", rsCta);
  return destination.toString();
}

function normaliseEntryPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return "/";
  return path.split("?")[0]?.split("#")[0] || "/";
}

/** "/" → "home", "/jee/physics" → "jee-physics": readable in RankUp's reports. */
function campaignFor(entryPath: string): string {
  return entryPath.replace(/^\/+|\/+$/g, "").replace(/\//g, "-") || "home";
}