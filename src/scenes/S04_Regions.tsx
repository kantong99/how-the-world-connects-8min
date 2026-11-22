import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { BarItem, BarRows } from '../components/Charts';
import regions from '../data/regions.json';

const items: BarItem[] = regions.regions.map((r) => ({
  label: r.name,
  value: r.pct,
  display: r.display,
  color: r.name === 'Africa' ? C.amber : C.cyan,
}));

// 2:05–3:00 — Bar chart persentase online per wilayah (ilustrasi).
export const S04_Regions: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <T x={160} y={120} w={1600} size={60} color={C.ink} opacity={fadeIn(f, 0)}>
        Share of people online, by region
      </T>
      <div style={{ position: 'absolute', left: 160, top: 280 }}>
        <BarRows items={items} progress={ease(f, 0, 1, 30, 360)} max={100} w={1600} />
      </div>
    </AbsoluteFill>
  );
};
