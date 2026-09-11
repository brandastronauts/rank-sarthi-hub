import type { ResourceAction, ResourceRow } from "@/content/types";

/**
 * B47 — Resource library (platform-agnostic).
 *
 * Renders exam-event resource rows where every action carries its own
 * provenance: an authority-hosted file, a validated third-party copy, or an
 * explicitly inactive "verification pending" state. There is no download
 * button without a real verified destination, and a third-party copy is
 * never presented with an authority badge.
 *
 * The layout is a card per exam event so dense provenance metadata stays
 * readable at 390px without a horizontally scrolling table.
 */

const BADGE_TONE: Record<string, string> = {
  OFFICIAL_AUTHORITY_COPY: "bg-primary text-primary-foreground",
  VERIFIED_TEST_BOOKLET_SCAN: "bg-ivory text-primary border border-border",
  VERIFIED_PAPER_RECONSTRUCTION: "bg-ivory text-primary border border-border",
  SOURCE_NOT_VERIFIED: "bg-muted text-muted-foreground",
  NOT_AVAILABLE: "bg-muted text-muted-foreground",
};

/** A destination is renderable only when it is a real absolute or app URL. */
function isRealHref(href?: string): href is string {
  return !!href && (href.startsWith("https://") || href.startsWith("/"));
}

function ActionCard({ action }: { action: ResourceAction }) {
  const linkable = isRealHref(action.href) && !!action.cta;
  const external = action.href?.startsWith("https://");

  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-semibold text-primary">{action.label}</p>
        {action.badge ? (
          <span
            className={`inline-block max-w-full break-words rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
              BADGE_TONE[action.provenance] ?? "bg-muted text-muted-foreground"
            }`}
          >
            {action.badge}
          </span>
        ) : null}
      </div>

      {action.detail ? <p className="mt-1.5 text-xs text-muted-foreground">{action.detail}</p> : null}
      {action.owner ? (
        <p className="mt-1.5 text-xs text-ink/75">
          <span className="font-medium">Source:</span> {action.owner}
        </p>
      ) : null}

      {linkable ? (
        <a
          href={action.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-3 inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          {action.cta}
          {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
      ) : (
        <p className="mt-3 inline-flex items-center rounded-lg border border-dashed border-border px-3 py-2 text-sm font-medium text-muted-foreground">
          {action.cta ?? "Source verification pending"}
        </p>
      )}

      {action.trustNote ? (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{action.trustNote}</p>
      ) : null}
    </div>
  );
}

export function ResourceLibrary({
  id,
  heading,
  intro,
  rows = [],
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  rows?: ResourceRow[];
  note?: string;
}) {
  if (!rows.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      {heading ? <h2 className="text-display-md text-primary">{heading}</h2> : null}
      {intro ? <p className="mt-3 max-w-3xl text-sm text-ink/80">{intro}</p> : null}

      <ul className="mt-5 space-y-4">
        {rows.map((row) => (
          <li key={row.id} className="overflow-hidden rounded-2xl border border-border bg-ivory p-4 md:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="min-w-0 break-words text-base font-bold text-primary">{row.eventLabel}</h3>
              {row.eventDate ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{row.eventDate}</p>
              ) : null}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {row.cells.map((cell) => (
                <div key={cell.label} className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {cell.label}
                  </p>
                  <div className="mt-2 space-y-3">
                    {cell.actions.map((action, i) => (
                      <ActionCard key={`${cell.label}-${i}`} action={action} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {row.note ? <p className="mt-3 text-xs text-muted-foreground">{row.note}</p> : null}
          </li>
        ))}
      </ul>

      {note ? <p className="mt-4 text-xs text-muted-foreground">{note}</p> : null}
    </section>
  );
}
