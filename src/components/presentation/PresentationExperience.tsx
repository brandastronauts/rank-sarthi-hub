import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Captions,
  Images,
  LayoutGrid,
  ListTree,
  Maximize,
  Minimize,
  Music,
  Pause,
  Play,
  Info,
  Volume2,
  VolumeX,
} from "lucide-react";
import { SCENES, TOTAL_DURATION_SEC } from "@/content/presentation/scenes";
import type { Screen } from "@/content/presentation/screens";
import { SceneView } from "./SceneView";
import { Lightbox } from "./ScreenshotStage";
import { ChaptersPanel, FeatureExplorer, GalleryPanel, SourcesPanel, type PanelId } from "./Panels";
import { Logo } from "./visuals";
import { useBackgroundMusic } from "./useBackgroundMusic";
import introPhoto from "@/assets/presentation/s01-exam-centre.webp";

const TICK = 100;

export function PresentationExperience() {
  const music = useBackgroundMusic();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [panel, setPanel] = useState<PanelId | null>(null);
  const [zoomShot, setZoomShot] = useState<Screen | null>(null);
  const [manualShot, setManualShot] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [soundOpen, setSoundOpen] = useState(false);
  const [idle, setIdle] = useState(false);
  const [ended, setEnded] = useState(false);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const captionRef = useRef<HTMLDivElement | null>(null);
  const [controlsH, setControlsH] = useState(84);
  const [captionH, setCaptionH] = useState(0);

  // Reserve room for controls + captions so scene copy never sits underneath them.
  useEffect(() => {
    if (!started) return;
    const ro = new ResizeObserver(() => {
      setControlsH(controlsRef.current?.offsetHeight ?? 84);
      setCaptionH(captionRef.current?.offsetHeight ?? 0);
    });
    if (controlsRef.current) ro.observe(controlsRef.current);
    if (captionRef.current) ro.observe(captionRef.current);
    return () => ro.disconnect();
  }, [started, captions]);

  const scene = SCENES[index] ?? SCENES[0]!;
  const durMs = scene.durationSec * 1000;
  const progress = Math.min(1, elapsed / durMs);
  const holding = paused || !!panel || !!zoomShot;

  // Deep link: ?scene=N
  useEffect(() => {
    const n = Number(new URLSearchParams(window.location.search).get("scene"));
    if (n >= 1 && n <= SCENES.length) setIndex(n - 1);
  }, []);

  const go = useCallback((i: number) => {
    const next = Math.max(0, Math.min(SCENES.length - 1, i));
    setIndex(next);
    setElapsed(0);
    setManualShot(null);
    setEnded(false);
    setPanel(null);
  }, []);

  useEffect(() => {
    if (!started) return;
    const url = new URL(window.location.href);
    url.searchParams.set("scene", String(index + 1));
    window.history.replaceState(window.history.state, "", url);
    document.title = `${index + 1}/${SCENES.length} — ${scene.headline} | Rank Sarthi`;
  }, [index, started, scene.headline]);

  // Scene clock
  useEffect(() => {
    if (!started || holding) return;
    const t = setInterval(() => setElapsed((e) => e + TICK), TICK);
    return () => clearInterval(t);
  }, [started, holding, index]);

  useEffect(() => {
    if (elapsed < durMs) return;
    if (index < SCENES.length - 1) go(index + 1);
    else if (!ended) {
      setEnded(true);
      setPaused(true);
      music.fadeOutAndStop(4500);
    }
  }, [elapsed, durMs, index, go, ended, music]);

  const togglePlay = useCallback(() => {
    if (ended) {
      go(0);
      setPaused(false);
      if (music.enabled && !music.muted) music.play(2000);
      return;
    }
    setPaused((p) => !p);
  }, [ended, go, music]);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else (rootRef.current ?? document.documentElement).requestFullscreen?.().catch(() => undefined);
  }, []);

  useEffect(() => {
    const onFs = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // Keyboard
  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || zoomShot) return;
      if (e.key === "Escape" && panel) return setPanel(null);
      if (panel) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") go(index + 1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
      else if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "f") toggleFullscreen();
      else if (e.key === "m") music.toggleMute();
      else if (e.key === "c") setCaptions((c) => !c);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(SCENES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, index, go, panel, zoomShot, togglePlay, toggleFullscreen, music]);

  // Hide chrome when idle on pointer devices
  useEffect(() => {
    if (!started) return;
    let t: ReturnType<typeof setTimeout>;
    const wake = () => {
      setIdle(false);
      clearTimeout(t);
      t = setTimeout(() => setIdle(true), 3500);
    };
    wake();
    window.addEventListener("mousemove", wake);
    window.addEventListener("keydown", wake);
    window.addEventListener("touchstart", wake);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("keydown", wake);
      window.removeEventListener("touchstart", wake);
    };
  }, [started]);

  // Swipe
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touch.current = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY });
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0]!.clientX - touch.current.x;
    const dy = e.changedTouches[0]!.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
  };

  const start = (withSound: boolean) => {
    setStarted(true);
    setPaused(false);
    if (withSound) music.play(3000);
  };

  const shots = scene.screens?.length ?? 0;
  const autoShot = shots ? Math.min(shots - 1, Math.floor(progress * shots)) : 0;
  const shotIndex = manualShot ?? autoShot;
  const chromeHidden = idle && !holding && !soundOpen;
  const elapsedTotal = SCENES.slice(0, index).reduce((t, s) => t + s.durationSec, 0) + elapsed / 1000;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 overflow-hidden bg-navy-deep text-ivory"
      style={{ ["--pres-bottom" as string]: `${controlsH + (captions ? captionH + 8 : 0) + 20}px` }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {!started ? (
        <Intro onStart={start} />
      ) : (
        <>
          <main
            key={scene.id}
            className={`pres-scene-in absolute inset-0 ${holding ? "pres-paused" : ""}`}
            aria-roledescription="scene"
            aria-label={`Scene ${scene.number} of ${SCENES.length}: ${scene.headline}`}
          >
            <SceneView
              scene={scene}
              progress={progress}
              paused={holding}
              shotIndex={shotIndex}
              onShotSelect={(i) => setManualShot(i)}
              onZoom={setZoomShot}
              onExplore={() => setPanel("features")}
            />
          </main>

          {/* Top bar */}
          <header
            className={`absolute inset-x-0 top-0 z-30 flex items-center gap-3 bg-gradient-to-b from-navy-deep/80 to-transparent px-4 py-3 transition-opacity duration-500 sm:px-8 sm:py-4 ${chromeHidden ? "opacity-0" : "opacity-100"}`}
          >
            <Link to="/" className="rounded-xl bg-ivory px-2.5 py-1.5" aria-label="Rank Sarthi home">
              <Logo className="w-10 sm:w-12" />
            </Link>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{scene.chapter}</p>
              <p className="truncate text-xs text-ivory/60 tabular-nums">
                {String(scene.number).padStart(2, "0")} / {SCENES.length}
              </p>
            </div>
            <nav className="flex items-center gap-1" aria-label="Presentation sections">
              <TopButton onClick={() => setPanel("chapters")} icon={<ListTree className="h-4 w-4" />} label="Chapters" />
              <TopButton onClick={() => setPanel("features")} icon={<LayoutGrid className="h-4 w-4" />} label="All features" />
              <TopButton onClick={() => setPanel("gallery")} icon={<Images className="h-4 w-4" />} label="Screenshots" />
              <TopButton onClick={() => setPanel("sources")} icon={<Info className="h-4 w-4" />} label="Sources" />
            </nav>
          </header>

          {/* Captions */}
          {captions && (
            <div
              ref={captionRef}
              className="pointer-events-none absolute inset-x-0 z-20 flex justify-center px-4"
              style={{ bottom: controlsH }}
              aria-live="polite"
            >
              <p key={scene.id} className="pres-fade max-w-3xl rounded-lg bg-navy-deep/75 px-4 py-2 text-center text-[12.5px] leading-snug text-ivory/90 backdrop-blur sm:text-base">
                {scene.voiceover}
              </p>
            </div>
          )}

          {/* Controls */}
          <div
            ref={controlsRef}
            className={`absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-transparent px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-6 transition-opacity duration-500 sm:px-8 ${chromeHidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <div className="flex h-5 items-center gap-[3px]" role="group" aria-label="Scene progress">
              {SCENES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  className="group flex h-full flex-1 items-center"
                  aria-label={`Go to scene ${s.number}: ${s.headline}`}
                  title={`${s.number}. ${s.headline}`}
                  style={{ flexGrow: s.durationSec }}
                >
                  <span className="relative h-1 w-full overflow-hidden rounded-full bg-ivory/20 transition-all group-hover:h-1.5">
                    <span
                      className="absolute inset-0 origin-left bg-gold"
                      style={{ transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})` }}
                    />
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-1.5 flex items-center gap-1 sm:gap-2">
              <CtrlButton onClick={() => go(index - 1)} disabled={index === 0} label="Previous scene">
                <ChevronLeft className="h-5 w-5" />
              </CtrlButton>
              <CtrlButton onClick={togglePlay} label={ended ? "Replay" : paused ? "Play" : "Pause"} primary>
                {paused ? <Play className="h-5 w-5 translate-x-px" /> : <Pause className="h-5 w-5" />}
              </CtrlButton>
              <CtrlButton onClick={() => go(index + 1)} disabled={index === SCENES.length - 1} label="Next scene">
                <ChevronRight className="h-5 w-5" />
              </CtrlButton>
              <span className="ml-1 hidden text-xs tabular-nums text-ivory/55 sm:inline">
                {fmt(elapsedTotal)} / {fmt(TOTAL_DURATION_SEC)}
              </span>
              <div className="flex-1" />
              <div className="relative">
                <CtrlButton onClick={() => setSoundOpen((o) => !o)} label="Sound settings" active={soundOpen}>
                  {music.playing && !music.muted ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </CtrlButton>
                {soundOpen && (
                  <div className="pres-scene-in absolute bottom-12 right-0 w-64 rounded-2xl border border-ivory/15 bg-navy-deep/95 p-4 shadow-2xl backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Background music</p>
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={music.toggle}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ivory/20 px-3 py-2 text-sm hover:border-gold"
                      >
                        {music.playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
                        {music.playing ? "Pause music" : "Play music"}
                      </button>
                      <button
                        type="button"
                        onClick={music.toggleMute}
                        aria-pressed={music.muted}
                        className="rounded-full border border-ivory/20 p-2 hover:border-gold"
                        aria-label={music.muted ? "Unmute" : "Mute"}
                      >
                        {music.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                    </div>
                    <label className="mt-4 block text-xs text-ivory/60">
                      Volume {Math.round((music.muted ? 0 : music.volume) * 100)}%
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={music.muted ? 0 : music.volume}
                        onChange={(e) => music.setVolume(Number(e.target.value))}
                        className="mt-2 w-full accent-[var(--gold)]"
                      />
                    </label>
                    {music.error && <p className="mt-2 text-xs text-gold">{music.error}</p>}
                  </div>
                )}
              </div>
              <CtrlButton onClick={() => setCaptions((c) => !c)} label={captions ? "Hide captions" : "Show captions"} active={captions}>
                <Captions className="h-5 w-5" />
              </CtrlButton>
              <CtrlButton onClick={toggleFullscreen} label={fullscreen ? "Exit full screen" : "Full screen"}>
                {fullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </CtrlButton>
            </div>
          </div>

          {panel === "chapters" && <ChaptersPanel current={index} onGo={go} onClose={() => setPanel(null)} />}
          {panel === "features" && <FeatureExplorer onGo={go} onClose={() => setPanel(null)} />}
          {panel === "gallery" && <GalleryPanel onZoom={setZoomShot} onClose={() => setPanel(null)} />}
          {panel === "sources" && <SourcesPanel onClose={() => setPanel(null)} />}
          <Lightbox shot={zoomShot} onClose={() => setZoomShot(null)} />
        </>
      )}
    </div>
  );
}

function fmt(sec: number) {
  const s = Math.floor(sec);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function TopButton({ onClick, icon, label }: { onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full px-2.5 py-2 text-sm text-ivory/85 transition hover:bg-ivory/10 hover:text-ivory lg:px-3.5"
      aria-label={label}
      title={label}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}

function CtrlButton({
  onClick,
  label,
  children,
  disabled,
  primary,
  active,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
  primary?: boolean;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 place-items-center rounded-full transition disabled:opacity-30 ${
        primary ? "bg-ivory text-navy-deep hover:bg-gold" : active ? "bg-ivory/15 text-gold" : "text-ivory/85 hover:bg-ivory/10"
      }`}
    >
      {children}
    </button>
  );
}

function Intro({ onStart }: { onStart: (withSound: boolean) => void }) {
  return (
    <div className="absolute inset-0">
      <img src={introPhoto} alt="" width={1600} height={912} className="pres-kenburns absolute inset-0 h-full w-full object-cover" style={{ ["--pres-dur" as string]: "30s" }} />
      <div className="absolute inset-0 bg-navy-deep/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="pres-rise rounded-3xl bg-ivory px-6 py-4 shadow-[0_0_100px_-30px_var(--gold)]" style={{ ["--d" as string]: "100ms" }}>
          <Logo className="w-24 sm:w-32" alt="Rank Sarthi — official logo" />
        </div>
        <h1 className="pres-serif pres-rise mt-8 text-[clamp(2rem,5vw,4.2rem)] leading-[1.05] text-ivory" style={{ ["--d" as string]: "500ms" }}>
          Your rank has a reason.
        </h1>
        <p className="pres-serif pres-rise mt-3 text-[clamp(1.1rem,2.2vw,1.8rem)] italic text-gold" style={{ ["--d" as string]: "900ms" }}>
          Every Arjuna Deserves a Sarthi.
        </p>
        <div className="pres-rise mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center" style={{ ["--d" as string]: "1300ms" }}>
          <button
            type="button"
            onClick={() => onStart(true)}
            autoFocus
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-navy-deep transition hover:brightness-110"
          >
            <Volume2 className="h-5 w-5" aria-hidden /> Start Experience With Sound
          </button>
          <button
            type="button"
            onClick={() => onStart(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-7 py-4 text-base font-medium text-ivory transition hover:border-gold hover:text-gold"
          >
            <VolumeX className="h-5 w-5" aria-hidden /> Explore Silently
          </button>
        </div>
        <p className="pres-fade mt-6 text-xs tracking-wide text-ivory/55" style={{ ["--d" as string]: "1800ms" }}>
          21 scenes · about {Math.round(TOTAL_DURATION_SEC / 60)} minutes · Use ← → to navigate, Space to pause
        </p>
      </div>
    </div>
  );
}
