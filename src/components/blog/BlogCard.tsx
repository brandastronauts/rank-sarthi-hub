import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { BlogArticle } from "@/content/blog";

function DateLine({ article }: { article: BlogArticle }) {
  const date = article.updatedAt ?? article.publishedAt;
  if (!date) return null;
  return (
    <time dateTime={date} className="text-xs text-muted-foreground">
      {article.updatedAt ? "Updated " : "Published "}
      {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(date))}
    </time>
  );
}

export function BlogCard({ article, featured = false }: { article: BlogArticle; featured?: boolean }) {
  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-xl border border-border bg-card shadow-card md:grid-cols-[1.05fr_1fr]">
        <img
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          className="aspect-[16/10] h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="flex flex-col justify-center p-6 md:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{article.category}</p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">{article.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
          <div className="mt-4"><DateLine article={article} /></div>
          <Button asChild className="mt-6 w-fit">
            <Link to="/blog/$slug" params={{ slug: article.slug }}>
              Read Article <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <img
        src={article.featuredImage}
        alt={article.featuredImageAlt}
        className="aspect-[16/9] w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{article.category}</p>
        <h3 className="mt-2 text-lg font-bold text-primary">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <div className="mt-4"><DateLine article={article} /></div>
        <Button asChild variant="link" className="mt-3 h-auto w-fit justify-start p-0 text-accent">
          <Link to="/blog/$slug" params={{ slug: article.slug }}>
            Read Article <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </article>
  );
}