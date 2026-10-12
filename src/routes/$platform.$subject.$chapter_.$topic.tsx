import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { infoPageRecipe } from "@/content/recipes/info";
import { getInfoPageByUrlFn } from "@/content/page-content.functions";
import { getUrl } from "@/content/registry";
import { infoPageHead, NOT_FOUND_HEAD } from "@/lib/seo";
import { jumpItemsFor } from "@/lib/jump-nav";

/**
 * Generic fourth-level information page. Same contract and recipe as the
 * second- and third-level information routes; this file never changes per
 * page. Adding a fourth-level page is a data change (one InfoPageContent
 * record plus its registry entry).
 */
export const Route = createFileRoute("/$platform/$subject/$chapter_/$topic")({
  loader: async ({ params }) => {
    const url = `/${params.platform}/${params.subject}/${params.chapter}/${params.topic}`;
    const record = getUrl(url);
    if (record?.buildStatus !== "built") throw notFound();

    const info = await getInfoPageByUrlFn({ data: { url } });
    if (!info) throw notFound();
    return { info };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return NOT_FOUND_HEAD;
    return infoPageHead(loaderData.info, {
      description: `${loaderData.info.exam}: official scope and how Rank Sarthi routes it.`,
    });
  },
  component: FourthLevelPage,
});

function FourthLevelPage() {
  ensureBlocksRegistered();
  const { info } = Route.useLoaderData();
  /* Anchor list lives in the F3 aside; the inline B23 slot stays empty. */
  const recipe = infoPageRecipe(info);
  const items = jumpItemsFor(activeSlots(recipe));

  return (
    <PageFrame frame="F3" url={info.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={recipe} />
      </div>
    </PageFrame>
  );
}
