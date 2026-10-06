import { publicAcademicProfiles } from "@/content/academic-profiles";
import { FacultyCard } from "./FacultyCard";

export function AcademicTeam({ id = "academic-team" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-28">
      <p className="eyebrow text-accent">Academic Team</p>
      <h2 className="mt-3 text-display-md text-primary">Meet Our Subject Matter Experts</h2>
      <p className="mt-3 max-w-3xl text-sm text-ink/80">
        Experienced subject experts who help shape Rank Sarthi&rsquo;s academic content and diagnostic thinking.
      </p>
      <ul className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {publicAcademicProfiles.map((profile) => (
          <li key={profile.id}>
            <FacultyCard profile={profile} />
          </li>
        ))}
      </ul>
    </section>
  );
}
