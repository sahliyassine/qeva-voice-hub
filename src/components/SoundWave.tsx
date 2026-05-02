import { useEffect, useMemo, useRef, useState } from "react";

interface SoundWaveProps {
  bars?: number;
  className?: string;
  color?: string;
  audioRef?: React.RefObject<HTMLAudioElement | null>;
}

export default function SoundWave({
  bars = 56,
  className = "",
  color = "#C75D3F",
  audioRef,
}: SoundWaveProps) {
  const [frequencies, setFrequencies] = useState<number[]>(
    new Array(bars).fill(0),
  );
  const animationFrameRef = useRef<number | undefined>(undefined);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const idleConfigs = useMemo(() => {
    return Array.from({ length: bars }, (_, i) => {
      const wave1 = Math.sin(i * 0.42) * 0.5 + 0.5;
      const wave2 = Math.sin(i * 0.13 + 2.1) * 0.3 + 0.5;
      const baseHeight = Math.max(
        0.15,
        Math.min(0.95, wave1 * 0.6 + wave2 * 0.4),
      );
      const animationDelay = (i * 0.04) % 1.8;
      const animationDuration = 1.4 + ((i * 17) % 9) / 10;
      return { baseHeight, animationDelay, animationDuration };
    });
  }, [bars]);

  useEffect(() => {
    if (!audioRef?.current) return;
    const audio = audioRef.current;

    const setupAnalyser = () => {
      if (audioCtxRef.current) return;
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const audioCtx = new Ctx();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.8;
      const source = audioCtx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
      sourceRef.current = source;
    };

    const updateFrequencies = () => {
      if (!analyserRef.current) return;
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      const step = Math.max(1, Math.floor(dataArray.length / bars));
      const newFreqs = Array.from({ length: bars }, (_, i) => {
        const value = dataArray[i * step] || 0;
        return Math.max(0.15, value / 255);
      });
      setFrequencies(newFreqs);
      animationFrameRef.current = requestAnimationFrame(updateFrequencies);
    };

    const onPlay = () => {
      try {
        setupAnalyser();
        audioCtxRef.current?.resume();
        updateFrequencies();
      } catch (e) {
        // ignore (e.g. createMediaElementSource called twice)
      }
    };

    const onPause = () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      setFrequencies(new Array(bars).fill(0));
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [audioRef, bars]);

  const isPlaying = frequencies.some((f) => f > 0.15);

  return (
    <div
      className={`flex items-center justify-center gap-[3px] h-20 w-full max-w-md mx-auto ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {idleConfigs.map((config, i) => {
        const liveHeight = frequencies[i];
        const finalHeight = isPlaying
          ? Math.max(0.15, liveHeight)
          : config.baseHeight;
        return (
          <div
            key={i}
            className="w-[3px] rounded-full transition-[height,opacity] duration-75 ease-out"
            style={{
              backgroundColor: color,
              height: `${finalHeight * 100}%`,
              opacity: isPlaying ? 0.9 : 0.55,
              animation: isPlaying
                ? "none"
                : `qevaSoundWave ${config.animationDuration}s ease-in-out ${config.animationDelay}s infinite`,
              transformOrigin: "center",
            }}
          />
        );
      })}
    </div>
  );
}
