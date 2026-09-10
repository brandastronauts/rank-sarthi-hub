import type { InfoPageContent } from "@/content/types";
import { jeeMain } from "./jee-main";
import { jeeAdvanced } from "./jee-advanced";
import { jeePreviousYearPapers } from "./jee-previous-year-papers";
import { jeeAnswerKey } from "./jee-answer-key";
import { jeeAnalysis } from "./jee-analysis";
import { jeeCutoff } from "./jee-cutoff";
import { jeeExamDates } from "./jee-exam-dates";
import { neetExam } from "./neet-exam";
import { neetNcertMapping } from "./neet-ncert-mapping";
import { neetNcertImportantPages } from "./neet-ncert-important-pages";
import { neetSyllabusBiology } from "./neet-syllabus-biology";
import { neetSyllabusPhysics } from "./neet-syllabus-physics";
import { neetSyllabusChemistry } from "./neet-syllabus-chemistry";

/**
 * Exam information pages, keyed by registry path. A page renders only when it
 * is registered here AND its registry record is built.
 */
export const infoPages: InfoPageContent[] = [
  jeeMain,
  jeeAdvanced,
  jeePreviousYearPapers,
  jeeAnswerKey,
  jeeAnalysis,
  jeeCutoff,
  jeeExamDates,
  neetExam,
  neetNcertMapping,
  neetNcertImportantPages,
  neetSyllabusBiology,
  neetSyllabusPhysics,
  neetSyllabusChemistry,
];

const byUrl = new Map(infoPages.map((p) => [p.url, p]));

export function getInfoPage(platform: string, slug: string): InfoPageContent | undefined {
  return byUrl.get(`/${platform}/${slug}`);
}

export function getInfoPageByUrl(url: string): InfoPageContent | undefined {
  return byUrl.get(url);
}
