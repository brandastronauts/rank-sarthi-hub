import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { academicProfiles } from "@/content/academic-profiles";

const SUBJECTS = ["Physics", "Chemistry", "Mathematics"] as const;

/**
 * Subject ownership strip. Describes the Rank Sarthi academic team by
 * subject only — no institution names, logos, partnerships or endorsements.
 */
export function InstitutionStrip({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="Academic team by subject" className="border-b border-border bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Academic team by subject
          </p>
          <div className="mt-5 w-20 rule-gold" />
        </Reveal>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {SUBJECTS.map((subject, i) => {
            const faculty = academicProfiles.filter((p) => p.subject === subject);
            return (
              <Reveal key={subject} delay={i * 70} as="li">
                <div className="h-full rounded-xl border border-border bg-card px-5 py-4">
                  <p className="font-display text-sm font-bold text-primary">{subject}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {faculty.map((p, j) => (
                      <span key={p.slug}>
                        {j > 0 ? " · " : ""}
                        <Link to="/about/faculty/$slug" params={{ slug: p.slug }} className="underline-offset-4 hover:underline">
                          {p.name}
                        </Link>
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
