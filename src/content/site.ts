import { SITE_ORIGIN } from "./registry";
import logoAsset from "@/assets/rank-sarthi-logo.png.asset.json";

/**
 * Global brand configuration.
 *
 * `site.brand.logo` is the single source of truth for the Rank Sarthi mark.
 * Templates and blocks must render <BrandLogo /> rather than referencing the
 * asset path themselves, so JEE/NEET/NDA pages always inherit the master
 * brand. Intrinsic width/height are recorded here so the mark never causes
 * layout shift.
 */
export const site = {
  name: "Rank Sarthi",
  legalName: "Rank Sarthi Next Gen Private Limited",
  origin: SITE_ORIGIN,
  tagline: "Preparation intelligence for JEE, NEET and NDA aspirants.",
  description:
    "Rank Sarthi turns exam preparation into diagnosis — concept, execution and strategy analysis across JEE, NEET and NDA.",
  locale: "en_IN",
  platforms: ["jee", "neet", "nda"] as const,
  brand: {
    name: "Rank Sarthi",
    logo: {
      /**
       * The approved mark, margin-trimmed only. The artwork is unchanged —
       * the square asset simply carried ~30% blank padding, which made the
       * mark render far smaller than its box at any given height.
       */
      url: "/brand/rank-sarthi-logo.png",
      alt: "Rank Sarthi",
      width: 351,
      height: 301,
    },
    /** Original untrimmed upload, kept for reference. */
    logoOriginalUrl: logoAsset.url,
  },
} as const;

/**
 * Live sub-portal domains. Rank Sarthi is the parent/hub site; the actual
 * exam product for each platform is a separately deployed site at its own
 * domain. Platform-scoped CTAs ("Take a diagnostic" on a JEE page, "Explore
 * NDARankUp") resolve here instead of to an internal route.
 */
export const platformOrigins: Record<"jee" | "neet" | "nda", string> = {
  jee: "https://jeerankup.com",
  neet: "https://neetrankup.com",
  nda: "https://ndarankup.com",
};
