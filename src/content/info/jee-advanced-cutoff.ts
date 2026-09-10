import type { InfoPageContent } from "../types";

/**
 * /jee/jee-advanced/cutoff — official rank-list qualifying criteria (J01).
 * This page owns rank-list inclusion criteria only. IIT programme admission
 * opening and closing ranks belong to JoSAA and are not published here.
 */

export const jeeAdvancedCutoff: InfoPageContent = {
  url: "/jee/jee-advanced/cutoff",
  platform: "jee",
  slug: "cutoff",
  exam: "JEE Advanced",
  title: "JEE Advanced Cutoff: Official Rank-List Qualifying Criteria",
  eyebrow: "Rank-list qualifying criteria",
  intent: "Read the criteria for inclusion in a rank list, not an admission closing rank",
  chips: ["Official JEE Advanced", "Rank-list criteria only", "No IIT closing ranks"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "For the JEE Advanced 2026 Common Rank List, the official minimum was 8 marks in each subject and 92 aggregate marks out of a maximum aggregate of 360. This is a rank-list inclusion criterion, not an IIT programme admission closing rank." }] },
    { type: "note", tone: "source", children: [{ text: "A JoSAA opening or closing rank never appears inside this table." }] },
  ],
  freshness: { heading: "Official qualifying-criteria status", recordIds: ["jee-advanced-2026-crl-qualifying-marks"], note: "Event-driven around official result publication; monthly archive integrity afterwards." },
  blocks: [
    {
      kind: "table",
      id: "adv-2026-rank-list-criteria",
      heading: "Official JEE Advanced 2026 rank-list qualifying criteria",
      intro: "Official 2026 criteria as published in the result press release. Maximum aggregate marks 360.",
      columns: ["Rank list", "Minimum % each subject", "Minimum % aggregate", "Minimum marks each subject", "Minimum aggregate marks"],
      rows: [
        ["CRL", "7.3%", "25.56%", "8", "92"],
        ["OBC-NCL", "6.51%", "22.78%", "7", "82"],
        ["GEN-EWS", "6.51%", "22.78%", "7", "82"],
        ["SC", "3.65%", "12.78%", "4", "46"],
        ["ST", "3.65%", "12.78%", "4", "46"],
        ["CRL-PwD", "3.65%", "12.78%", "4", "46"],
        ["OBC-NCL-PwD", "3.65%", "12.78%", "4", "46"],
        ["GEN-EWS-PwD", "3.65%", "12.78%", "4", "46"],
        ["SC-PwD", "3.65%", "12.78%", "4", "46"],
        ["ST-PwD", "3.65%", "12.78%", "4", "46"],
        ["Preparatory Course", "1.83%", "6.39%", "2", "23"],
      ],
      note: "Source: official JEE Advanced 2026 result press release.",
      jump: true,
    },
    {
      kind: "resources",
      id: "adv-cutoff-source",
      heading: "Official source",
      rows: [
        {
          id: "jee-advanced-2026-press-release",
          eventLabel: "JEE Advanced 2026 result press release",
          eventDate: "2026 cycle",
          cells: [
            { label: "Official document", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Result press release with qualifying criteria", badge: "Official JEE Advanced", cta: "View Official Document", href: "https://jeeadv.ac.in/documents/Result2026PressRelease.pdf", owner: "JEE Advanced organising authority", detail: "2026 cycle" }
            ] },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "adv-cutoff-boundary",
      heading: "Where admission ranks live instead",
      concepts: [
        {
          id: "adv-cutoff-boundary-body",
          title: "Where admission ranks live instead",
          body: [
            { type: "paragraph", children: [{ text: "An IIT programme admission opening or closing rank is a JoSAA record and only means something with its full context: year, allocation round, institute, programme, seat type or category and rank basis. That dataset is a separate admission-data system and is not ingested, so no admission rank is shown here." }] },
            { type: "note", tone: "caution", children: [{ text: "2027 criteria: not officially announced. Nothing is carried forward from 2026." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "up", description: "Return to the Advanced hub" },
    { label: "JEE Main Cutoff", url: "/jee/cutoff", relation: "related", description: "See the separate Main Advanced-eligibility threshold" },
    { label: "Advanced Answer Key", url: "/jee/jee-advanced/answer-key", relation: "related", description: "Confirm the final-key state before reading marks" },
    { label: "Advanced Exam Dates", url: "/jee/jee-advanced/exam-dates", relation: "related", description: "See the official result milestone" },
  ],
  faqs: [
    { question: "Is 92 marks the cutoff to get into an IIT?", answer: [{ type: "paragraph", children: [{ text: "No. 92 aggregate marks was the 2026 Common Rank List inclusion criterion. Admission to a specific IIT programme depends on JoSAA closing ranks, which are a different dataset." }] }] },
    { question: "Are 2027 criteria known?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced." }] }] },
  ],
  sourceRefs: ["jee-advanced-2026-result-press-release"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Advanced Cutoff 2026: Rank-List Qualifying Marks | Rank Sarthi",
    description: "See the official JEE Advanced 2026 rank-list qualifying percentages and marks, clearly separated from IIT programme admission opening and closing ranks.",
    ogTitle: "JEE Advanced 2026 Rank-List Qualifying Marks",
    ogDescription: "Official inclusion criteria by rank list, not admission closing ranks.",
    ogType: "article",
  },
};
