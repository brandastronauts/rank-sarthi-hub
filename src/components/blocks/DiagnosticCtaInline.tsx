import { CtaLink } from "@/components/CtaLink";
import { destinations, type Destination } from "@/content/destinations";

/**
 * B31 — Inline diagnostic CTA.
 * Resolves through the destination contract, so an unavailable product action
 * is either hidden or honestly disabled — never a placeholder page.
 */
function resolve(destinationId?: string, label = "Start a diagnostic"): Destination {
  if (!destinationId) return { kind: "hidden" };
  if (destinationId === "diagnostic") return destinations.diagnostic(label);
  if (destinationId.startsWith("/")) return destinations.page(label, destinationId);
  return { kind: "hidden" };
}

export function DiagnosticCtaInline({
  id = "diagnostic",
  headline,
  body,
  destinationId,
  ctaLabel,
}: {
  id?: string;
  headline?: string;
  body?: string;
  destinationId?: string;
  ctaLabel?: string;
}) {
  const d = resolve(destinationId, ctaLabel);
  if (!headline || d.kind === "hidden") return null;

  return (
    <aside id={id} className="scroll-mt-28 rounded-2xl bg-navy px-6 py-8 text-white md:px-10">
      <h2 className="text-display-md text-white">{headline}</h2>
      {body ? <p className="mt-3 max-w-2xl text-sm text-white/75">{body}</p> : null}
      <div className="mt-6">
        <CtaLink
          d={d}
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy"
        />
      </div>
    </aside>
  );
}
