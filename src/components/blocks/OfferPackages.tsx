import type { OfferPackage } from "@/content/types";

/**
 * B51 — Package comparison cards.
 * Prices, inclusions and "best for" lines come from the approved offer record.
 * No savings maths, no discount timers, no purchase action.
 */
export function OfferPackages({
  id,
  heading,
  intro,
  packages = [],
  valueCallout,
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  packages?: OfferPackage[];
  valueCallout?: string;
  note?: string;
}) {
  if (!packages.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {packages.map((pack) => (
          <li
            key={pack.id}
            className={`card-lift flex h-full flex-col rounded-xl border bg-white p-5 ${
              pack.featured ? "border-accent/60 shadow-card" : "border-border"
            }`}
          >
            {pack.badge ? (
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                {pack.badge}
              </p>
            ) : null}
            <h3 className="mt-1 break-words text-base font-bold text-primary">{pack.name}</h3>
            <p className="mt-2 text-2xl font-extrabold text-primary">{pack.price}</p>

            {pack.includes?.length ? (
              <>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Includes
                </p>
                <ul className="mt-2 space-y-1.5">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/85">
                      <span aria-hidden="true" className="mt-[2px] font-bold text-accent">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {pack.options?.length ? (
              <>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Options
                </p>
                <dl className="mt-2 space-y-2">
                  {pack.options.map((opt) => (
                    <div
                      key={opt.label}
                      className="rounded-lg border border-border bg-ivory px-3 py-2"
                    >
                      <dt className="text-sm font-semibold text-primary">{opt.label}</dt>
                      <dd className="mt-0.5 flex flex-wrap items-baseline justify-between gap-2 text-sm text-ink/85">
                        {opt.detail ? <span>{opt.detail}</span> : <span />}
                        <span className="font-bold text-primary">{opt.price}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </>
            ) : null}

            {pack.bestFor ? (
              <p className="mt-auto pt-4 text-xs text-ink/75">
                <span className="font-semibold text-primary">Best for: </span>
                {pack.bestFor}
              </p>
            ) : null}
          </li>
        ))}
      </ul>

      {valueCallout ? (
        <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm font-medium text-ink">
          {valueCallout}
        </p>
      ) : null}

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}
