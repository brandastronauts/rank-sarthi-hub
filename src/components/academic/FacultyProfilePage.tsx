import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { AcademicProfile } from "@/content/types";
import { Button } from "@/components/ui/button";

export function FacultyProfilePage({ profile }: { profile: AcademicProfile }) {
  return (
    <article>
      <header className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <p className="eyebrow text-accent">Academic Team · {profile.subject}</p>
          <h1 className="mt-3 text-display-lg text-primary">{profile.name}</h1>
          <p className="mt-3 text-lg font-semibold text-ink/85">{profile.title}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{profile.shortProfile}</p>
          <div className="mt-6 inline-flex rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-semibold text-ink">
            Profile verification: partial
          </div>
        </div>
        <div className="mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-secondary shadow-card">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.imageAlt ?? ""} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full items-center justify-center" aria-label={`${profile.name} initials`}>
              <span className="font-display text-6xl font-bold text-primary">{profile.initials}</span>
            </div>
          )}
        </div>
      </header>

      <section className="mt-12 border-t border-border pt-10" aria-labelledby="profile-heading">
        <h2 id="profile-heading" className="text-display-md text-primary">Academic profile</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85">
          {profile.detailedProfile.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="expertise-heading">
        <h2 id="expertise-heading" className="text-xl font-bold text-primary">Areas of expertise</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.expertise.map((item) => <li key={item} className="rounded-full border border-border bg-ivory px-3 py-1.5 text-sm font-medium text-ink">{item}</li>)}
        </ul>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-ivory p-5" aria-labelledby="review-heading">
        <h2 id="review-heading" className="text-lg font-bold text-primary">Academic review status</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Eligible for the {profile.subject} reviewer pool. No page review is claimed unless a named reviewer approves that specific content version.
        </p>
      </section>

      <Button asChild variant="outline" className="mt-10">
        <Link to="/about"><ArrowLeft aria-hidden /> Back to About Rank Sarthi</Link>
      </Button>
    </article>
  );
}