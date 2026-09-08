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
  "official-status": "Official status",
  "what-changed": "What changed",
  scope: "Which syllabus applies",
  "jee-main-syllabus": "JEE Main syllabus",
  "jee-advanced-syllabus": "JEE Advanced syllabus",
  "main-vs-advanced": "Main vs Advanced",
  "no-weightage": "Why no weightage",
  "prerequisite-paths": "Prerequisite paths (Physics)",
  "prerequisite-paths-chemistry": "Prerequisite paths (Chemistry)",
  "prerequisite-paths-mathematics": "Prerequisite paths (Maths)",
  relationships: "Chapter relationships",
  "how-to-use-the-syllabus": "How to use the syllabus",
  "weekly-loop": "Weekly loop",
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
  tasks: "Choose your task",
  "concept-architecture": "Concept architecture",
  chapters: "All chapter routes",
  "pyq-state": "Previous-year papers",
  diagnosis: "Diagnose a loss",
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
    const props = slot.props as
      | { heading?: string; caption?: string; title?: string; jumpHidden?: boolean }
      | undefined;
    if (props?.jumpHidden) continue;
    const label = LABELS[id] ?? props?.heading ?? props?.caption ?? props?.title;
    if (!label) continue;
    items.push({ id, label });
  }

  return items;
}
