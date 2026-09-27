import type { PageReview } from "./types";

/**
 * Confirmed public academic review assignments.
 *
 * Only subject syllabus content verified by the named subject faculty appears
 * here. Chapters, topics, PYQ analysis, tools and non-academic pages are
 * deliberately absent: absence means no reviewer byline is rendered, never a
 * public "pending" notice.
 */
const RELEASE_DATE = "20 September 2026";
const SCOPE = "Reviewed for the 2026 syllabus";
const VERSION = "2026.1";

function reviewed(primary: string, contributors: string[] = []): PageReview {
  return {
    reviewStatus: "REVIEWED",
    reviewerProfileId: primary,
    contributorProfileIds: contributors,
    reviewedAt: RELEASE_DATE,
    reviewVersion: VERSION,
    contentVersion: VERSION,
    scopeLabel: SCOPE,
  };
}

export const academicReviews: Record<string, PageReview> = {
  /* Physics */
  "/jee/syllabus/physics": reviewed("ashwin-m", ["gandharva-saxena", "hardik-agrawal"]),
  "/neet/syllabus/physics": reviewed("ashwin-m", ["gandharva-saxena"]),

  /* Chemistry */
  "/jee/syllabus/chemistry": reviewed("adarsh-kumar", ["vinod-kumar"]),
  "/neet/syllabus/chemistry": reviewed("vinod-kumar", ["adarsh-kumar", "prabhat-kumar"]),

  /* Mathematics */
  "/jee/syllabus/mathematics": reviewed("sachin-garg", ["ashutosh-pande"]),

  /*
   * Subject-grouped syllabus hubs. The Advanced page carries Physics,
   * Chemistry and Mathematics scope, so the primary reviewer is named and the
   * other confirmed subject reviewers are listed as contributors.
   */
  "/jee/jee-advanced/syllabus": reviewed("ashwin-m", [
    "gandharva-saxena",
    "hardik-agrawal",
    "adarsh-kumar",
    "vinod-kumar",
    "prabhat-kumar",
    "ashutosh-pande",
    "sachin-garg",
  ]),
  "/jee/syllabus": reviewed("ashwin-m", ["adarsh-kumar", "sachin-garg"]),
  /**
   * /neet/syllabus carries Biology, Physics and Chemistry scope. No Biology
   * reviewer is confirmed, so no page-level reviewer is claimed for the NEET
   * syllabus hub. Physics and Chemistry attribution stays on their own
   * subject syllabus pages.
   */
};

export function reviewFor(url: string): PageReview | undefined {
  return academicReviews[url];
}

/** Syllabus pages released as indexable in this run. */
export const releasedSyllabusUrls = Object.keys(academicReviews);
