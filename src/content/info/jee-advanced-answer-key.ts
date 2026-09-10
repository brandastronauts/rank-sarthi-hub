import type { InfoPageContent } from "../types";

/**
 * /jee/jee-advanced/answer-key — official Advanced Paper 1 and Paper 2 keys (J01).
 * Provisional and final stay separate, and the scheduled publication time is
 * preserved alongside the actual official homepage posting time.
 */

export const jeeAdvancedAnswerKey: InfoPageContent = {
  url: "/jee/jee-advanced/answer-key",
  platform: "jee",
  slug: "answer-key",
  exam: "JEE Advanced",
  title: "JEE Advanced Answer Key: Official Paper 1 and Paper 2 Keys",
  eyebrow: "Official answer keys",
  intent: "Open the correct official Advanced key without mixing paper or stage",
  chips: ["Official JEE Advanced", "Paper 1 and Paper 2 separate", "Provisional vs final"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "Official JEE Advanced 2026 provisional and final answer keys exist separately for Paper 1 and Paper 2. The provisional files were posted on the official homepage on 25 May 2026 at 09:40 IST and the final files on 1 June 2026 at 02:45 IST." }] },
    { type: "note", tone: "source", children: [{ text: "The official important-dates page scheduled both releases for 10:00 IST. The scheduled time and the actual posting time are both recorded rather than one replacing the other." }] },
  ],
  freshness: { heading: "Official key status", recordIds: ["jee-advanced-2026-final-keys"], note: "Daily checking during the response and key window; quarterly archive integrity afterwards." },
  blocks: [
    {
      kind: "table",
      id: "adv-key-matrix",
      heading: "2026 key availability",
      intro: "Each paper carries its own provisional and final record.",
      columns: ["Paper", "Provisional", "Final", "Source owner"],
      rows: [
        ["Paper 1", "Verified official, 25 May 2026 09:40 IST", "Verified official, 1 Jun 2026 02:45 IST", "JEE Advanced organising authority"],
        ["Paper 2", "Verified official, 25 May 2026 09:40 IST", "Verified official, 1 Jun 2026 02:45 IST", "JEE Advanced organising authority"],
        ["2027", "Not officially announced", "Not officially announced", "JEE Advanced organising authority"],
      ],
      jump: true,
    },
    {
      kind: "resources",
      id: "adv-keys-2026",
      heading: "JEE Advanced 2026 official keys",
      rows: [
        {
          id: "jee-advanced-2026-p1-keys",
          eventLabel: "JEE Advanced 2026 — Paper 1",
          eventDate: "Exam 17 May 2026, 09:00-12:00 IST",
          cells: [
            { label: "Provisional key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional answer key", badge: "Official JEE Advanced", cta: "View Official Answer Key", href: "https://jeeadv.ac.in/documents/p1_provisional_keys.pdf", owner: "JEE Advanced organising authority", trustNote: "The official important-dates page scheduled online display for 10:00 IST. Both facts are preserved.", detail: "Posted on the official homepage 25 May 2026 at 09:40 IST" }
            ] },
            { label: "Final key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final answer key", badge: "Official JEE Advanced", cta: "View Official Answer Key", href: "https://jeeadv.ac.in/documents/p1_solutions_final.pdf", owner: "JEE Advanced organising authority", trustNote: "The official important-dates page scheduled final key and result for 10:00 IST. Both facts are preserved.", detail: "Posted on the official homepage 1 June 2026 at 02:45 IST" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2026-p2-keys",
          eventLabel: "JEE Advanced 2026 — Paper 2",
          eventDate: "Exam 17 May 2026, 14:30-17:30 IST",
          cells: [
            { label: "Provisional key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional answer key", badge: "Official JEE Advanced", cta: "View Official Answer Key", href: "https://jeeadv.ac.in/documents/p2_provisional_keys.pdf", owner: "JEE Advanced organising authority", trustNote: "The official important-dates page scheduled online display for 10:00 IST. Both facts are preserved.", detail: "Posted on the official homepage 25 May 2026 at 09:40 IST" }
            ] },
            { label: "Final key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final answer key", badge: "Official JEE Advanced", cta: "View Official Answer Key", href: "https://jeeadv.ac.in/documents/p2_solutions_final.pdf", owner: "JEE Advanced organising authority", trustNote: "The official important-dates page scheduled final key and result for 10:00 IST. Both facts are preserved.", detail: "Posted on the official homepage 1 June 2026 at 02:45 IST" }
            ] },
          ],
        },
      ],
      note: "No coaching solution may carry an official answer-key label.",
      jump: true,
    },
    {
      kind: "prose",
      id: "adv-key-history",
      heading: "Historical keys",
      concepts: [
        {
          id: "adv-key-history-body",
          title: "Historical keys",
          body: [
            { type: "paragraph", children: [{ text: "Earlier Advanced cycles are not listed here. A historical key is added only after its own official URL is directly validated; a current-year URL is never edited to guess an older one." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "up", description: "Return to the Advanced hub" },
    { label: "Advanced Papers", url: "/jee/jee-advanced/previous-year-papers", relation: "related", description: "Open the matching official papers" },
    { label: "Advanced Cutoff", url: "/jee/jee-advanced/cutoff", relation: "related", description: "See the rank-list qualifying criteria" },
    { label: "Advanced Exam Dates", url: "/jee/jee-advanced/exam-dates", relation: "related", description: "See the official timeline" },
  ],
  faqs: [
    { question: "Why do two different times appear for the same key?", answer: [{ type: "paragraph", children: [{ text: "The official important-dates page scheduled the release for 10:00 IST while the official homepage recorded the files as posted at 09:40 IST for the provisional keys and 02:45 IST for the final keys. Both official facts are preserved." }] }] },
    { question: "Is there a 2027 key?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced." }] }] },
  ],
  sourceRefs: ["jee-advanced-2026-provisional-keys", "jee-advanced-2026-final-keys"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Advanced Answer Key 2026: Official Paper 1 & 2 Keys | Rank Sarthi",
    description: "Open the official JEE Advanced 2026 Paper 1 and Paper 2 provisional and final answer keys, with publication state and source ownership clearly separated.",
    ogTitle: "JEE Advanced 2026 Official Paper 1 and Paper 2 Keys",
    ogDescription: "Provisional and final records with their real publication times.",
    ogType: "article",
  },
};
