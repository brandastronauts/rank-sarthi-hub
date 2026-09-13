import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";
import type { BlogArticle, BlogCategory } from "@/content/blog";

const filters = ["All", "JEE", "NEET", "NDA", "Exam Updates", "Preparation Strategy", "Study Resources"] as const;
type Filter = (typeof filters)[number];

function ArticleGrid({ articles }: { articles: BlogArticle[] }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <BlogCard key={article.id} article={article} />)}</div>;
}

function EditorialSection({ title, articles }: { title: string; articles: BlogArticle[] }) {
  if (!articles.length) return null;
  return <section><h2 className="text-display-md text-primary">{title}</h2><div className="mt-6"><ArticleGrid articles={articles.slice(0, 3)} /></div></section>;
}

export function BlogHome({ articles }: { articles: BlogArticle[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(() => filter === "All" ? articles : articles.filter((article) => article.category === filter || article.primaryExam === filter), [articles, filter]);
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const latest = filtered.filter((article) => article.id !== featured?.id);
  const byExam = (exam: "JEE" | "NEET" | "NDA") => articles.filter((article) => article.primaryExam === exam);
  const preparation = articles.filter((article) => (["Preparation Strategy", "Study Resources"] as BlogCategory[]).includes(article.category));

  return (
    <>
      <div className="border-b border-border bg-ivory pt-20 md:pt-24">
        <div className="container-page py-4"><nav aria-label="Breadcrumb"><ol className="flex items-center gap-2 text-sm text-muted-foreground"><li><Link to="/" className="hover:text-accent">Home</Link></li><li aria-hidden>/</li><li className="font-medium text-primary" aria-current="page">Blog</li></ol></nav></div>
      </div>
      <div className="container-page py-10 md:py-14">
        <header className="max-w-4xl">
          <p className="eyebrow text-accent">Rank Sarthi editorial</p>
          <h1 className="mt-3 text-display-lg text-primary">Rank Sarthi Learning &amp; Exam Insights</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Practical guidance, official exam updates and useful preparation insights for JEE, NEET and NDA aspirants.</p>
        </header>

        {!articles.length ? (
          <section className="mt-10 rounded-xl border border-border bg-ivory p-8 text-center">
            <h2 className="text-xl font-bold text-primary">Articles coming from the editorial team</h2>
            <p className="mt-2 text-muted-foreground">Rank Sarthi articles will appear here when they are ready.</p>
          </section>
        ) : (
          <>
            <div className="mt-8 overflow-x-auto pb-2" role="group" aria-label="Filter articles by category">
              <div className="flex min-w-max gap-2 md:min-w-0 md:flex-wrap">{filters.map((item) => <Button key={item} type="button" size="sm" variant={filter === item ? "default" : "outline"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>
            </div>

            {featured && filter === "All" ? <section className="mt-12"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Featured article</p><BlogCard article={featured} featured /></section> : null}

            <section className="mt-16"><h2 className="text-display-md text-primary">Latest articles</h2>{latest.length ? <div className="mt-6"><ArticleGrid articles={latest} /></div> : <p className="mt-4 text-muted-foreground">No articles match this category yet.</p>}</section>

            {filter === "All" ? <div className="mt-20 space-y-20"><EditorialSection title="JEE Insights" articles={byExam("JEE")} /><EditorialSection title="NEET Insights" articles={byExam("NEET")} /><EditorialSection title="NDA Insights" articles={byExam("NDA")} /><EditorialSection title="Preparation Guides" articles={preparation} /></div> : null}
          </>
        )}
      </div>

      <section className="bg-navy-deep text-primary-foreground"><div className="container-page py-12 text-center md:py-16"><h2 className="text-2xl font-bold">Preparing for an exam?</h2><div className="mt-6 flex flex-wrap justify-center gap-3">{(["jee", "neet", "nda"] as const).map((exam) => <Button key={exam} asChild variant="secondary"><Link to="/$platform" params={{ platform: exam }}>{exam.toUpperCase()}</Link></Button>)}</div></div></section>
    </>
  );
}