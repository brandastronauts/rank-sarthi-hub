import { CtaLink } from "@/components/CtaLink";

/**
 * B31 — Inline diagnostic CTA.
 * Uses CtaLink, so if the destination is not built the CTA hides itself
 * rather than promising a capability that does not exist yet.
 */
export function DiagnosticCtaInline({
  id = "diagnostic",
  headline,
  body,
  destinationId,
}: {
  id?: string;
  headline?: string;
  body?: string;
  destinationId?: string;
}) {
  if (!headline || !destinationId) return null;

  return (
    <aside id={id} className="scroll-mt-28 rounded-2xl bg-navy px-6 py-8 text-white md:px-10">
      <h2 className="text-display-md text-white">{headline}</h2>
      {body ? <p className="mt-3 max-w-2xl text-sm text-white/75">{body}</p> : null}
      <div className="mt-6">
        <CtaLink destinationId={destinationId} variant="accent" />
      </div>
    </aside>
  );
}
