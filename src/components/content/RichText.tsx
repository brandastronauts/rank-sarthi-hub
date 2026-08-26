import { Link } from "@tanstack/react-router";
import type { InlineText, RichText as RichTextNodes } from "@/content/types";

/**
 * Renders the safe structured rich-text format as semantic server HTML.
 * No HTML strings, no dangerouslySetInnerHTML — CMS-portable by design.
 */

function Inline({ nodes }: { nodes: InlineText[] }) {
  return (
    <>
      {nodes.map((node, i) => {
        let content: React.ReactNode = node.text;
        if (node.code) content = <code className="rounded bg-muted px-1.5 py-0.5 text-[0.95em]">{content}</code>;
        if (node.bold) content = <strong className="font-semibold text-primary">{content}</strong>;
        if (node.italic) content = <em>{content}</em>;
        if (node.href) {
          content = node.href.startsWith("/") ? (
            <Link to={node.href} className="text-accent underline underline-offset-4 hover:text-red-hover">
              {content}
            </Link>
          ) : (
            <a
              href={node.href}
              rel="noopener"
              className="text-accent underline underline-offset-4 hover:text-red-hover"
            >
              {content}
            </a>
          );
        }
        return <span key={i}>{content}</span>;
      })}
    </>
  );
}

const noteTone = {
  info: "border-ice bg-ice/70 text-primary",
  caution: "border-warning/30 bg-warning/10 text-ink",
  source: "border-border bg-ivory text-muted-foreground",
} as const;

export function RichText({ nodes, className = "" }: { nodes?: RichTextNodes; className?: string }) {
  if (!nodes?.length) return null;

  return (
    <div className={`space-y-4 text-base leading-relaxed text-ink/85 ${className}`}>
      {nodes.map((node, i) => {
        switch (node.type) {
          case "paragraph":
            return (
              <p key={i}>
                <Inline nodes={node.children} />
              </p>
            );
          case "heading": {
            const Tag = (`h${node.level}` as const) satisfies "h2" | "h3" | "h4";
            return (
              <Tag key={i} id={node.id} className="pt-2 text-xl font-bold text-primary">
                <Inline nodes={node.children} />
              </Tag>
            );
          }
          case "list": {
            const Tag = node.ordered ? "ol" : "ul";
            return (
              <Tag
                key={i}
                className={`space-y-2 pl-5 ${node.ordered ? "list-decimal" : "list-disc"} marker:text-gold`}
              >
                {node.items.map((item, j) => (
                  <li key={j}>
                    <Inline nodes={item} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "note":
            return (
              <aside key={i} className={`rounded-lg border px-4 py-3 text-[0.95rem] ${noteTone[node.tone ?? "info"]}`}>
                <Inline nodes={node.children} />
              </aside>
            );
          case "definition":
            return (
              <dl key={i} className="rounded-lg border border-border bg-white px-4 py-3">
                <dt className="text-sm font-semibold tracking-wide text-primary uppercase">{node.term}</dt>
                <dd className="mt-1">
                  <Inline nodes={node.children} />
                </dd>
              </dl>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
