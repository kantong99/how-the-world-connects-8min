import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { Icon, IconName, rise } from '../components/Charts';

const levers: { icon: IconName; title: string; color: string }[] = [
  { icon: 'signal', title: '1. Infrastructure', color: C.cyan },
  { icon: 'phone', title: '2. Affordability', color: C.amber },
  { icon: 'school', title: '3. Skills & relevance', color: C.cyan },
];

// 7:25–8:25 — Three columns: Infrastructure, Affordability, Skills.
export const S10_Levers: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      {levers.map((l, i) => (
        <div
          key={l.title}
          style={{
            position: 'absolute',
            left: 120 + i * 580,
            top: 260,
            width: 520,
            height: 540,
            borderRadius: 28,
            border: `2px solid ${C.line}`,
            background: 'rgba(248,250,252,0.03)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            ...rise(f, 30 + i * 30),
          }}
        >
          <Icon name={l.icon} size={180} color={l.color} />
          <div style={{ fontFamily: 'sans-serif', fontSize: 50, fontWeight: 800, color: C.ink, textAlign: 'center' }}>
            {l.title}
          </div>
        </div>
      ))}
      <T x={120} y={160} w={1700} size={56} weight={600} color={C.muted} opacity={ease(f, 0, 1, 0, 30)}>
        What would close the gap?
      </T>
      <T x={120} y={880} w={1700} size={44} weight={600} color={C.amber} opacity={fadeIn(f, 600)}>
        No single lever is enough.
      </T>
    </AbsoluteFill>
  );
};
