import { publicMastheadChips, publicMastheadMeta } from "@/lib/public-copy";
import type { PageRecipe } from "@/lib/recipe";
import type { ChapterContent, ChapterSlot } from "@/content/types";
import { subjectFacultyFor } from "@/content/subject-faculty";

/**
 * T06 — Chapter recipe.
 *
 * Data decides the page. Every evidence block is gated on the presence of its
 * record, so a chapter with no verified formulas/PYQs/trends renders a shorter
 * but honest page instead of empty modules or invented data.
 */
export function chapterRecipe(
  content: ChapterContent,
  jumpItems: { id: string; label: string }[] = [],
): PageRecipe {
  /** Tables + extra concept groups, bucketed by anchor slot once up front. */
  const bySlot = new Map<ChapterSlot, PageRecipe["slots"]>();
  const attach = (slot: ChapterSlot, entry: PageRecipe["slots"][number]) => {
    const bucket = bySlot.get(slot);
    if (bucket) bucket.push(entry);
    else bySlot.set(slot, [entry]);
  };
  for (const t of content.tables ?? []) {
    attach(t.slot, {
      block: "B25" as const,
      id: t.id,
      props: {
        caption: t.heading,
        intro: t.intro,
        columns: t.columns,
        rows: t.rows,
        note: t.note,
        jumpHidden: !t.jump,
      },
    });
  }
  for (const s of content.sections ?? []) {
    attach(s.slot, {
      block: "B35" as const,
      id: s.id,
      props: { heading: s.heading, concepts: s.concepts, jumpHidden: !s.jump },
    });
  }
  const at = (slot: ChapterSlot): PageRecipe["slots"] => bySlot.get(slot) ?? [];

  return {
    template: "T06",
    url: content.url,
    frame: "F3",
    slots: [
      {
        block: "B34",
        id: "top",
        props: {
          eyebrow: `${content.exam}${content.examVariant ? ` ${content.examVariant}` : ""} · ${content.subject}`,
          title: content.chapter,
          intent: content.canonicalIntent,
          answer: content.directAnswer,
          contentStatus: content.contentStatus,
          meta: publicMastheadMeta(content.url, [
            { label: "Subject", value: content.subject },
            { label: "Syllabus unit", value: content.syllabusMapping.unit },
            ...(content.updated ? [{ label: "Updated", value: content.updated }] : []),
          ]),
          chips: publicMastheadChips(content.url, content.heroChips ?? []),
        },
      },
      {
        block: "B57",
        id: "subject-faculty",
        props: { url: content.url },
        when: !!subjectFacultyFor(content.url),
      },
      { block: "B23", id: "contents", props: { items: jumpItems }, when: jumpItems.length > 0 },
      {
        block: "B25",
        id: "syllabus-mapping",
        props: {
          caption: "Syllabus mapping",
          columns: ["Unit", "Topics"],
          rows: [[content.syllabusMapping.unit, content.syllabusMapping.topics.join(", ")]],
        },
        when: content.syllabusMapping.topics.length > 0,
      },
      ...at("scope"),
      {
        block: "B36",
        id: "prerequisites",
        props: { links: content.prerequisites, heading: "Before this chapter" },
        when: content.prerequisites.length > 0,
      },
      ...at("prerequisites"),
      {
        block: "B35",
        id: "concepts",
        props: { concepts: content.conceptBlocks },
        when: content.conceptBlocks.length > 0,
      },
      ...at("concepts"),
      {
        block: "B29",
        id: "formulas",
        props: { formulas: content.formulas ?? [] },
        when: !!content.formulas?.length,
      },
      ...at("formulas"),
      {
        block: "B35",
        id: "worked-examples",
        props: {
          heading: "Worked examples",
          concepts: (content.workedExamples ?? []).map((w) => ({
            id: w.id,
            title: w.prompt,
            body: w.steps,
            ...(w.answer ? { keyIdea: `Answer: ${w.answer}` } : {}),
          })),
        },
        when: !!content.workedExamples?.length,
      },
      {
        block: "B30",
        id: "mistakes",
        props: { mistakes: content.mistakes ?? [] },
        when: !!content.mistakes?.length,
      },
      ...at("mistakes"),
      ...at("diagnosis"),
      {
        block: "B32",
        id: "pyqs",
        props: { pyqs: content.pyqs ?? [] },
        when: !!content.pyqs?.length,
      },
      {
        block: "B33",
        id: "pyq-analysis",
        props: { pyqs: content.pyqs ?? [], trends: content.trends ?? [] },
        when: !!content.pyqs?.length,
      },
      ...at("practice"),
      {
        block: "B27",
        id: "trends",
        props: { trends: content.trends ?? [] },
        when: !!content.trends?.length,
      },
      {
        block: "B28",
        id: "priority",
        props: { priority: content.priority ?? [] },
        when: !!content.priority?.length,
      },
      {
        block: "B31",
        id: "diagnostic",
        props: {
          headline: content.diagnosticCta?.headline,
          body: content.diagnosticCta?.body,
          destinationId: content.diagnosticCta?.destinationId,
          platform: content.platform,
        },
        when: !!content.diagnosticCta,
      },
      {
        block: "B22",
        id: "faq",
        props: { items: content.faqs ?? [], heading: `${content.chapter} — questions` },
        when: !!content.faqs?.length,
      },
      {
        block: "B36",
        id: "related",
        props: { links: [...content.relatedChapters, ...(content.links ?? [])] },
        when: content.relatedChapters.length + (content.links?.length ?? 0) > 0,
      },
      ...at("related"),
      {
        block: "B37",
        id: "sources",
        props: {
          sources: content.sources,
          reviewerId: content.reviewerId,
          authorId: content.authorId,
          updated: content.updated,
          note: content.sourceNote,
          contributorPolicy: content.contributorPolicy ?? [],
          pageReview: content.pageReview,
        },
      },
    ],
  };
}
