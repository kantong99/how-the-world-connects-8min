import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { Icon } from '../components/Charts';

// 3:00–3:50 — Tower seluler menyala, smartphone + SIM, coverage vs usage.
export const S05_Mobile: React.FC = () => {
  const f = useCurrentFrame();
  const on = ease(f, 0, 1, 30, 120);
  const rings = [0, 1, 2].map((i) => {
    const r = 80 + i * 70;
    const pulse = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(f / 12 - i));
    const dx = r * 0.71;
    return (
      <path
        key={i}
        d={`M ${260 - dx} ${80 - dx} A ${r} ${r} 0 0 1 ${260 + dx} ${80 - dx}`}
        fill="none"
        stroke={C.cyan}
        strokeWidth={10}
        strokeLinecap="round"
        opacity={on * pulse}
      />
    );
  });
  return (
    <AbsoluteFill>
      <T x={120} y={120} w={1000} size={96} color={C.ink} opacity={fadeIn(f, 0)}>
        Mobile is the on-ramp
      </T>

      <svg width={520} height={640} viewBox="0 0 520 640" style={{ position: 'absolute', left: 1000, top: 260 }}>
        {rings}
        <path d="M260 80 L340 620 H180 Z" fill="none" stroke={C.cyan} strokeWidth={10} strokeLinejoin="round" opacity={on} />
        <path d="M215 250 H305 M200 380 H320 M185 500 H335" stroke={C.cyan} strokeWidth={8} opacity={on} />
      </svg>
      <T x={1000} y={930} w={520} size={34} weight={600} color={C.muted} opacity={fadeIn(f, 90)} align="center">
        Tower
      </T>

      <div style={{ position: 'absolute', left: 260, top: 380, width: 300, height: 300, opacity: fadeIn(f, 60) }}>
        <Icon name="phone" size={300} color={C.amber} />
      </div>
      <T x={260} y={720} w={300} size={34} weight={600} color={C.muted} opacity={fadeIn(f, 120)} align="center">
        Smartphone + SIM
      </T>

      <T x={120} y={860} w={1700} size={80} color={C.amber} opacity={fadeIn(f, 600)}>
        Coverage ≠ usage
      </T>
    </AbsoluteFill>
  );
};
