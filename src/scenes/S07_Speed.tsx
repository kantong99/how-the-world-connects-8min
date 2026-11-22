import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { BarItem, BarRows, Speedometer } from '../components/Charts';
import indicators from '../data/indicators.json';

const items: BarItem[] = indicators.medianFixedSpeedMbps.map((r) => ({
  label: r.region,
  value: r.mbps,
  display: `${r.mbps} Mbps`,
  color: r.region === 'Africa' ? C.amber : C.cyan,
}));

// 4:45–5:35 — Speedometer, bar median speed per region (ilustrasi).
export const S07_Speed: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <T x={120} y={100} w={1700} size={80} color={C.ink} opacity={fadeIn(f, 0)}>
        Speed is a divide
      </T>
      <div style={{ position: 'absolute', left: 120, top: 280, opacity: fadeIn(f, 30) }}>
        <Speedometer value={90} max={100} progress={ease(f, 0, 1, 30, 180)} size={620} unit="Mbps (illustrative)" />
      </div>
      <div style={{ position: 'absolute', left: 900, top: 320 }}>
        <BarRows items={items} progress={ease(f, 0, 1, 120, 420)} max={100} w={900} />
      </div>
      <T x={120} y={880} w={1700} size={60} color={C.amber} opacity={fadeIn(f, 540)}>
        Upload matters too  ↑ upload · ↓ download
      </T>
    </AbsoluteFill>
  );
};
