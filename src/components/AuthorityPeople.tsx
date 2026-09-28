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
          <h2 className="mt-5 text-display-lg text-primary">The subject faculty behind Rank Sarthi.</h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-lede text-muted-foreground">
            Physics, Chemistry and Mathematics specialists who build and check the academic content across
            Rank Sarthi. Each profile opens to their full academic background.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {academicProfiles.map((profile, i) => (
            <Reveal key={profile.id} as="li" delay={(i % 4) * 70}>
              <FacultyCard profile={profile} clamp={3} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
