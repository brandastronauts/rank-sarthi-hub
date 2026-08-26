import { createFileRoute } from "@tanstack/react-router";
import "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { RecipeRenderer } from "@/lib/recipe";
import { homeRecipe } from "@/content/recipes/home";
import { buildHead } from "@/lib/seo";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/home";

/**
 * T01 — Brand homepage.
 * Route holds metadata only. Everything visible comes from
 * content → recipe → block registry → RecipeRenderer.
 */
export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      url: "/",
      title: "Rank Sarthi | Preparation Intelligence for JEE, NEET & NDA",
      description:
        "Rank Sarthi analyses how you solve, where you lose marks and what to work on next across JEE, NEET and NDA preparation.",
      ogDescription:
        "Your rank has a reason. Rank Sarthi shows where marks are lost, why the pattern exists and what deserves attention next.",
      ogType: "website",
      jsonLd: [websiteSchema(), organizationSchema(), faqSchema(homeFaqs)],
    }),
  component: Home,
});

function Home() {
  return (
    <PageFrame frame="F1" url="/">
      <RecipeRenderer recipe={homeRecipe} />
    </PageFrame>
  );
}
