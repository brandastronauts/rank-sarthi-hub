import type { PageRecipe } from "@/lib/recipe";
import { homeFaqs } from "@/content/home";

/**
 * T01 — Brand homepage recipe.
 * The route contributes metadata only; every section is a registered block.
 */
export const homeRecipe: PageRecipe = {
  template: "T01",
  url: "/",
  frame: "F1",
  slots: [
    { block: "B01", id: "home" },
    { block: "B03", id: "product" },
    { block: "B05", id: "idea" },
    { block: "B06", id: "platforms" },
    { block: "B07", id: "moment" },
    { block: "B08", id: "methodology" },
    { block: "B09", id: "depth" },
    { block: "B10", id: "numbers" },
    { block: "B17", id: "how" },
    { block: "B11", id: "situations" },
    { block: "B15", id: "nda" },
    { block: "B13", id: "parents" },
    { block: "B04", id: "educator-review" },
    { block: "B12", id: "educator-thinking" },
    { block: "B14", id: "voices" },
    { block: "B02", id: "review-circle" },
    { block: "B16", id: "people" },
    { block: "B18", id: "institutes" },
    { block: "B19", id: "trust" },
    { block: "B21", id: "pricing" },
    { block: "B20", id: "brand-trust" },
    { block: "B22", id: "faq", props: { items: homeFaqs } },
    { block: "B24", id: "cta" },
  ],
};
