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

  /* ---------------- Chemistry (JEE B06-B08) ---------------- */
  "ncert-chem-basic-concepts": { id: "ncert-chem-basic-concepts", label: "NCERT Chemistry Class 11: Some Basic Concepts of Chemistry (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech101.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-atomic-structure": { id: "ncert-chem-atomic-structure", label: "NCERT Chemistry Class 11: Structure of Atom (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech102.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-periodicity": { id: "ncert-chem-periodicity", label: "NCERT Chemistry Class 11: Classification of Elements and Periodicity in Properties (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech103.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-bonding": { id: "ncert-chem-bonding", label: "NCERT Chemistry Class 11: Chemical Bonding and Molecular Structure (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech104.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-thermodynamics": { id: "ncert-chem-thermodynamics", label: "NCERT Chemistry Class 11: Thermodynamics (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech106.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-equilibrium": { id: "ncert-chem-equilibrium", label: "NCERT Chemistry Class 11: Equilibrium (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech107.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-organic-basics": { id: "ncert-chem-organic-basics", label: "NCERT Chemistry Class 11: Organic Chemistry, Some Basic Principles and Techniques (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech205.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-hydrocarbons": { id: "ncert-chem-hydrocarbons", label: "NCERT Chemistry Class 11: Hydrocarbons (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/kech206.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-solutions": { id: "ncert-chem-solutions", label: "NCERT Chemistry Class 12: Solutions (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech101.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-electrochemistry": { id: "ncert-chem-electrochemistry", label: "NCERT Chemistry Class 12: Electrochemistry (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech102.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-kinetics": { id: "ncert-chem-kinetics", label: "NCERT Chemistry Class 12: Chemical Kinetics (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech103.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-d-f-block": { id: "ncert-chem-d-f-block", label: "NCERT Chemistry Class 12: The d- and f-Block Elements (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech104.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-coordination": { id: "ncert-chem-coordination", label: "NCERT Chemistry Class 12: Coordination Compounds (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech105.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-haloalkanes": { id: "ncert-chem-haloalkanes", label: "NCERT Chemistry Class 12: Haloalkanes and Haloarenes (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech201.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-alcohols-phenols-ethers": { id: "ncert-chem-alcohols-phenols-ethers", label: "NCERT Chemistry Class 12: Alcohols, Phenols and Ethers (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech202.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-carbonyl-acids": { id: "ncert-chem-carbonyl-acids", label: "NCERT Chemistry Class 12: Aldehydes, Ketones and Carboxylic Acids (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech203.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-amines": { id: "ncert-chem-amines", label: "NCERT Chemistry Class 12: Amines (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech204.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-biomolecules": { id: "ncert-chem-biomolecules", label: "NCERT Chemistry Class 12: Biomolecules (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lech205.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-syllabus": { id: "ncert-chem-syllabus", label: "NCERT Chemistry syllabus (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/pdf/syllabus/desm_s_Chemistry.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-chem-exemplar": { id: "ncert-chem-exemplar", label: "NCERT Chemistry exemplar problems", publisher: "NCERT", url: "https://ncert.nic.in/exemplar-problems.php?ln=en", sourceType: "textbook", lastVerified: "8 September 2026" },
  "bipm-si-brochure": { id: "bipm-si-brochure", label: "SI Brochure: The International System of Units", publisher: "BIPM", url: "https://www.bipm.org/en/publications/si-brochure", sourceType: "official", lastVerified: "8 September 2026" },
  "nist-codata-gas-constant": { id: "nist-codata-gas-constant", label: "CODATA value: molar gas constant", publisher: "NIST", url: "https://physics.nist.gov/cgi-bin/cuu/Value?r", sourceType: "official", lastVerified: "8 September 2026" },
};


export function getSource(id: string): SourceRef | undefined {
  return sources[id];
}

export function getSources(ids: string[] = []): SourceRef[] {
  return ids.map(getSource).filter((s): s is SourceRef => !!s);
}
