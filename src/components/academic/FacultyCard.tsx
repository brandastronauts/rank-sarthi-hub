import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { AcademicProfile } from "@/content/types";
import { FacultyPhoto } from "./FacultyPhoto";
import { CompactFacultyCredential, FacultyInstitutionCredential } from "./InstitutionCredentialBadge";

/** Shared faculty summary card — used on the homepage and the About page. */
export function FacultyCard({ profile, clamp = 5, compact = false }: { profile: AcademicProfile; clamp?: 3 | 5; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <FacultyPhoto profile={profile} initialsClassName="text-5xl" />
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3 sm:p-5" : "p-5"}`}>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{profile.subject} Expert</p>
        <h3 className={`mt-1 font-bold text-primary ${compact ? "text-base sm:text-lg" : "text-xl"}`}>{profile.name}</h3>
        <p className="mt-1 text-sm font-semibold text-ink/80">{profile.title}</p>
        {compact ? (
          <p className="mt-3 line-clamp-2 min-h-10 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <CompactFacultyCredential profile={profile} />
          </p>
        ) : (
          <p className={`mt-4 text-sm leading-relaxed text-muted-foreground ${clamp === 3 ? "line-clamp-3" : "line-clamp-5"}`}>
            {profile.shortProfile}
          </p>
        )}
        {!compact ? <FacultyInstitutionCredential profile={profile} /> : null}
        <Link
          to="/about/faculty/$slug"
          params={{ slug: profile.slug }}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          View profile <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
