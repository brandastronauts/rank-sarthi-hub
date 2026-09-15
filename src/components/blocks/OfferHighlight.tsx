import type { OfferHighlight as OfferHighlightData } from "@/content/types";

/**
 * B50 — Featured commercial offer card.
 * Renders approved offer copy only. Actions are in-page anchors; a purchase
 * action is never synthesised here.
 */
export function OfferHighlight({
  id,
  heading,
  highlight,
  note,
}: {
  id?: string;
  heading?: string;
  highlight?: OfferHighlightData;
  note?: string;
}) {
  if (!highlight) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}

      <div className="mt-5 overflow-hidden rounded-2xl border border-accent/40 bg-white shadow-card">
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="p-6 md:p-8">
            <p className="eyebrow text-accent">{highlight.badge}</p>
            <p className="mt-3 text-xl font-extrabold text-primary md:text-2xl">
              {highlight.title}
            </p>
            {highlight.support ? (
              <p className="mt-2 text-sm text-ink/80">{highlight.support}</p>
            ) : null}

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {highlight.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink/85">
                  <span aria-hidden="true" className="mt-[2px] font-bold text-accent">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {highlight.bonus ? (
              <p className="mt-5 rounded-lg border border-border bg-ivory px-4 py-3 text-sm text-ink">
                <span className="font-semibold text-primary">Bonus: </span>
                {highlight.bonus}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col justify-center gap-4 border-t border-border bg-ivory p-6 md:border-l md:border-t-0 md:p-8">
            <div>
              <p className="text-3xl font-extrabold text-primary md:text-4xl">{highlight.price}</p>
              {highlight.priceLabel ? (
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {highlight.priceLabel}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={highlight.primary.href}
                className="btn-press inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {highlight.primary.label}
              </a>
              {highlight.secondary ? (
                <a
                  href={highlight.secondary.href}
                  className="btn-press inline-flex items-center justify-center rounded-lg border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/50"
                >
                  {highlight.secondary.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}
