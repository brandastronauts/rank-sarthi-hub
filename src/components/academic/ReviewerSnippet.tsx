import { Link } from "@tanstack/react-router";
import { getAcademicProfile } from "@/content/academic-profiles";
import type { PageReview } from "@/content/types";

/** Compact state display. Only a completed, versioned review may use “Reviewed by”. */
export function ReviewerSnippet({ review }: { review: PageReview }) {
  if (review.reviewStatus === "UNASSIGNED") return null;
  const profile = review.reviewerProfileId ? getAcademicProfile(review.reviewerProfileId) : undefined;
  if (!profile) return <p className="text-sm text-muted-foreground">Academic review pending</p>;
  const complete = review.reviewStatus === "REVIEWED" && review.reviewedAt && review.reviewVersion;
  const label = complete ? "Reviewed by" : review.reviewStatus === "REVIEWER_ASSIGNED" ? "Reviewer assigned — review pending" : "Academic review pending";
  return (
    <div className="text-sm text-muted-foreground">
      <span>{label}: </span>
      <Link to="/about/faculty/$slug" params={{ slug: profile.slug }} rel="nofollow" className="font-semibold text-primary underline-offset-4 hover:underline">
        {profile.name}
      </Link>
      {complete ? <span> · {review.reviewedAt}</span> : null}
    </div>
  );
}