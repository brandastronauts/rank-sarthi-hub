import type { AcademicCredential, AcademicProfile } from "@/content/types";
import iitDelhiLogo from "@/assets/iit-delhi-credential.png";
import iitMadrasLogo from "@/assets/iit-madras-credential.png";

const institutionLogos = {
  "IIT Delhi": iitDelhiLogo,
  "IIT Madras": iitMadrasLogo,
};

function InstitutionLogo({ name, compact = false }: { name: NonNullable<AcademicCredential["institution"]>["name"]; compact?: boolean }) {
  const src = name === "NSIT" ? undefined : institutionLogos[name];
  if (!src) return null;
  return <img src={src} alt={name} width={compact ? 16 : 28} height={compact ? 16 : 28} loading="lazy" className={compact ? "mr-1 inline-block size-4 object-contain align-middle" : "size-7 shrink-0 object-contain"} />;
}

/** Artwork is scoped to one person's credential, never a brand trust mark. */
export function InstitutionCredentialBadge({ institution }: { institution: NonNullable<AcademicCredential["institution"]> }) {
  return (
    <span className="inline-flex max-w-full flex-wrap items-center gap-x-1 rounded border border-border bg-secondary px-2 py-1 text-xs font-medium leading-4 text-ink/80">
      <InstitutionLogo name={institution.name} />
      <span>{institution.name}</span>
      {institution.context ? <span>— {institution.context}</span> : null}
    </span>
  );
}

export function FacultyInstitutionCredential({ profile }: { profile: AcademicProfile }) {
  const credential = profile.credentials?.find((row) => row.institution);
  if (!credential?.institution) return null;
  return (
    <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
      <InstitutionCredentialBadge institution={credential.institution} />
      <p className="mt-1">{credential.value}</p>
    </div>
  );
}

/** A badge replaces institution text already in the concise line; no extra row. */
export function CompactFacultyCredential({ profile }: { profile: AcademicProfile }) {
  const text = profile.featuredCredential ?? profile.expertise.filter((item) => item !== profile.subject).slice(0, 2).join(" · ");
  const institution = profile.credentials?.find((row) => row.institution && text.includes(row.institution.name))?.institution;
  if (!institution) return <>{text}</>;
  const [before, after] = text.split(institution.name);
  return <>{before}<span className="rounded border border-border bg-secondary px-1 font-medium text-ink/80"><InstitutionLogo name={institution.name} compact />{institution.name}</span>{after}</>;
}