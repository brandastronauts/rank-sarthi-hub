import { Link } from "@tanstack/react-router";
import { subjectFacultyFor } from "@/content/subject-faculty";
import { FacultyPhoto } from "./FacultyPhoto";

/**
 * "Subject faculty" byline for chapter/topic pages. Deterministic per
 * subject; renders nothing when no confirmed subject assignment exists.
 * Never claims the page itself was reviewed.
 */
export function FacultyAttribution({ url, id = "subject-faculty" }: { url: string; id?: string }) {
  const faculty = subjectFacultyFor(url);
  if (!faculty) return null;
  const { primary, contributors } = faculty;
  return (
    <section id={id} aria-label="Subject faculty" className="rounded-lg border border-border bg-ivory p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Subject faculty</p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
          <FacultyPhoto profile={primary} initialsClassName="text-base" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-bold text-primary">
            <Link to="/about/faculty/$slug" params={{ slug: primary.slug }} className="underline-offset-4 hover:underline">
              {primary.name}
            </Link>
          </p>
          <p className="text-sm text-ink/80">{primary.title}</p>
        </div>
      </div>
      {contributors.length ? (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-semibold text-ink/80">Also in {primary.subject}: </span>
          {contributors.map((p, i) => (
            <span key={p.slug}>
              {i > 0 ? " · " : ""}
              <Link to="/about/faculty/$slug" params={{ slug: p.slug }} className="underline-offset-4 hover:underline">
                {p.name}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}
