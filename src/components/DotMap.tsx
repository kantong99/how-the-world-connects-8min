import React from 'react';
import { C } from '../theme';

// Generator acak deterministik (mulberry32) agar setiap render identik.
const rng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Peta titik sederhana: titik menyala satu per satu sesuai progress 0–1.
export const DotMap: React.FC<{ progress: number; count?: number; seed?: number; color?: string }> = ({
  progress,
  count = 1400,
  seed = 7,
  color = C.cyan,
}) => {
  const r = rng(seed);
  const dots = Array.from({ length: count }, () => ({ x: r() * 1920, y: r() * 1080, t: r() }));
  return (
    <svg style={{ position: 'absolute', left: 0, top: 0 }} width={1920} height={1080}>
      {dots.map((d, i) => {
        const on = progress > d.t;
        return (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={on ? 3.5 : 2}
            fill={on ? color : 'rgba(148,163,184,0.25)'}
            opacity={on ? 0.9 : 1}
          />
        );
      })}
    </svg>
  );
};
