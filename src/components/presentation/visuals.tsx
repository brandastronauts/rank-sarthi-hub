import { useEffect, useState } from "react";
import {
  BookOpenCheck,
  Building2,
  FileInput,
  GraduationCap,
  ListChecks,
  MonitorPlay,
  ReceiptText,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import { INDIA_PATH, INDIA_VIEWBOX } from "./india-path";
import { PARTICIPATION } from "@/content/presentation/scenes";
import logoSrc from "@/assets/presentation/rank-sarthi-logo.webp";

export function Logo({ className = "", alt = "Rank Sarthi" }: { className?: string; alt?: string }) {
  // Official supplied logo (351×301), always rendered at its native aspect ratio.
  return <img src={logoSrc} alt={alt} width={351} height={301} className={`h-auto object-contain ${className}`} />;
}

/** Animated number that respects reduced motion. */
function useCount(to: number, ms = 1800, decimals = 2) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    let raf = 0;
    const start = performance.now();
    const tick = (n: number) => {
      const t = Math.min(1, (n - start) / ms);
      setV(to * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return v.toFixed(decimals);
}

export function IndiaMap({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <svg viewBox={INDIA_VIEWBOX} role="img" aria-label="Outline map of India" className="h-full w-full">
        <defs>
          <linearGradient id="pres-india-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path
          d={INDIA_PATH}
          fill="url(#pres-india-fill)"
          stroke="var(--gold)"
          strokeWidth={1.4}
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          style={{ animation: "pres-draw 3.2s ease-out 200ms forwards" }}
        />
      </svg>
      <figcaption className="mt-2 text-center text-[11px] tracking-wide text-ivory/45">
        Boundary: Natural Earth, India point-of-view edition. Outline only — no regional data.
      </figcaption>
    </figure>
  );
}

export function ParticipationChart() {
  const max = 25;
  const jee = useCount(PARTICIPATION.jeeMain.lakh);
  const neet = useCount(PARTICIPATION.neet.lakh, 1800, 0);
  const rows = [
    { ...PARTICIPATION.jeeMain, shown: jee, d: 300 },
    { ...PARTICIPATION.neet, shown: neet, d: 600 },
  ];
  return (
    <figure className="w-full" aria-label="Candidates who appeared, 2026, in lakh">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Candidates appeared · 2026 · lakh</p>
      <div className="mt-5 space-y-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-ivory/85 sm:text-base">{r.label}</span>
              <span className="pres-serif text-3xl text-ivory tabular-nums sm:text-5xl">
                ~{r.shown}
                <span className="ml-1 text-sm text-ivory/60 sm:text-base">lakh</span>
              </span>
            </div>
            <div className="relative mt-2 h-3 rounded-full bg-ivory/10">
              <div
                className="pres-grow absolute inset-y-0 left-0 rounded-full bg-gold"
                style={{ width: `${(r.lakh / max) * 100}%`, ["--d" as string]: `${r.d}ms` }}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between text-[10px] text-ivory/40 tabular-nums" aria-hidden>
          {[0, 5, 10, 15, 20, 25].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-3 border-t border-ivory/10 pt-5 text-sm text-ivory/75 sm:grid-cols-2">
        <p>
          <span className="pres-serif block text-2xl text-ivory">~{PARTICIPATION.combinedLakh} lakh</span>
          JEE Main + NEET exam participations — not deduplicated unique students.
        </p>
        <p>
          <span className="pres-serif block text-2xl text-ivory">NDA</span>
          A third exam pathway. No numerical comparison until verified.
        </p>
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-ivory/50">
        <span className="rounded-full border border-gold/50 px-2 py-0.5 font-semibold text-gold">Provisional · verify</span>
        Source: 2026 appeared-candidate figures from the Rank Sarthi master content; to be checked against final NTA
        releases. Exam participation, not market size.
      </figcaption>
    </figure>
  );
}

const SPECTRUM_ICONS = [Building2, Video, BookOpenCheck, MonitorPlay, ListChecks];

export function Spectrum({ items }: { items: string[] }) {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-ivory/10 via-ivory/30 to-gold sm:block" />
      <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5">
        {items.map((label, i) => {
          const Icon = SPECTRUM_ICONS[i] ?? ListChecks;
          const last = i === items.length - 1;
          return (
            <li
              key={label}
              className={`pres-rise flex flex-col items-center text-center ${last ? "col-span-2 sm:col-span-1" : ""}`}
              style={{ ["--d" as string]: `${500 + i * 450}ms` }}
            >
              <span
                className={`relative grid h-14 w-14 place-items-center rounded-full border ${
                  last ? "border-gold bg-gold text-navy-deep" : "border-ivory/25 bg-navy-deep text-ivory/80"
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className={`mt-3 text-sm sm:text-base ${last ? "font-semibold text-gold" : "text-ivory/80"}`}>{label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Ecosystem({ pathways }: { pathways: string[] }) {
  const nodes = [
    { label: "Student portal", Icon: GraduationCap },
    { label: "Institute portal", Icon: Building2 },
    { label: "Platform admin", Icon: ShieldCheck },
  ];
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
      <div className="pres-rise rounded-2xl bg-ivory px-6 py-4 shadow-2xl" style={{ ["--d" as string]: "300ms" }}>
        <Logo className="w-20 sm:w-28" />
      </div>
      <svg viewBox="0 0 600 60" className="pres-fade h-10 w-full max-w-2xl sm:h-14" aria-hidden style={{ ["--d" as string]: "900ms" }}>
        {[100, 300, 500].map((x) => (
          <path key={x} d={`M300 0 C300 30 ${x} 30 ${x} 60`} fill="none" stroke="var(--gold)" strokeOpacity="0.6" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="grid w-full grid-cols-3 gap-2 sm:gap-6">
        {nodes.map(({ label, Icon }, i) => (
          <div
            key={label}
            className="pres-rise flex flex-col items-center rounded-xl border border-ivory/15 bg-ivory/5 px-2 py-4 text-center backdrop-blur sm:py-6"
            style={{ ["--d" as string]: `${1200 + i * 300}ms` }}
          >
            <Icon className="h-6 w-6 text-gold sm:h-8 sm:w-8" aria-hidden />
            <span className="mt-2 text-xs font-medium text-ivory sm:text-base">{label}</span>
          </div>
        ))}
      </div>
      <div className="pres-rise mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8" style={{ ["--d" as string]: "2400ms" }}>
        <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Exam pathways</span>
        {pathways.map((p) => (
          <span key={p} className="rounded-full border border-gold/50 px-4 py-1 text-sm font-semibold text-gold">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LearningLoop({ steps, durationSec, paused }: { steps: string[]; durationSec: number; paused: boolean }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (paused) return;
    const per = (durationSec * 1000 - 1500) / steps.length;
    const t = setInterval(() => setActive((a) => Math.min(steps.length - 1, a + 1)), per);
    return () => clearInterval(t);
  }, [paused, durationSec, steps.length]);
  return (
    <ol className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-1 items-center gap-3 sm:flex-col sm:gap-0">
          <div className="flex w-full items-center sm:flex-row">
            <span className={`hidden h-px flex-1 sm:block ${i === 0 ? "opacity-0" : i <= active ? "bg-gold" : "bg-ivory/15"} transition-colors duration-700`} />
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active ? "step" : undefined}
              className={`pres-serif grid h-12 w-12 shrink-0 place-items-center rounded-full border text-lg transition-all duration-700 sm:h-20 sm:w-20 sm:text-2xl ${
                i === active
                  ? "scale-110 border-gold bg-gold text-navy-deep shadow-[0_0_60px_-10px_var(--gold)]"
                  : i < active
                    ? "border-gold/70 text-gold"
                    : "border-ivory/20 text-ivory/50"
              }`}
            >
              {i + 1}
            </button>
            <span className={`hidden h-px flex-1 sm:block ${i === steps.length - 1 ? "opacity-0" : i < active ? "bg-gold" : "bg-ivory/15"} transition-colors duration-700`} />
          </div>
          <span className={`text-base transition-colors duration-700 sm:mt-4 sm:text-lg ${i === active ? "font-semibold text-ivory" : "text-ivory/55"}`}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

const OPS_ICONS = [ShieldCheck, FileInput, ReceiptText];
export function Operations({ items, paused, durationSec }: { items: string[]; paused: boolean; durationSec: number }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), (durationSec * 1000) / items.length);
    return () => clearInterval(t);
  }, [paused, durationSec, items.length]);
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-4 sm:grid-cols-3 sm:gap-8">
      {items.map((label, i) => {
        const Icon = OPS_ICONS[i] ?? Users;
        const on = i === active;
        return (
          <div key={label} className="pres-rise flex items-center gap-4 sm:flex-col sm:text-center" style={{ ["--d" as string]: `${400 + i * 350}ms` }}>
            <span
              className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border transition-all duration-700 sm:h-24 sm:w-24 ${
                on ? "border-gold bg-gold/15 text-gold" : "border-ivory/15 text-ivory/50"
              }`}
            >
              <Icon className="h-6 w-6 sm:h-10 sm:w-10" strokeWidth={1.4} aria-hidden />
            </span>
            <span className={`text-base transition-colors duration-700 sm:mt-5 sm:text-xl ${on ? "text-ivory" : "text-ivory/55"}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
