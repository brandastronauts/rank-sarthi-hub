import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { AcademicProfile } from "@/content/types";
import { FacultyPhoto } from "./FacultyPhoto";
import { Button } from "@/components/ui/button";

/** Shared faculty summary card — used on the homepage and the About page. */
export function FacultyCard({ profile }: { profile: AcademicProfile }) {
  const qualification = profile.credentials?.[0]?.value;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="h-56 shrink-0 overflow-hidden bg-secondary sm:h-60">
        <FacultyPhoto profile={profile} initialsClassName="text-5xl" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-14 text-xl font-bold leading-7 text-primary">{profile.name}</h3>
        <p className="mt-1 min-h-16 text-sm font-semibold leading-5 text-ink/80">{profile.title}</p>
        <div className="mt-3 min-h-16 border-t border-border pt-3">
          {qualification ? <p className="text-sm leading-5 text-primary">{qualification}</p> : null}
        </div>
        <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">{profile.academicFocus[0]}</p>
        <Button asChild variant="link" className="mt-5 h-9 justify-start self-start p-0 text-accent">
          <Link
          to="/about/faculty/$slug"
          params={{ slug: profile.slug }}
          aria-label={`View profile: ${profile.name}`}
        >
          View Profile <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}
