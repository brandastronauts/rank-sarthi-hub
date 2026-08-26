import { createFileRoute, notFound } from "@tanstack/react-router";
import "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { chapterRecipe } from "@/content/recipes/chapter";
import { getChapter } from "@/content/chapters";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, learningResourceSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";

/**
 * T06 — generic chapter template.
 *
 * Every chapter page in the site resolves here. Adding a chapter is a data
 * change (one ChapterContent record + its registry entry); this file never
 * changes per chapter.
 */
export const Route = createFileRoute("/$platform/$subject/$chapter")({
  loader: ({ params }) => {
    const content = getChapter(params.platform, params.subject, params.chapter);
    const record = getUrl(`/${params.platform}/${params.subject}/${params.chapter}`);
    if (!content || record?.buildStatus !== "built") throw notFound();
    return { content };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const { content } = loaderData;
    return buildHead({
      url: content.url,
      title: content.meta.title,
      description: content.meta.description,
      ogType: "article",
      ...(content.meta.ogTitle ? { ogTitle: content.meta.ogTitle } : {}),
      ...(content.meta.ogDescription ? { ogDescription: content.meta.ogDescription } : {}),
      jsonLd: [
        articleSchema({
          url: content.url,
          headline: content.meta.title,
          description: content.meta.description,
          ...(content.updated ? { updated: content.updated } : {}),
          ...(content.authorId ? { authorId: content.authorId } : {}),
          ...(content.reviewerId ? { reviewerId: content.reviewerId } : {}),
        }),
        learningResourceSchema({
          url: content.url,
          name: `${content.chapter} — ${content.exam} ${content.subject}`,
          description: content.meta.description,
          subject: content.subject,
          exam: content.exam,
        }),
        breadcrumbSchema(content.url),
      ],
    });
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { content } = Route.useLoaderData();
  const jump = jumpItemsFor(activeSlots(chapterRecipe(content)));

  return (
    <PageFrame frame="F3" url={content.url} aside={<JumpNav items={jump} />}>
      <div className="space-y-12 md:space-y-16">
        <RecipeRenderer recipe={chapterRecipe(content)} />
      </div>
    </PageFrame>
  );
}
