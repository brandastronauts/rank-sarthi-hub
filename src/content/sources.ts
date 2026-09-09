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

  "nta-jee-main-2026-syllabus-pdf": { id: "nta-jee-main-2026-syllabus-pdf", label: "Official JEE (Main) 2026 syllabus (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf", sourceType: "official-pdf", lastVerified: "8 September 2026" },
  "ncert-math-exemplar": { id: "ncert-math-exemplar", label: "NCERT Exemplar Problems index", publisher: "NCERT", url: "https://ncert.nic.in/exemplar-problems.php?ln=en", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-11-permutations": { id: "ncert-math-exemplar-11-permutations", label: "NCERT Class XI Mathematics Exemplar: Permutations and Combinations (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep207.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-11-binomial": { id: "ncert-math-exemplar-11-binomial", label: "NCERT Class XI Mathematics Exemplar: Binomial Theorem (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep208.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-11-limits": { id: "ncert-math-exemplar-11-limits", label: "NCERT Class XI Mathematics Exemplar: Limits and Derivatives (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep213.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-11-statistics": { id: "ncert-math-exemplar-11-statistics", label: "NCERT Class XI Mathematics Exemplar: Statistics (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep215.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-11-probability": { id: "ncert-math-exemplar-11-probability", label: "NCERT Class XI Mathematics Exemplar: Probability (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/mathematics/keep216.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-12-inverse-trig": { id: "ncert-math-exemplar-12-inverse-trig", label: "NCERT Class XII Mathematics Exemplar: Inverse Trigonometric Functions (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics/leep202.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-12-integrals": { id: "ncert-math-exemplar-12-integrals", label: "NCERT Class XII Mathematics Exemplar: Integrals (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics/leep207.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },
  "ncert-math-exemplar-12-differential-equations": { id: "ncert-math-exemplar-12-differential-equations", label: "NCERT Class XII Mathematics Exemplar: Differential Equations (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics/leep209.pdf", sourceType: "textbook", lastVerified: "8 September 2026" },

  /* Official JEE exam-desk sources (FreshnessWatch v1 register, checked 9 September 2026) */
  "nta-jee-main-home": { id: "nta-jee-main-home", label: "JEE (Main) official website", publisher: "National Testing Agency (NTA)", url: "https://jeemain.nta.nic.in/", sourceType: "official", lastVerified: "9 September 2026" },
  "nta-jee-main-documents": { id: "nta-jee-main-documents", label: "JEE (Main) official documents index", publisher: "National Testing Agency (NTA)", url: "https://jeemain.nta.nic.in/documents/", sourceType: "official", lastVerified: "9 September 2026" },
  "nta-jee-main-public-notices": { id: "nta-jee-main-public-notices", label: "JEE (Main) public notices", publisher: "National Testing Agency (NTA)", url: "https://jeemain.nta.nic.in/public-notices/", sourceType: "official", lastVerified: "9 September 2026" },
  "nta-jee-main-bulletin-2026": { id: "nta-jee-main-bulletin-2026", label: "JEE (Main) 2026 Information Bulletin (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/20251031903987934.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-s2-application-2026": { id: "nta-jee-main-s2-application-2026", label: "JEE (Main) 2026 Session 2 application notice (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260201612425163.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-p1-record-2026": { id: "nta-jee-main-p1-record-2026", label: "JEE (Main) 2026 Session 1 and 2 Paper 1 official date and shift record (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260423459353913.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-final-key-s2-p1-2026": { id: "nta-jee-main-final-key-s2-p1-2026", label: "JEE (Main) 2026 Session 2 Paper 1 final answer key (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-final-key-p2-2026": { id: "nta-jee-main-final-key-p2-2026", label: "JEE (Main) 2026 Paper 2 final answer key (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/05/20260504722672757.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-result-p1-2026": { id: "nta-jee-main-result-p1-2026", label: "JEE (Main) 2026 Paper 1 result notice (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420809492136.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nta-jee-main-score-p1-s2-2026": { id: "nta-jee-main-score-p1-s2-2026", label: "JEE (Main) 2026 Session 2 Paper 1 score card page", publisher: "National Testing Agency (NTA)", url: "https://jeemain.nta.nic.in/score-card-for-jeemain-2026-session-ii-paper-1b-e-b-tech/", sourceType: "official", lastVerified: "9 September 2026" },
  "nta-jee-main-score-p2-s2-2026": { id: "nta-jee-main-score-p2-s2-2026", label: "JEE (Main) 2026 Session 2 Paper 2 score card page", publisher: "National Testing Agency (NTA)", url: "https://jeemain.nta.nic.in/score-card-for-jeemain-2026-session-ii-paper-2b-arch-b-planning/", sourceType: "official", lastVerified: "9 September 2026" },
  "jee-advanced-home-2026": { id: "jee-advanced-home-2026", label: "JEE (Advanced) 2026 official website", publisher: "JEE (Advanced) 2026 organising authority", url: "https://jeeadv.ac.in/", sourceType: "official", lastVerified: "9 September 2026" },
  "jee-advanced-dates-2026": { id: "jee-advanced-dates-2026", label: "JEE (Advanced) 2026 important dates", publisher: "JEE (Advanced) 2026 organising authority", url: "https://jeeadv.ac.in/imp_dates.html", sourceType: "official", lastVerified: "9 September 2026" },
  "jee-advanced-cutoffs-2026": { id: "jee-advanced-cutoffs-2026", label: "JEE (Advanced) 2026 qualifying marks for rank lists (PDF)", publisher: "JEE (Advanced) 2026 organising authority", url: "https://jeeadv.ac.in/documents/cutoffs_2026.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "josaa-official": { id: "josaa-official", label: "Joint Seat Allocation Authority (JoSAA) official portal", publisher: "JoSAA", url: "https://josaa.nic.in/", sourceType: "official", lastVerified: "9 September 2026" },
  "csab-official": { id: "csab-official", label: "Central Seat Allocation Board (CSAB) official portal", publisher: "CSAB", url: "https://csab.nic.in/", sourceType: "official", lastVerified: "9 September 2026" },

  "nta-neet-documents": { id: "nta-neet-documents", label: "NTA NEET (UG) official documents portal", publisher: "National Testing Agency (NTA)", url: "https://neet.nta.nic.in/documents/", sourceType: "official", lastVerified: "9 September 2026" },
  "nta-neet-2026-bulletin": { id: "nta-neet-2026-bulletin", label: "NEET (UG) 2026 Information Bulletin, including syllabus appendix and official syllabus FAQ (PDF)", publisher: "National Testing Agency (NTA)", url: "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/202602231394640855.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "nmc-neet-ug-2026-syllabus": { id: "nmc-neet-ug-2026-syllabus", label: "NEET (UG) 2026 syllabus, National Medical Commission / NTA (PDF)", publisher: "National Medical Commission (UGMEB) / NTA", url: "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/01/202601081066816297.pdf", sourceType: "official-pdf", lastVerified: "9 September 2026" },
  "ncert-biology-11-contents": { id: "ncert-biology-11-contents", label: "NCERT Biology Class XI, current contents (PDF)", publisher: "NCERT", url: "https://www.ncert.nic.in/textbook/pdf/kebo1ps.pdf", sourceType: "textbook", lastVerified: "9 September 2026" },
  "ncert-biology-12-contents": { id: "ncert-biology-12-contents", label: "NCERT Biology Class XII, current contents (PDF)", publisher: "NCERT", url: "https://ncert.nic.in/textbook/pdf/lebo1ps.pdf", sourceType: "textbook", lastVerified: "9 September 2026" },
  "ncert-exemplar-index": { id: "ncert-exemplar-index", label: "NCERT Exemplar Problems index", publisher: "NCERT", url: "https://ncert.nic.in/exemplar-problems.php?ln=en", sourceType: "textbook", lastVerified: "9 September 2026" },
};



export function getSource(id: string): SourceRef | undefined {
  return sources[id];
}

export function getSources(ids: string[] = []): SourceRef[] {
  return ids.map(getSource).filter((s): s is SourceRef => !!s);
}
