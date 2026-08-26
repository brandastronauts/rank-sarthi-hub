import { createFileRoute, notFound } from "@tanstack/react-router";
import "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { RecipeRenderer } from "@/lib/recipe";
import { platformRecipe } from "@/content/recipes/platform";
import { getPlatform } from "@/content/platforms";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

/**
 * T02 — generic platform homepage.
 *
 * There is no nda.tsx. The route resolves the slug against PlatformData and
 * 404s unless that platform is "built", so /jee and /neet cannot render a
 * thin page just because the URL record exists.
 */
export const Route = createFileRoute("/$platform/")({
  loader: ({ params }) => {
    const platform = getPlatform(params.platform);
    if (!platform) throw notFound();
    return { platform };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const { platform } = loaderData;
    const url = `/${params.platform}`;
    const record = getUrl(url);
    const title = `${platform.productName} | ${platform.examName} Preparation Intelligence | Rank Sarthi`;
    const description = platform.deck ?? platform.tagline;

    return buildHead({
      url,
      title,
      description,
      ogType: "website",
      jsonLd: [
        collectionPageSchema({
          url,
          name: `${platform.productName} — ${platform.examName}`,
          description,
          items: (platform.relatedUrls ?? [])
            .map((u) => ({ u, r: getUrl(u) }))
            .filter((e) => e.r?.buildStatus === "built")
            .map((e) => ({ name: e.r!.name, url: e.u })),
        }),
        breadcrumbSchema(url),
      ].filter(Boolean),
      ogTitle: `${platform.productName} — ${platform.tagline}`,
      ...(record ? {} : {}),
    });
  },
  component: PlatformHome,
});

function PlatformHome() {
  const { platform } = Route.useLoaderData();
  return (
    <PageFrame frame="F1" url={`/${platform.slug}`}>
      <RecipeRenderer recipe={platformRecipe(platform)} />
    </PageFrame>
  );
}
