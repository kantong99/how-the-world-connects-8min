import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { fadeIn, T } from '../components/ui';
import { Icon, IconName, rise } from '../components/Charts';

const panels: { icon: IconName; label: string }[] = [
  { icon: 'briefcase', label: 'Jobs' },
  { icon: 'school', label: 'Education' },
  { icon: 'home', label: 'Government services' },
  { icon: 'store', label: 'Small business' },
];

// 6:30–7:25 — Split screen: jobs, education, government, small business.
export const S09_Split: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', left: 120, top: 200, width: 900, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
        {panels.map((p, i) => (
          <div
            key={p.label}
            style={{
              height: 300,
              borderRadius: 24,
              border: `2px solid ${C.line}`,
              background: 'rgba(248,250,252,0.03)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              ...rise(f, 30 + i * 25),
            }}
          >
            <Icon name={p.icon} size={100} color={i % 2 ? C.amber : C.cyan} />
            <div style={{ fontFamily: 'sans-serif', fontSize: 34, fontWeight: 600, color: C.ink }}>{p.label}</div>
          </div>
        ))}
      </div>

      <T x={1120} y={230} w={720} size={70} color={C.cyan} opacity={fadeIn(f, 150)}>
        Connection is opportunity
      </T>
      <T x={1120} y={460} w={720} size={56} color={C.amber} opacity={fadeIn(f, 330)}>
        Connection alone is not enough
      </T>
      <T x={1120} y={700} w={720} size={44} weight={600} color={C.muted} opacity={fadeIn(f, 600)}>
        connection ≠ inclusion
      </T>
    </AbsoluteFill>
  );
};
