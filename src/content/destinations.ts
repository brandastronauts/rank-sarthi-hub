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
