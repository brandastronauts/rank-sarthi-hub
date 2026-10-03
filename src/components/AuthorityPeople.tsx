import { Reveal } from "@/components/Reveal";
import { publicAcademicProfiles } from "@/content/academic-profiles";
import { FacultyPhoto } from "@/components/academic/FacultyPhoto";
import { Link } from "@tanstack/react-router";

/** Homepage Academic Team — the same approved faculty records as /about. */
export function AuthorityPeople({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="Academic Team" className="bg-ivory py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Academic Team</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Meet the Academic Team</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4">
            Subject specialists across Physics, Chemistry and Mathematics.
          </p>
        </Reveal>
        <ul className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {publicAcademicProfiles.map((profile, i) => (
            <Reveal key={profile.id} as="li" delay={(i % 4) * 70} className="w-[9rem] shrink-0 snap-start sm:w-auto">
              <Link
                to="/about/faculty/$slug"
                params={{ slug: profile.slug }}
                className="group block text-center"
              >
                <span className="mx-auto block size-24 overflow-hidden rounded-full border border-border bg-secondary sm:size-28">
                  <FacultyPhoto profile={profile} initialsClassName="text-2xl" />
                </span>
                <span className="mt-3 block text-sm font-bold text-primary group-hover:text-accent">{profile.name}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{profile.subject}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
