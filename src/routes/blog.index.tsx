import { createFileRoute } from "@tanstack/react-router";
import { BlogHome } from "@/components/blog/BlogHome";
import { PageFrame } from "@/components/shell/PageFrame";
import { blogDataProvider } from "@/content/blog";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildHead } from "@/lib/seo";

const title = "Learning & Exam Insights | Rank Sarthi";
const description = "Practical guidance, official exam updates and useful preparation insights for JEE, NEET and NDA aspirants.";

export const Route = createFileRoute("/blog/")({
  loader: () => blogDataProvider.listArticles(),
  head: ({ loaderData }) => buildHead({
    url: "/blog",
    title,
    description,
    ogTitle: "Rank Sarthi Learning & Exam Insights",
    ogDescription: description,
    ogType: "website",
    jsonLd: [collectionPageSchema({ url: "/blog", name: "Rank Sarthi Learning & Exam Insights", description, items: (loaderData ?? []).map((article) => ({ name: article.title, url: `/blog/${article.slug}` })) }), breadcrumbSchema("/blog")],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const articles = Route.useLoaderData();
  return <PageFrame frame="F1" url="/blog"><BlogHome articles={articles} /></PageFrame>;
}