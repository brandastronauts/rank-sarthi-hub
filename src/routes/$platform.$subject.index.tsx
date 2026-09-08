import { createFileRoute, notFound } from "@tanstack/react-router";
import { ensureBlocksRegistered } from "@/blocks";
import { PageFrame } from "@/components/shell/PageFrame";
import { JumpNav } from "@/components/shell/JumpNav";
import { RecipeRenderer, activeSlots } from "@/lib/recipe";
import { subjectHubRecipe, chapterMapEntries } from "@/content/recipes/subject";
import { getSubjectHub } from "@/content/subjects";
import { getUrl } from "@/content/registry";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { jumpItemsFor } from "@/lib/jump-nav";

/**
 * T04 — generic subject hub.
 * A subject renders only when it has a SubjectHubContent record AND its
 * registry record is built, so no other subject route goes live by accident.
 */
export const Route = createFileRoute("/$platform/$subject/")({
  loader: ({ params }) => {
    const content = getSubjectHub(params.platform, params.subject);
    const record = getUrl(`/${params.platform}/${params.subject}`);
    if (!content || record?.buildStatus !== "built") throw notFound();
    return { content };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | Rank Sarthi" }, { name: "robots", content: "noindex" }] };
    }
    const { content } = loaderData;
    const url = `/${params.platform}/${params.subject}`;
    const title = content.seo?.title ?? `${content.title} | Rank Sarthi`;
    const description =
      content.seo?.description ??
      `Every approved ${content.exam} ${content.subject} chapter route with official scope, prerequisites and learning paths.`;

    return buildHead({
      url,
      title,
      description,
      ogType: content.seo?.ogType ?? "website",
      ogTitle: content.seo?.ogTitle,
      ogDescription: content.seo?.ogDescription,
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
  component: SubjectHubPage,
});

function SubjectHubPage() {
  ensureBlocksRegistered();
  const { content } = Route.useLoaderData();
  const items = jumpItemsFor(activeSlots(subjectHubRecipe(content)));
  const recipe = subjectHubRecipe(content, items);

  return (
    <PageFrame frame="F3" url={content.url} aside={<JumpNav items={items} />}>
      <div className="space-y-14">
        <RecipeRenderer recipe={recipe} />
      </div>
    </PageFrame>
  );
}
