import { Link } from "@tanstack/react-router";
import { getUrl } from "@/content/registry";
import { getSources } from "@/content/sources";
import type { SyllabusSection } from "@/content/types";

/**
 * B26 — Syllabus explorer.
 * Renders the structured syllabus tree (subject → official unit → scope) with
 * crawlable internal links to chapter pages that are actually built.
 *
 * Provenance rule: `unit.name` is always the authority-issued heading, while
 * `unit.group` is a Rank Sarthi navigation layer. The two are visually
 * separated and labelled so an editorial grouping can never be mistaken for
 * official structure. Nothing is invented; an empty unit renders its heading.
 */
export function SyllabusExplorer({
  id = "syllabus",
  sections = [],
  heading = "Syllabus structure",
  officialLabel,
  editorialLabel,
  intro,
  readingNotes = [],
  sourceRefs = [],
  verifiedOn,
  hideVariants = false,
}: {
  id?: string;
  sections?: SyllabusSection[];
  heading?: string;
  officialLabel?: string;
  editorialLabel?: string;
  intro?: string;
  readingNotes?: string[];
  sourceRefs?: string[];
  verifiedOn?: string;
  /** Exam-scoped explorers already state their exam; per-unit badges add noise. */
  hideVariants?: boolean;
}) {
  if (!sections.length) return null;
  const refs = getSources(sourceRefs);

  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex flex-wrap items-center gap-2">
        {officialLabel ? (
          <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {officialLabel}
          </span>
        ) : null}
        {editorialLabel ? (
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
            {editorialLabel}
          </span>
        ) : null}
      </div>

      <h2 className="mt-3 text-display-md text-primary">{heading}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      {readingNotes.length ? (
        <ul className="mt-4 space-y-1.5 rounded-xl border border-border bg-ivory p-4 text-sm text-ink/80">
          {readingNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}

      {refs.length || verifiedOn ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Source:{" "}
          {refs.map((s, i) => (
            <span key={s.id}>
              {i > 0 ? "; " : ""}
              {s.url ? (
                <a href={s.url} rel="noopener nofollow" target="_blank" className="underline underline-offset-4">
                  {s.label}
                </a>
              ) : (
                s.label
              )}{" "}
              ({s.publisher})
            </span>
          ))}
          {verifiedOn ? ` · verified ${verifiedOn}` : ""}
        </p>
      ) : null}

      <div className="mt-6 space-y-8">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-28">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-bold text-primary">{section.subject}</h3>
              {section.countLabel ? (
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {section.countLabel}
                </span>
              ) : null}
            </div>

            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {section.units.map((unit) => {
                const chapters = (unit.chapterSlugs ?? [])
                  .map((url) => ({ url, record: getUrl(url) }))
                  .filter((c) => c.record);
                return (
                  <li key={unit.id} className="rounded-xl border border-border bg-white p-4">
                    {unit.group ? (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                        {unit.group}
                      </p>
                    ) : null}

                    <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-bold text-primary">{unit.name}</p>
                      {!hideVariants && unit.variant && unit.variant !== "both" ? (
                        <span className="rounded-full bg-ice px-2 py-0.5 text-[11px] font-semibold uppercase text-primary">
                          {unit.variant}
                        </span>
                      ) : null}
                    </div>

                    {unit.scope ? <p className="mt-2 text-xs leading-relaxed text-ink/80">{unit.scope}</p> : null}

                    {unit.topics.length ? (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {unit.topics.map((topic) => (
                          <li key={topic} className="rounded-md bg-ivory px-2 py-1 text-xs text-ink/80">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {chapters.length ? (
                      <ul className="mt-3 space-y-1.5">
                        {chapters.map((c) => (
                          <li key={c.url}>
                            {c.record!.buildStatus === "built" ? (
                              <Link
                                to={c.url}
                                rel={c.record!.indexation === "index" ? undefined : "nofollow"}
                                className="text-sm font-semibold text-accent underline underline-offset-4"
                              >
                                {c.record!.name}
                              </Link>
                            ) : (
                              <span className="text-sm text-muted-foreground">{c.record!.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {unit.note ? <p className="mt-3 text-xs text-muted-foreground">{unit.note}</p> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
