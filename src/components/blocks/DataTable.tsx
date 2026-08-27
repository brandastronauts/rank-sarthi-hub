/**
 * B25 — Structured data table.
 * Recomposes into stacked label/value cards below md so dense academic tables
 * remain readable at 390px without horizontal scrolling.
 */
export function DataTable({
  id,
  caption,
  intro,
  columns,
  rows,
  note,
}: {
  id?: string;
  caption?: string;
  intro?: string;
  columns: string[];
  rows: string[][];
  note?: string;
}) {
  if (!columns.length || !rows.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {caption ? <h2 className="text-display-md text-primary">{caption}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      {/* Desktop / tablet */}
      <div className="mt-5 hidden overflow-hidden rounded-xl border border-border md:block">
        <table className="w-full border-collapse text-left text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead className="bg-ivory">
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-semibold text-primary">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, i) => (
              <tr key={i} className="bg-white align-top">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-ink/85">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: one card per row */}
      <ul className="mt-5 space-y-3 md:hidden">
        {rows.map((row, i) => (
          <li key={i} className="rounded-xl border border-border bg-white p-4">
            <dl className="space-y-2">
              {row.map((cell, j) => (
                <div key={j} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {columns[j]}
                  </dt>
                  <dd className="text-sm text-ink/85">{cell}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}
