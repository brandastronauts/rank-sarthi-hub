import type { SyllabusContent } from "@/content/types";
import { sources } from "@/content/sources";

/**
 * JEE syllabus — STRUCTURE ONLY.
 *
 * contentStatus: "scaffold". Unit and topic lists are deliberately empty
 * where the official NTA document has not been transcribed and verified by
 * the Content Engine. Nothing here is invented; empty arrays render as
 * headings without fabricated topics, and the page stays noindex.
 */
export const jeeSyllabus: SyllabusContent = {
  exam: "JEE",
  platform: "jee",
  contentStatus: "scaffold",
  title: "JEE Syllabus",
  intro: [
    {
      type: "paragraph",
      children: [
        {
          text: "This page presents the JEE syllabus as structured data — subject, unit, topic and the chapter pages that map to each unit — rather than as one long article. Verified topic lists are transcribed from the official NTA syllabus document by the Rank Sarthi content team.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Verified topic transcription is not loaded yet. Only the syllabus structure and its official source reference are shown, and this page is excluded from search indexing until the verified content is in place.",
        },
      ],
    },
  ],
  officialSource: sources["nta-jee-syllabus"]!,
  sections: [
    {
      id: "physics",
      subject: "Physics",
      accent: "jee",
      units: [
        {
          id: "electrostatics-unit",
          name: "Electrostatics",
          topics: [],
          variant: "both",
          chapterSlugs: ["/jee/physics/electrostatics"],
          sourceRefs: ["nta-jee-syllabus"],
          note: "Topic list pending verified transcription.",
        },
        {
          id: "current-electricity-unit",
          name: "Current Electricity",
          topics: [],
          variant: "both",
          chapterSlugs: ["/jee/physics/current-electricity"],
          sourceRefs: ["nta-jee-syllabus"],
          note: "Topic list pending verified transcription.",
        },
      ],
    },
  ],
  interpretation: [
    {
      id: "how-to-read",
      title: "How to read this syllabus",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A syllabus lists what may be asked. It does not tell you how a topic is tested, which step of a question usually costs marks, or whether your loss on that topic is a concept gap, an execution slip or a selection mistake. Chapter pages carry that reading; this page carries the structure.",
            },
          ],
        },
      ],
    },
  ],
};
