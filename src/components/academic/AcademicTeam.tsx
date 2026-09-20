import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { academicProfiles } from "@/content/academic-profiles";
import { Button } from "@/components/ui/button";

export function AcademicTeam({ id = "academic-team" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-28">
      <p className="eyebrow text-accent">Academic Team</p>
      <h2 className="mt-3 text-display-md text-primary">Meet the subject specialists shaping Rank Sarthi</h2>
      <p className="mt-3 max-w-3xl text-sm text-ink/80">
        Subject specialists in Physics, Chemistry and Mathematics who build and check Rank Sarthi academic content.
      </p>
      <ul className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {academicProfiles.map((profile) => (
          <li key={profile.id} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.imageAlt ?? ""} className="h-full w-full object-cover object-top" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center" aria-label={`${profile.name} initials`}>
                  <span className="font-display text-5xl font-bold text-primary">{profile.initials}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{profile.subject}</p>
              <h3 className="mt-1 text-xl font-bold text-primary">{profile.name}</h3>
              <p className="mt-1 text-sm font-semibold text-ink/80">{profile.title}</p>
              <p className="mt-4 line-clamp-5 text-sm leading-relaxed text-muted-foreground">{profile.shortProfile}</p>
              <Button asChild variant="link" className="mt-4 h-auto px-0 text-accent">
                <Link to="/about/faculty/$slug" params={{ slug: profile.slug }} rel="nofollow">
                  View profile <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Review attribution is shown on an individual page only after that specific content version has been reviewed.
      </p>

    </section>
  );
}