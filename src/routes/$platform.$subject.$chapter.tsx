import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { chapterRecipe } from "@/content/recipes/chapter";
import { infoPageRecipe } from "@/content/recipes/info";
import { getChapter } from "@/content/chapters";
import { getInfoPageByUrl } from "@/content/info";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import {
  articleSchema,
  breadcrumbSchema,
  collectionPageSchema,
  learningResourceSchema,
} from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";
import type { InfoPageContent } from "@/content/types";

/**
 * T06 — generic chapter template, plus the generic third-level information
 * page (same contract as the second-level info route).
 *
 * Every chapter page in the site resolves here. Adding a chapter is a data
 * change (one ChapterContent record + its registry entry); this file never
 * changes per chapter.
 */
export const Route = createFileRoute("/$platform/$subject/$chapter")({
  loader: ({ params }) => {
    const url = `/${params.platform}/${params.subject}/${params.chapter}`;
    const record = getUrl(url);
    if (record?.buildStatus !== "built") throw notFound();

    const content = getChapter(params.platform, params.subject, params.chapter);
    if (content) return { kind: "chapter" as const, content };

    const info = getInfoPageByUrl(url);
    if (info) return { kind: "info" as const, info };

    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }

    if (loaderData.kind === "info") {
      const info = loaderData.info;
      const title = info.seo?.title ?? `${info.title} | Rank Sarthi`;
      const description =
        info.seo?.description ?? `${info.exam}: official scope and how Rank Sarthi routes it.`;
      return buildHead({
        url: info.url,
        title,
        description,
        ogType: info.seo?.ogType ?? "article",
        ...(info.seo?.ogTitle ? { ogTitle: info.seo.ogTitle } : {}),
        ...(info.seo?.ogDescription ? { ogDescription: info.seo.ogDescription } : {}),
        jsonLd: [
          collectionPageSchema({
            url: info.url,
            name: info.title,
            description,
            items: (info.relatedLinks ?? []).map((l) => ({ name: l.label, url: l.url })),
          }),
          breadcrumbSchema(info.url),
        ],
      });
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
  component: ThirdLevelPage,
});

function ThirdLevelPage() {
  ensureBlocksRegistered();
  const data = Route.useLoaderData();

  if (data.kind === "info") {
    return <InfoView info={data.info} />;
  }

  const { content } = data;
  const jump = jumpItemsFor(activeSlots(chapterRecipe(content)));

  return (
    <PageFrame frame="F3" url={content.url} aside={<JumpNav items={jump} />}>
      <div className="space-y-12 md:space-y-16">
        <RecipeRenderer recipe={chapterRecipe(content)} />
      </div>
    </PageFrame>
  );
}

function InfoView({ info }: { info: InfoPageContent }) {
  const items = jumpItemsFor(activeSlots(infoPageRecipe(info)));
  const recipe = infoPageRecipe(info, items);

  return (
    <PageFrame frame="F3" url={info.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={recipe} />
      </div>
    </PageFrame>
  );
}
