import type { SyllabusContent } from "@/content/types";
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

export function getSyllabus(platform: string): SyllabusContent | undefined {
  return syllabi[platform];
}
