import { LifeBuoy, Lock, Receipt, Shield, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { trustSignals } from "@/content/trust";

const icons = {
  shield: Shield,
  receipt: Receipt,
  lock: Lock,
  sparkle: Sparkles,
  users: Users,
  life: LifeBuoy,
};

/** Compact, verified-only trust signals placed next to conversion. */
export function TrustSignals({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="What you can expect" className="bg-paleblue py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">What you can expect</p>
          <h2 className="mt-4 text-display-md text-primary">Built seriously. Used transparently.</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card-lift group h-full rounded-2xl border border-border bg-background p-6">
                  <Icon className="icon-rise size-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold text-primary">{s.title}</h3>
                  {s.body ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  ) : (
                    <p className="placeholder-slot mt-3 px-3 py-3 text-center">[Verify trust claim]</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
