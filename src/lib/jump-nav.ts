import type { BlockSlot } from "@/lib/recipe";

/**
 * Jump navigation is derived from the recipe's ACTIVE slots, so a page never
 * advertises an anchor for a block that did not render.
 */
const LABELS: Record<string, string> = {
  top: "Overview",
  overview: "At a glance",
  "syllabus-mapping": "Syllabus mapping",
  syllabus: "Syllabus structure",
  "how-to-read": "How to read this",
  prerequisites: "Before this chapter",
  concepts: "Concepts",
  formulas: "Formula sheet",
  "worked-examples": "Worked examples",
  mistakes: "Common mistakes",
  pyqs: "Previous-year appearances",
  "pyq-analysis": "Paper record",
  trends: "Weightage and trends",
  priority: "Preparation priority",
  diagnostic: "Diagnostic",
  faq: "FAQs",
  related: "Related pages",
  sources: "Sources",
};

const EXCLUDED = new Set(["contents"]);

export function jumpItemsFor(slots: BlockSlot[]): { id: string; label: string }[] {
  const seen = new Set<string>();
  const items: { id: string; label: string }[] = [];

  for (const slot of slots) {
    const id = slot.id;
    if (!id || EXCLUDED.has(id) || seen.has(id)) continue;
    seen.add(id);
    const props = slot.props as { heading?: string; title?: string } | undefined;
    items.push({ id, label: LABELS[id] ?? props?.heading ?? props?.title ?? id });
  }

  return items;
}
