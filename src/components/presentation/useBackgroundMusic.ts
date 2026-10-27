import { useCallback, useEffect, useRef, useState } from "react";
import musicAsset from "@/assets/presentation/rank-sarthi-background-music.mp3.asset.json";

// Lovable's asset proxy is not served on localhost/standalone hosts; use the verified public origin.
const MUSIC_URL = musicAsset.url.startsWith("/") ? `https://rank-sarthi-hub.lovable.app${musicAsset.url}` : musicAsset.url;
const STORE_KEY = "rs-presentation-audio";

type Stored = { volume: number; muted: boolean };

/**
 * One persistent <audio> element for the whole showcase: created only after a user
 * gesture, loops, and fades volume in/out. It never restarts between scenes.
 */
export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [volume, setVolumeState] = useState(0.6);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const volRef = useRef(0.6);
  const mutedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const s = JSON.parse(raw) as Stored;
        if (typeof s.volume === "number") {
          setVolumeState(s.volume);
          volRef.current = s.volume;
        }
        if (typeof s.muted === "boolean") {
          setMuted(s.muted);
          mutedRef.current = s.muted;
        }
      }
    } catch {
      /* ignore */
    }
    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const persist = (v: number, m: boolean) => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ volume: v, muted: m }));
    } catch {
      /* ignore */
    }
  };

  const target = () => (mutedRef.current ? 0 : volRef.current);

  const fadeTo = useCallback((to: number, ms: number, done?: () => void) => {
    const a = audioRef.current;
    if (!a) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const from = a.volume;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = t * t * (3 - 2 * t);
      a.volume = Math.max(0, Math.min(1, from + (to - from) * eased));
      if (t < 1) fadeRef.current = requestAnimationFrame(step);
      else {
        fadeRef.current = null;
        done?.();
      }
    };
    fadeRef.current = requestAnimationFrame(step);
  }, []);

  const ensureAudio = () => {
    if (audioRef.current) return audioRef.current;
    const a = new Audio(MUSIC_URL);
    a.loop = true;
    a.preload = "auto";
    a.volume = 0;
    a.addEventListener("play", () => setPlaying(true));
    a.addEventListener("pause", () => setPlaying(false));
    a.addEventListener("error", () => setError("Music could not be loaded."));
    audioRef.current = a;
    return a;
  };

  /** Must be called from a user gesture. */
  const play = useCallback(
    (fadeMs = 2500) => {
      const a = ensureAudio();
      setEnabled(true);
      a.play()
        .then(() => fadeTo(target(), fadeMs))
        .catch(() => setError("Your browser blocked audio. Press play on the music control to try again."));
    },
    [fadeTo],
  );

  const pause = useCallback(
    (fadeMs = 900) => {
      const a = audioRef.current;
      if (!a) return;
      fadeTo(0, fadeMs, () => a.pause());
    },
    [fadeTo],
  );

  const toggle = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) pause();
    else play(1200);
  }, [pause, play]);

  const setVolume = useCallback(
    (v: number) => {
      volRef.current = v;
      setVolumeState(v);
      if (v > 0 && mutedRef.current) {
        mutedRef.current = false;
        setMuted(false);
      }
      persist(v, mutedRef.current);
      if (audioRef.current && !audioRef.current.paused) fadeTo(target(), 150);
    },
    [fadeTo],
  );

  const toggleMute = useCallback(() => {
    mutedRef.current = !mutedRef.current;
    setMuted(mutedRef.current);
    persist(volRef.current, mutedRef.current);
    if (audioRef.current && !audioRef.current.paused) fadeTo(target(), 500);
  }, [fadeTo]);

  /** Gentle end-of-film fade (closing scene). */
  const fadeOutAndStop = useCallback((ms = 4000) => pause(ms), [pause]);

  return { enabled, playing, volume, muted, error, play, pause, toggle, setVolume, toggleMute, fadeOutAndStop };
}

export type BackgroundMusic = ReturnType<typeof useBackgroundMusic>;
