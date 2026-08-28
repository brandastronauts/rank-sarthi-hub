import type { SourceRef } from "./types";

/**
 * Verified source references only. Nothing is added here without a real,
 * checkable publisher document. Modules that need provenance simply do not
 * render when their sourceRef is missing.
 */
export const sources: Record<string, SourceRef> = {
  "nta-jee-syllabus": {
    id: "nta-jee-syllabus",
    label: "Syllabus for JEE (Main) 2026",
    publisher: "National Testing Agency (NTA)",
    url: "https://jeemain.nta.nic.in/document/syllabus-2026/",
    sourceType: "official",
    lastVerified: "27 August 2026",
  },
  "jee-advanced-syllabus": {
    id: "jee-advanced-syllabus",
    label: "JEE (Advanced) 2026 Syllabus (PDF)",
    publisher: "JEE (Advanced) 2026, organising institute IIT Roorkee",
    url: "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
    sourceType: "official-pdf",
    lastVerified: "27 August 2026",
  },
  "ncert-physics-12-p1-ch1": {
    id: "ncert-physics-12-p1-ch1",
    label: "NCERT Class 12 Physics Part I, Chapter 1: Electric Charges and Fields (PDF)",
    publisher: "NCERT",
    url: "https://ncert.nic.in/textbook/pdf/leph101.pdf",
    sourceType: "textbook",
    lastVerified: "27 August 2026",
  },
  "ncert-physics-12-p1-ch2": {
    id: "ncert-physics-12-p1-ch2",
    label: "NCERT Class 12 Physics Part I, Chapter 2: Electrostatic Potential and Capacitance (PDF)",
    publisher: "NCERT",
    url: "https://ncert.nic.in/textbook/pdf/leph102.pdf",
    sourceType: "textbook",
    lastVerified: "27 August 2026",
  },
  "ncert-physics-12-p1-ch3": {
    id: "ncert-physics-12-p1-ch3",
    label: "NCERT Class 12 Physics Part I, Chapter 3: Current Electricity (PDF)",
    publisher: "NCERT",
    url: "https://ncert.nic.in/textbook/pdf/leph103.pdf",
    sourceType: "textbook",
    lastVerified: "27 August 2026",
  },

  "jee-advanced-paper-archive": {
    id: "jee-advanced-paper-archive",
    label: "JEE (Advanced) official past question-paper archive",
    publisher: "JEE (Advanced), organising institute",
    url: "https://jeeadv.ac.in/archive.html",
    sourceType: "official",
    lastVerified: "27 August 2026",
  },
  "nta-jee-main-question-papers": {
    id: "nta-jee-main-question-papers",
    label: "JEE (Main) official site, Question Papers section",
    publisher: "National Testing Agency (NTA)",
    url: "https://jeemain.nta.nic.in/",
    sourceType: "official",
    lastVerified: "27 August 2026",
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
