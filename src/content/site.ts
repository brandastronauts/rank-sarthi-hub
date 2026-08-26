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
  legalName: "Rank Sarthi",
  origin: SITE_ORIGIN,
  tagline: "Preparation intelligence for JEE, NEET and NDA aspirants.",
  description:
    "Rank Sarthi turns exam preparation into diagnosis — concept, execution and strategy analysis across JEE, NEET and NDA.",
  locale: "en_IN",
  platforms: ["jee", "neet", "nda"] as const,
  brand: {
    name: "Rank Sarthi",
    logo: {
      url: logoAsset.url,
      alt: "Rank Sarthi",
      width: 500,
      height: 500,
    },
  },
} as const;
