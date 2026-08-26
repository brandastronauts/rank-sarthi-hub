import { Link } from "@tanstack/react-router";
import { getUrl } from "@/content/registry";
import type { SyllabusSection } from "@/content/types";

/**
 * B26 — Syllabus explorer.
 * Renders the structured syllabus tree (subject → unit → topics) with
 * crawlable internal links to chapter pages that are actually built.
 * A unit with no verified topics still renders its name; nothing is invented.
 */
export function SyllabusExplorer({
  id = "syllabus",
  sections = [],
  heading = "Syllabus structure",
}: {
  id?: string;
  sections?: SyllabusSection[];
  heading?: string;
}) {
  if (!sections.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>

      <div className="mt-6 space-y-8">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-28">
            <h3 className="text-lg font-bold text-primary">{section.subject}</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {section.units.map((unit) => {
                const chapters = (unit.chapterSlugs ?? [])
                  .map((url) => ({ url, record: getUrl(url) }))
                  .filter((c) => c.record);
                return (
                  <li key={unit.id} className="rounded-xl border border-border bg-white p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-bold text-primary">{unit.name}</p>
                      {unit.variant && unit.variant !== "both" ? (
                        <span className="rounded-full bg-ice px-2 py-0.5 text-[11px] font-semibold text-primary uppercase">
                          {unit.variant}
                        </span>
                      ) : null}
                    </div>

                    {unit.topics.length ? (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {unit.topics.map((topic) => (
                          <li
                            key={topic}
                            className="rounded-md bg-ivory px-2 py-1 text-xs text-ink/80"
                          >
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
