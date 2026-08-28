import { BookOpen, Layers, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { productNumbers } from "@/content/trust";

const icons = [BookOpen, Layers, Sparkles, Target];

/**
 * Product-scale band. Shows only verified product depth — never student
 * counts, selections, ranks or score improvements.
 */
export function ProductNumbers({ id }: { id?: string }) {
  return (
    <section
      id={id}
      aria-label="Product depth"
      className="relative overflow-hidden bg-navy-gradient py-16 text-primary-foreground sm:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Product depth</p>
            <h2 className="mt-5 text-display-md text-primary-foreground sm:text-3xl">
              The engine behind the report.
            </h2>
            <div className="mt-6 w-20 rule-gold" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Counted from the system itself and updated as the question bank expands. No student,
              rank or result claims — only the scale of what has been built.
            </p>
          </Reveal>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 lg:grid-cols-4">
            {productNumbers.map((n, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <Reveal key={n.label} delay={i * 90} className="bg-navy-deep/60">
                  <div className="group h-full px-6 py-8 transition-colors duration-300 hover:bg-white/5">
                    <Icon
                      className="size-5 text-gold/80 transition-transform duration-300 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <dd className="mt-6 font-display text-4xl font-bold tracking-tight text-primary-foreground">
                      {n.value ? (
                        <>
                          <CountUp to={Number(n.value.replace(/,/g, ""))} />
                          {n.suffix ? <span className="text-gold">{n.suffix}</span> : null}
                        </>
                      ) : (
                        <span className="placeholder-slot inline-block px-3 py-2 text-[0.6875rem]">
                          [Verify product number]
                        </span>
                      )}
                    </dd>
                    <dt className="mt-3 text-sm font-semibold text-primary-foreground/85">
                      {n.label}
                    </dt>
                    {n.caption ? (
                      <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/55">
                        {n.caption}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
