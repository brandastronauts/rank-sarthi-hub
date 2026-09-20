import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "./BlogCard";
import { BlogContentRenderer } from "./BlogContentRenderer";
import { TableOfContents, tableOfContentsFor } from "./TableOfContents";
import { getUrl, isIndexable } from "@/content/registry";
import type { BlogArticle as BlogArticleData, BlogInline } from "@/content/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(date));
}

function Inline({ nodes }: { nodes: BlogInline[] }) {
  return nodes.map((node, index) => {
    let content: React.ReactNode = node.text;
    if (node.bold) content = <strong className="font-semibold text-primary">{content}</strong>;
    if (node.italic) content = <em>{content}</em>;
    if (node.href) {
      content = node.href.startsWith("/") ? (
        <Link to={node.href} className="text-accent underline underline-offset-4">{content}</Link>
      ) : (
        <a href={node.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">{content}</a>
      );
    }
    return <span key={`${index}-${node.text}`}>{content}</span>;
  });
}

function BlogBreadcrumbs({ article }: { article: BlogArticleData }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-hidden border-b border-border bg-ivory pt-20 md:pt-24">
      <ol className="container-page flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-muted-foreground">
        <li><Link to="/" className="hover:text-accent">Home</Link></li><li aria-hidden>/</li>
        <li><Link to="/blog" className="hover:text-accent">Blog</Link></li><li aria-hidden>/</li>
        <li>{article.category}</li><li aria-hidden>/</li>
        <li className="min-w-0 break-words font-medium text-primary" aria-current="page">{article.title}</li>
      </ol>
    </nav>
  );
}

export function BlogArticle({ article, relatedArticles }: { article: BlogArticleData; relatedArticles: BlogArticleData[] }) {
  const toc = tableOfContentsFor(article.content);
  const resources = article.relatedInternalRoutes
    .map((url) => ({ url, record: getUrl(url) }))
    .filter((item) => item.record?.buildStatus === "built")
    .slice(0, 5);

  return (
    <>
      <BlogBreadcrumbs article={article} />
      <article className="container-page py-10 md:py-14">
        <header className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="text-accent">{article.category}</Badge>
          <h1 className="mt-4 break-words text-display-lg text-primary">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{article.excerpt}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {article.publishedAt ? <div><dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Published</dt><dd className="mt-1 font-medium text-primary"><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></dd></div> : null}
            {article.updatedAt && article.updatedAt !== article.publishedAt ? <div><dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Updated</dt><dd className="mt-1 font-medium text-primary"><time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></dd></div> : null}
          </dl>
          {/* Internal review state is never surfaced publicly. */}
          <img src={article.featuredImage} alt={article.featuredImageAlt} className="mt-8 aspect-[16/8] w-full rounded-xl object-cover shadow-card" fetchPriority="high" />
        </header>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside><TableOfContents items={toc} /></aside>
          <div className="min-w-0 max-w-3xl">
            {article.keyTakeaways?.length ? <section className="mb-8 rounded-xl border border-border bg-ivory p-6"><h2 className="text-xl font-bold text-primary">Key takeaways</h2><ul className="mt-3 list-disc space-y-2 pl-5 marker:text-gold">{article.keyTakeaways.map((item, index) => <li key={index}><Inline nodes={item} /></li>)}</ul></section> : null}
            <BlogContentRenderer content={article.content} />

            {article.sources.length ? <section className="mt-12 border-t border-border pt-8"><h2 className="text-2xl font-bold text-primary">Sources and references</h2><ul className="mt-5 space-y-3">{article.sources.map((source) => <li key={source.url} className="rounded-lg border border-border bg-card p-4"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{source.sourceType}{source.official ? " · Official" : ""}</p><a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 font-semibold text-accent hover:text-red-hover">{source.name}<ArrowUpRight className="size-4" aria-hidden /></a></li>)}</ul></section> : null}
          </div>
        </div>

        {relatedArticles.length ? <section className="mx-auto mt-16 max-w-6xl"><h2 className="text-display-md text-primary">Related articles</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{relatedArticles.slice(0, 3).map((related) => <BlogCard key={related.id} article={related} />)}</div></section> : null}

        {resources.length ? <section className="mx-auto mt-16 max-w-6xl"><h2 className="text-display-md text-primary">Related Rank Sarthi resources</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{resources.map(({ url, record }) => <Button key={url} asChild variant="outline" className="h-auto min-h-12 justify-between whitespace-normal py-3 text-left"><Link to={url} rel={isIndexable(record) ? undefined : "nofollow"}>{record?.name}<ArrowUpRight aria-hidden /></Link></Button>)}</div></section> : null}
      </article>
    </>
  );
}