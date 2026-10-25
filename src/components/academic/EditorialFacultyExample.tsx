import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { publicAcademicProfiles } from "@/content/academic-profiles";
import iitMadrasLogo from "@/assets/iit-madras-credential.png";
import { Button } from "@/components/ui/button";

/** Single-person design proposal; not used by public discovery surfaces. */
export function EditorialFacultyExample() {
  const profile = publicAcademicProfiles.find((person) => person.id === "sachin-garg");
  if (!profile) return null;
  const qualification = profile.credentials?.find((row) => row.label === "Postgraduate degree");
  const achievement = profile.credentials?.find((row) => row.label === "CSIR-NET/JRF");
  return (
    <article aria-label="Sachin Garg faculty design example" className="grid min-w-0 grid-cols-[100px_minmax(0,1fr)] items-start gap-4 border-t border-gold/50 py-6 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5">
      {profile.photo ? (
        <img src={profile.photo} alt={profile.imageAlt ?? profile.name} width={112} height={140} className="h-auto w-full rounded object-contain" />
      ) : null}
      <div className="min-w-0">
        <h2 className="text-lg font-bold leading-6 text-primary">{profile.name}</h2>
        <p className="mt-1 text-sm font-medium leading-5 text-ink/80">{profile.title}</p>
        <div className="mt-3 flex items-start gap-2">
          <img src={iitMadrasLogo} alt="IIT Madras" width={32} height={32} className="size-8 shrink-0 object-contain" />
          <p className="text-xs leading-5 text-primary">{qualification?.value}</p>
        </div>
        <p className="mt-2 text-xs font-semibold leading-5 text-primary">{achievement?.value}</p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{profile.academicFocus[1]}</p>
        <Button asChild variant="link" className="mt-2 h-8 justify-start p-0 text-xs text-primary">
          <Link to="/about/faculty/$slug" params={{ slug: profile.slug }}>View Profile <ArrowRight aria-hidden className="text-gold" /></Link>
        </Button>
      </div>
    </article>
  );
}