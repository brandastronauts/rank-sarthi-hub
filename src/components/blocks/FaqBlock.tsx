import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export interface FaqEntry {
  q: string;
  a: string;
}

/**
 * B22 — FAQ accordion.
 * Visual-only: FAQPage JSON-LD is deliberately not emitted from this block.
 */
export function FaqBlock({
  id = "faq",
  items = [],
  eyebrow = "FAQ",
  heading = "Questions, answered.",
}: {
  id?: string;
  items?: FaqEntry[];
  eyebrow?: string;
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items.length) return null;

  return (
    <section id={id} className="section-pad bg-ivory">
      <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h2 className="mt-5 text-display-lg text-primary">{heading}</h2>
        </Reveal>
        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 45}>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-primary"
                    >
                      {f.q}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-accent transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`${id}-panel-${i}`}
                    hidden={!isOpen}
                    className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground"
                  >
                    {f.a}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
