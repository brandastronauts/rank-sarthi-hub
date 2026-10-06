import { Reveal } from "@/components/Reveal";
import { publicAcademicProfiles } from "@/content/academic-profiles";
import { FacultyPhoto } from "@/components/academic/FacultyPhoto";
import { Link } from "@tanstack/react-router";

/** Homepage subject-matter experts — the same approved faculty records as /about. */
export function AuthorityPeople({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="Subject Matter Experts" className="bg-ivory py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Your Subject Sarthi</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Meet Our Subject Matter Experts</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4">
            Experienced subject experts who help shape Rank Sarthi&rsquo;s academic content and diagnostic thinking.
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
                <span className="mt-1 block text-xs font-semibold text-ink/80">{profile.subject} Expert</span>
                <span className="mt-1 line-clamp-2 block min-h-8 text-xs leading-4 text-muted-foreground">
                  {profile.featuredCredential ?? profile.expertise.filter((item) => item !== profile.subject).slice(0, 2).join(" · ")}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
