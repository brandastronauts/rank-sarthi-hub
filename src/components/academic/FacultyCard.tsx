import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { AcademicProfile } from "@/content/types";
import { FacultyPhoto } from "./FacultyPhoto";
import { Button } from "@/components/ui/button";
import { InstitutionLogo } from "./InstitutionCredentialBadge";

/** Shared faculty summary card — used on the homepage and the About page. */
export function FacultyCard({ profile, editorial = false }: { profile: AcademicProfile; editorial?: boolean }) {
  const qualification = profile.credentials?.[0]?.value;
  if (editorial) {
    const primary = profile.credentials?.[0];
    const postgraduate = profile.credentials?.find((row) => row.label === "Postgraduate specialization");
    const achievements = profile.credentials?.filter((row) =>
      ["CSIR-NET/JRF", "GATE", "CSIR-NET", "DCE entrance rank", "JEE", "Academic experience"].includes(row.label)
    ) ?? [];
    const achievementText = achievements.map((row) => row.label === "DCE entrance rank" ? `DCE entrance rank ${row.value}` : row.label === "Academic experience" ? `${row.value} of academic experience` : row.value).join(" · ");
    return (
      <article className="grid min-w-0 grid-cols-[110px_minmax(0,1fr)] items-start gap-4 border-t border-gold/50 py-6 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5">
        <div className="aspect-[4/5] overflow-hidden rounded">
          <FacultyPhoto profile={profile} contain initialsClassName="text-2xl" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-6 text-primary">{profile.name}</h3>
          <p className="mt-1 text-sm font-medium leading-5 text-ink/80">{profile.title}</p>
          {primary ? (
            <div className="mt-3 flex items-start gap-2">
              {primary.institution ? <InstitutionLogo name={primary.institution.name} /> : null}
              <p className="text-xs leading-5 text-primary">{primary.label === "Academic association" ? "Academic association: " : null}{primary.value}{postgraduate ? `; postgraduate specialization in ${postgraduate.value}` : null}</p>
            </div>
          ) : null}
          {achievementText ? <p className="mt-2 text-xs font-semibold leading-5 text-primary">{achievementText}</p> : null}
          <p className="mt-2 text-xs leading-5 text-muted-foreground">{profile.id === "sachin-garg" ? profile.academicFocus[1] : profile.academicFocus[0]}</p>
          <Button asChild variant="link" className="mt-2 h-8 justify-start p-0 text-xs text-primary">
            <Link to="/about/faculty/$slug" params={{ slug: profile.slug }} aria-label={`View profile: ${profile.name}`}>View Profile <ArrowRight aria-hidden className="text-gold" /></Link>
          </Button>
        </div>
      </article>
    );
  }
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="h-56 shrink-0 overflow-hidden bg-secondary sm:h-60">
        <FacultyPhoto profile={profile} initialsClassName="text-5xl" contain />
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
