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
    { block: "B05", id: "idea" },
    { block: "B07", id: "moment" },
    { block: "B17", id: "how" },
    { block: "B08", id: "methodology" },
    { block: "B58", id: "resources" },
    { block: "B16", id: "people" },
    { block: "B22", id: "faq", props: { items: homeFaqs.slice(0, 5) } },
    { block: "B24", id: "cta" },
  ],
};
