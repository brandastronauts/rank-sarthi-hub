import { formatFreshnessValue, type FreshnessChangeLogEntry } from "@/content/freshness/panel";

/**
 * B46 — "What changed".
 * Renders only human-approved factual changes. Daily no-change checks, parser
 * repairs and internal metadata updates never appear here, so the block is
 * absent until a real approved change exists.
 */
export function ChangeLogBlock({
  id = "what-changed",
  heading = "What changed",
  entries = [],
}: {
  id?: string;
  heading?: string;
  entries?: FreshnessChangeLogEntry[];
}) {
  const visible = entries.filter((e) => e.visible);
  if (!visible.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ol className="mt-5 space-y-3">
        {visible.map((e) => (
          <li key={e.id} className="rounded-xl border border-border bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-accent">{e.approvedAt}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{e.publicSummary}</p>
            <p className="mt-2 text-sm text-ink/80">Previous: {formatFreshnessValue(e.oldValue)}</p>
            <p className="text-sm text-ink/80">Current: {formatFreshnessValue(e.newValue)}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {e.sourceAuthority} ·{" "}
              <a
                href={e.sourceUrl}
                rel="nofollow noopener"
                target="_blank"
                className="underline underline-offset-4"
              >
                Official source
              </a>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
