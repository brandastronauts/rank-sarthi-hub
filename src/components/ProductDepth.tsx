import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eye, Target, BookOpen, Layers, FileQuestion, AlertTriangle, Clock, TrendingUp, ArrowRight, ChevronRight } from "lucide-react";

const layers = [
  { l: "Your performance", d: "Everything begins with an attempted paper.", icon: Eye },
  { l: "Score", d: "The number every other platform stops at.", icon: Target },
  { l: "Subject", d: "Where the loss is concentrated.", icon: Layers },
  { l: "Chapter", d: "Which parts of the syllabus repeat as problems.", icon: BookOpen },
  { l: "Topic", d: "The specific idea behind the mistake.", icon: FileQuestion },
  { l: "Question type", d: "The formats that consistently go wrong.", icon: AlertTriangle },
  { l: "Error type", d: "Concept gap, application slip or misread.", icon: ChevronRight },
  { l: "Time & attempt behaviour", d: "Where minutes and attempts are spent.", icon: Clock },
  { l: "Preparation priority", d: "What matters most right now.", icon: TrendingUp },
  { l: "Next action", d: "The specific thing to do tonight.", icon: ArrowRight },
];

const accentColors = [
  "bg-white/50",
  "bg-white/55",
  "bg-gold/60",
  "bg-gold/70",
  "bg-gold/80",
  "bg-accent/60",
  "bg-accent/70",
  "bg-accent/80",
  "bg-white/70",
  "bg-gold/90",
];

export function ProductDepth({ id }: { id?: string }) {
  const [active, setActive] = useState(2);

  return (
    <section id={id} className="section-pad relative overflow-hidden bg-navy-gradient text-primary-foreground">
      {/* Background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dots-faint opacity-10" />
      
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container-page relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          {/* Left column — sticky headline */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow text-gold">Beneath the score</p>
              <h2 className="mt-5 text-display-lg text-primary-foreground">
                Not another mock-test dashboard.
              </h2>
              <div className="mt-6 w-28 rule-gold" />
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                Rank Sarthi is designed to look below the final number. Each layer narrows the question from
                <span className="text-primary-foreground font-semibold"> "how did I do?" </span>
                to <span className="text-primary-foreground font-semibold">"what exactly do I do next?"</span>
              </p>
              <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-primary-foreground/60 backdrop-blur-sm">
                Layers reflect the diagnostic model. Availability of each layer depends on the exam and assessment
                type you attempt.
              </p>
            </Reveal>
          </div>

          {/* Right column — diagnostic funnel */}
          <div>
            <Reveal delay={140}>
              <div className="relative">
                {/* Connecting spine */}
                <div className="absolute left-[19px] top-4 h-[calc(100%-32px)] w-[2px] bg-gradient-to-b from-white/10 via-gold/40 to-accent/40" />

                <ol className="relative space-y-2">
                  {layers.map((ly, i) => {
                    const Icon = ly.icon;
                    const isActive = active === i;
                    const isPast = i < active;
                    const indent = Math.min(i, 7) * 12;
                    
                    return (
                      <li
                        key={ly.l}
                        className="group relative cursor-pointer"
                        style={{ marginInlineStart: `${indent}px` }}
                        onMouseEnter={() => setActive(i)}
                      >
                        {/* Card */}
                        <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "border-gold/50 bg-white/[0.10] shadow-[0_0_40px_-12px_rgba(201,165,78,0.22),0_8px_32px_-12px_rgba(0,0,0,0.3)]"
                            : isPast
                            ? "border-white/10 bg-white/[0.04]"
                            : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.05]"
                        }`}>
                          {/* Left accent bar */}
                          <div className={`absolute left-0 top-0 h-full w-[3px] transition-all duration-300 ${accentColors[i]} ${isActive ? "opacity-100" : "opacity-60"}`} />

                          <div className="flex items-center gap-4 px-5 py-4">
                            {/* Number / Icon circle */}
                            <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-br from-gold to-gold/70 text-navy shadow-lg shadow-gold/30 scale-110"
                                : isPast
                                ? "bg-white/[0.15] text-white/[0.80]"
                                : "bg-white/[0.08] text-white/[0.40]"
                            }`}>
                              {isActive ? <Icon className="h-4 w-4" /> : String(i + 1).padStart(2, "0")}
                              
                              {/* Pulse dot for active */}
                              {isActive && (
                                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-50" />
                                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
                                </span>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className={`font-display text-sm font-semibold transition-colors duration-300 ${
                                  isActive ? "text-primary-foreground" : "text-primary-foreground/50"
                                }`}>
                                  {ly.l}
                                </span>
                                <ChevronRight className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                                  isActive 
                                    ? "text-gold translate-x-0 opacity-100" 
                                    : "text-white/20 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                }`} />
                              </div>
                              
                              {/* Description */}
                              <p className={`mt-0.5 text-xs transition-all duration-300 overflow-hidden ${
                                isActive 
                                  ? "text-primary-foreground/85 max-h-10 opacity-100" 
                                  : "text-primary-foreground/25 max-h-0 opacity-0 lg:max-h-10 lg:opacity-100 lg:text-primary-foreground/30"
                              }`}>
                                {ly.d}
                              </p>
                            </div>
                          </div>
                          
                          {/* Bottom glow line */}
                          <div className={`h-[3px] w-full transition-all duration-500 bg-gradient-to-r ${accentColors[i]} ${isActive ? "opacity-100" : "opacity-0"}`} />
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
