import type { InfoPageContent } from "../types";

/**
 * /neet/blog — T26 editorial hub, resource-led launch version.
 * Every card points at a real built Rank Sarthi route and carries its real
 * resource type. No invented article URLs, post dates, authors, reading times
 * or thumbnails. Blocked routes (analysis, mock tests, weakness finder, rank
 * predictor) are not surfaced as working destinations.
 */
export const neetBlog: InfoPageContent = {
  url: "/neet/blog",
  platform: "neet",
  slug: "blog",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Blog and Resource Hub",
  eyebrow: "Editorial hub",
  intent: "Find the right NEET resource on Rank Sarthi without hunting through the menu",
  chips: ["Real destinations only", "No predicted data", "Updated with the site"],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "This hub organises what already exists on Rank Sarthi for NEET (UG): official status pages, previous-year paper and answer-key resources, the official syllabus and NCERT mapping, the three subject chapter libraries, and the preparation tools. Each card below is a live page, labelled with what it actually is.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "Nothing here is a dated news post. Where a page depends on an official announcement, the page itself carries its own verification date and source.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "links",
      id: "updates",
      heading: "NEET updates",
      intro: "Cycle-dependent pages that are re-checked against official NTA channels.",
      items: [
        { url: "/neet/exam-dates", label: "NEET exam dates and official timeline", type: "Update", description: "What is officially announced now, separated from the completed cycle." },
        { url: "/neet/cutoff", label: "NEET qualifying cutoffs", type: "Data Resource", description: "Official qualifying percentiles and score ranges only." },
        { url: "/neet/neet-exam", label: "NEET exam overview", type: "Guide", description: "Structure, marking and what the exam actually tests." },
      ],
    },
    {
      kind: "links",
      id: "papers",
      heading: "PYQ and exam resources",
      intro: "Papers and keys with their provenance stated on every file.",
      items: [
        { url: "/neet/previous-year-papers", label: "NEET previous-year papers", type: "Official Resource", description: "Event-separated paper library with source labels." },
        { url: "/neet/answer-key", label: "NEET answer keys", type: "Official Resource", description: "Provisional and final keys kept separate." },
      ],
    },
    {
      kind: "links",
      id: "syllabus",
      heading: "Syllabus and NCERT",
      items: [
        { url: "/neet/syllabus", label: "NEET syllabus", type: "Syllabus", description: "Official scope across all three subjects." },
        { url: "/neet/syllabus/biology", label: "NEET Biology syllabus", type: "Syllabus" },
        { url: "/neet/syllabus/physics", label: "NEET Physics syllabus", type: "Syllabus" },
        { url: "/neet/syllabus/chemistry", label: "NEET Chemistry syllabus", type: "Syllabus" },
        { url: "/neet/ncert-mapping", label: "NEET NCERT mapping", type: "Resource", description: "Which NCERT chapters carry which syllabus units." },
        { url: "/neet/ncert-important-pages", label: "NCERT important pages", type: "Resource" },
      ],
    },
    {
      kind: "links",
      id: "biology",
      heading: "Biology",
      items: [
        { url: "/neet/biology", label: "NEET Biology chapter library", type: "Subject Hub" },
        { url: "/neet/biology/human-physiology", label: "Human Physiology", type: "Resource" },
        { url: "/neet/biology/genetics", label: "Genetics", type: "Resource" },
        { url: "/neet/biology/ecology", label: "Ecology", type: "Resource" },
        { url: "/neet/biology/cell-biology", label: "Cell Biology", type: "Resource" },
        { url: "/neet/biology/plant-physiology", label: "Plant Physiology", type: "Resource" },
      ],
    },
    {
      kind: "links",
      id: "physics",
      heading: "Physics",
      items: [
        { url: "/neet/physics", label: "NEET Physics chapter library", type: "Subject Hub" },
        { url: "/neet/syllabus/physics", label: "Physics official scope", type: "Syllabus" },
      ],
    },
    {
      kind: "links",
      id: "chemistry",
      heading: "Chemistry",
      items: [
        { url: "/neet/chemistry", label: "NEET Chemistry chapter library", type: "Subject Hub" },
        { url: "/neet/syllabus/chemistry", label: "Chemistry official scope", type: "Syllabus" },
      ],
    },
    {
      kind: "links",
      id: "strategy",
      heading: "Preparation strategy",
      items: [
        { url: "/neet/study-plan", label: "NEET study plan builder", type: "Tool", description: "Rule-based framework for your time horizon and revision stage." },
        { url: "/neet/score-calculator", label: "NEET score calculator", type: "Tool", description: "Official +4 / −1 marks calculation out of 720." },
      ],
      note: "Paper analysis, mock tests, the weakness finder and rank prediction are not published yet and are deliberately not linked here.",
    },
  ],
  relatedLinks: [
    { label: "NEET exam dates", url: "/neet/exam-dates", relation: "related" },
    { label: "NEET previous-year papers", url: "/neet/previous-year-papers", relation: "related" },
    { label: "NEET answer keys", url: "/neet/answer-key", relation: "related" },
    { label: "NEET qualifying cutoffs", url: "/neet/cutoff", relation: "related" },
    { label: "NEET syllabus", url: "/neet/syllabus", relation: "related" },
    { label: "NEET Biology chapters", url: "/neet/biology", relation: "related" },
    { label: "NEET Physics chapters", url: "/neet/physics", relation: "related" },
    { label: "NEET Chemistry chapters", url: "/neet/chemistry", relation: "related" },
    { label: "NEET score calculator", url: "/neet/score-calculator", relation: "related" },
    { label: "NEET study plan", url: "/neet/study-plan", relation: "related" },
  ],
  contributorPolicy: [
    "Editorial owner: UNASSIGNED",
    "Hub reviewer: UNASSIGNED",
    "Every card must point at a built Rank Sarthi route; no external or invented destinations.",
  ],
  seo: {
    title: "NEET Blog and Resource Hub | Rank Sarthi",
    description:
      "Every published Rank Sarthi NEET resource in one place: official dates, cutoffs, papers, answer keys, syllabus, NCERT mapping, subject libraries and preparation tools.",
  },
};
