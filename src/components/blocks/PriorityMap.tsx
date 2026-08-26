import type { PriorityRecord } from "@/content/types";

/**
 * B28 — Chapter priority map.
 * Priority is never computed in the template; each entry states its basis.
 */
export function PriorityMap({
  id = "priority",
  priority = [],
  heading = "Where this chapter sits in preparation priority",
}: {
  id?: string;
  priority?: PriorityRecord[];
  heading?: string;
}) {
  const rows = priority.filter((p) => p.basis);
  if (!rows.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {rows.map((p) => (
          <li key={p.label} className="rounded-xl border border-border bg-ivory p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{p.label}</p>
            <p className="mt-1 text-base font-bold text-primary">{p.value}</p>
            <p className="mt-2 text-xs text-ink/75">Basis: {p.basis}</p>
            <p className="mt-1 text-xs text-muted-foreground capitalize">Confidence: {p.confidence}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
