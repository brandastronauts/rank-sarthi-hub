import { Reveal } from "@/components/Reveal";

const without = ["Study", "Test", "Score", "Panic", "Study more", "Test again"];
const with_ = ["Test", "Diagnose", "Prioritise", "Improve", "Measure"];

export function AspirantMoment({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-ivory py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-accent">A clearer loop</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Stop repeating a score you don&rsquo;t understand.</h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-5">
          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-border bg-background/70 p-3 sm:p-6">
              <p className="eyebrow text-muted-foreground">Without diagnosis</p>
              <ol className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                {without.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 text-sm font-semibold text-foreground/70"
                  >
                    <span className="size-1.5 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-3 border-t border-border pt-3 text-xs italic text-muted-foreground sm:mt-4 sm:pt-4 sm:text-sm">
                Effort increases. The reason for the score stays unknown.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="h-full rounded-lg border border-primary/15 bg-primary p-3 text-primary-foreground sm:p-6">
              <p className="eyebrow text-gold">With Rank Sarthi</p>
              <ol className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                {with_.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-3 border-t border-white/15 pt-3 text-xs italic text-primary-foreground/70 sm:mt-4 sm:pt-4 sm:text-sm">
                Effort goes to the part of preparation that is actually costing marks.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
