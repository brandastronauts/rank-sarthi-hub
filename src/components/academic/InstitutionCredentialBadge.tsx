import type { AcademicCredential, AcademicProfile } from "@/content/types";

/** Text fallback: scoped to one person's credential, not a brand trust mark. */
export function InstitutionCredentialBadge({ institution }: { institution: NonNullable<AcademicCredential["institution"]> }) {
  return (
    <span className="inline-flex max-w-full flex-wrap items-center gap-x-1 rounded border border-border bg-secondary px-2 py-1 text-xs font-medium leading-4 text-ink/80">
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