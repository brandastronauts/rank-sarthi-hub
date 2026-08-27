import { createFileRoute, notFound } from "@tanstack/react-router";
import "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { syllabusRecipe } from "@/content/recipes/syllabus";
import { getSyllabus } from "@/content/syllabus";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";

/**
 * T05 — generic syllabus template.
 * /jee/syllabus, /neet/syllabus and /nda/syllabus all resolve through this
 * one route; a platform without a SyllabusContent record 404s.
 */
export const Route = createFileRoute("/$platform/syllabus")({
  loader: ({ params }) => {
    const content = getSyllabus(params.platform);
    const record = getUrl(`/${params.platform}/syllabus`);
    if (!content || record?.buildStatus !== "built") throw notFound();
    return { content };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const { content } = loaderData;
    const url = `/${params.platform}/syllabus`;
    const title =
      content.seo?.title ?? `${content.title} — subject, unit and topic structure | Rank Sarthi`;
    const description =
      content.seo?.description ??
      `The ${content.exam} syllabus as structured data: subjects, units, topics and the chapter pages that map to each unit, referenced against the official ${content.officialSource.publisher} document.`;
    /* ItemList reflects only the visible top-level subject groups. */
    const subjects = (content.hierarchies?.[0]?.sections ?? content.sections).map((s) => ({
      name: s.subject,
      url: `${url}#${s.id}`,
    }));

    return buildHead({
      url,
      title,
      description,
      ...(content.seo?.ogTitle ? { ogTitle: content.seo.ogTitle } : {}),
      ...(content.seo?.ogDescription ? { ogDescription: content.seo.ogDescription } : {}),
      ogType: "website",
      jsonLd: [
        collectionPageSchema({
          url,
          name: content.title,
          description,
          items: subjects,
        }),
        breadcrumbSchema(url),
      ],
    });
  },
  component: SyllabusPage,
});

function SyllabusPage() {
  const { content } = Route.useLoaderData();
  const recipe = syllabusRecipe(content);
  const jump = jumpItemsFor(activeSlots(recipe));

  return (
    <PageFrame
      frame="F3"
      url={`/${content.platform}/syllabus`}
      aside={<JumpNav items={jump} />}
    >
      <div className="space-y-12 md:space-y-16">
        <RecipeRenderer recipe={syllabusRecipe(content, jump)} />
      </div>
    </PageFrame>
  );
}
