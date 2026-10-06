import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { company } from "@/content/company";

/**
 * Renders approved legal markdown (headings, paragraphs, bullet lists, bold,
 * URLs, emails, phone) as semantic server HTML with an "On this page" nav
 * built from H2 sections. No HTML strings are injected.
 */

type Block =
  | { t: "h2"; text: string; id: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] };

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseLegal(md: string): Block[] {
  const blocks: Block[] = [];
  const lines = md.split("\n");
  let para: string[] = [];
  let list: string[] | null = null;
  const flush = () => {
    if (para.length) blocks.push({ t: "p", text: para.join(" ").trim() });
    para = [];
    if (list) blocks.push({ t: "ul", items: list });
    list = null;
  };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^# /.test(line) || /^\*\*Last updated:/.test(line)) { flush(); continue; }
    if (line.trim() === "") { flush(); continue; }
    if (line.startsWith("## ")) { flush(); const text = line.slice(3).trim(); blocks.push({ t: "h2", text, id: slugify(text) }); continue; }
    if (line.startsWith("### ")) { flush(); blocks.push({ t: "h3", text: line.slice(4).trim() }); continue; }
    if (line.startsWith("- ")) {
      if (para.length) { blocks.push({ t: "p", text: para.join(" ").trim() }); para = []; }
      (list ??= []).push(line.slice(2).trim());
      continue;
    }
    if (list && /^\s+/.test(raw)) { list[list.length - 1] += " " + line.trim(); continue; }
    if (list) { blocks.push({ t: "ul", items: list }); list = null; }
    para.push(line.trim());
  }
  flush();
  return blocks;
}

const linkCls = "break-words text-accent underline underline-offset-4 hover:text-red-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const TOKEN = /(\*\*[^*]+\*\*|https:\/\/ranksarthi\.com\/[a-z-]*|[a-z]+@ranksarthi\.com|\+91 92205 52551)/g;

function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((p, i): ReactNode => {
        if (p.startsWith("**")) return <strong key={i} className="font-semibold text-primary">{p.slice(2, -2)}</strong>;
        if (p.startsWith("https://ranksarthi.com/")) {
          const path = p.replace("https://ranksarthi.com", "") || "/";
          return <Link key={i} to={path} className={linkCls}>{p}</Link>;
        }
        if (p.endsWith("@ranksarthi.com")) return <a key={i} href={`mailto:${p}`} className={linkCls}>{p}</a>;
        if (p === company.phoneDisplay) return <a key={i} href={company.phoneHref} className={linkCls}>{p}</a>;
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function LegalDocument({
  title,
  lastUpdated,
  markdown,
  related,
}: {
  title: string;
  lastUpdated: string;
  markdown: string;
  related: { label: string; to: string }[];
}) {
  const blocks = parseLegal(markdown);
  const toc = blocks.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");

  const tocList = (
    <ol className="space-y-2 text-sm">
      {toc.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="block py-1 text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-ring">
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <nav aria-label="On this page" className="sticky top-28">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">On this page</p>
          <div className="mt-4">{tocList}</div>
        </nav>
      </aside>

      <article className="min-w-0 max-w-3xl">
        <header className="border-b border-border pb-6">
          <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <details className="mt-6 rounded-lg border border-border bg-card p-4 lg:hidden">
          <summary className="cursor-pointer text-sm font-semibold text-primary">On this page</summary>
          <nav aria-label="On this page" className="mt-3">{tocList}</nav>
        </details>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
          {blocks.map((b, i) => {
            if (b.t === "h2")
              return <h2 key={i} id={b.id} className="scroll-mt-28 pt-6 font-display text-2xl font-bold text-primary">{b.text}</h2>;
            if (b.t === "h3") return <h3 key={i} className="pt-2 text-lg font-semibold text-primary">{b.text}</h3>;
            if (b.t === "ul")
              return (
                <ul key={i} className="list-disc space-y-1.5 pl-6 marker:text-accent">
                  {b.items.map((it, j) => <li key={j}><Inline text={it} /></li>)}
                </ul>
              );
            return <p key={i}><Inline text={b.text} /></p>;
          })}
        </div>

        <nav aria-label="Related pages" className="mt-12 border-t border-border pt-6">
          <p className="text-sm font-semibold text-primary">Related</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((r) => (
              <li key={r.to}><Link to={r.to} className={linkCls}>{r.label}</Link></li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
