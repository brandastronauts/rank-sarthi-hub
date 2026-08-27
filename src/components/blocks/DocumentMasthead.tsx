import { RichText } from "@/components/content/RichText";
import type { ContentStatus, RichText as RichTextNodes } from "@/content/types";

/**
 * B34 — Document masthead + answer-first block.
 * Shared by T05 and T06; the only H1 on the page.
 */
export function DocumentMasthead({
  id = "top",
  eyebrow,
  title,
  intent,
  answer,
  contentStatus,
  meta,
  chips,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intent?: string;
  answer?: RichTextNodes;
  contentStatus?: ContentStatus;
  meta?: { label: string; value: string }[];
  chips?: string[];
}) {
  return (
    <header id={id} className="scroll-mt-28">
      {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
      <h1 className="mt-3 max-w-3xl text-display-lg text-primary">{title}</h1>
      {intent ? <p className="mt-4 max-w-2xl text-base text-muted-foreground">{intent}</p> : null}

      {meta?.length ? (
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-primary">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {chips?.length ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-border bg-ivory px-3 py-1 text-xs font-semibold text-ink/80"
            >
              {chip}
            </li>
          ))}
        </ul>
      ) : null}

      {contentStatus && contentStatus !== "verified" ? (
        <p className="mt-6 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-ink">
          Content status: <strong className="font-semibold">{contentStatus}</strong>. Verified academic content
          for this page has not been loaded yet, so the page is excluded from search indexing and the sitemap.
        </p>
      ) : null}

      {answer?.length ? (
        <div className="mt-8 rounded-2xl border border-border bg-ivory p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">In short</p>
          <div className="mt-3">
            <RichText nodes={answer} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
