import type { PlatformData } from "./types";

/**
 * Platform route safety: the generic /$platform route resolves against this
 * map. A platform whose buildStatus is not "built" returns notFound() so a
 * thin /jee or /neet page can never appear just because the route exists.
 *
 * Adding a platform page is a DATA change: complete the record below, flip
 * buildStatus to "built", and update the URL registry record. No new layout.
 */
export const platforms: Record<string, PlatformData> = {
  nda: {
    slug: "nda",
    productName: "NDARankUp",
    examName: "NDA & NA (UPSC)",
    buildStatus: "built",
    accent: "nda",
    tagline: "The defence-track platform built around selection, not just marks.",
    deck: "NDARankUp reads the written exam the way selection does — Mathematics and the General Ability Test together, with attempt behaviour treated as evidence, not noise.",
    intro: [
      {
        type: "paragraph",
        children: [
          {
            text: "NDARankUp treats the written exam and the SSB pathway as one selection journey, and diagnoses where an aspirant is actually losing ground — concept, execution or strategy.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Most defence aspirants know their score. Very few know whether the score came from weak concepts, avoidable execution errors or a poor attempt strategy. That distinction is what NDARankUp exists to make visible.",
          },
        ],
      },
    ],
    subjects: ["Mathematics", "General Ability Test"],

    papers: [
      {
        id: "mathematics",
        name: "Mathematics",
        covers: ["Algebra", "Trigonometry", "Analytical geometry", "Calculus", "Vectors", "Statistics & probability"],
        note: "Diagnosed by chapter, question type and error type rather than by paper score alone.",
      },
      {
        id: "gat",
        name: "General Ability Test",
        covers: ["English", "General knowledge", "Physics", "Chemistry", "General science", "History", "Geography", "Current events"],
        note: "GAT is read as several distinct abilities, because a GK gap and an English gap are not the same problem.",
      },
    ],

    diagnosticLenses: [
      {
        title: "Concept",
        body: "Which chapters and idea-clusters the marks are actually leaking from — separated from questions you knew but got wrong.",
      },
      {
        title: "Execution",
        body: "Calculation slips, misread stems, unit and sign errors, and the questions abandoned after too much time.",
      },
      {
        title: "Strategy",
        body: "Attempt order, time distribution across Mathematics and GAT, and whether your selection of questions is helping or hurting the total.",
      },
    ],

    pathway: [
      {
        id: "written",
        stage: "Written examination",
        body: "Two papers — Mathematics and the General Ability Test. This is the stage NDARankUp diagnoses in depth today.",
      },
      {
        id: "ssb",
        stage: "SSB interview",
        body: "The Services Selection Board stage assesses officer-like qualities across screening, psychological testing, group tasks and a personal interview.",
      },
      {
        id: "medical-merit",
        stage: "Medical and merit",
        body: "Recommended candidates go through a medical examination, and the final merit list follows the selection process laid down in the official notification.",
      },
    ],

    relatedUrls: ["/nda/syllabus", "/nda/nda-exam", "/nda/selection-process", "/nda/ssb-interview", "/nda/mock-tests"],

    faqs: [
      {
        q: "How is NDARankUp different from an NDA mock-test app?",
        a: "A mock-test app returns a score. NDARankUp explains the score — which chapters cost you marks, which mistakes were avoidable and whether your attempt strategy across Mathematics and GAT is working for or against you.",
      },
      {
        q: "Does NDARankUp cover both Mathematics and the General Ability Test?",
        a: "Yes. Both papers are analysed, and GAT is broken into its component abilities rather than treated as a single subject.",
      },
      {
        q: "Does NDARankUp prepare me for the SSB interview?",
        a: "NDARankUp's diagnostic depth today is on the written examination. The SSB pathway is presented so aspirants understand the full selection journey; SSB preparation modules are being built.",
      },
      {
        q: "Can I use NDARankUp alongside my defence academy coaching?",
        a: "Yes. It is pattern-based and independent of any coaching schedule, so it works as a diagnostic layer above whatever you are already studying.",
      },
    ],

    sourceStatus:
      "Exam-structure content on this page is written in stable, non-cycle wording. Dates, eligibility, vacancies, marks and cutoffs are deliberately not published here until they are verified against the current official UPSC notification.",
  },

  jee: {
    slug: "jee",
    productName: "JeeRankUp",
    examName: "JEE Main & Advanced",
    buildStatus: "planned",
    accent: "jee",
    tagline: "Concept, execution and strategy diagnosis for JEE aspirants.",
    intro: [],
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },

  neet: {
    slug: "neet",
    productName: "NeetRankUp",
    examName: "NEET (UG)",
    buildStatus: "planned",
    accent: "neet",
    tagline: "NCERT-anchored diagnosis for NEET aspirants.",
    intro: [],
    subjects: ["Physics", "Chemistry", "Biology"],
  },
};

export function getPlatform(slug: string): PlatformData | undefined {
  const platform = platforms[slug];
  return platform && platform.buildStatus === "built" ? platform : undefined;
}

/** Platforms whose page is actually built — used to drive navigation. */
export function builtPlatforms(): PlatformData[] {
  return Object.values(platforms).filter((p) => p.buildStatus === "built");
}
