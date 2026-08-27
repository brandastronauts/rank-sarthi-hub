import { Reveal } from "@/components/Reveal";
import { getSources } from "@/content/sources";
import type { PlatformData } from "@/content/types";

/**
 * Current-cycle snapshot variant of B03.
 *
 * Cycle-dependent facts are never rendered without their verification date,
 * source links and refresh trigger. When no snapshot data exists the block
 * simply does not render.
 */
export function CycleSnapshot({ id = "snapshot", platform }: { id?: string; platform: PlatformData }) {
  const snapshot = platform.cycleSnapshot;
  if (!snapshot?.rows.length) return null;
  const refs = getSources(snapshot.sourceRefs ?? []);

  return (
    <section id={id} className="section-pad bg-paleblue">
      <div className="container-page">
        <span id="nda-2026-snapshot" className="block scroll-mt-28" aria-hidden="true" />
        <Reveal className="max-w-3xl">
          {snapshot.eyebrow && <p className="eyebrow text-accent">{snapshot.eyebrow}</p>}
          <h2 className="mt-5 text-display-lg text-primary">{snapshot.heading}</h2>
          <p className="mt-4 text-sm font-semibold text-muted-foreground">
            Verified {snapshot.verifiedOn} against official sources.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">{snapshot.heading}</caption>
              <thead>
                <tr className="bg-navy-deep text-primary-foreground">
                  <th scope="col" className="w-1/3 px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]">
                    Item
                  </th>
                  <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]">
                    Current official position
                  </th>
                </tr>
              </thead>
              <tbody>
                {snapshot.rows.map((row) => (
                  <tr key={row.label} className="border-t border-border align-top">
                    <th scope="row" className="px-5 py-4 text-sm font-semibold text-primary">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 leading-relaxed text-muted-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 max-w-3xl rounded-xl border border-border bg-ivory p-6">
            <p className="text-sm leading-relaxed text-ink/85">{snapshot.note}</p>
            {refs.length > 0 && (
              <ul className="mt-4 space-y-2">
                {refs.map((s) => (
                  <li key={s.id} className="text-xs text-muted-foreground">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener nofollow"
                      className="font-semibold text-primary underline underline-offset-4"
                    >
                      {s.label}
                    </a>{" "}
                    — {s.publisher}
                    {s.lastVerified ? ` · checked ${s.lastVerified}` : ""}
                  </li>
                ))}
              </ul>
            )}
            {snapshot.refreshTrigger && (
              <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">Refresh trigger:</span> {snapshot.refreshTrigger}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
