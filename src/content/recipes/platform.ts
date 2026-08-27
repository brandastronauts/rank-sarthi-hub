import type { PageRecipe } from "@/lib/recipe";
import type { PlatformData } from "@/content/types";

/**
 * T02 — Platform homepage recipe.
 *
 * The recipe is generated from PlatformData, so activating /jee or /neet is a
 * data change: complete the platform record, flip its buildStatus, and the
 * same blocks render with different valid props. Slots whose data is missing
 * are skipped (`when: false`) rather than placeholdered.
 */
export function platformRecipe(platform: PlatformData): PageRecipe {
  const props = { platform };

  return {
    template: "T02",
    url: `/${platform.slug}`,
    frame: "F1",
    slots: [
      { block: "B38", id: "top", props },
      { block: "B03", id: "snapshot", props, when: !!platform.cycleSnapshot },
      {
        block: "B39",
        id: "positioning",
        props,
        when: platform.intro.length > 0 || !!platform.taskGroups?.length,
      },
      { block: "B40", id: "structure", props, when: !!platform.papers?.length },
      {
        block: "B41",
        id: "diagnosis",
        props,
        when: !!platform.diagnosticLenses?.length || !!platform.errorTaxonomy?.rows.length,
      },
      { block: "B42", id: "pathway", props, when: !!platform.pathway?.length },
      { block: "B09", id: "depth" },
      { block: "B43", id: "explore", props, when: !!platform.relatedUrls?.length },
      // B19 pricing stays out until plans, prices, inclusions, terms and CTA
      // destinations are commercially verified for this platform.
      { block: "B19", id: "trust", when: platform.showPricing === true },
      {
        block: "B22",
        id: "faq",
        props: {
          items: platform.faqs ?? [],
          eyebrow: `${platform.productName} FAQ`,
          heading: `${platform.slug.toUpperCase()} questions students ask first.`,
        },
        when: !!platform.faqs?.length,
      },
      {
        block: "B24",
        id: "cta",
        props: {
          eyebrow: platform.finalCta?.eyebrow ?? platform.productName,
          heading:
            platform.finalCta?.heading ??
            `Know what your ${platform.slug.toUpperCase()} score is actually telling you.`,
          body:
            platform.finalCta?.body ??
            "One diagnostic separates concept gaps from execution slips and strategy mistakes.",
          secondaryHref: platform.finalCta?.secondaryHref ?? "#structure",
          secondaryLabel: platform.finalCta?.secondaryLabel ?? "See how the exam is read",
          footnote: platform.examName,
        },
      },

    ],
  };
}
