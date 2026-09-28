import { Reveal } from "@/components/Reveal";
import { academicProfiles } from "@/content/academic-profiles";
import { FacultyCard } from "@/components/academic/FacultyCard";

/** Homepage Academic Team — the same approved faculty records as /about. */
export function AuthorityPeople({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="Academic Team" className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Academic Team</p>
          <h2 className="mt-5 text-display-lg text-primary">Meet the Academic Team</h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-lede text-muted-foreground">
            Rank Sarthi&rsquo;s academic content is shaped by subject specialists across Physics, Chemistry and
            Mathematics.
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {academicProfiles.map((profile, i) => (
            <Reveal key={profile.id} as="li" delay={(i % 4) * 70}>
              <FacultyCard profile={profile} compact />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
