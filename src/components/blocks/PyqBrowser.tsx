import type { PyqRecord } from "@/content/types";

/**
 * B32 — PYQ browser.
 * Renders only records that carry a source reference and a rights status.
 * Question text is never reproduced unless rights permit it; the default view
 * is a provenance-first index of appearances.
 */
export function PyqBrowser({
  id = "pyqs",
  pyqs = [],
  heading = "Previous-year appearances",
}: {
  id?: string;
  pyqs?: PyqRecord[];
  heading?: string;
}) {
  const rows = pyqs.filter((p) => p.sourceRef && p.rightsStatus);
  if (!rows.length) return null;

  const sorted = [...rows].sort((a, b) => b.year - a.year);

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 space-y-3">
        {sorted.map((p, i) => (
          <li
            key={`${p.year}-${p.paper}-${i}`}
            className="rounded-xl border border-border bg-white p-4 md:flex md:items-start md:gap-6"
          >
            <p className="text-sm font-bold text-accent md:w-16 md:shrink-0">{p.year}</p>
            <div className="mt-1 md:mt-0">
              <p className="text-sm font-semibold text-primary">{p.paper}</p>
              {p.note ? <p className="mt-1 text-sm text-ink/80">{p.note}</p> : null}
              <p className="mt-2 text-xs text-muted-foreground">
                Source: {p.sourceRef} · {p.sourceType} · rights: {p.rightsStatus}
              </p>
              {p.rightsStatus !== "public-official" ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  Question text is not reproduced here for rights reasons.
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
