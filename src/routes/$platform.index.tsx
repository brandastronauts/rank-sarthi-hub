import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { platformRecipe } from "@/content/recipes/platform";
import { infoPageRecipe } from "@/content/recipes/info";
import { getPlatform } from "@/content/platforms";
import { getInfoPageByUrlFn } from "@/content/page-content.functions";
import { getUrl } from "@/content/registry";
import { buildHead, infoPageHead, NOT_FOUND_HEAD } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";
import type { InfoPageContent, PlatformData } from "@/content/types";

/**
 * Generic first-level page.
 *   - T02 platform homepage, when a PlatformData record exists (/jee, /neet)
 *   - generic information page, when an InfoPageContent record exists and the
 *     registry record is built (core site pages such as /about, /faq)
 * There is no nda.tsx and no about.tsx: nothing renders unless its content
 * record exists, so no route goes live by accident.
 */
export const Route = createFileRoute("/$platform/")({
  loader: async ({ params }) => {
    const platform = getPlatform(params.platform);
    if (platform) return { kind: "platform" as const, platform };

    const url = `/${params.platform}`;
    const record = getUrl(url);
    if (record?.redirectTo) throw redirect({ href: record.redirectTo, statusCode: 301 });
    if (record?.buildStatus !== "built") throw notFound();

    const info = await getInfoPageByUrlFn({ data: { url } });
    if (info) return { kind: "info" as const, info };

    throw notFound();
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return NOT_FOUND_HEAD;
    const url = `/${params.platform}`;

    if (loaderData.kind === "info") {
      const content = loaderData.info as InfoPageContent;
      return infoPageHead(content, {
        url,
        description: content.intent ?? `${content.title} — Rank Sarthi.`,
        ogType: "website",
      });
    }

    const platform = loaderData.platform as PlatformData;
    const title =
      platform.seo?.title ??
      `${platform.productName} | ${platform.examName} Preparation Intelligence | Rank Sarthi`;
    const description = platform.seo?.description ?? platform.deck ?? platform.tagline;

    return buildHead({
      url,
      title,
      description,
      ogType: "website",
      jsonLd: [
        collectionPageSchema({
          url,
          name: platform.seo?.ogTitle ?? `${platform.productName} — ${platform.examName}`,
          description,
          items: (platform.relatedUrls ?? [])
            .map((u) => ({ u, r: getUrl(u) }))
            .filter((e) => e.r?.buildStatus === "built")
            .map((e) => ({ name: e.r!.name, url: e.u })),
        }),
        breadcrumbSchema(url),
      ].filter(Boolean),
      ogTitle: platform.seo?.ogTitle ?? `${platform.productName} — ${platform.tagline}`,
      ogDescription: platform.seo?.ogDescription ?? description,
    });
  },
  component: FirstLevelPage,
});

function FirstLevelPage() {
  ensureBlocksRegistered();
  const data = Route.useLoaderData();

  if (data.kind === "platform") {
    return (
      <PageFrame frame="F1" url={`/${data.platform.slug}`} heroBackdrop>
        <RecipeRenderer recipe={platformRecipe(data.platform)} />
      </PageFrame>
    );
  }

  /* Anchor list lives in the F3 aside; the inline B23 slot stays empty. */
  const recipe = infoPageRecipe(data.info);
  const items = jumpItemsFor(activeSlots(recipe));

  return (
    <PageFrame frame="F3" url={data.info.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={recipe} />
      </div>
    </PageFrame>
  );
}
