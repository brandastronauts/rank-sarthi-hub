import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Scene } from "@/content/presentation/scenes";
import { SCREEN_BY_ID, type Screen } from "@/content/presentation/screens";
import { FEATURE_PORTALS } from "@/content/presentation/features";
import { ScreenshotStage } from "./ScreenshotStage";
import { Ecosystem, IndiaMap, LearningLoop, Logo, Operations, ParticipationChart, Spectrum } from "./visuals";
import s01 from "@/assets/presentation/s01-exam-centre.webp";
import s03 from "@/assets/presentation/s03-student-results.webp";
import s05 from "@/assets/presentation/s05-chariot.webp";
import s06 from "@/assets/presentation/s06-teacher-students.webp";
import s20 from "@/assets/presentation/s20-vision.webp";
import pStudent from "@/assets/presentation/s19-student.webp";
import pParents from "@/assets/presentation/s19-parents.webp";
import pTeacher from "@/assets/presentation/s19-teacher.webp";
import pInstitute from "@/assets/presentation/s19-institute.webp";

const PHOTOS = { s01, s03, s05, s06, s20 } as const;
const PORTRAITS = [pStudent, pParents, pTeacher, pInstitute];

const EXAM_SCREEN_FEATURES =
  FEATURE_PORTALS.find((p) => p.id === "student")?.groups.find((g) => g.name === "Exam screen")?.items ?? [];

type Props = {
  scene: Scene;
  progress: number; // 0..1 within the scene
  paused: boolean;
  shotIndex: number;
  onShotSelect: (i: number) => void;
  onZoom: (s: Screen) => void;
  onExplore: () => void;
};

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Headline({ children, className = "", delay = 200 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <h2
      className={`pres-serif pres-rise text-balance text-[clamp(1.9rem,4.6vw,4.6rem)] font-normal leading-[1.04] text-ivory ${className}`}
      style={d(delay)}
    >
      {children}
    </h2>
  );
}

function PhotoBackdrop({ src, dur, position = "center" }: { src: string; dur: number; position?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={src}
        alt=""
        width={1600}
        height={912}
        decoding="async"
        className="pres-kenburns h-full w-full object-cover"
        style={{ ["--pres-dur" as string]: `${dur + 4}s`, objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/30 to-transparent" />
    </div>
  );
}

export function SceneView({ scene, progress, paused, shotIndex, onShotSelect, onZoom, onExplore }: Props) {
  const ms = scene.durationSec * 1000;

  if (scene.kind === "photo" || scene.kind === "sarthi") {
    const src = PHOTOS[scene.photo ?? "s01"];
    const late = scene.kind === "sarthi" && progress > 0.62;
    return (
      <div className="absolute inset-0">
        <PhotoBackdrop src={src} dur={scene.durationSec} position={scene.photo === "s03" || scene.photo === "s20" ? "70% center" : "center"} />
        {scene.kind === "sarthi" && (
          <div className={`absolute inset-0 transition-opacity duration-[2500ms] ${late ? "opacity-100" : "opacity-0"}`} aria-hidden>
            <PhotoBackdrop src={s01} dur={10} />
          </div>
        )}
        <div className="relative flex h-full flex-col justify-end px-6 pb-44 pt-24 sm:px-14 sm:pb-48 lg:px-20">
          <div className="max-w-4xl">
            <Headline>{scene.headline}</Headline>
            {scene.secondary && (
              <p className="pres-rise mt-5 max-w-2xl text-lg text-ivory/80 sm:text-2xl" style={d(1100)}>
                {scene.secondary}
              </p>
            )}
            {scene.overlays && (
              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-8">
                {scene.overlays.map((o, i) => (
                  <li key={o} className="pres-rise flex items-center gap-3 text-base text-ivory/90 sm:text-xl" style={d(2200 + i * 2600)}>
                    <span className="h-px w-6 bg-gold" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            )}
            {scene.id === "s06" && (
              <div className="pres-rise mt-8 inline-flex rounded-2xl bg-ivory px-5 py-3" style={d(3200)}>
                <Logo className="w-20 sm:w-24" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const shell = (children: React.ReactNode, wide = false) => (
    <div className="absolute inset-0 overflow-y-auto bg-navy-deep">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_55%)]" aria-hidden />
      <div className={`relative mx-auto flex min-h-full w-full flex-col justify-center px-5 pb-44 pt-24 sm:px-10 sm:pb-40 ${wide ? "max-w-[1500px]" : "max-w-6xl"}`}>
        {children}
      </div>
    </div>
  );

  switch (scene.kind) {
    case "scale":
      return shell(
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
          <IndiaMap className="mx-auto h-44 w-auto sm:h-72 lg:h-[min(60vh,560px)]" />
          <div>
            <Headline className="!text-[clamp(1.8rem,3.6vw,3.6rem)]">{scene.headline}</Headline>
            <div className="mt-6 sm:mt-8">
              <ParticipationChart />
            </div>
          </div>
        </div>,
        true,
      );
    case "spectrum":
      return shell(
        <>
          <Headline className="mx-auto max-w-4xl text-center">{scene.headline}</Headline>
          <div className="mt-12 sm:mt-16">
            <Spectrum items={scene.overlays ?? []} />
          </div>
        </>,
      );
    case "ecosystem":
      return shell(
        <>
          <Headline className="text-center">{scene.headline}</Headline>
          <div className="mt-10">
            <Ecosystem pathways={(scene.secondary ?? "").split("•").map((s) => s.trim())} />
          </div>
        </>,
      );
    case "loop":
      return shell(
        <>
          <Headline className="text-center !text-[clamp(1.6rem,3.8vw,3.8rem)]">{scene.headline}</Headline>
          <div className="mt-12 sm:mt-20">
            <LearningLoop steps={scene.overlays ?? []} durationSec={scene.durationSec} paused={paused} />
          </div>
        </>,
      );
    case "operations":
      return shell(
        <>
          <Headline className="mx-auto max-w-4xl text-center">{scene.headline}</Headline>
          <div className="mt-12 sm:mt-16">
            <Operations items={scene.overlays ?? []} paused={paused} durationSec={scene.durationSec} />
          </div>
          <p className="pres-fade mt-10 text-center text-xs text-ivory/45" style={d(1500)}>
            No Platform Admin screenshots were supplied, so none are shown.{" "}
            <button type="button" onClick={onExplore} className="underline underline-offset-4 hover:text-gold">
              See all Platform Admin capabilities
            </button>
          </p>
        </>,
      );
    case "benefits": {
      const active = Math.min(3, Math.floor(progress * 4));
      return shell(
        <>
          <Headline className="max-w-4xl !text-[clamp(1.7rem,3.6vw,3.6rem)]">{scene.headline}</Headline>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {(scene.overlays ?? []).map((line, i) => {
              const [who, what] = line.split(" — ");
              const on = i === active;
              return (
                <figure
                  key={who}
                  className={`pres-rise relative overflow-hidden rounded-2xl transition-all duration-700 ${on ? "opacity-100" : "opacity-45 saturate-50"}`}
                  style={d(400 + i * 200)}
                >
                  <img src={PORTRAITS[i]} alt="" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full object-cover sm:aspect-[4/5]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{who}</span>
                    <span className="mt-1 block text-sm leading-snug text-ivory sm:text-lg">{what}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-ivory/45">{scene.qualification}</p>
        </>,
        true,
      );
    }
    case "closing":
      return shell(
        <div className="flex flex-col items-center text-center">
          <div className="pres-rise rounded-3xl bg-ivory px-8 py-6 shadow-[0_0_120px_-30px_var(--gold)]" style={d(200)}>
            <Logo className="w-32 sm:w-44" alt="Rank Sarthi — official logo" />
          </div>
          <p className="pres-serif pres-rise mt-8 text-[clamp(1.8rem,4vw,3.6rem)] leading-tight text-ivory" style={d(1200)}>
            {scene.overlays?.[0]}
          </p>
          <p className="pres-serif pres-rise mt-2 text-[clamp(1.3rem,2.6vw,2.4rem)] italic text-gold" style={d(2400)}>
            {scene.overlays?.[1]}
          </p>
          <p className="pres-rise mt-5 text-sm tracking-[0.2em] text-ivory/60" style={d(3200)}>
            {scene.overlays?.[2]}
          </p>
          <div className="pres-rise mt-8 flex flex-col items-center gap-3 sm:flex-row" style={d(3800)}>
            <Link
              to="/diagnostic"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep transition hover:brightness-110"
            >
              Start My Free Diagnostic <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/institutes" className="rounded-full border border-ivory/30 px-6 py-3 text-sm text-ivory hover:border-gold hover:text-gold">
              For institutes
            </Link>
            <Link to="/" className="rounded-full border border-ivory/30 px-6 py-3 text-sm text-ivory hover:border-gold hover:text-gold">
              Visit ranksarthi.com
            </Link>
          </div>
          <button type="button" onClick={onExplore} className="pres-fade mt-6 text-sm text-ivory/60 underline underline-offset-4 hover:text-gold" style={d(4400)}>
            Explore all features
          </button>
        </div>,
      );
    case "screens": {
      const shots = (scene.screens ?? []).map((id) => SCREEN_BY_ID[id]);
      const callouts = scene.overlays ?? [];
      const activeCallout = Math.min(callouts.length - 1, Math.floor(progress * callouts.length));
      return shell(
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,9fr)] lg:gap-12">
          <div>
            <p className="pres-fade text-[11px] font-semibold uppercase tracking-[0.2em] text-gold" style={d(100)}>
              {scene.chapter}
            </p>
            <Headline className="mt-3 !text-[clamp(1.7rem,3.2vw,3.2rem)]">{scene.headline}</Headline>
            <ul className="mt-5 flex flex-wrap gap-2 lg:mt-8 lg:flex-col lg:gap-3">
              {callouts.map((c, i) => (
                <li
                  key={c}
                  className={`pres-rise flex items-center gap-3 rounded-full border px-3 py-1.5 text-sm transition-all duration-500 lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-1 lg:text-lg ${
                    i === activeCallout ? "border-gold text-ivory" : "border-ivory/15 text-ivory/50"
                  }`}
                  style={d(700 + i * 200)}
                >
                  {c}
                </li>
              ))}
            </ul>
            {scene.id === "s11" && (
              <ul className="pres-fade mt-5 hidden space-y-1.5 text-sm text-ivory/70 lg:block" style={d(1400)} aria-label="Exam-screen capabilities from the developer's feature list">
                {EXAM_SCREEN_FEATURES.map((f) => (
                  <li key={f.title}>
                    <span className="text-ivory">{f.title}</span> — {f.detail}
                  </li>
                ))}
              </ul>
            )}
            {scene.qualification && <p className="mt-5 text-xs leading-relaxed text-ivory/50">{scene.qualification}</p>}
          </div>
          <div className="pres-rise" style={d(500)}>
            <ScreenshotStage shots={shots} index={shotIndex} onSelect={onShotSelect} onZoom={onZoom} durationMs={ms / shots.length} />
          </div>
        </div>,
        true,
      );
    }
    default:
      return null;
  }
}
