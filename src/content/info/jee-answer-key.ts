import type { InfoPageContent } from "../types";

/**
 * /jee/answer-key — official JEE Main answer-key states (J01).
 * Session 1 and Session 2 stay separate, and a provisional challenge notice is
 * never presented as a final key or as a direct key PDF.
 */

export const jeeAnswerKey: InfoPageContent = {
  url: "/jee/answer-key",
  platform: "jee",
  slug: "answer-key",
  exam: "JEE Main",
  title: "JEE Main Answer Key: Official Session-Wise Provisional and Final States",
  eyebrow: "Official answer keys",
  intent: "Open the correct official key without confusing session, provisional and final states",
  chips: ["Official NTA", "Provisional vs final separated", "No guessed PDF links"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "Official final Paper 1 answer keys are verified for both JEE Main 2026 sessions: 16 February 2026 for Session 1 and 20 April 2026 for Session 2. The provisional stage is represented through the official NTA challenge notices of 4 February and 11 April 2026 rather than a claimed direct key PDF." }] },
    { type: "note", tone: "source", children: [{ text: "A recorded response sheet and an answer-key challenge notice are not final answer keys. Each is labelled for what it is." }] },
  ],
  freshness: { heading: "Official key status", recordIds: ["jee-main-2026-s1-p1-final-key", "jee-main-2026-s2-p1-final-key"], note: "Daily checking while a key is awaited; the published value moves only after human review." },
  blocks: [
    {
      kind: "table",
      id: "main-key-states",
      heading: "2026 key timeline by session",
      intro: "Latest completed cycle first.",
      columns: ["Session", "Provisional key / challenge notice", "Challenge closes", "Final Paper 1 key", "Source owner"],
      rows: [
        ["Session 1", "4 Feb 2026", "6 Feb 2026, 23:50 IST", "16 Feb 2026", "National Testing Agency"],
        ["Session 2", "11 Apr 2026", "13 Apr 2026, 23:50 IST", "20 Apr 2026", "National Testing Agency"],
        ["2027", "Not officially announced", "Not officially announced", "Not officially announced", "National Testing Agency"],
      ],
      jump: true,
    },
    {
      kind: "resources",
      id: "main-keys-2026",
      heading: "JEE Main 2026 official answer-key resources",
      intro: "Each session keeps its own provisional and final records.",
      rows: [
        {
          id: "jee-main-2026-session1-keys",
          eventLabel: "JEE Main 2026 Session 1 — Paper 1 B.E./B.Tech",
          eventDate: "Paper 1 exams 21, 22, 23, 24, 28 Jan 2026",
          cells: [
            { label: "Provisional key workflow", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key and challenge notice", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The provisional keys and recorded responses were exposed inside the NTA candidate workflow. This notice is not a direct answer-key PDF and is not a final key.", detail: "Challenge notice published 4 Feb 2026; challenge window closed 6 Feb 2026, 23:50 IST" }
            ] },
            { label: "Final Answer Key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · used for result compilation" }
            ] },
            { label: "Recorded responses", actions: [
              { provenance: "NOT_AVAILABLE", label: "Recorded response sheet", cta: "Candidate-login resource, not a public key", detail: "A recorded response sheet is a candidate's own answers, never an answer key." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-session2-keys",
          eventLabel: "JEE Main 2026 Session 2 — Paper 1 B.E./B.Tech",
          eventDate: "Paper 1 exams 2, 4, 5, 6 Apr and 8 Apr 2026",
          cells: [
            { label: "Provisional key workflow", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The provisional keys and recorded responses were exposed inside the NTA candidate workflow. This notice is not a direct answer-key PDF and is not a final key.", detail: "Challenge notice published 11 Apr 2026; challenge window closed 13 Apr 2026, 23:50 IST" }
            ] },
            { label: "Final Answer Key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · used for result compilation" }
            ] },
            { label: "Recorded responses", actions: [
              { provenance: "NOT_AVAILABLE", label: "Recorded response sheet", cta: "Candidate-login resource, not a public key", detail: "A recorded response sheet is a candidate's own answers, never an answer key." }
            ] },
          ],
        },
      ],
      note: "Both final-key PDFs are session-level documents that contain the date and shift specific records.",
      jump: true,
    },
    {
      kind: "prose",
      id: "main-key-archive",
      heading: "How this archive behaves",
      concepts: [
        {
          id: "main-key-archive-body",
          title: "How this archive behaves",
          body: [
            { type: "paragraph", children: [{ text: "Records are archived by year and session. A final key never overwrites the provisional record of the same session, because the two describe different stages of the official process." }] },
            { type: "note", tone: "source", children: [{ text: "No key URL is ever guessed from a pattern, and no coaching solution is labelled as an official key." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "Previous Year Papers", url: "/jee/previous-year-papers", relation: "related", description: "Match a key with its paper event" },
    { label: "Exam Dates", url: "/jee/exam-dates", relation: "related", description: "See the full official session timeline" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "See the official Advanced-eligibility NTA Score threshold" },
    { label: "Paper Analysis", url: "/jee/analysis", relation: "related", description: "See the evidence state before any analysis claim" },
  ],
  faqs: [
    { question: "Is the challenge notice the answer key?", answer: [{ type: "paragraph", children: [{ text: "No. The notice announces that provisional keys and recorded responses are available in the candidate workflow and states the challenge window. The final key is a separate official document." }] }] },
    { question: "When is the 2027 key published?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced. No 2027 answer-key date exists on the official channel checked on 11 September 2026, and none is estimated here." }] }] },
  ],
  sourceRefs: ["nta-jee-main-s1-final-key-2026", "nta-jee-main-s1-prov-notice-2026", "nta-jee-main-s2-final-key-2026", "nta-jee-main-s2-prov-notice-2026"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main Answer Key 2026: Official Session 1 & 2 Keys | Rank Sarthi",
    description: "Open verified official JEE Main 2026 answer-key resources by session, date and shift, with provisional and final states kept separate.",
    ogTitle: "JEE Main 2026 Answer Keys: Provisional and Final",
    ogDescription: "Official NTA key records, with each stage labelled for what it is.",
    ogType: "article",
  },
};
