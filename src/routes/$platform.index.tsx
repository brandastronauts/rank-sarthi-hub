import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { platformRecipe } from "@/content/recipes/platform";
import { infoPageRecipe } from "@/content/recipes/info";
import { getPlatform } from "@/content/platforms";
import { getInfoPageByUrl } from "@/content/info";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema, infoPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";
import type { PageRecipe } from "@/lib/recipe";
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
  loader: ({ params }) => {
    const platform = getPlatform(params.platform);
    if (platform) return { kind: "platform" as const, platform };

    const url = `/${params.platform}`;
    const record = getUrl(url);
    if (record?.buildStatus !== "built") throw notFound();

    const info = getInfoPageByUrl(url);
    if (info) return { kind: "info" as const, info };

    throw notFound();
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const url = `/${params.platform}`;

    if (loaderData.kind === "info") {
      const content = loaderData.info as InfoPageContent;
      const title = content.seo?.title ?? `${content.title} | Rank Sarthi`;
      const description =
        content.seo?.description ?? content.intent ?? `${content.title} — Rank Sarthi.`;
      return buildHead({
        url,
        title,
        description,
        ogType: content.seo?.ogType ?? "website",
        ...(content.seo?.ogTitle ? { ogTitle: content.seo.ogTitle } : {}),
        ...(content.seo?.ogDescription ? { ogDescription: content.seo.ogDescription } : {}),
        jsonLd: [
          infoPageSchema({
            url,
            title: content.title,
            description,
            blocks: content.blocks,
            ...(content.relatedLinks ? { relatedLinks: content.relatedLinks } : {}),
            ...(content.lastVerified ? { lastVerified: content.lastVerified } : {}),
          }),
          breadcrumbSchema(url),
        ].filter(Boolean),
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
      <PageFrame frame="F1" url={`/${data.platform.slug}`}>
        <RecipeRenderer recipe={platformRecipe(data.platform)} />
      </PageFrame>
    );
  }

  const build = (items: { id: string; label: string }[] = []): PageRecipe =>
    infoPageRecipe(data.info, items);
  const items = jumpItemsFor(activeSlots(build()));

  return (
    <PageFrame frame="F3" url={data.info.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={build(items)} />
      </div>
    </PageFrame>
  );
}
