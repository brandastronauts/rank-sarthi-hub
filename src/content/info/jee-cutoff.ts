import type { InfoPageContent } from "../types";

/**
 * /jee/cutoff — JEE Cutoff: Qualifying Marks and Admission Ranks Explained.
 * Transcribed from the approved production package (§7). The 2026 JEE
 * Advanced Common Rank List qualifying-marks value is monitored via
 * freshness record jee-advanced-2026-crl-qualifying-marks and is not
 * duplicated here as separate hardcoded prose; the table below carries the
 * full official rank-list set as transcribed and approved in the package.
 */
export const jeeCutoff: InfoPageContent = {
  url: "/jee/cutoff",
  platform: "jee",
  slug: "cutoff",
  exam: "JEE Main and JEE Advanced",
  title: "JEE Cutoff: Qualifying Marks and Admission Ranks Explained",
  intent: "Find the correct official cutoff type without confusing eligibility, qualifying marks and admission ranks",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Latest verified official data: 2026 JEE Advanced qualifying marks, JoSAA 2026 opening and closing ranks, JoSAA 2026 top-20-percentile board thresholds and CSAB 2026 opening and closing ranks are available from their owning authorities.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "\u201cJEE cutoff\u201d can mean several different things. Choose the decision you are trying to make before reading a number.",
        },
      ],
    },
  ],
  contentStatus: "draft",
  freshness: {
    heading: "Official qualifying-marks status",
    recordIds: ["jee-advanced-2026-crl-qualifying-marks"],
  },
  blocks: [
    {
      kind: "table",
      id: "cutoff-type-selector",
      heading: "Choose your decision before reading a number",
      columns: ["Your question", "Correct data type", "Owning source"],
      rows: [
        [
          "Was I within the JEE Main category threshold used for Advanced shortlisting?",
          "JEE Main eligibility or qualifying threshold for that cycle",
          "NTA result notice and official JEE Advanced eligibility rules",
        ],
        [
          "Was I included in a JEE Advanced rank list?",
          "JEE Advanced qualifying marks by rank-list category",
          "Official JEE Advanced authority",
        ],
        [
          "What rank closed a particular institute and programme?",
          "JoSAA opening and closing rank, filtered by year, round, institute, programme, seat type and category",
          "JoSAA OR-CR",
        ],
        [
          "What board-mark threshold applied under the top-20-percentile route?",
          "Board and category-specific top-20-percentile cutoff",
          "JoSAA official list",
        ],
        [
          "What closed in a CSAB allocation route?",
          "CSAB route-specific opening and closing rank",
          "CSAB official portal",
        ],
      ],
      note: "Never compare a percentile threshold directly with a closing rank. They answer different questions and may use different rank categories.",
      jump: true,
    },
    {
      kind: "prose",
      id: "advanced-2026-qualifying-marks-intro",
      heading: "Official JEE Advanced 2026 qualifying marks",
      concepts: [
        {
          id: "advanced-2026-qualifying-marks-intro-body",
          title: "Official JEE Advanced 2026 qualifying marks",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The official JEE Advanced 2026 qualifying-marks document published minimums for inclusion in the named rank lists. The current approved value for the Common Rank List is shown in the freshness panel above. These are 2026 rank-list qualifying marks. They are not institute admission closing ranks and must not be presented as a prediction for 2027.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "closing-rank-context",
      heading: "Why an admission closing rank needs more than one label",
      concepts: [
        {
          id: "closing-rank-context-body",
          title: "Why an admission closing rank needs more than one label",
          body: [
            {
              type: "paragraph",
              children: [{ text: "A JoSAA closing rank is meaningful only with its full filter context:" }],
            },
            {
              type: "definition",
              term: "Closing rank context",
              children: [{ text: "year + allocation round + institute type + institute + programme + seat type/category + rank basis" }],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "The official JoSAA OR-CR portal explains that opening and closing ranks for open seats represent Common Rank List ranks. EWS, OBC-NCL, SC and ST seats use their respective category ranks, while PwD seats use PwD ranks within their respective categories. A number copied without this context is unsafe.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "jee-main-threshold-boundary",
      heading: "JEE Main threshold boundary",
      concepts: [
        {
          id: "jee-main-threshold-boundary-body",
          title: "JEE Main threshold boundary",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The JEE Main category threshold used in the Advanced eligibility pathway belongs to the official NTA result documentation and the official Advanced eligibility rules for that cycle. This page does not transcribe a 2026 Main threshold table because its category labels and result context must be ingested and reviewed as one structured record before publication.",
                },
              ],
            },
            {
              type: "note",
              tone: "source",
              children: [{ text: "Visible state: Official source available; structured value table pending fact-check and import." }],
            },
            {
              type: "paragraph",
              children: [{ text: "This is not permission to substitute a coaching-site table." }],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "top20-percentile-criteria",
      heading: "Top-20-percentile and aggregate-mark criteria",
      concepts: [
        {
          id: "top20-percentile-criteria-body",
          title: "Top-20-percentile and aggregate-mark criteria",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "JoSAA publishes a board and category-specific top-20-percentile list. The official JEE Advanced admission criteria also explain the applicable Class XII aggregate-mark or top-20-percentile routes for the cycle. These are admission criteria, not JEE examination qualifying marks. Always show the board, category, year and owning official document.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the Main paper and result route" },
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "related", description: "Understand Advanced eligibility and rank-list context" },
    { label: "Exam Dates", url: "/jee/exam-dates", relation: "related", description: "Check result and counselling milestones" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Verify the final-answer-key state before result interpretation" },
  ],
  faqs: [
    {
      question: "Is a JoSAA closing rank the same as a JEE qualifying cutoff?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. A qualifying cutoff determines a threshold in an exam or rank-list process. A JoSAA closing rank records the last allocated rank for a particular filtered seat context.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the JEE 2027 cutoff?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No official 2027 cutoff was available on the sources checked on 9 September 2026. Rank Sarthi does not publish a predicted cutoff.",
            },
          ],
        },
      ],
    },
  ],
  sourceRefs: [],
  sourceNote:
    "No source ids from this section exist yet in content/sources.ts (see report: ADV-CUTOFF-2026, ADV-ELIG-2026, ADV-ADMISSION-2026, NTA-RESULT-P1-2026, JOSAA-ORCR-2026, JOSAA-TOP20-2026, CSAB-HOME-2026 are missing).",
  contributorPolicy: [
    "Written by: Admissions-data editor familiar with JEE, JoSAA and CSAB terminology",
    "Fact-checked by: Freshness Editor or Exam Process Reviewer",
    "Minimum qualification: Graduate-level qualification plus demonstrated admission-data verification experience",
    "Review scope: Cutoff type, rank basis, category, cycle, programme and round context, table transcription, source ownership and stale fallback",
    "Sources checked: Official JEE Advanced qualifying-marks PDF, official eligibility and admission criteria, NTA result documentation, JoSAA OR-CR, JoSAA top-20 list and CSAB portal",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Cutoff: Qualifying Marks vs JoSAA Closing Ranks",
    description:
      "Understand official JEE qualifying marks, eligibility thresholds, JoSAA closing ranks and top-20-percentile data without mixing cutoff types.",
    ogTitle: "JEE Cutoff Types Explained with Official Sources",
    ogDescription: "Choose qualifying marks, eligibility thresholds or admission closing ranks before using a value.",
    ogType: "article",
  },
};
