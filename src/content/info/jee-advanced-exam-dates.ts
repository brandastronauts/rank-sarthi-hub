import type { InfoPageContent } from "../types";

/**
 * /jee/jee-advanced/exam-dates — official Advanced cycle timeline (J01).
 * The Advanced timeline is built independently: it has no sessions and no
 * shifts, only a single examination day with Paper 1 and Paper 2.
 */

export const jeeAdvancedExamDates: InfoPageContent = {
  url: "/jee/jee-advanced/exam-dates",
  platform: "jee",
  slug: "exam-dates",
  exam: "JEE Advanced",
  title: "JEE Advanced Exam Dates: Official 2026 Timeline",
  eyebrow: "Official timeline",
  intent: "See the official Advanced cycle milestones without Main session semantics",
  chips: ["Official JEE Advanced", "Single exam day", "No inferred 2027 dates"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "JEE Advanced 2026 was organised by IIT Roorkee and held on 17 May 2026, with Paper 1 from 09:00 to 12:00 IST and Paper 2 from 14:30 to 17:30 IST. The official 2027 schedule was not found on the owning channel checked on 11 September 2026." }] },
    { type: "note", tone: "source", children: [{ text: "Advanced has no Session 1, Session 2, Shift 1 or Shift 2. Those belong to JEE Main only." }] },
  ],
  freshness: { heading: "Official schedule status", recordIds: ["jee-advanced-2027-schedule-status"], note: "Daily checking during an active cycle; weekly or lower after closure." },
  blocks: [
    {
      kind: "table",
      id: "adv-2027-status",
      heading: "JEE Advanced 2027 official status",
      intro: "No organiser, date or threshold is inferred for an unannounced cycle.",
      columns: ["Milestone", "Value", "Status"],
      rows: [
        ["Organising authority / cycle site", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Registration", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Admit card", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Examination", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Candidate responses", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Provisional answer key", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Final answer key", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
        ["Result", "Not officially announced", "NOT_OFFICIALLY_ANNOUNCED"],
      ],
      jump: true,
    },
    {
      kind: "table",
      id: "adv-2026-timeline",
      heading: "JEE Advanced 2026 official milestones",
      intro: "Organising institute: IIT Roorkee. Examination: 17 May 2026.",
      columns: ["Milestone", "Official date and time", "Status", "Authority"],
      rows: [
        ["Registration opens - Main-qualified candidates", "2026-04-23 10:00 IST", "COMPLETED", "IIT Roorkee"],
        ["Registration effective deadline", "2026-05-05 23:59 IST", "COMPLETED", "IIT Roorkee"],
        ["Admit card availability", "2026-05-11 10:00 IST to 2026-05-17 14:30 IST", "COMPLETED", "IIT Roorkee"],
        ["Examination", "2026-05-17 09:00 IST to 2026-05-17 17:30 IST", "COMPLETED", "IIT Roorkee"],
        ["Candidate responses", "2026-05-21 17:00 IST", "PUBLISHED", "IIT Roorkee"],
        ["Provisional answer keys", "2026-05-25 10:00 IST", "PUBLISHED", "IIT Roorkee"],
        ["Answer-key feedback window", "2026-05-25 10:00 IST to 2026-05-26 17:00 IST", "COMPLETED", "IIT Roorkee"],
        ["Final answer keys and result", "2026-06-01 02:45 IST", "PUBLISHED", "IIT Roorkee"],
      ],
      note: "Registration originally closed on 2 May 2026 at 23:59 IST and was later officially extended to 5 May 2026 at 23:59 IST, which is the effective deadline shown.",
      jump: true,
    },
    {
      kind: "prose",
      id: "adv-dates-scheduled-actual",
      heading: "Scheduled time and actual posting time",
      concepts: [
        {
          id: "adv-dates-scheduled-actual-body",
          title: "Scheduled time and actual posting time",
          body: [
            { type: "paragraph", children: [{ text: "The official important-dates page scheduled provisional keys and the final key and result for 10:00 IST. The official homepage recorded the provisional files as posted at 09:40 IST on 25 May 2026 and the final files at 02:45 IST on 1 June 2026. Both official records are preserved rather than normalised into one." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "up", description: "Return to the Advanced hub" },
    { label: "Advanced Papers", url: "/jee/jee-advanced/previous-year-papers", relation: "related", description: "Open the official 2026 papers" },
    { label: "Advanced Answer Key", url: "/jee/jee-advanced/answer-key", relation: "related", description: "Open the official keys" },
    { label: "Advanced Cutoff", url: "/jee/jee-advanced/cutoff", relation: "related", description: "See the rank-list qualifying criteria" },
    { label: "JEE Main Exam Dates", url: "/jee/exam-dates", relation: "related", description: "The Main session timeline is separate" },
  ],
  faqs: [
    { question: "Who organised JEE Advanced 2026?", answer: [{ type: "paragraph", children: [{ text: "IIT Roorkee, according to the official 2026 cycle channel." }] }] },
    { question: "When is JEE Advanced 2027?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced. No organiser or date is inferred." }] }] },
  ],
  sourceRefs: ["jee-advanced-important-dates-2026", "jee-advanced-home-2026"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Advanced Exam Dates 2026: Official Timeline | Rank Sarthi",
    description: "See the verified JEE Advanced 2026 registration, admit card, exam, response, answer-key and result timeline, with 2027 unknowns kept unguessed.",
    ogTitle: "JEE Advanced 2026 Official Timeline",
    ogDescription: "Registration through result, with scheduled and actual posting times preserved.",
    ogType: "article",
  },
};
