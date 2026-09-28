import { reviewFor } from "./academic-reviews";
import { getAcademicProfile } from "./academic-profiles";
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

export type SubjectFaculty = { primary: AcademicProfile; contributors: AcademicProfile[] };

export function subjectFacultyFor(url: string): SubjectFaculty | undefined {
  const [platform, subject, chapter] = url.split("/").filter(Boolean);
  if (!platform || !subject || !chapter) return undefined;
  if (!PLATFORMS.has(platform) || !SUBJECTS.has(subject)) return undefined;
  const assignment = reviewFor(`/${platform}/syllabus/${subject}`);
  const primary = assignment?.reviewerProfileId ? getAcademicProfile(assignment.reviewerProfileId) : undefined;
  if (!primary) return undefined;
  const contributors = (assignment?.contributorProfileIds ?? [])
    .map(getAcademicProfile)
    .filter((p): p is AcademicProfile => !!p && p.slug !== primary.slug);
  return { primary, contributors };
}
