import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { subjectHubRecipe, chapterMapEntries } from "@/content/recipes/subject";
import { infoPageRecipe } from "@/content/recipes/info";
import { getSubjectHub } from "@/content/subjects";
import { getInfoPage } from "@/content/info";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";
import type { PageRecipe } from "@/lib/recipe";
import type { InfoPageContent, SubjectHubContent } from "@/content/types";

/**
 * Generic second-level page under a platform.
 *   - T04 subject hub, when a SubjectHubContent record exists
 *   - generic exam-information page, when an InfoPageContent record exists
 * Either way the registry record must be built, so no route goes live by
 * accident and no page-specific route file is ever needed.
 */
export const Route = createFileRoute("/$platform/$subject/")({
  loader: ({ params }) => {
    const url = `/${params.platform}/${params.subject}`;
    const record = getUrl(url);
    if (record?.buildStatus !== "built") throw notFound();

    const hub = getSubjectHub(params.platform, params.subject);
    if (hub) return { kind: "subject" as const, content: hub };

    const info = getInfoPage(params.platform, params.subject);
    if (info) return { kind: "info" as const, content: info };

    throw notFound();
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const url = `/${params.platform}/${params.subject}`;

    if (loaderData.kind === "info") {
      const content = loaderData.content as InfoPageContent;
      const title = content.seo?.title ?? `${content.title} | Rank Sarthi`;
      const description =
        content.seo?.description ??
        `${content.exam}: official status, structure and what it means for your preparation.`;
      return buildHead({
        url,
        title,
        description,
        ogType: content.seo?.ogType ?? "article",
        ...(content.seo?.ogTitle ? { ogTitle: content.seo.ogTitle } : {}),
        ...(content.seo?.ogDescription ? { ogDescription: content.seo.ogDescription } : {}),
        jsonLd: [
          collectionPageSchema({
            url,
            name: content.title,
            description,
            items: (content.relatedLinks ?? []).map((l) => ({ name: l.label, url: l.url })),
          }),
          breadcrumbSchema(url),
        ].filter(Boolean),
      });
    }

    const content = loaderData.content as SubjectHubContent;
    const title = content.seo?.title ?? `${content.title} | Rank Sarthi`;
    const description =
      content.seo?.description ??
      `Every approved ${content.exam} ${content.subject} chapter route with official scope, prerequisites and learning paths.`;

    return buildHead({
      url,
      title,
      description,
      ogType: content.seo?.ogType ?? "website",
      ...(content.seo?.ogTitle ? { ogTitle: content.seo.ogTitle } : {}),
      ...(content.seo?.ogDescription ? { ogDescription: content.seo.ogDescription } : {}),
      jsonLd: [
        collectionPageSchema({
          url,
          name: `${content.exam} ${content.subject} chapter map`,
          description,
          items: chapterMapEntries(content)
            .filter((e) => e.live)
            .map((e) => ({ name: e.name, url: e.url })),
        }),
        breadcrumbSchema(url),
      ].filter(Boolean),
    });
  },
  component: SecondLevelPage,
});

function SecondLevelPage() {
  ensureBlocksRegistered();
  const data = Route.useLoaderData();

  const build = (items: { id: string; label: string }[] = []): PageRecipe =>
    data.kind === "info"
      ? infoPageRecipe(data.content as InfoPageContent, items)
      : subjectHubRecipe(data.content as SubjectHubContent, items);

  const items = jumpItemsFor(activeSlots(build()));
  const recipe = build(items);

  return (
    <PageFrame frame="F3" url={data.content.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={recipe} />
      </div>
    </PageFrame>
  );
}
