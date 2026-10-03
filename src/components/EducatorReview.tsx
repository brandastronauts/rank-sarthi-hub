import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { academicReviews } from "@/content/academic-reviews";
import { getPublicAcademicProfile } from "@/content/academic-profiles";
import { getUrl } from "@/content/registry";

/**
 * Confirmed academic reviews only — generated from the same assignment
 * data that drives the "Academically reviewed by" byline. No quotes.
 */
export function EducatorReview({ id }: { id?: string }) {
  const rows = Object.entries(academicReviews)
    .map(([url, review]) => ({
      url,
      name: getUrl(url)?.name ?? url,
      reviewer: review.reviewerProfileId ? getPublicAcademicProfile(review.reviewerProfileId) : undefined,
      built: getUrl(url)?.buildStatus === "built",
    }))
    .filter((r) => r.reviewer && r.built);

  return (
    <section id={id} aria-label="Academically reviewed syllabus pages" className="section-pad bg-ivory">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-accent">Academic review</p>
          <h2 className="mt-5 text-display-lg text-primary">Syllabus pages academically reviewed by subject faculty.</h2>
          <p className="mt-6 text-lede text-muted-foreground">
            Each page below names the faculty member who reviewed it for the 2026 syllabus. Other pages carry a
            reviewer name only once that review is complete.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {rows.map((r) => (
              <li key={r.url} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4">
                <a href={r.url} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {r.name}
                </a>
                <span className="text-sm text-muted-foreground">
                  Academically reviewed by{" "}
                  <Link to="/about/faculty/$slug" params={{ slug: r.reviewer!.slug }} className="text-accent underline-offset-4 hover:underline">
                    {r.reviewer!.name}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
