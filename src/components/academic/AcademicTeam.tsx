import { academicProfiles } from "@/content/academic-profiles";
import { FacultyCard } from "./FacultyCard";

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
          <li key={profile.id}>
            <FacultyCard profile={profile} />
          </li>
        ))}
      </ul>
    </section>
  );
}
