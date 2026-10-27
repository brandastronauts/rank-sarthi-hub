import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { CHAPTERS, DATA_SOURCES, SCENES } from "@/content/presentation/scenes";
import { FEATURE_INVENTORY_DATE, FEATURE_PORTALS } from "@/content/presentation/features";
import { SCREENS, type Screen } from "@/content/presentation/screens";

export type PanelId = "chapters" | "features" | "gallery" | "sources";

function PanelShell({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[70] flex justify-end bg-navy-deep/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="pres-scene-in flex h-full w-full max-w-4xl flex-col border-l border-ivory/10 bg-navy-deep text-ivory shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4 sm:px-8">
          <h2 className="pres-serif text-2xl sm:text-3xl">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-full p-2 hover:bg-ivory/10" aria-label={`Close ${title}`} autoFocus>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">{children}</div>
      </div>
    </div>
  );
}

export function ChaptersPanel({ current, onGo, onClose }: { current: number; onGo: (i: number) => void; onClose: () => void }) {
  return (
    <PanelShell title="Chapters" onClose={onClose}>
      <div className="space-y-8">
        {CHAPTERS.map((ch) => (
          <section key={ch}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{ch}</h3>
            <ol className="mt-3 divide-y divide-ivory/10">
              {SCENES.map((s, i) =>
                s.chapter !== ch ? null : (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => onGo(i)}
                      aria-current={i === current ? "true" : undefined}
                      className={`flex w-full items-baseline gap-4 py-3 text-left transition hover:text-gold ${i === current ? "text-gold" : ""}`}
                    >
                      <span className="w-6 shrink-0 text-xs tabular-nums text-ivory/45">{String(s.number).padStart(2, "0")}</span>
                      <span className="flex-1 text-base sm:text-lg">{s.headline}</span>
                      <span className="text-xs tabular-nums text-ivory/45">{s.durationSec}s</span>
                    </button>
                  </li>
                ),
              )}
            </ol>
          </section>
        ))}
      </div>
    </PanelShell>
  );
}

/** Where a capability appears in the film: shown in a genuine screenshot, or described in narration only. */
const DEMONSTRATED: Record<string, { scene: number; mode: "shown" | "described" }> = {
  "Personal dashboard": { scene: 9, mode: "shown" },
  "My Goals": { scene: 9, mode: "described" },
  "Free diagnostic test": { scene: 10, mode: "described" },
  "Browse Tests": { scene: 10, mode: "shown" },
  "Self-Test builder": { scene: 10, mode: "shown" },
  "Real NTA-style screen": { scene: 11, mode: "described" },
  "Every question type": { scene: 11, mode: "described" },
  "Auto-submit": { scene: 11, mode: "described" },
  "Instant result": { scene: 12, mode: "shown" },
  "Question-by-question review": { scene: 12, mode: "shown" },
  "AI insights": { scene: 13, mode: "shown" },
  "Recommended tests": { scene: 13, mode: "described" },
  "Analytics page": { scene: 14, mode: "shown" },
  "Free plan": { scene: 14, mode: "shown" },
  "Billing page": { scene: 14, mode: "shown" },
  "Institute profile and logo": { scene: 15, mode: "described" },
  "Add students": { scene: 15, mode: "shown" },
  "Groups for batches": { scene: 15, mode: "shown" },
  "More admin logins": { scene: 15, mode: "described" },
  "Build your own tests": { scene: 16, mode: "shown" },
  "Assign tests": { scene: 16, mode: "shown" },
  "Printable question paper and answer key": { scene: 16, mode: "shown" },
  "Attendance for every assigned test": { scene: 17, mode: "shown" },
  "Student report": { scene: 17, mode: "shown" },
  "Batch overview": { scene: 17, mode: "described" },
  "Report for one test": { scene: 17, mode: "shown" },
  "Quality check before going live": { scene: 18, mode: "described" },
  "Team roles": { scene: 18, mode: "described" },
  "PDF import": { scene: 18, mode: "described" },
  Billing: { scene: 18, mode: "described" },
};

export function FeatureExplorer({ onClose, onGo }: { onClose: () => void; onGo: (sceneIndex: number) => void }) {
  const [tab, setTab] = useState(FEATURE_PORTALS[0]!.id);
  const [q, setQ] = useState("");
  const portal = FEATURE_PORTALS.find((p) => p.id === tab) ?? FEATURE_PORTALS[0]!;
  const total = FEATURE_PORTALS.reduce((t, p) => t + p.groups.reduce((n, g) => n + g.items.length, 0), 0);
  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return portal.groups
      .map((g) => ({ ...g, items: g.items.filter((i) => !needle || `${i.title} ${i.detail} ${g.name}`.toLowerCase().includes(needle)) }))
      .filter((g) => g.items.length);
  }, [portal, q]);
  return (
    <PanelShell title="Explore all features" onClose={onClose}>
      <p className="text-sm text-ivory/65">
        All {total} capabilities from the developer's feature list, live on JEE, NEET and NDA Rank Up as of {FEATURE_INVENTORY_DATE}. One
        platform runs all three exam pathways.
      </p>
      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-ivory/60">
        <span className="inline-flex items-center gap-1.5"><span className="rounded-full bg-gold px-2 py-0.5 font-semibold text-navy-deep">Shown</span> visible in a genuine screenshot</span>
        <span className="inline-flex items-center gap-1.5"><span className="rounded-full border border-gold/60 px-2 py-0.5 font-semibold text-gold">Described</span> covered in narration only</span>
        <span>Unmarked: listed by the developer</span>
      </div>
      <div className="sticky -top-6 z-10 -mx-5 mt-5 border-b border-ivory/10 bg-navy-deep px-5 pb-3 pt-2 sm:-mx-8 sm:px-8">
        <div role="tablist" aria-label="Portals" className="flex flex-wrap gap-2">
          {FEATURE_PORTALS.map((p) => (
            <button
              key={p.id}
              role="tab"
              type="button"
              aria-selected={p.id === tab}
              onClick={() => setTab(p.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${p.id === tab ? "bg-gold text-navy-deep" : "border border-ivory/20 text-ivory/80 hover:border-gold"}`}
            >
              {p.title}
            </button>
          ))}
        </div>
        <label className="relative mt-3 block">
          <span className="sr-only">Search features</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/40" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search features…"
            className="w-full rounded-full border border-ivory/15 bg-ivory/5 py-2 pl-9 pr-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
          />
        </label>
      </div>
      <p className="mt-5 text-sm text-ivory/60">{portal.who}</p>
      {portal.id === "admin" && <p className="mt-2 text-xs text-ivory/45">No Platform Admin screenshots were supplied; these capabilities are listed by the developer.</p>}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <section key={g.name} className="rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-5">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{g.name}</h3>
            <ul className="mt-3 space-y-3">
              {g.items.map((it) => {
                const demo = DEMONSTRATED[it.title];
                return (
                  <li key={it.title} className="text-sm leading-relaxed">
                    <span className="font-semibold text-ivory">{it.title}</span>
                    {it.detail && <span className="text-ivory/70"> {it.detail}</span>}
                    {demo && (
                      <button
                        type="button"
                        onClick={() => onGo(demo.scene - 1)}
                        className={`ml-2 inline-flex rounded-full px-2 py-0.5 align-middle text-[10px] font-semibold ${demo.mode === "shown" ? "bg-gold text-navy-deep" : "border border-gold/60 text-gold"}`}
                      >
                        {demo.mode === "shown" ? "Shown" : "Described"} · scene {demo.scene}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        {!groups.length && <p className="text-sm text-ivory/60">No features match “{q}”.</p>}
      </div>
    </PanelShell>
  );
}

export function GalleryPanel({ onClose, onZoom }: { onClose: () => void; onZoom: (s: Screen) => void }) {
  const [tab, setTab] = useState<"student" | "institute">("student");
  const shots = SCREENS.filter((s) => s.portal === tab);
  return (
    <PanelShell title="Product screenshots" onClose={onClose}>
      <p className="text-sm text-ivory/65">Genuine JEE Rank Up portal screenshots supplied by the developer. Select any image to inspect it.</p>
      <div role="tablist" className="mt-4 flex gap-2">
        {(["student", "institute"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${tab === t ? "bg-gold text-navy-deep" : "border border-ivory/20 text-ivory/80 hover:border-gold"}`}
          >
            {t === "student" ? "Student portal" : "Institute portal"} ({SCREENS.filter((s) => s.portal === t).length})
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {shots.map((s) => (
          <button key={s.id} type="button" onClick={() => onZoom(s)} className="group text-left">
            <span className="block overflow-hidden rounded-lg border border-ivory/10 bg-ivory">
              <img src={s.src} alt="" loading="lazy" width={s.width} height={s.height} className="h-auto w-full transition duration-500 group-hover:scale-[1.02]" />
            </span>
            <span className="mt-2 block text-sm text-ivory/85 group-hover:text-gold">{s.caption}</span>
          </button>
        ))}
      </div>
    </PanelShell>
  );
}

export function SourcesPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell title="Sources & verification" onClose={onClose}>
      <ul className="divide-y divide-ivory/10">
        {DATA_SOURCES.map((s) => (
          <li key={s.figure} className="py-4">
            <p className="font-medium text-ivory">{s.figure}</p>
            <p className="mt-1 text-sm text-ivory/65">{s.source}</p>
            <p className="mt-1 text-xs font-semibold text-gold">{s.status}</p>
          </li>
        ))}
      </ul>
      <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Imagery</h3>
      <p className="mt-2 text-sm text-ivory/65">
        Scene photographs are single-scene generated images with no embedded text, pending brand approval or replacement with licensed
        photography. Product images are genuine screenshots. The logo is the official supplied file.
      </p>
      <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Narration</h3>
      <p className="mt-2 text-sm text-ivory/65">The voiceover script is shown as captions. No recorded narration has been supplied.</p>
    </PanelShell>
  );
}
