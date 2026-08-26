import { SITE_ORIGIN } from "./registry";

export const site = {
  name: "Rank Sarthi",
  legalName: "Rank Sarthi",
  origin: SITE_ORIGIN,
  tagline: "Preparation intelligence for JEE, NEET and NDA aspirants.",
  description:
    "Rank Sarthi turns exam preparation into diagnosis — concept, execution and strategy analysis across JEE, NEET and NDA.",
  locale: "en_IN",
  platforms: ["jee", "neet", "nda"] as const,
} as const;
