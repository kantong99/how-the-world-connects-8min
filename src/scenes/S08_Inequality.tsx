import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { BarRows, Icon, IconName, rise } from '../components/Charts';
import regions from '../data/regions.json';

const tiles: { icon: IconName; label: string }[] = [
  { icon: 'home', label: 'Rural / urban' },
  { icon: 'person', label: 'Gender' },
  { icon: 'person', label: 'Age' },
  { icon: 'signal', label: 'Disability' },
];

// 5:35–6:30 — Ikon kelompok yang tertinggal dan gap gender 70% vs 65%.
export const S08_Inequality: React.FC = () => {
  const f = useCurrentFrame();
  const g = regions.gender;
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', left: 120, top: 140, display: 'flex', gap: 60 }}>
        {tiles.map((t, i) => (
          <div
            key={t.label}
            style={{
              width: 380,
              height: 300,
              borderRadius: 24,
              border: `2px solid ${C.line}`,
              background: 'rgba(248,250,252,0.03)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              ...rise(f, 30 + i * 30),
            }}
          >
            <Icon name={t.icon} size={110} color={i === 0 ? C.amber : C.cyan} />
            <div style={{ fontFamily: 'sans-serif', fontSize: 36, fontWeight: 600, color: C.ink }}>{t.label}</div>
          </div>
        ))}
      </div>

      <T x={120} y={560} w={800} size={70} color={C.amber} opacity={fadeIn(f, 180)}>
        Rural &lt; Urban
      </T>
      <T x={120} y={650} w={800} size={70} color={C.ink} opacity={fadeIn(f, 240)}>
        Women &lt; Men
      </T>
      <T x={120} y={760} w={800} size={56} weight={600} color={C.muted} opacity={fadeIn(f, 300)}>
        70% men vs 65% women
      </T>

      <div style={{ position: 'absolute', left: 1000, top: 580, opacity: fadeIn(f, 300) }}>
        <BarRows
          items={[
            { label: 'Men', value: g.men, display: `${g.men}%`, color: C.cyan },
            { label: 'Women', value: g.women, display: `${g.women}%`, color: C.amber },
          ]}
          progress={ease(f, 0, 1, 330, 480)}
          max={100}
          w={800}
        />
      </div>
    </AbsoluteFill>
  );
};
