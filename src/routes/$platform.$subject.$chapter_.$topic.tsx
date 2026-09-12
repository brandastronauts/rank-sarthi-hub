import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { infoPageRecipe } from "@/content/recipes/info";
import { getInfoPageByUrl } from "@/content/info";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema, infoPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";

/**
 * Generic fourth-level information page. Same contract and recipe as the
 * second- and third-level information routes; this file never changes per
 * page. Adding a fourth-level page is a data change (one InfoPageContent
 * record plus its registry entry).
 */
export const Route = createFileRoute("/$platform/$subject/$chapter_/$topic")({
  loader: ({ params }) => {
    const url = `/${params.platform}/${params.subject}/${params.chapter}/${params.topic}`;
    const record = getUrl(url);
    if (record?.buildStatus !== "built") throw notFound();

    const info = getInfoPageByUrl(url);
    if (!info) throw notFound();
    return { info };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const { info } = loaderData;
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
        infoPageSchema({
          url: info.url,
          title: info.title,
          description,
          blocks: info.blocks,
          ...(info.relatedLinks ? { relatedLinks: info.relatedLinks } : {}),
          ...(info.lastVerified ? { lastVerified: info.lastVerified } : {}),
        }),
        breadcrumbSchema(info.url),
      ],
    });
  },
  component: FourthLevelPage,
});

function FourthLevelPage() {
  ensureBlocksRegistered();
  const { info } = Route.useLoaderData();
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
