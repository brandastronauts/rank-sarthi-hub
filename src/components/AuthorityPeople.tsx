import { Reveal } from "@/components/Reveal";
import { isDemoContent, people } from "@/content/trust";

/**
 * Intellectual authority, not a corporate team page.
 * Only verified names, roles, qualifications and experience. Max 4.
 */
export function AuthorityPeople({ id }: { id?: string }) {
  const hasPeople = people.length > 0;

  return (
    <section id={id} aria-label="People behind the platform" className="section-pad bg-background">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow text-accent">People behind the platform</p>
          {isDemoContent ? <p className="demo-badge mt-4">Profiles being finalised</p> : null}
          <h2 className="mt-5 text-display-lg text-primary">
            Built with people who understand the exam journey.
          </h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-lede text-muted-foreground">
            Diagnostic design is an academic judgement before it is a technical one. The people shaping that
            judgement come from classroom teaching, armed-forces mentoring and learning analytics — each one
            listed with the qualification and experience behind their work.
          </p>
        </Reveal>

        <Reveal delay={140}>
          {hasPeople ? (
            <ul className="grid gap-6 sm:grid-cols-2">
              {people.slice(0, 4).map((person) => (
                <li
                  key={person.name}
                  className="card-lift group rounded-2xl border border-border bg-card p-7 shadow-card"
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="icon-rise size-16 rounded-full object-cover"
                    />
                  ) : (
                    <span className="icon-rise flex size-16 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-primary">
                      {person.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                  <h3 className="mt-5 text-base font-bold text-primary">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {person.qualification} · {person.experience}
                    {person.organisation ? ` · ${person.organisation}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2">
              {["Academic lead", "Subject faculty", "NDA specialist", "Product & data"].map((slot) => (
                <li key={slot} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="block size-16 rounded-full bg-secondary" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-bold text-primary">{slot}</h3>
                  <p className="placeholder-slot mt-4 px-3 py-4 text-center">[Real content required]</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Name, qualification, experience and organisation — published only once verified.
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
