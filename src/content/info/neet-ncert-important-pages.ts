import type { InfoPageContent } from "../types";

/**
 * Edition-safe NCERT "important areas" utility. Deliberately avoids
 * manufacturing a universal NCERT page-number list; uses chapter/concept/
 * diagram/table/terminology/section-heading anchors instead.
 * Transcribed from the approved production copy in
 * "Rank Sarthi NEET N01 Foundation and Biology Production Package"
 * (production date 9 September 2026), Record N01-07.
 */
export const neetNcertImportantPages: InfoPageContent = {
  url: "/neet/ncert-important-pages",
  platform: "neet",
  slug: "ncert-important-pages",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "Important NCERT Biology Areas for NEET: Chapters, Concepts, Diagrams and Terminology",
  eyebrow: "NCERT Important Areas",
  intent: "Review NEET Biology through edition-safe NCERT anchors instead of unverifiable universal page numbers",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "There is no safe universal NCERT page-number list that Rank Sarthi can present as timeless truth across editions and reprints. The reliable approach is to identify current-syllabus chapters, concepts, diagram topics, tables, terminology and section headings, then show an exact page number only when the NCERT edition/reprint is controlled and verified.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "prose",
      id: "what-important-means",
      heading: "What \"important\" means on this page",
      concepts: [
        {
          id: "important-definition",
          title: "What \"important\" means here",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "\"Important\" does not mean \"NTA guarantees a question,\" \"asked every year\" or \"high weightage\" unless a separate verified evidence analysis supports that statement. On this page, an area can be surfaced because it is:",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "explicitly inside the current official syllabus" }],
                [{ text: "conceptually foundational to another current topic" }],
                [{ text: "a high-confusion distinction that merits revision" }],
                [{ text: "a diagram/table/terminology area that requires precise retrieval" }],
                [{ text: "a section an SME has flagged for review quality, without implying question frequency" }],
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "edition-safe-reference-types",
      heading: "Edition-safe reference types",
      columns: ["Reference type", "Safe public form", "What stays hidden without evidence"],
      rows: [
        ["Chapter", "Official NCERT chapter name", "None if verified"],
        ["Concept", "Paraphrased concept label", "Exact wording unless necessary/rights-safe"],
        ["Diagram", "Original diagram topic + NCERT chapter reference", "Copied NCERT artwork"],
        ["Table", "Topic/relationship described in original table", "Reproduced copyrighted table"],
        ["Terminology", "Reviewed term pair/definition prompt", "Long verbatim text"],
        ["Section heading", "Verified heading or paraphrased section anchor", "Page number if edition not controlled"],
        ["Exact page", "Edition + reprint + page", "Hidden until controlled"],
      ],
    },
    {
      kind: "prose",
      id: "review-workflow",
      heading: "Review workflow",
      concepts: [
        {
          id: "workflow-steps",
          title: "Review workflow",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Filter to current official scope or an explicitly allowed contextual prerequisite." }],
                [{ text: "Identify the official NCERT book/chapter." }],
                [{ text: "Create a paraphrased retrieval prompt or original visual." }],
                [{ text: "Verify biological accuracy with SME." }],
                [{ text: "Add an exact page only if the edition/reprint identity and pagination are stored." }],
                [{ text: "Never convert the page into a copied NCERT repository." }],
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "example-structure",
      heading: "Example utility structure without fake page numbers",
      concepts: [
        {
          id: "example-records",
          title: "Example records",
          body: [
            {
              type: "list",
              items: [
                [{ text: "Class XI Biology -> Cell: The Unit of Life -> organelle relationship check -> original labelled concept diagram required." }],
                [{ text: "Class XI Biology -> Biomolecules -> terminology/comparison retrieval -> original distinction table required." }],
                [{ text: "Class XII Biology -> Principles of Inheritance and Variation -> inheritance vocabulary and relationship check -> route to Genetics umbrella and focused child." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [{ text: "These are navigation/revision structures, not claims about question frequency." }],
            },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "edition-safe-review-index",
      heading: "Edition-Safe NCERT Review Index",
      intro: "The exact-page column displays \"Not edition-verified\" until controlled data exists.",
      columns: ["Class", "NCERT chapter", "Current syllabus unit", "Rank Sarthi route", "Review object", "Exact page available?"],
      rows: [
        ["XI", "Cell: The Unit of Life", "Cell Structure and Function", "/neet/biology/cell-biology", "Organelle relationship check", "Not edition-verified"],
        ["XI", "Biomolecules", "Cell Structure and Function", "/neet/biology/cell-biology", "Terminology/comparison retrieval", "Not edition-verified"],
        ["XII", "Principles of Inheritance and Variation", "Genetics and Evolution", "/neet/biology/genetics", "Inheritance vocabulary and relationship check", "Not edition-verified"],
        ["XI/XII", "Human physiology chapters", "Human Physiology", "/neet/biology/human-physiology", "System-level process and diagram check", "Not edition-verified"],
      ],
      note: "Edition and reprint identity are not yet stored as controlled data; exact page numbers remain hidden until that evidence exists.",
    },
    {
      kind: "prose",
      id: "ncert-source-note",
      heading: "NCERT relationship and copyright note",
      concepts: [
        {
          id: "source-note",
          title: "NCERT relationship and copyright note",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "This page relies directly on official NCERT/ePathshala sources. When exact page data is ever introduced, the book/reprint used will be stated. Original explanatory assets replace copied diagrams or long passages.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "Biology hub", url: "/neet/biology", relation: "up", description: "Return to the Biology hub" },
    { label: "NEET hub", url: "/neet", relation: "up", description: "Return to the NEET hub" },
    { label: "Biology syllabus", url: "/neet/syllabus/biology", relation: "prerequisite", description: "Confirm current official Biology scope" },
    { label: "NCERT mapping methodology", url: "/neet/ncert-mapping", relation: "prerequisite", description: "Understand the mapping model" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "related", description: "Example review area" },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "related", description: "Example review area" },
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "related", description: "Example review area" },
  ],
  faqs: [
    {
      question: "Is there one universal list of important NCERT Biology page numbers for NEET?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rank Sarthi does not present one as universal truth. Page numbers can be edition/reprint dependent, so the default reference is chapter, concept, diagram topic, table topic, terminology or section heading.",
            },
          ],
        },
      ],
    },
    {
      question: "When can Rank Sarthi show an exact NCERT page number?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "When the class, book, edition/reprint and page have been verified and stored as controlled data." }],
        },
      ],
    },
    {
      question: "Does \"important\" mean high weightage?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Not on this page. It means a current-syllabus or review-critical area unless separate evidence explicitly supports a frequency claim." },
          ],
        },
      ],
    },
  ],
  sourceRefs: ["ncert-biology-11-contents", "ncert-biology-12-contents", "ncert-exemplar-index", "nmc-neet-ug-2026-syllabus"],
  sourceNote: "Current official Biology syllabus is used only to filter scope. Exact page-number data remains hidden until edition-controlled evidence exists.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: not yet recorded",
    "Sources checked: 9 September 2026",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "Important NCERT Biology Areas for NEET, Without Fake Page Numbers",
    description: "Review NEET Biology through edition-safe NCERT chapter, concept, diagram, table and terminology anchors. Exact page numbers stay hidden until verified by edition.",
    ogTitle: "Important NCERT Biology Areas for NEET",
    ogDescription: "Edition-safe chapter, concept, diagram and terminology anchors for NEET Biology review, with no invented page numbers.",
    ogType: "article",
  },
};
