import type { SourceRef } from "./types";

/**
 * Verified source references only. Nothing is added here without a real,
 * checkable publisher document. Modules that need provenance simply do not
 * render when their sourceRef is missing.
 */
export const sources: Record<string, SourceRef> = {
  "nta-jee-syllabus": {
    id: "nta-jee-syllabus",
    label: "JEE (Main) Syllabus",
    publisher: "National Testing Agency (NTA)",
    url: "https://jeemain.nta.nic.in/",
    sourceType: "official",
  },
  "upsc-nda-notification": {
    id: "upsc-nda-notification",
    label: "NDA & NA Examination Notification",
    publisher: "Union Public Service Commission (UPSC)",
    url: "https://upsc.gov.in/examinations/active-examinations",
    sourceType: "official",
  },
};

export function getSource(id: string): SourceRef | undefined {
  return sources[id];
}

export function getSources(ids: string[] = []): SourceRef[] {
  return ids.map(getSource).filter((s): s is SourceRef => !!s);
}
