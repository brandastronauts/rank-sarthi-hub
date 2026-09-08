import { Link } from "@tanstack/react-router";
import { isIndexable, getUrl } from "@/content/registry";

export interface ChapterMapEntry {
  url: string;
  name: string;
  scope: string;
  note: string;
  contextual?: boolean;
  /** False when the route is not built: rendered as a labelled non-link. */
  live: boolean;
}

/**
 * B44 — Subject chapter map.
 *
 * Registry-driven: entries are derived from the URL registry, never hand
 * listed. Built routes are clickable regardless of indexation; noindex
 * targets simply carry rel="nofollow". Unbuilt routes render as labelled
 * non-links so no dead anchor is ever emitted.
 */
export function SubjectChapterMap({
  id = "chapters",
  heading,
  scopeNote,
  entries = [],
  contextualHeading,
  contextualNote,
}: {
  id?: string;
  heading: string;
  scopeNote?: string;
  entries?: ChapterMapEntry[];
  contextualHeading?: string;
  contextualNote?: string;
}) {
  if (!entries.length) return null;

  const current = entries.filter((e) => !e.contextual);
  const contextual = entries.filter((e) => e.contextual);

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      {scopeNote ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{scopeNote}</p> : null}

      <Grid entries={current} />

      {contextual.length ? (
        <div className="mt-10 rounded-2xl border border-border bg-ivory p-5">
          <h3 className="text-lg font-bold text-primary">
            {contextualHeading ?? "Contextual resources (not current syllabus)"}
          </h3>
          {contextualNote ? <p className="mt-2 max-w-3xl text-sm text-ink/80">{contextualNote}</p> : null}
          <Grid entries={contextual} />
        </div>
      ) : null}
    </section>
  );
}

function Grid({ entries }: { entries: ChapterMapEntry[] }) {
  if (!entries.length) return null;

  return (
    <ol className="mt-5 grid gap-3 md:grid-cols-2">
      {entries.map((entry, i) => {
        const body = (
          <>
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-bold text-primary">
                <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                {entry.name}
              </p>
              <span className="shrink-0 rounded-full border border-border bg-ivory px-2 py-0.5 text-[11px] font-semibold text-ink/75">
                {entry.scope}
              </span>
            </div>
            <p className="mt-2 text-xs text-ink/75">{entry.note}</p>
          </>
        );

        return (
          <li key={entry.url}>
            {entry.live ? (
              <Link
                to={entry.url}
                rel={isIndexable(getUrl(entry.url)) ? undefined : "nofollow"}
                className="card-lift block h-full rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50"
              >
                {body}
              </Link>
            ) : (
              <div
                aria-disabled="true"
                title="This page is not available yet."
                className="block h-full rounded-xl border border-dashed border-border bg-white/60 p-4 opacity-80"
              >
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
