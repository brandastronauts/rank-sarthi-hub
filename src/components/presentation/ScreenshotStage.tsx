import { useEffect, useRef, useState } from "react";
import { Maximize2, Minus, Plus, X } from "lucide-react";
import type { Screen } from "@/content/presentation/screens";

/** Browser-framed genuine screenshot with gentle crossfade between the scene's shots. */
export function ScreenshotStage({
  shots,
  index,
  onSelect,
  onZoom,
  durationMs,
}: {
  shots: Screen[];
  index: number;
  onSelect: (i: number) => void;
  onZoom: (s: Screen) => void;
  durationMs: number;
}) {
  const current = shots[index];
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-ivory/15 bg-ivory shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 border-b border-navy/10 bg-ivory px-3 py-2" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="ml-3 truncate text-[11px] text-navy/60">{current.caption}</span>
        </div>
        <button
          type="button"
          onClick={() => onZoom(current)}
          className="group relative block w-full cursor-zoom-in overflow-hidden"
          style={{ aspectRatio: `${current.width} / ${current.height}` }}
          aria-label={`Zoom into screenshot: ${current.caption}`}
        >
          {shots.map((s, i) => (
            <img
              key={s.id}
              src={s.src}
              alt={i === index ? `Genuine JEE Rank Up screenshot: ${s.caption}` : ""}
              aria-hidden={i !== index}
              width={s.width}
              height={s.height}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-1000 ${
                i === index ? "pres-shot-zoom opacity-100" : "opacity-0"
              }`}
              style={{ ["--pres-dur" as string]: `${durationMs}ms`, transformOrigin: "30% 20%" }}
            />
          ))}
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-navy-deep/85 px-3 py-1.5 text-xs font-medium text-ivory opacity-90 transition group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Zoom
          </span>
        </button>
      </div>
      {shots.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2" role="tablist" aria-label="Screenshots in this scene">
          {shots.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={s.caption}
              onClick={() => onSelect(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-3 bg-ivory/30 hover:bg-ivory/60"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Full-screen inspector: fit-to-screen, or zoom to inspect detail with drag/scroll panning. */
export function Lightbox({ shot, onClose }: { shot: Screen | null; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!shot) return;
    setZoom(1);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(3, z + 0.5));
      if (e.key === "-") setZoom((z) => Math.max(1, z - 0.5));
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [shot, onClose]);
  if (!shot) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={`Screenshot: ${shot.caption}`} className="fixed inset-0 z-[80] flex flex-col bg-navy-deep/95 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-ivory/10 px-4 py-3 text-ivory">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{shot.caption}</p>
          <p className="truncate text-[11px] text-ivory/50">Genuine screenshot · {shot.original}</p>
        </div>
        <button type="button" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} className="rounded-full p-2 hover:bg-ivory/10" aria-label="Zoom out">
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-12 text-center text-xs tabular-nums">{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} className="rounded-full p-2 hover:bg-ivory/10" aria-label="Zoom in">
          <Plus className="h-4 w-4" />
        </button>
        <button ref={closeRef} type="button" onClick={onClose} className="ml-2 rounded-full p-2 hover:bg-ivory/10" aria-label="Close screenshot">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4" onDoubleClick={() => setZoom((z) => (z > 1 ? 1 : 2))}>
        <img
          src={shot.src}
          alt={`Genuine JEE Rank Up screenshot: ${shot.caption}`}
          width={shot.width}
          height={shot.height}
          className="mx-auto h-auto rounded-md bg-ivory"
          style={zoom === 1 ? { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" } : { width: `${zoom * 100}%`, maxWidth: "none" }}
        />
      </div>
      <p className="pb-3 text-center text-[11px] text-ivory/45">Double-click or use + / − to zoom. Scroll to pan. Esc to close.</p>
    </div>
  );
}
