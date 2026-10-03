import type { SyllabusContent, SyllabusSection } from "@/content/types";
import { physicsUnitsFor } from "@/content/physics-units";
import { jeeSyllabus } from "./jee";
import { neetSyllabus } from "./neet";
import { ndaSyllabus } from "./nda";

/**
 * Syllabus content registry (T05). One record per platform; a platform with
 * no record has no syllabus route.
 */
const syllabi: Record<string, SyllabusContent> = {
  jee: jeeSyllabus,
  neet: neetSyllabus,
  nda: ndaSyllabus,
};

/** Official Physics units link explicitly to their primary + split routes. */
function withPhysicsRoutes(platform: string, content: SyllabusContent): SyllabusContent {
  const units = physicsUnitsFor(platform);
  if (!units) return content;
  const enrich = (sections: SyllabusSection[]) =>
    sections.map((sec) =>
      sec.id !== "main-physics" && sec.id !== "neet-physics"
        ? sec
        : {
            ...sec,
            units: sec.units.map((u) => {
              const owner = units.find((o) => o.name.toLowerCase() === u.name.toLowerCase());
              return owner ? { ...u, chapterSlugs: [owner.primary, ...(owner.parts ?? [])] } : u;
            }),
          },
    );
  return {
    ...content,
    ...(content.sections ? { sections: enrich(content.sections) } : {}),
    ...(content.hierarchies
      ? { hierarchies: content.hierarchies.map((h) => ({ ...h, sections: enrich(h.sections) })) }
      : {}),
  };
}

export function getSyllabus(platform: string): SyllabusContent | undefined {
  const content = syllabi[platform];
  return content ? withPhysicsRoutes(platform, content) : undefined;
}
