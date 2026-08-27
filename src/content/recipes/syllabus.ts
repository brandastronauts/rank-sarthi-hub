import type { BlockSlot, PageRecipe } from "@/lib/recipe";
import type { SyllabusContent, SyllabusTable } from "@/content/types";
import { getSource } from "@/content/sources";

/**
 * T05 — Syllabus recipe.
 *
 * Structure-first: the syllabus is a data tree (B26), not an article. Slots
 * whose data is missing are skipped, so an unverified syllabus renders as
 * structure + provenance rather than as filler prose.
 *
 * B27 (weightage) is deliberately never emitted by this recipe. It may only
 * be added when a reviewed historical dataset and methodology exist.
 */
function tableSlot(table: SyllabusTable, note?: string): BlockSlot {
  return {
    block: "B25",
    id: table.id,
    props: {
      caption: table.heading,
      intro: table.intro,
      columns: table.columns,
      rows: table.rows,
      note: note ?? table.note,
    },
    when: table.rows.length > 0,
  };
}

export function syllabusRecipe(
  content: SyllabusContent,
  jumpItems: { id: string; label: string }[] = [],
): PageRecipe {
  const src = getSource(content.officialSource.id);
  const hierarchies = content.hierarchies ?? [];

  const legacyExplorer: BlockSlot[] = hierarchies.length
    ? []
    : [
        {
          block: "B26",
          id: "syllabus",
          props: { sections: content.sections },
          when: content.sections.length > 0,
        },
      ];

  const cycleNote = content.cycleStatus
    ? [
        content.cycleStatus.note,
        `Verified ${content.cycleStatus.verifiedOn}.`,
        content.cycleStatus.refreshTrigger,
      ]
        .filter(Boolean)
        .join(" ")
    : undefined;

  return {
    template: "T05",
    url: `/${content.platform}/syllabus`,
    frame: "F3",
    slots: [
      {
        block: "B34",
        id: "top",
        props: {
          eyebrow: content.hero?.eyebrow ?? `${content.exam} · Syllabus`,
          title: content.title,
          intent: content.hero?.intent,
          answer: content.intro,
          contentStatus: content.contentStatus,
          meta: [
            { label: "Exam", value: content.exam },
            { label: "Official source", value: content.officialSource.publisher },
            ...(content.cycleStatus?.cycleState
              ? [{ label: "Cycle", value: content.cycleStatus.cycleState }]
              : []),
            ...(content.lastVerified ? [{ label: "Last verified", value: content.lastVerified }] : []),
          ],
          chips: content.hero?.chips,
        },
      },
      { block: "B23", id: "contents", props: { items: jumpItems }, when: jumpItems.length > 0 },

      /* Official cycle status — cycle-dependent facts with provenance. */
      ...(content.cycleStatus ? [tableSlot(content.cycleStatus, cycleNote)] : []),

      /* Which official document applies to which target. */
      ...(content.scopeSelector ? [tableSlot(content.scopeSelector)] : []),

      /* Overview counts, only when no exam-scoped hierarchies exist. */
      ...(hierarchies.length
        ? []
        : [
            {
              block: "B25" as const,
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
          ]),

      /* Exam-scoped official hierarchies: Main and Advanced never merge. */
      ...hierarchies.map((h) => ({
        block: "B26" as const,
        id: h.id,
        props: {
          heading: h.heading,
          sections: h.sections,
          officialLabel: h.officialLabel,
          editorialLabel: h.editorialLabel,
          intro: h.intro,
          readingNotes: h.readingNotes,
          sourceRefs: h.sourceRefs,
          verifiedOn: h.verifiedOn,
          hideVariants: true,
        },
        when: h.sections.length > 0,
      })),
      ...legacyExplorer,

      ...(content.distinctions ? [tableSlot(content.distinctions)] : []),

      /* No-weightage policy + weekly loop travel as editorial interpretation. */
      ...(content.interpretation ?? []).map((i) => ({
        block: "B35" as const,
        id: i.id,
        props: { heading: i.title, concepts: [{ id: `${i.id}-body`, title: "", body: i.body }] },
      })),

      ...(content.prerequisitePaths ?? []).map((t) => tableSlot(t)),
      ...(content.relationships ? [tableSlot(content.relationships)] : []),
      ...(content.coverageModel ? [tableSlot(content.coverageModel)] : []),

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
        block: "B36",
        id: "related",
        props: { links: content.relatedLinks ?? [], heading: `Related ${content.exam} resources` },
        when: !!content.relatedLinks?.length,
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
          heading: `Reviewed against official ${content.exam} sources`,
          sources: content.sourceRefs?.length ? content.sourceRefs : [content.officialSource.id],
          updated: content.lastVerified,
        },
      },
    ],
  };
}
