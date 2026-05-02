import { useMemo } from "react";

interface SoundWaveProps {
  bars?: number;
  className?: string;
  color?: string;
}

export default function SoundWave({
  bars = 56,
  className = "",
  color = "#C75D3F",
}: SoundWaveProps) {
  const barConfigs = useMemo(() => {
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

  return (
    <div
      aria-hidden="true"
      className={`flex h-20 w-full max-w-md items-center justify-between gap-[3px] ${className}`}
    >
      {barConfigs.map((config, i) => (
        <span
          key={i}
          className="block w-[3px] flex-1 rounded-full"
          style={{
            backgroundColor: color,
            height: `${config.baseHeight * 100}%`,
            transformOrigin: "center",
            animation: `qevaSoundWave ${config.animationDuration}s ease-in-out ${config.animationDelay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
