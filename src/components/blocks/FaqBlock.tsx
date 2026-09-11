import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/content/RichText";
import type { RichText as RichTextNodes } from "@/content/types";

/**
 * Accepts both the marketing shape ({ q, a }) and the Content Engine shape
 * ({ question, answer }) so academic templates can reuse this accordion.
 */
export interface FaqEntry {
  q?: string;
  a?: string;
  question?: string;
  answer?: RichTextNodes;
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
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Straight answers about how Rank Sarthi fits into serious exam preparation.
          </p>
        </Reveal>
        <div className="border-t border-primary/15">
          {items.map((f, i) => {
            const isOpen = open === i;
            const q = f.q ?? f.question ?? "";
            return (
              <Reveal key={q || i} delay={i * 45}>
                <div className="border-b border-primary/15">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-semibold text-primary"
                    >
                      {q}
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
                    className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground"
                  >
                    {f.a ?? (f.answer ? <RichText nodes={f.answer} /> : null)}
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
