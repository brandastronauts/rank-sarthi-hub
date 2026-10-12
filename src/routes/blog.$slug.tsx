import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { PageFrame } from "@/components/shell/PageFrame";
import { blogDataProvider } from "@/content/blog";
import { absolute } from "@/content/registry";
import { articleSchema } from "@/lib/schema";
import { buildHead } from "@/lib/seo";
import { isHiddenBlogSlug } from "@/content/blog/visibility";

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
    const [relatedResults, comments] = await Promise.all([
      Promise.all(article.relatedArticleSlugs.slice(0, 3).map((slug) => blogDataProvider.getArticleBySlug(slug))),
      blogDataProvider.listComments(article.id),
    ]);
    const relatedArticles = relatedResults.filter(
      (candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate) && !isHiddenBlogSlug(candidate!.slug),
    );
    return { article, relatedArticles, comments };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] };
    const { article } = loaderData;
    const url = `/blog/${params.slug}`;
    const canonical = article.canonicalOverride ?? absolute(url);
    const keywords = article.keywords ?? (article.tags.length ? article.tags.join(", ") : undefined);
    const head = buildHead({
      url,
      title: article.seoTitle,
      description: article.metaDescription,
      ...(keywords ? { keywords } : {}),
      ogTitle: article.title,
      ogDescription: article.excerpt,
      ogImage: article.featuredImage,
      ogType: "article",
      jsonLd: [articleSchema({ url, headline: article.title, description: article.excerpt, ...(article.publishedAt ? { published: article.publishedAt } : {}), ...(article.updatedAt ? { updated: article.updatedAt } : {}) }), dynamicBreadcrumbSchema(article.title, article.category, url)],
    });
    const meta = head.meta.map((entry) => (entry["property"] === "og:url" ? { ...entry, content: canonical } : entry));
    if (isHiddenBlogSlug(params.slug)) meta.push({ name: "robots", content: "noindex, follow" });
    return {
      ...head,
      meta,
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { article, relatedArticles, comments } = Route.useLoaderData();
  return (
    <PageFrame frame="F1" url={`/blog/${article.slug}`}>
      <BlogArticle article={article} relatedArticles={relatedArticles} comments={comments} />
    </PageFrame>
  );
}