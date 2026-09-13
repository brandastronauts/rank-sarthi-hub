import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { PageFrame } from "@/components/shell/PageFrame";
import { blogDataProvider } from "@/content/blog";
import { absolute } from "@/content/registry";
import { articleSchema } from "@/lib/schema";
import { buildHead } from "@/lib/seo";

function dynamicBreadcrumbSchema(title: string, category: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Homepage", item: absolute("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absolute("/blog") },
      { "@type": "ListItem", position: 3, name: category },
      { "@type": "ListItem", position: 4, name: title, item: absolute(url) },
    ],
  };
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const article = await blogDataProvider.getArticleBySlug(params.slug);
    if (!article) throw notFound();
    const all = await blogDataProvider.listArticles();
    const relatedArticles = article.relatedArticleSlugs
      .map((slug) => all.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate))
      .slice(0, 3);
    return { article, relatedArticles };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] };
    const { article } = loaderData;
    const url = `/blog/${params.slug}`;
    const canonical = article.canonicalOverride ?? absolute(url);
    const head = buildHead({
      url,
      title: article.seoTitle,
      description: article.metaDescription,
      ogTitle: article.title,
      ogDescription: article.excerpt,
      ogType: "article",
      jsonLd: [articleSchema({ url, headline: article.title, description: article.excerpt, ...(article.publishedAt ? { published: article.publishedAt } : {}), ...(article.updatedAt ? { updated: article.updatedAt } : {}) }), dynamicBreadcrumbSchema(article.title, article.category, url)],
    });
    return {
      ...head,
      meta: head.meta
        .map((entry) => entry["property"] === "og:url" ? { ...entry, content: canonical } : entry)
        .concat({ name: "robots", content: "noindex, follow" }),
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { article, relatedArticles } = Route.useLoaderData();
  return <PageFrame frame="F1" url={`/blog/${article.slug}`}><BlogArticle article={article} relatedArticles={relatedArticles} /></PageFrame>;
}