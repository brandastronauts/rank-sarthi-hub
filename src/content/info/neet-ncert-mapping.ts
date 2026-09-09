import type { InfoPageContent } from "../types";

/**
 * NCERT mapping methodology: how Rank Sarthi connects the official NEET
 * syllabus, NCERT Biology concepts, Rank Sarthi learning routes and verified
 * practice/evidence, without claiming an exhaustive live line-level mapper.
 * Transcribed from the approved production copy in
 * "Rank Sarthi NEET N01 Foundation and Biology Production Package"
 * (production date 9 September 2026), Record N01-03.
 */
export const neetNcertMapping: InfoPageContent = {
  url: "/neet/ncert-mapping",
  platform: "neet",
  slug: "ncert-mapping",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "How Rank Sarthi Maps the NEET Syllabus to NCERT Biology",
  eyebrow: "NCERT Mapping",
  intent: "Explain the syllabus-to-NCERT-to-route mapping methodology and its evidence boundaries",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Rank Sarthi's safe NCERT mapping model starts with the current official NEET syllabus, identifies the relevant NCERT Biology chapter/concept area, routes the student to the matching Rank Sarthi learning page, and attaches practice or evidence only where it is verified. This page does not claim that every NEET PYQ is already mapped to an exact NCERT line or page number in a live product.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "prose",
      id: "four-layer-mapping-model",
      heading: "The four-layer mapping model",
      concepts: [
        {
          id: "layer-1",
          title: "Layer 1: Official syllabus boundary",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Start from the current NMC/NTA NEET syllabus. This determines whether a topic is explicitly current, part of a merged unit, only a contextual umbrella, or not currently listed.",
                },
              ],
            },
          ],
        },
        {
          id: "layer-2",
          title: "Layer 2: NCERT relationship",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Locate the relevant NCERT Biology class/book/chapter/section or concept area. The relationship is stated at the most stable level that can be verified. A chapter/concept reference is preferable to a page number when pagination may vary across editions or reprints.",
                },
              ],
            },
          ],
        },
        {
          id: "layer-3",
          title: "Layer 3: Rank Sarthi learning ownership",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Map the academic concept to the single frozen route that owns the intent. Umbrella routes route and compare rather than duplicate focused child pages. For example, " },
                { text: "Genetics", href: "/neet/biology/genetics" },
                { text: " is a broad learning map, while more focused child pages own deeper distinctions within it." },
              ],
            },
          ],
        },
        {
          id: "layer-4",
          title: "Layer 4: Practice/evidence",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Attach a PYQ, chapter test, diagnostic signal or other evidence only when the exact asset is available, source/rights are clear and the relationship is verified. No \"asked X times\" badge, exact-line claim or inferred question frequency is generated from an empty evidence field.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "granularity-levels",
      heading: "Granularity levels",
      columns: ["Level", "Allowed mapping claim", "Evidence required", "Default if evidence is absent"],
      rows: [
        ["A", "Official syllabus unit/topic to Rank Sarthi route", "Current official syllabus", "Publish after SME review"],
        ["B", "Official syllabus topic to NCERT chapter/concept", "Official NCERT + SME review", "Publish after verification"],
        ["C", "NCERT section/heading to Rank Sarthi concept block", "Edition-controlled NCERT source", "Hold until verified"],
        ["D", "Exact page/line to PYQ/question", "Edition + rights + verified question evidence", "Hide module"],
      ],
      note: "This ladder gives a shared understanding of which claims are official, which are editorial mappings and which are product-evidence dependent.",
    },
    {
      kind: "prose",
      id: "live-capability-disclosure",
      heading: "Methodology available vs live product capability",
      concepts: [
        {
          id: "capability-split",
          title: "Two separate labels",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Methodology available: ", bold: true },
                { text: "Rank Sarthi content can be organised using the mapping framework above." },
              ],
            },
            {
              type: "paragraph",
              children: [
                { text: "Live product capability: ", bold: true },
                { text: "only the granularity that is actually implemented and evidenced in the current product is shown. If no product evidence is supplied, the product walkthrough module remains hidden." },
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [{ text: "This separation prevents an editorial methodology from becoming an unsupported software claim." }],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "edition-safe-approach",
      heading: "Edition-safe approach",
      concepts: [
        {
          id: "edition-safety",
          title: "Edition-safe approach",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "NCERT textbook reprints can make absolute page-number advice fragile. Rank Sarthi prefers chapter name, concept, diagram topic, table topic, terminology or section heading as the durable reference. The companion " },
                { text: "NCERT important areas", href: "/neet/ncert-important-pages" },
                { text: " page follows this exact principle." },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "ncert-copyright-rule",
      heading: "NCERT copyright and original-explanation rule",
      concepts: [
        {
          id: "copyright-rule",
          title: "NCERT remains the textbook authority",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "This methodology relies on official NCERT Biology Class XI/XII sources. Rank Sarthi paraphrases concepts, creates original diagrams and does not republish long textbook content. NCERT remains the textbook authority; Rank Sarthi remains the explanatory and routing layer.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET hub", url: "/neet", relation: "up", description: "Return to the NEET hub" },
    { label: "NEET syllabus", url: "/neet/syllabus", relation: "prerequisite", description: "Confirm current official scope" },
    { label: "Biology syllabus", url: "/neet/syllabus/biology", relation: "prerequisite", description: "Confirm current official Biology scope" },
    { label: "NCERT important areas", url: "/neet/ncert-important-pages", relation: "related", description: "Edition-safe review utility" },
    { label: "Biology hub", url: "/neet/biology", relation: "forward", description: "Enter Biology learning routes" },
    { label: "Genetics", url: "/neet/biology/genetics", relation: "forward", description: "Example mapped route" },
    { label: "Human Physiology", url: "/neet/biology/human-physiology", relation: "forward", description: "Example mapped route" },
    { label: "Cell Biology", url: "/neet/biology/cell-biology", relation: "forward", description: "Example mapped route" },
  ],
  faqs: [
    {
      question: "Does Rank Sarthi map every NEET question to an exact NCERT line?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. Exact line/page mapping is shown only when an edition-controlled, rights-safe and verified evidence layer exists." },
          ],
        },
      ],
    },
    {
      question: "What is the safest NEET-to-NCERT mapping order?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Current official syllabus, then NCERT chapter/concept, then Rank Sarthi learning route, then verified practice/evidence." },
          ],
        },
      ],
    },
    {
      question: "Why not use universal NCERT page numbers?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Page-number stability can vary by edition/reprint, so chapter, concept, section heading, diagram topic and terminology are safer anchors unless the edition is controlled.",
            },
          ],
        },
      ],
    },
    {
      question: "Is a Rank Sarthi route name official syllabus wording?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Not necessarily. Official syllabus wording and editorial navigation groups are shown separately on this page." }],
        },
      ],
    },
  ],
  sourceRefs: ["nmc-neet-ug-2026-syllabus", "ncert-biology-11-contents", "ncert-biology-12-contents"],
  sourceNote: "Methodology is aligned to the verified NEET UG 2026 syllabus and current official NCERT Biology publications. No 2027 mapping is claimed.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: not yet recorded",
    "Sources checked: 9 September 2026",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "NEET NCERT Mapping: Syllabus to Biology Concepts | Rank Sarthi",
    description: "See how Rank Sarthi maps the official NEET syllabus to NCERT Biology concepts and learning routes without inventing line-level coverage or page-number certainty.",
    ogTitle: "How Rank Sarthi Maps the NEET Syllabus to NCERT Biology",
    ogDescription: "A methodology-first explanation of syllabus-to-NCERT-to-route mapping, with evidence gates for exact-line claims.",
    ogType: "article",
  },
};
