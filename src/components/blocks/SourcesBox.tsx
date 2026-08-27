import { getSource } from "@/content/sources";
import { getPerson } from "@/content/people";

/**
 * B37 — Author / reviewer / sources box.
 * Renders only resolvable sources and only VERIFIED real people. When no
 * verified reviewer exists the reviewer line is omitted entirely — the page
 * never asserts human review that has not happened.
 */
export function SourcesBox({
  id = "sources",
  sources = [],
  reviewerId,
  authorId,
  updated,
  heading = "Sources and provenance",
  note,
  contributorPolicy = [],
}: {
  id?: string;
  sources?: string[];
  reviewerId?: string;
  authorId?: string;
  updated?: string;
  heading?: string;
  note?: string;
  contributorPolicy?: string[];
}) {
  const refs = sources.map(getSource).filter(Boolean);
  const reviewer = reviewerId ? getPerson(reviewerId) : undefined;
  const author = authorId ? getPerson(authorId) : undefined;

  if (!refs.length && !reviewer && !author && !updated && !note && !contributorPolicy.length) return null;

  return (
    <section id={id} className="scroll-mt-28 rounded-2xl border border-border bg-ivory p-6">
      <h2 className="text-lg font-bold text-primary">{heading}</h2>
      {note ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{note}</p> : null}

      {refs.length ? (
        <ul className="mt-4 space-y-2">
          {refs.map((s) => (
            <li key={s!.id} className="text-sm text-ink/85">
              {s!.url ? (
                <a href={s!.url} rel="noopener nofollow" target="_blank" className="underline underline-offset-4">
                  {s!.label}
                </a>
              ) : (
                s!.label
              )}
              <span className="text-muted-foreground">
                {" "}
                — {s!.publisher} · {s!.sourceType}
                {s!.lastVerified ? ` · checked ${s!.lastVerified}` : ""}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          No verified sources have been attached to this page yet.
        </p>
      )}

      <dl className="mt-5 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
        {author?.verified ? (
          <div>
            <dt className="font-semibold uppercase tracking-wide">Written by</dt>
            <dd className="text-ink/85">
              {author.name} — {author.role}
            </dd>
          </div>
        ) : null}
        {reviewer?.verified ? (
          <div>
            <dt className="font-semibold uppercase tracking-wide">Reviewed by</dt>
            <dd className="text-ink/85">
              {reviewer.name} — {reviewer.role}
            </dd>
          </div>
        ) : null}
        {updated ? (
          <div>
            <dt className="font-semibold uppercase tracking-wide">Last updated</dt>
            <dd className="text-ink/85">{updated}</dd>
          </div>
        ) : null}
      </dl>

      {contributorPolicy.length ? (
        <div className="mt-5 rounded-xl border border-border bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Contributor requirements for this page
          </p>
          <ul className="mt-2 space-y-1.5">
            {contributorPolicy.map((c) => (
              <li key={c} className="text-sm text-ink/85">
                {c}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
