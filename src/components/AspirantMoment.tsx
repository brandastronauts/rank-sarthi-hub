import { Reveal } from "@/components/Reveal";

const without = ["Study", "Test", "Score", "Panic", "Study more", "Test again"];
const with_ = ["Test", "Diagnose", "Prioritise", "Improve", "Measure"];

export function AspirantMoment({ id }: { id?: string }) {
  return (
    <section id={id} className="section-pad bg-ivory">
      <div className="container-page">
        <Reveal className="max-w-4xl">
          <h2 className="text-display-lg text-primary">
            You don&rsquo;t need another person telling you to &ldquo;study more.&rdquo;
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Most serious aspirants are already studying.</p>
        </Reveal>

        <Reveal delay={120} className="mt-14 max-w-3xl border-l-2 border-gold pl-6 sm:pl-8">
          <p className="eyebrow text-accent">The real question is</p>
          <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
            Are you studying what will actually improve your score?
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-border bg-background/70 p-8">
              <p className="eyebrow text-muted-foreground">Without diagnosis</p>
              <ol className="mt-6 space-y-3">
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
              <p className="mt-7 border-t border-border pt-5 text-sm italic text-muted-foreground">
                Effort increases. The reason for the score stays unknown.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="h-full rounded-2xl border border-primary/15 bg-primary p-8 text-primary-foreground">
              <p className="eyebrow text-gold">With Rank Sarthi</p>
              <ol className="mt-6 space-y-3">
                {with_.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-7 border-t border-white/15 pt-5 text-sm italic text-primary-foreground/70">
                Effort goes to the part of preparation that is actually costing marks.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
