import { useEffect, useRef, useState } from "react";
import type { AcademicProfile } from "@/content/types";

/**
 * Renders the approved faculty photograph. If no photo is approved, or the
 * approved asset fails to load, the profile's own initials are shown. No
 * substitute or generated likeness is ever used.
 *
 * The post-hydration check catches SSR images that already failed before React
 * attached its onError handler.
 */
export function FacultyPhoto({
  profile,
  initialsClassName = "text-5xl",
}: {
  profile: AcademicProfile;
  initialsClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (profile.photo && !failed) {
    return (
      <img
        ref={ref}
        src={profile.photo}
        alt={profile.imageAlt ?? ""}
        className="h-full w-full object-cover object-top"
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
