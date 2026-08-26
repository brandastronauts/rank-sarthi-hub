import { Reveal } from "@/components/Reveal";
import { isDemoContent, voices, type Voice } from "@/content/trust";

const kindLabel: Record<Voice["kind"], string> = {
  aspirant: "Aspirant",
  parent: "Parent",
  educator: "Educator",
};

const placeholderSlots: { kind: Voice["kind"]; hint: string }[] = [
  { kind: "aspirant", hint: "Aspirant — JEE / NEET / NDA" },
  { kind: "parent", hint: "Parent — parent of a Class XI or XII aspirant" },
  { kind: "educator", hint: "Educator — faculty, academic advisor or institute owner" },
];

function Initials({ name }: { name: string }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
      {name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")}
    </span>
  );
}

function VoiceCard({ v, featured }: { v: Voice; featured?: boolean }) {
  return (
    <figure
      className={`card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-8 ${
        featured ? "shadow-elevated sm:p-10" : "shadow-card"
      }`}
    >
      <figcaption className="flex items-center gap-2">
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
          {kindLabel[v.kind]}
        </span>
      </figcaption>
      <blockquote
        className={`mt-6 flex-1 text-primary ${
          featured ? "text-display-editorial" : "text-lg leading-relaxed font-medium"
        }`}
      >
        &ldquo;{v.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center gap-4">
        {v.photo ? (
          <img
            src={v.photo}
            alt={v.name}
            loading="lazy"
            width={640}
            height={640}
            className={`shrink-0 rounded-full object-cover ring-2 ring-gold/30 transition-transform duration-300 group-hover:scale-105 ${
              featured ? "size-20" : "size-14"
            }`}
          />
        ) : (
          <Initials name={v.name} />
        )}
        <div>
          <p className="font-display text-base font-bold text-primary">{v.name}</p>
          <p className="text-sm text-muted-foreground">
            {v.role}
            {v.organisation ? ` · ${v.organisation}` : ""}
          </p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Genuine user experience only — distinct from the academic commentary
 * in EducatorReview. No ratings, no stars, no stock photos on quotes.
 */
export function SocialProof() {
  const [featured, ...rest] = voices;
  const firstSlot = placeholderSlots[0]!;

  return (
    <section id="voices" className="section-pad bg-ivory">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Real voices</p>
          {isDemoContent ? <p className="demo-badge mt-4">Illustrative feedback</p> : null}
          <h2 className="mt-5 text-display-lg text-primary">
            Built for students.
            <br />
            Validated by people who guide them.
          </h2>
          <p className="mt-6 text-lede text-muted-foreground">
            Three kinds of voices matter here: the aspirant living the preparation, the parent watching it, and
            the educator responsible for it. We publish these only when they are real, attributed and given
            with permission.
          </p>
        </Reveal>

        {voices.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <VoiceCard v={featured!} featured />
            </Reveal>
            <div className="grid gap-6">
              {rest.slice(0, 2).map((v, i) => (
                <Reveal key={v.name + v.role} delay={(i + 1) * 100}>
                  <VoiceCard v={v} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <div className="flex h-full min-h-[18rem] flex-col justify-between rounded-2xl border border-border bg-card p-10 shadow-card">
                <span className="w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  Featured voice — {kindLabel[firstSlot.kind]}
                </span>
                <p className="placeholder-slot mt-8 px-6 py-10 text-center">[Real content required]</p>
                <p className="mt-8 text-sm text-muted-foreground">{firstSlot.hint}</p>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {placeholderSlots.slice(1).map((s, i) => (
                <Reveal key={s.kind} delay={(i + 1) * 100}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card">
                    <span className="w-fit rounded-full border border-border bg-secondary px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {kindLabel[s.kind]}
                    </span>
                    <p className="placeholder-slot mt-6 px-4 py-6 text-center">[Real content required]</p>
                    <p className="mt-6 text-sm text-muted-foreground">{s.hint}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The quotes above are illustrative of the feedback we hear in review sessions. We do not publish
            ratings, review counts or unnamed praise — each one will carry a verified name and permission before
            it stays on this page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
