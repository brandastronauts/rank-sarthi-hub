import type { PlatformData } from "./types";

/**
 * Platform route safety: the generic /$platform route resolves against this
 * map. A platform whose buildStatus is not "built" returns notFound() so a
 * thin /jee or /neet page can never appear just because the route exists.
 */
export const platforms: Record<string, PlatformData> = {
  nda: {
    slug: "nda",
    productName: "NDARankUp",
    examName: "NDA & NA (UPSC)",
    buildStatus: "built",
    accent: "nda",
    tagline: "The defence-track platform built around selection, not just marks.",
    intro: [
      {
        type: "paragraph",
        children: [
          {
            text: "NDARankUp treats the written exam, the SSB interview and physical standards as one selection pipeline, and diagnoses where an aspirant is actually losing ground.",
          },
        ],
      },
    ],
    subjects: ["Mathematics", "General Ability Test"],
  },
  jee: {
    slug: "jee",
    productName: "JeeRankUp",
    examName: "JEE Main & Advanced",
    buildStatus: "planned",
    accent: "jee",
    tagline: "Concept, execution and strategy diagnosis for JEE aspirants.",
    intro: [],
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  neet: {
    slug: "neet",
    productName: "NeetRankUp",
    examName: "NEET (UG)",
    buildStatus: "planned",
    accent: "neet",
    tagline: "NCERT-anchored diagnosis for NEET aspirants.",
    intro: [],
    subjects: ["Physics", "Chemistry", "Biology"],
  },
};

export function getPlatform(slug: string): PlatformData | undefined {
  const platform = platforms[slug];
  return platform && platform.buildStatus === "built" ? platform : undefined;
}
