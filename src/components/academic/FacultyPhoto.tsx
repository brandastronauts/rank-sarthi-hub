import { useState } from "react";
import type { AcademicProfile } from "@/content/types";

/**
 * Renders the approved faculty photograph. If no photo is approved, or the
 * approved asset fails to load, the profile's own initials are shown. No
 * substitute or generated likeness is ever used.
 */
export function FacultyPhoto({
  profile,
  initialsClassName = "text-5xl",
}: {
  profile: AcademicProfile;
  initialsClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (profile.photo && !failed) {
    return (
      <img
        src={profile.photo}
        alt={profile.imageAlt ?? ""}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <div className="flex h-full items-center justify-center" aria-label={`${profile.name} initials`}>
      <span className={`font-display font-bold text-primary ${initialsClassName}`}>{profile.initials}</span>
    </div>
  );
}
