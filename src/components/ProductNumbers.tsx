import { Reveal } from "@/components/Reveal";
import { productNumbers } from "@/content/trust";

/**
 * Product-scale strip. Shows only verified product depth — never student
 * counts, selections, ranks or score improvements.
 */
export function ProductNumbers() {
  return (
    <section aria-label="Product depth" className="bg-paleblue py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-accent">Product depth</p>
        </Reveal>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productNumbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 80}>
              <div className="border-t border-border pt-5">
                <dd className="font-display text-4xl font-bold tracking-tight text-primary">
                  {n.value ? (
                    <>
                      {n.value}
                      {n.suffix ? <span className="text-gold">{n.suffix}</span> : null}
                    </>
                  ) : (
                    <span className="placeholder-slot inline-block px-3 py-2 text-[0.6875rem]">
                      [Verify product number]
                    </span>
                  )}
                </dd>
                <dt className="mt-3 text-sm font-medium text-muted-foreground">{n.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
