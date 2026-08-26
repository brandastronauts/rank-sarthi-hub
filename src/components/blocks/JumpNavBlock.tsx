import { JumpNav } from "@/components/shell/JumpNav";

/**
 * B23 — Breadcrumb + jump navigation.
 * Breadcrumbs are rendered by the F2/F3 page frame; this block contributes the
 * on-page anchor list, which is derived from the recipe's active slots.
 */
export function JumpNavBlock({
  id = "contents",
  items = [],
}: {
  id?: string;
  items?: { id: string; label: string }[];
}) {
  if (!items.length) return null;
  return (
    <div id={id} className="scroll-mt-28">
      <JumpNav items={items} sticky={false} />
    </div>
  );
}
