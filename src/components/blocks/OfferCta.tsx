import type { OfferCtaData } from "@/content/types";

/**
 * B53 — Offer / enrolment call to action.
 *
 * The enrolment action renders ONLY when the content record supplies a real
 * payment/enrolment URL. Until then the block shows the in-page action plus an
 * honest pending note — never a dead "Buy now" button.
 */
export function OfferCta({
  id,
  heading,
  cta,
}: {
  id?: string;
  heading?: string;
  cta?: OfferCtaData;
}) {
  if (!cta) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <div className="rounded-2xl border border-border bg-navy-gradient-soft p-6 md:p-8">
        <h2 className="text-display-md text-primary">{heading ?? cta.heading}</h2>
        {cta.body ? <p className="mt-3 max-w-2xl text-sm text-ink/85">{cta.body}</p> : null}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={cta.inPage.href}
            className="btn-press inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {cta.inPage.label}
          </a>

          {cta.enrolmentUrl ? (
            <a
              href={cta.enrolmentUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="btn-press inline-flex items-center justify-center rounded-lg border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/50"
            >
              {cta.enrolmentLabel ?? "Enrol"}
            </a>
          ) : cta.pendingNote ? (
            <p className="text-sm text-muted-foreground">{cta.pendingNote}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
