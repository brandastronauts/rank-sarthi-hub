import { reviewFor } from "./academic-reviews";
import { getPublicAcademicProfile } from "./academic-profiles";
import type { AcademicProfile } from "./types";

/**
 * Deterministic subject-faculty ownership for chapter/topic pages.
 *
 * Derived only from the confirmed subject syllabus assignments in
 * academic-reviews.ts — one source of truth, same answer on every render.
 * This is "Subject faculty" attribution, never a "reviewed" claim.
 * Subjects without a confirmed assignment (NEET Biology, NDA) return nothing.
 */
const SUBJECTS = new Set(["physics", "chemistry", "mathematics", "biology"]);
const PLATFORMS = new Set(["jee", "neet"]);

/** Extra confirmed subject-faculty pool members beyond the syllabus reviewers. */
const EXTRA_POOL: Record<string, string[]> = { "jee/chemistry": ["prabhat-kumar"] };

export type SubjectFaculty = { primary: AcademicProfile; contributors: AcademicProfile[] };

export function subjectFacultyFor(url: string): SubjectFaculty | undefined {
  const [platform, subject, chapter] = url.split("/").filter(Boolean);
  if (!platform || !subject || !chapter) return undefined;
  if (!PLATFORMS.has(platform) || !SUBJECTS.has(subject)) return undefined;
  const assignment = reviewFor(`/${platform}/syllabus/${subject}`);
  const primary = assignment?.reviewerProfileId ? getPublicAcademicProfile(assignment.reviewerProfileId) : undefined;
  if (!primary) return undefined;
  const contributors = [...(assignment?.contributorProfileIds ?? []), ...(EXTRA_POOL[`${platform}/${subject}`] ?? [])]
    .map(getPublicAcademicProfile)
    .filter((p): p is AcademicProfile => !!p && p.slug !== primary.slug);
  return { primary, contributors };
}
