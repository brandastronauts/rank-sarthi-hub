import { Reveal } from "@/components/Reveal";

const principles = [
  {
    n: "01",
    title: "Separate knowledge from execution",
    body: "A wrong answer does not automatically mean weak understanding. Misreads, formula slips and time pressure need different fixes.",
  },
  {
    n: "02",
    title: "Stop treating every weakness equally",
    body: "Not every weakness has the same impact. Some gaps cost marks in every paper; others rarely appear at all.",
  },
  {
    n: "03",
    title: "Know what matters now",
    body: "Priorities should evolve as performance evolves. What deserved attention last month may not be the biggest gap today.",
  },
  {
    n: "04",
    title: "Measure whether you're improving",
    body: "Preparation should produce visible changes in performance patterns, not just a feeling of having worked hard.",
  },
];

/** B08 — methodology credibility: the principles behind the diagnostic logic. */
export function Methodology({ id }: { id?: string }) {
  return (
    <section
      id={id ?? "method"}
      className="relative overflow-hidden bg-navy-gradient-soft py-14 text-primary-foreground sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60" />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">Methodology</p>
          <h2 className="mt-4 text-display-lg">Built around how serious aspirants actually improve.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Four principles shape the diagnostic logic, alongside subject faculty who understand how each exam is
            examined.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {principles.map((pr) => (
            <div key={pr.n} className="flex gap-4 border-t border-white/12 pt-5">
              <span className="font-display text-lg font-bold text-gold/70">{pr.n}</span>
              <div>
                <h3 className="text-base font-bold">{pr.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/65">{pr.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
