import { Link } from "@tanstack/react-router";
import { getAcademicProfile } from "@/content/academic-profiles";
import type { PageReview } from "@/content/types";
import { FacultyPhoto } from "./FacultyPhoto";

/**
 * Compact public reviewer attribution.
 *
 * Renders only for a completed, versioned review of this content version.
 * Every other internal state renders nothing — the page stays clean instead
 * of exposing workflow status to students or crawlers.
 */
export function AcademicReviewByline({ review, id = "academic-review" }: { review?: PageReview; id?: string }) {
  if (!review || review.reviewStatus !== "REVIEWED" || !review.reviewedAt || !review.reviewVersion) return null;
  const primary = review.reviewerProfileId ? getAcademicProfile(review.reviewerProfileId) : undefined;
  if (!primary) return null;

  const contributors = (review.contributorProfileIds ?? [])
    .map(getAcademicProfile)
    .filter((profile): profile is NonNullable<typeof profile> => !!profile && profile.slug !== primary.slug);

  return (
    <section id={id} className="scroll-mt-28 rounded-lg border border-border bg-ivory p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Academically reviewed by
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
          <FacultyPhoto profile={primary} initialsClassName="text-lg" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-bold text-primary">
            <Link to="/about/faculty/$slug" params={{ slug: primary.slug }} className="underline-offset-4 hover:underline">
              {primary.name}
            </Link>
          </p>
          <p className="text-sm text-ink/80">{primary.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{review.scopeLabel ?? "Reviewed for the 2026 syllabus"}</p>
        </div>
      </div>

      {contributors.length ? (
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-semibold text-ink/80">Academic contributors: </span>
          {contributors.map((profile, index) => (
            <span key={profile.slug}>
              {index > 0 ? " · " : ""}
              <Link to="/about/faculty/$slug" params={{ slug: profile.slug }} className="underline-offset-4 hover:underline">
                {profile.name}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}
