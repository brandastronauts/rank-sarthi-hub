/**
 * Proof / product feature flags.
 *
 * These control whether an OPTIONAL block renders. They never control
 * whether a page is built or indexable — that lives on the URL record.
 * Every flag is false until genuine, verified content or product exists.
 */
export const featureFlags = {
  hasInstitutionLogos: false,
  hasTestimonials: false,
  hasCaseStudies: false,
  hasResults: false,
  hasReviewers: false,
  hasRealScreenshots: false,
  hasFirstPartyResearch: false,
  hasPyqData: false,
  hasTrendData: false,
  testEngineLive: false,
  diagnosticLive: false,
  predictorsLive: false,
} as const;

export type FeatureFlag = keyof typeof featureFlags;

export function isEnabled(flag: FeatureFlag): boolean {
  return featureFlags[flag];
}
