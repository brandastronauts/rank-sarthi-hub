import { Reveal } from "@/components/Reveal";

const audiences = [
  {
    kind: "Aspirant",
    body: "See which chapters, question types and habits cost marks in each attempt — and what to work on next.",
  },
  {
    kind: "Parent",
    body: "Follow whether preparation time is turning into progress, without asking about every single test.",
  },
  {
    kind: "Educator",
    body: "Read error-type patterns across attempts instead of tagging mistakes by hand for every student.",
  },
];

/** Who the product serves. Attributed quotes appear only when real and permissioned. */
export function SocialProof() {
  return (
    <section id="voices" className="section-pad bg-ivory">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Who it is for</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Built for students.
            <br />
            Useful to the people who guide them.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.kind} as="li" delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {a.kind}
                </span>
                <p className="mt-6 text-lg font-medium leading-relaxed text-primary">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
