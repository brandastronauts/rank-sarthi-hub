import type { InfoPageContent } from "../types";

/**
 * /jee/exam-dates — official JEE Main milestone timeline (J01).
 * Session 1 and Session 2 remain separate cycles of milestones and no 2027
 * value is inferred from a customary month or a coaching estimate.
 */

export const jeeExamDates: InfoPageContent = {
  url: "/jee/exam-dates",
  platform: "jee",
  slug: "exam-dates",
  exam: "JEE Main",
  title: "JEE Main Exam Dates: Official Session 1 and Session 2 Timeline",
  eyebrow: "Official timeline",
  intent: "See what is officially announced now, separated from the completed 2026 cycle",
  chips: ["Official NTA", "Session-separated", "No inferred dates"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "JEE Main 2027 is not officially announced on the NTA JEE Main channel checked on 11 September 2026. The latest completed verified cycle is 2026: Session 1 Paper 1 ran on 21, 22, 23, 24 and 28 January with the result on 16 February, and Session 2 Paper 1 ran on 2, 4, 5, 6 and 8 April with the result on 20 April." }] },
    { type: "note", tone: "source", children: [{ text: "No registration, exam, key or result date is estimated for an unannounced cycle." }] },
  ],
  freshness: { heading: "Official schedule status", recordIds: ["jee-main-2027-schedule-status", "jee-main-2026-cycle-timeline"], note: "Daily checking in an active window; a new date is published only after human review." },
  blocks: [
    {
      kind: "table",
      id: "main-2027-status",
      heading: "JEE Main 2027 official status",
      intro: "Every 2027 field stays explicit until the owning authority publishes a source.",
      columns: ["Milestone", "Value", "Status"],
      rows: [
        ["Information bulletin", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Registration", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Session 1 examination", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Session 2 examination", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Provisional answer key", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Final answer key", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Result", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
      ],
      jump: true,
    },
    {
      kind: "table",
      id: "main-2026-session-1-timeline",
      heading: "JEE Main 2026 Session 1 official milestones",
      columns: ["Session", "Milestone", "Official date", "Status", "Authority"],
      rows: [
        ["Session 1", "Application start", "2025-10-31", "COMPLETED", "National Testing Agency"],
        ["Session 1", "Application end", "2025-11-27", "COMPLETED", "National Testing Agency"],
        ["Session 1", "Correction window", "2025-12-01 to 2025-12-02 23:50 IST", "COMPLETED", "National Testing Agency"],
        ["Session 1", "City intimation", "2026-01-08", "PUBLISHED", "National Testing Agency"],
        ["Session 1", "Admit card batch 1", "2026-01-17", "PUBLISHED", "National Testing Agency"],
        ["Session 1", "Admit card batch 2", "2026-01-24", "PUBLISHED", "National Testing Agency"],
        ["Session 1", "Paper 1 examination", "2026-01-21 to 2026-01-28", "COMPLETED", "National Testing Agency"],
        ["Session 1", "Provisional answer key / challenge", "2026-02-04 to 2026-02-06 23:50 IST", "COMPLETED", "National Testing Agency"],
        ["Session 1", "Final answer key", "2026-02-16", "PUBLISHED", "National Testing Agency"],
        ["Session 1", "Paper 1 NTA score/result", "2026-02-16", "DECLARED", "National Testing Agency"],
      ],
      jump: true,
    },
    {
      kind: "table",
      id: "main-2026-session-2-timeline",
      heading: "JEE Main 2026 Session 2 official milestones",
      columns: ["Session", "Milestone", "Official date", "Status", "Authority"],
      rows: [
        ["Session 2", "Application start", "2026-02-01", "COMPLETED", "National Testing Agency"],
        ["Session 2", "Application end", "2026-02-25 21:00 IST", "COMPLETED", "National Testing Agency"],
        ["Session 2", "Correction window", "2026-02-27 to 2026-02-28 23:50 IST", "COMPLETED", "National Testing Agency"],
        ["Session 2", "City intimation", "2026-03-21", "PUBLISHED", "National Testing Agency"],
        ["Session 2", "Paper 1 examination", "2026-04-02 to 2026-04-08", "COMPLETED", "National Testing Agency"],
        ["Session 2", "Provisional answer key / challenge", "2026-04-11 to 2026-04-13 23:50 IST", "COMPLETED", "National Testing Agency"],
        ["Session 2", "Final answer key", "2026-04-20", "PUBLISHED", "National Testing Agency"],
        ["Session 2", "Paper 1 NTA score/result", "2026-04-20", "DECLARED", "National Testing Agency"],
      ],
      jump: true,
    },
    {
      kind: "prose",
      id: "main-dates-boundary",
      heading: "How these dates are maintained",
      concepts: [
        {
          id: "main-dates-boundary-body",
          title: "How these dates are maintained",
          body: [
            { type: "paragraph", children: [{ text: "Every milestone above comes from an official NTA notice or official key or result document, recorded with its own source. Where a milestone was officially revised, the revised value becomes the effective value and the change is recorded rather than silently replaced." }] },
            { type: "note", tone: "source", children: [{ text: "Paper 1 Session 2 events are 2, 4, 5 and 6 April in both shifts plus 8 April Shift 2 only." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the Main process" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Open the official key records" },
    { label: "Previous Year Papers", url: "/jee/previous-year-papers", relation: "related", description: "Open the official Session 2 papers" },
    { label: "Advanced Exam Dates", url: "/jee/jee-advanced/exam-dates", relation: "related", description: "See the separate Advanced timeline" },
  ],
  faqs: [
    { question: "When is JEE Main 2027?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced. No official 2027 value was located on the NTA JEE Main channel checked on 11 September 2026." }] }] },
    { question: "Did Session 2 Paper 1 run on 8 April in both shifts?", answer: [{ type: "paragraph", children: [{ text: "No. The official 2026 record identifies 8 April Paper 1 as Shift 2 only." }] }] },
  ],
  sourceRefs: ["nta-jee-main-s1-application-2026", "nta-jee-main-s2-application-2026", "nta-jee-main-result-notice-2026"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main Exam Dates 2026: Session 1 & 2 Official Timeline | Rank Sarthi",
    description: "See the verified JEE Main 2026 Session 1 and Session 2 timeline with official NTA source records. Unannounced 2027 dates remain clearly marked.",
    ogTitle: "JEE Main 2026 Official Session Timeline",
    ogDescription: "Verified NTA milestones with 2027 left unannounced.",
    ogType: "article",
  },
};
