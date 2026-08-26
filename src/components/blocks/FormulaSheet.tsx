import type { FormulaRecord } from "@/content/types";

/**
 * B29 — Formula / concept sheet.
 * Each formula carries plain-language meaning, variables, units, when to use
 * it and an accessible text reading. Cards, not a wide table, so the sheet
 * stays usable at 390px.
 */
export function FormulaSheet({
  id = "formulas",
  formulas = [],
  heading = "Formula sheet",
}: {
  id?: string;
  formulas?: FormulaRecord[];
  heading?: string;
}) {
  if (!formulas.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 grid gap-4 lg:grid-cols-2">
        {formulas.map((f) => (
          <li key={f.id} className="rounded-2xl border border-border bg-white p-5">
            <p
              className="overflow-x-auto rounded-lg bg-navy px-4 py-3 font-mono text-sm text-white"
              aria-hidden="true"
            >
              {f.expression}
            </p>
            <p className="sr-only">{f.accessibleText}</p>

            <p className="mt-4 text-sm text-ink/85">{f.meaning}</p>

            {f.variables.length ? (
              <dl className="mt-4 space-y-1.5">
                {f.variables.map((v) => (
                  <div key={v.symbol} className="flex flex-wrap gap-x-2 text-xs">
                    <dt className="font-mono font-semibold text-primary">{v.symbol}</dt>
                    <dd className="text-ink/75">
                      {v.meaning}
                      {v.unit ? <span className="text-muted-foreground"> ({v.unit})</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <p className="mt-4 text-xs text-muted-foreground">
              <span className="font-semibold uppercase tracking-wide">Use when</span> — {f.useWhen}
            </p>
            {f.commonTrap ? (
              <p className="mt-2 rounded-lg bg-danger/5 px-3 py-2 text-xs text-danger">
                <span className="font-semibold uppercase tracking-wide">Common trap</span> — {f.commonTrap}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
