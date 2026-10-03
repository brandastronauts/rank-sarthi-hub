import { publicMastheadChips, publicMastheadMeta } from "@/lib/public-copy";
import type { BlockSlot, PageRecipe } from "@/lib/recipe";
import type { SubjectHubContent, SyllabusTable } from "@/content/types";
import { childrenOf, getUrl } from "@/content/registry";
import { physicsUnitsFor } from "@/content/physics-units";
import type { ChapterMapEntry, OfficialUnitEntry } from "@/components/blocks/SubjectChapterMap";

/** Official 2026 units with explicit primary and split routes (Physics). */
export function officialUnitEntries(content: SubjectHubContent): OfficialUnitEntry[] {
  if (content.slug !== "physics") return [];
  const link = (url: string) => {
    const r = getUrl(url);
    return { url, name: r?.name ?? url, live: r?.buildStatus === "built" };
  };
  return (physicsUnitsFor(content.platform) ?? []).map((u) => ({
    n: u.n,
    name: u.name,
    primary: link(u.primary),
    parts: (u.parts ?? []).map(link),
  }));
}

/**
 * T04 — Subject hub recipe.
 *
 * The chapter map is derived from the URL registry, never hand listed: the
 * hub shows every child chapter route that exists, annotated with approved
 * scope and relationship copy. Weightage, frequency and trend blocks are
 * deliberately never emitted.
 */
function tableSlot(table: SyllabusTable): BlockSlot {
  return {
    block: "B25",
    id: table.id,
    props: {
      caption: table.heading,
      intro: table.intro,
      columns: table.columns,
      rows: table.rows,
      note: table.note,
    },
    when: table.rows.length > 0,
  };
}

/** Registry-derived chapter inventory for a subject hub. */
export function chapterMapEntries(content: SubjectHubContent): ChapterMapEntry[] {
  const notes = new Map(content.chapterMap.notes.map((n) => [n.url, n]));

  return childrenOf(content.url)
    .filter((r) => r.template === "T06" && !r.redirectTo)
    .map((record) => {
      const note = notes.get(record.url);
      return {
        url: record.url,
        name: record.name,
        scope: note?.scope ?? "Scope pending review",
        note: note?.note ?? "",
        contextual: note?.contextual ?? false,
        live: record.buildStatus === "built",
        order: note?.order ?? 999,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...entry }) => entry);
}

export function subjectHubRecipe(
  content: SubjectHubContent,
  jumpItems: { id: string; label: string }[] = [],
): PageRecipe {
  const entries = chapterMapEntries(content);

  return {
    template: "T04",
    url: content.url,
    frame: "F3",
    slots: [
      {
        block: "B34",
        id: "top",
        props: {
          eyebrow: content.eyebrow ?? `${content.exam} · ${content.subject}`,
          title: content.title,
          intent: content.intent,
          answer: content.answer,
          contentStatus: content.contentStatus,
          chips: publicMastheadChips(content.url, content.chips),
          meta: publicMastheadMeta(content.url, [
            { label: "Exam", value: content.exam },
            { label: "Subject", value: content.subject },
            { label: "Chapter routes", value: String(entries.length) },
            ...(content.lastVerified ? [{ label: "Last verified", value: content.lastVerified }] : []),
          ]),
        },
      },
      { block: "B23", id: "contents", props: { items: jumpItems }, when: jumpItems.length > 0 },

      ...(content.taskTable ? [tableSlot(content.taskTable)] : []),
      ...(content.architecture ? [tableSlot(content.architecture)] : []),

      {
        block: "B44",
        id: "chapters",
        props: {
          heading: content.chapterMap.heading,
          scopeNote: content.chapterMap.scopeNote,
          contextualHeading: content.chapterMap.contextualHeading,
          contextualNote: content.chapterMap.contextualNote,
          entries,
          officialUnits: officialUnitEntries(content),
        },
        when: entries.length > 0,
      },

      ...(content.pyqNote
        ? [
            {
              block: "B35" as const,
              id: "pyq-state",
              props: {
                heading: `${content.subject} previous-year paper access`,
                concepts: [
                  {
                    id: "pyq-state-body",
                    title: "",
                    body: [{ type: "paragraph", children: [{ text: content.pyqNote }] }],
                  },
                ],
              },
            },
          ]
        : []),

      ...(content.diagnosis ? [tableSlot(content.diagnosis)] : []),

      {
        block: "B31",
        id: "diagnostic",
        props: {
          headline: "A chapter list tells you what exists. A diagnosis tells you what you are losing.",
          body: `Rank Sarthi reads every ${content.subject} attempt as concept, execution or strategy — chapter by chapter.`,
          destinationId: "diagnostic",
          platform: content.platform,
        },
      },
      {
        block: "B36",
        id: "related",
        props: {
          links: content.relatedLinks ?? [],
          heading: `Related ${content.exam} ${content.subject} resources`,
        },
        when: !!content.relatedLinks?.length,
      },
      {
        block: "B22",
        id: "faq",
        props: { items: content.faqs ?? [], heading: `${content.subject} preparation questions` },
        when: !!content.faqs?.length,
      },
      {
        block: "B37",
        id: "sources",
        props: {
          heading: `Reviewed against official ${content.exam} sources`,
          sources: content.sourceRefs ?? [],
          updated: content.lastVerified,
        },
        when: !!content.sourceRefs?.length,
      },
    ] as BlockSlot[],
  };
}
