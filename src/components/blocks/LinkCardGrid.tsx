import { Link } from "@tanstack/react-router";
import { getUrl, isIndexable } from "@/content/registry";

export interface LinkCardItem {
  url: string;
  label: string;
  /** Real resource type, e.g. Update, Official Resource, Syllabus, Tool. */
  type: string;
  description?: string;
}

/**
 * B48 — Editorial link-card grid (T26 hub).
 * Every card must resolve to a URL that exists in the registry AND is built,
 * so the hub can never surface a planned, blocked or invented destination.
 * Cards carry their real resource type; nothing is labelled "Article" unless
 * the content record says so.
 */
export function LinkCardGrid({
  id,
  heading,
  intro,
  items = [],
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  items?: LinkCardItem[];
  note?: string;
}) {
  const live = items
    .map((item) => ({ item, record: getUrl(item.url) }))
    .filter((e) => e.record?.buildStatus === "built");

  if (!live.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {live.map(({ item, record }) => (
          <li key={item.url}>
            <Link
              to={item.url}
              rel={isIndexable(record) ? undefined : "nofollow"}
              className="card-lift block h-full rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                {item.type}
              </p>
              <p className="mt-1 break-words text-sm font-bold text-primary">{item.label}</p>
              {item.description ? (
                <p className="mt-1 text-xs text-ink/75">{item.description}</p>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}
