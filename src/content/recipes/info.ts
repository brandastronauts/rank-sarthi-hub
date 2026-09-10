import type { BlockSlot, PageRecipe } from "@/lib/recipe";
import type { InfoPageContent } from "@/content/types";
import { changeLogForPage, recordsByIds } from "@/content/freshness/panel";

/**
 * Generic exam-information recipe (JEE Main, Advanced, papers, keys,
 * analysis, cutoff, dates). Reuses the frozen document blocks: B34 masthead,
 * B23 contents, B45 FreshnessWatch, B46 change log, B25 tables, B35 prose,
 * B36 related, B22 questions, B37 sources and authority.
 */
export function infoPageRecipe(
  content: InfoPageContent,
  jumpItems: { id: string; label: string }[] = [],
): PageRecipe {
  const freshRecords = content.freshness ? recordsByIds(content.freshness.recordIds) : [];
  const changes = changeLogForPage(content.url);

  const bodySlots: BlockSlot[] = content.blocks.map((block) => {
    if (block.kind === "table") {
      return {
        block: "B25",
        id: block.id,
        props: {
          caption: block.heading,
          intro: block.intro,
          columns: block.columns,
          rows: block.rows,
          note: block.note,
          jumpHidden: block.jump === false,
        },
        when: block.rows.length > 0,
      };
    }

    if (block.kind === "resources") {
      return {
        block: "B47",
        id: block.id,
        props: {
          heading: block.heading,
          intro: block.intro,
          rows: block.rows,
          note: block.note,
          jumpHidden: block.jump === false,
        },
        when: block.rows.length > 0,
      };
    }

    if (block.kind === "links") {
      return {
        block: "B48",
        id: block.id,
        props: {
          heading: block.heading,
          intro: block.intro,
          items: block.items,
          note: block.note,
          jumpHidden: block.jump === false,
        },
        when: block.items.length > 0,
      };
    }

    if (block.kind === "tool") {
      return {
        block: "B49",
        id: block.id,
        props: {
          heading: block.heading,
          intro: block.intro,
          tool: block.tool,
          note: block.note,
          jumpHidden: block.jump === false,
        },
      };
    }

    return {
      block: "B35",
      id: block.id,
      props: {
        heading: block.heading,
        concepts: block.concepts,
        jumpHidden: block.jump === false,
      },
      when: block.concepts.length > 0,
    };
  });


  return {
    template: "T12",
    url: content.url,
    frame: "F3",
    slots: [
      {
        block: "B34",
        id: "top",
        props: {
          eyebrow: content.eyebrow ?? content.exam,
          title: content.title,
          intent: content.intent,
          answer: content.answer,
          contentStatus: content.contentStatus,
          chips: content.chips,
          meta: [
            { label: "Exam", value: content.exam },
            ...(content.meta ?? []),
            ...(content.lastVerified ? [{ label: "Last verified", value: content.lastVerified }] : []),
          ],
        },
      },
      { block: "B23", id: "contents", props: { items: jumpItems }, when: jumpItems.length > 0 },
      {
        block: "B45",
        id: "official-status",
        props: {
          heading: content.freshness?.heading ?? "Official status watch",
          intro: content.freshness?.intro,
          records: freshRecords,
          note: content.freshness?.note,
        },
        when: freshRecords.length > 0,
      },
      ...bodySlots,
      { block: "B46", id: "what-changed", props: { entries: changes }, when: changes.length > 0 },
      {
        block: "B36",
        id: "related",
        props: { links: content.relatedLinks ?? [], heading: `Related ${content.exam} pages` },
        when: !!content.relatedLinks?.length,
      },
      {
        block: "B22",
        id: "faq",
        props: { items: content.faqs ?? [], heading: `${content.exam} questions students ask here` },
        when: !!content.faqs?.length,
      },
      {
        block: "B37",
        id: "sources",
        props: {
          heading: `Checked against official ${content.exam} sources`,
          sources: content.sourceRefs ?? [],
          note: content.sourceNote,
          contributorPolicy: content.contributorPolicy,
          updated: content.lastVerified,
        },
        when: !!content.sourceRefs?.length || !!content.contributorPolicy?.length,
      },
    ] as BlockSlot[],
  };
}
