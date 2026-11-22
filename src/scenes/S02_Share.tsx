import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { FONT } from '../font';
import { ease, fadeIn, T } from '../components/ui';
import { Donut } from '../components/Charts';

// 0:30–1:15 — Angka besar 5.5B dan donut 68% online vs 32% offline.
export const S02_Share: React.FC = () => {
  const f = useCurrentFrame();
  const p = ease(f, 0, 1, 30, 150);
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', left: 150, top: 200 }}>
        <Donut pct={0.68} progress={p} size={560} />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 560,
            height: 560,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT,
            fontSize: 120,
            fontWeight: 800,
            color: C.ink,
            opacity: fadeIn(f, 120),
          }}
        >
          68%
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 590,
            width: 560,
            textAlign: 'center',
            fontFamily: FONT,
            fontSize: 34,
            color: C.muted,
            opacity: fadeIn(f, 150),
          }}
        >
          online · 32% offline
        </div>
      </div>
      <T x={860} y={250} w={1000} size={120} color={C.cyan} opacity={fadeIn(f, 120)}>
        5.5B online
      </T>
      <T x={860} y={420} w={1000} size={96} color={C.amber} opacity={fadeIn(f, 240)}>
        ~2.6B offline
      </T>
      <T x={860} y={600} w={1000} size={50} weight={600} color={C.muted} opacity={fadeIn(f, 420)}>
        A global average hides the story
      </T>
    </AbsoluteFill>
  );
};
