"use client";

interface StepDotsProps {
  total: number;
  current: number; // 0-indexed
}

export function StepDots({ total, current }: StepDotsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="transition-all duration-500"
          style={{
            width: i === current ? 20 : 6,
            height: 6,
            borderRadius: 99,
            background: i === current
              ? "#b8853a"
              : i < current
              ? "rgba(184,133,58,0.35)"
              : "rgba(255,255,255,0.12)",
          }}
        />
      ))}
    </div>
  );
}