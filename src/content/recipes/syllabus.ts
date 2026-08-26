import type { PageRecipe } from "@/lib/recipe";
import type { SyllabusContent } from "@/content/types";
import { getSource } from "@/content/sources";

/**
 * T05 — Syllabus recipe.
 *
 * Structure-first: the syllabus is a data tree (B26), not an article. Slots
 * whose data is missing are skipped, so an untranscribed syllabus renders as
 * structure + provenance rather than as filler prose.
 */
export function syllabusRecipe(content: SyllabusContent, jumpItems: { id: string; label: string }[] = []): PageRecipe {
  const src = getSource(content.officialSource.id);

  return {
    template: "T05",
    url: `/${content.platform}/syllabus`,
    frame: "F3",
    slots: [
      {
        block: "B34",
        id: "top",
        props: {
          eyebrow: `${content.exam} · Syllabus`,
          title: content.title,
          intent: undefined,
          answer: content.intro,
          contentStatus: content.contentStatus,
          meta: [
            { label: "Exam", value: content.exam },
            { label: "Official source", value: content.officialSource.publisher },
            ...(content.lastVerified ? [{ label: "Last verified", value: content.lastVerified }] : []),
          ],
        },
      },
      { block: "B23", id: "contents", props: { items: jumpItems }, when: jumpItems.length > 0 },
      {
        block: "B25",
        id: "overview",
        props: {
          caption: "Syllabus at a glance",
          columns: ["Subject", "Units", "Topics verified"],
          rows: content.sections.map((s) => [
            s.subject,
            String(s.units.length),
            String(s.units.reduce((n, u) => n + u.topics.length, 0)),
          ]),
          note: src ? `Structure mapped against ${src.label} (${src.publisher}).` : undefined,
        },
        when: content.sections.length > 0,
      },
      {
        block: "B26",
        id: "syllabus",
        props: { sections: content.sections },
        when: content.sections.length > 0,
      },
      ...(content.interpretation ?? []).map((i) => ({
        block: "B35" as const,
        id: i.id,
        props: { heading: i.title, concepts: [{ id: `${i.id}-body`, title: i.title, body: i.body }] },
      })),
      {
        block: "B31",
        id: "diagnostic",
        props: {
          headline: "A syllabus tells you what is asked. A diagnostic tells you what you are losing.",
          body: "Rank Sarthi reads every attempt as concept, execution or strategy — chapter by chapter.",
          destinationId: "diagnostic",
        },
      },
      {
        block: "B22",
        id: "faq",
        props: { items: content.faqs ?? [], heading: `${content.exam} syllabus questions` },
        when: !!content.faqs?.length,
      },
      {
        block: "B37",
        id: "sources",
        props: {
          sources: [content.officialSource.id],
          updated: content.lastVerified,
        },
      },
    ],
  };
}
