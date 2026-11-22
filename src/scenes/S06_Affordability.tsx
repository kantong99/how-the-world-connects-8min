import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { BarItem, BarRows } from '../components/Charts';
import indicators from '../data/indicators.json';

const a = indicators.affordability;
const items: BarItem[] = [
  { label: 'UN target (2% of income)', value: a.targetPctOfMonthlyIncome, display: '2%', color: C.cyan },
  { label: 'Illustrative low-income household', value: a.lowIncomeExamplePct, display: '~6%', color: '#64748B' },
  { label: 'Illustrative high-cost market', value: a.highCostExamplePct, display: '~9%', color: C.amber },
];

// 3:50–4:45 — Harga 1 GB vs pendapatan, target 2% (ilustrasi).
export const S06_Affordability: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <T x={160} y={120} w={1600} size={68} color={C.ink} opacity={fadeIn(f, 0)}>
        UN target: 1GB ≤ 2% of monthly income
      </T>
      <div style={{ position: 'absolute', left: 160, top: 300 }}>
        <BarRows items={items} progress={ease(f, 0, 1, 30, 300)} max={10} w={1600} />
      </div>
      <T x={160} y={860} w={1600} size={64} color={C.amber} opacity={fadeIn(f, 420)}>
        Many pay far more
      </T>
    </AbsoluteFill>
  );
};
