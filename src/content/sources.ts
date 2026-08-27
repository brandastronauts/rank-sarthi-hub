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
    label: "NDA & NA Examination (II), 2026 notification (PDF)",
    publisher: "Union Public Service Commission (UPSC)",
    url: "https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf",
    sourceType: "official",
    lastVerified: "27 August 2026",
  },
  "upsc-nda-exam-page": {
    id: "upsc-nda-exam-page",
    label: "UPSC NDA & NA Examination (II), 2026 examination page",
    publisher: "Union Public Service Commission (UPSC)",
    url: "https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026",
    sourceType: "official",
    lastVerified: "27 August 2026",
  },
  "upsc-previous-papers": {
    id: "upsc-previous-papers",
    label: "UPSC previous question papers",
    publisher: "Union Public Service Commission (UPSC)",
    url: "https://www.upsc.gov.in/examinations/previous-question-papers",
    sourceType: "official",
    lastVerified: "27 August 2026",
  },
};


export function getSource(id: string): SourceRef | undefined {
  return sources[id];
}

export function getSources(ids: string[] = []): SourceRef[] {
  return ids.map(getSource).filter((s): s is SourceRef => !!s);
}
