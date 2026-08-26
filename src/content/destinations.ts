import { featureFlags } from "./flags";
import { getUrl, isIndexable } from "./registry";

/**
 * CTA destination contract.
 *
 * There is no /coming-soon fallback. A product action that does not exist is
 * either hidden entirely or explicitly disabled with a reason.
 */
export type Destination =
  | { kind: "live"; href: string; label: string }
  | { kind: "external"; href: string; label: string }
  | { kind: "disabled"; label: string; reason: string }
  | { kind: "hidden" };

const HIDDEN: Destination = { kind: "hidden" };

/** Link to a registry URL only when that page is actually built. */
function internal(label: string, url: string): Destination {
  const record = getUrl(url);
  if (record?.buildStatus === "built") return { kind: "live", href: url, label };
  return HIDDEN;
}

export const destinations = {
  /**
   * Product diagnostic. Rendered as an explicitly disabled action with an
   * honest reason until the engine is live — never as a placeholder page.
   */
  diagnostic: (label = "Take a diagnostic"): Destination =>
    featureFlags.diagnosticLive
      ? { kind: "live", href: "/jee/ai-diagnosis", label }
      : { kind: "disabled", label, reason: "This feature is not available yet." },

  /** Any action that is deliberately visible but not yet available. */
  notYet: (label: string, reason: string): Destination => ({ kind: "disabled", label, reason }),

  /** Mock tests — hidden until the test engine exists. */
  mockTests: (platform: "jee" | "neet" | "nda"): Destination =>
    featureFlags.testEngineLive ? internal("Mock tests", `/${platform}/mock-tests`) : HIDDEN,


  pricing: (platform?: "jee" | "neet" | "nda"): Destination =>
    internal("Pricing", platform ? `/${platform}/pricing` : "/pricing"),

  syllabus: (platform: "jee" | "neet" | "nda"): Destination =>
    internal("Syllabus", `/${platform}/syllabus`),

  platformHome: (platform: "jee" | "neet" | "nda"): Destination =>
    internal(platform.toUpperCase(), `/${platform}`),

  howItWorks: (): Destination => internal("How it works", "/how-it-works"),

  contact: (): Destination => internal("Contact", "/contact"),

  /** Arbitrary registry path, resolved through the same rules. */
  page: (label: string, url: string): Destination => internal(label, url),

  external: (label: string, href: string): Destination => ({ kind: "external", href, label }),

  /**
   * Navigation/footer resolution.
   *
   * Visibility is decided by the IA (nav-data.ts); this only decides
   * availability. In-page anchors are always live, external URLs are
   * external, registry pages are live when built, and everything else is
   * visible-but-disabled. Built-but-noindex pages are clickable only when
   * navPolicy.linkBuiltNoindex allows it (development preview), so staging
   * scaffolds never become public navigation targets.
   */
  nav: (label: string, href: string): Destination => {
    if (href.startsWith("http")) return { kind: "external", href, label };
    if (href.includes("#")) return { kind: "live", href, label };

    const record = getUrl(href);
    if (record?.buildStatus === "built") {
      if (record.indexation === "index" || navPolicy.linkBuiltNoindex) {
        return { kind: "live", href, label };
      }
      return { kind: "disabled", label, reason: "This page is not published yet." };
    }
    return { kind: "disabled", label, reason: "This page is not available yet." };
  },
} as const;

/**
 * Destination policy that is environment-dependent rather than content
 * dependent. Built + noindex scaffolds stay reachable in the development
 * preview for internal review, and stay non-clickable in production.
 */
export const navPolicy = {
  linkBuiltNoindex: import.meta.env.DEV,
} as const;

/** True when a destination should render a clickable anchor. */
export function isLinkable(d: Destination): d is Extract<Destination, { kind: "live" | "external" }> {
  return d.kind === "live" || d.kind === "external";
}

/** Crawl safety: never render a follow link to a non-indexable internal page. */
export function relFor(d: Destination): string | undefined {
  if (d.kind === "external") return "noopener";
  if (d.kind === "live" && !isIndexable(getUrl(d.href))) return "nofollow";
  return undefined;
}
