import { Reveal } from "@/components/Reveal";

const principles = [
  {
    n: "01",
    title: "Know what matters now",
    body: "Preparation priorities should evolve as performance evolves. What deserved attention last month may not be the biggest gap today.",
  },
  {
    n: "02",
    title: "Separate knowledge from execution",
    body: "A wrong answer does not automatically mean weak understanding. Misreads, formula slips and time pressure need entirely different fixes.",
  },
  {
    n: "03",
    title: "Stop treating every weakness equally",
    body: "Not every weakness has the same impact on performance. Some gaps cost marks in every paper; others rarely appear at all.",
  },
  {
    n: "04",
    title: "Measure whether you're actually improving",
    body: "Preparation should produce visible changes in performance patterns, not just a feeling of having worked hard.",
  },
];

export function Methodology({ id }: { id?: string }) {
  return (
    <section
      id={id ?? "method"}
      className="section-pad relative overflow-hidden bg-navy-gradient-soft text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60"
      />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">Methodology</p>
          <h2 className="mt-5 text-display-lg">
            Built around how serious aspirants actually improve.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Four principles shape everything the diagnostic engine does — and everything it
            deliberately refuses to do.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {principles.map((pr, i) => (
            <Reveal key={pr.n} delay={i * 90}>
              <div className="flex gap-6 border-t border-white/12 pt-7">
                <span className="font-display text-2xl font-bold text-gold/70">{pr.n}</span>
                <div>
                  <h3 className="text-display-md">{pr.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
                    {pr.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
