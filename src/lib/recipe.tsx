import type { ComponentType, ReactNode } from "react";
import { featureFlags, type FeatureFlag } from "@/content/flags";

/**
 * Page recipe system.
 *
 * A page is a list of block slots. Blocks are referenced by their Design
 * System B-number. A slot renders only when:
 *   - the block is registered, AND
 *   - its required feature flags are on, AND
 *   - its props resolve to something non-empty.
 * Optional blocks with no data are silently omitted — never placeholdered.
 */

export type BlockId =
  | "B01" | "B02" | "B03" | "B04" | "B05" | "B06" | "B07" | "B08" | "B09" | "B10"
  | "B11" | "B12" | "B13" | "B14" | "B15" | "B16" | "B17" | "B18" | "B19" | "B20"
  | "B21" | "B22" | "B23" | "B24" | "B25" | "B26" | "B27" | "B28" | "B29" | "B30"
  | "B31" | "B32" | "B33" | "B34" | "B35" | "B36" | "B37" | "B38" | "B39" | "B40"
  | "B41" | "B42" | "B43" | "B44" | "B45" | "B46" | "B47" | "B48" | "B49";

export interface BlockSlot<P = Record<string, unknown>> {
  block: BlockId;
  /** Stable key + anchor id for jump navigation. */
  id?: string;
  props?: P;
  /** Slot is skipped unless every listed flag is enabled. */
  requiresFlags?: FeatureFlag[];
  /** Slot is skipped when this returns false (e.g. empty data array). */
  when?: boolean;
}

export interface PageRecipe {
  template: string;
  /** Registry path this recipe renders. */
  url: string;
  frame?: "F1" | "F2" | "F3";
  slots: BlockSlot[];
}

type AnyBlock = ComponentType<any>;

const registry = new Map<BlockId, AnyBlock>();

export function registerBlock(id: BlockId, component: AnyBlock) {
  registry.set(id, component);
}

export function registerBlocks(entries: Partial<Record<BlockId, AnyBlock>>) {
  for (const [id, component] of Object.entries(entries)) {
    if (component) registry.set(id as BlockId, component);
  }
}

export function hasBlock(id: BlockId): boolean {
  return registry.has(id);
}

function slotEnabled(slot: BlockSlot): boolean {
  if (slot.when === false) return false;
  if (slot.requiresFlags?.some((flag) => !featureFlags[flag])) return false;
  return registry.has(slot.block);
}

/** Slots that will actually render — used for jump nav and QA. */
export function activeSlots(recipe: PageRecipe): BlockSlot[] {
  return recipe.slots.filter(slotEnabled);
}

export function RecipeRenderer({ recipe }: { recipe: PageRecipe }): ReactNode {
  return (
    <>
      {activeSlots(recipe).map((slot, index) => {
        const Block = registry.get(slot.block)!;
        return <Block key={slot.id ?? `${slot.block}-${index}`} id={slot.id} {...(slot.props ?? {})} />;
      })}
    </>
  );
}
