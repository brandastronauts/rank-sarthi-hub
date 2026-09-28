import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { academicProfiles } from "@/content/academic-profiles";

/**
 * Academic backgrounds represented across the team. Built only from the
 * confirmed `education` field on approved profiles. Text wordmarks, no logos.
 * Describes individual backgrounds — never a partnership or endorsement.
 */
export function InstitutionStrip({ id }: { id?: string }) {
  const byInstitution = new Map<string, typeof academicProfiles>();
  for (const p of academicProfiles) {
    if (!p.education) continue;
    byInstitution.set(p.education, [...(byInstitution.get(p.education) ?? []), p]);
  }
  const rows = [...byInstitution.entries()];
  if (!rows.length) return null;

  return (
    <section id={id} aria-label="Academic backgrounds represented across our team" className="border-b border-border bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-md text-primary">Academic backgrounds represented across our team</h2>
          <div className="mx-auto mt-5 w-20 rule-gold" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Our academic contributors bring experience and education from respected institutions and
            competitive-learning environments.
          </p>
        </Reveal>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {rows.map(([institution, faculty], i) => (
            <Reveal key={institution} delay={i * 70} as="li">
              <div className="h-full rounded-xl border border-border bg-card px-5 py-5 text-center">
                <p className="font-display text-base font-bold text-primary">{institution}</p>
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
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Institution names reflect individual academic backgrounds and do not imply institutional affiliation or
          endorsement of Rank Sarthi.
        </p>
      </div>
    </section>
  );
}
