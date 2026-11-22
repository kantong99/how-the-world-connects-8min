import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { DotMap } from '../components/DotMap';

// 0:00–0:30 — Bumi gelap, titik cahaya muncul, counter 1B → 5.5B.
export const S01_Intro: React.FC = () => {
  const f = useCurrentFrame();
  const count = ease(f, 1, 5.5, 240, 420);
  return (
    <AbsoluteFill>
      <DotMap progress={ease(f, 0, 1, 0, 300)} count={1400} seed={11} />
      <T x={120} y={60} size={28} weight={600} color={C.muted} opacity={fadeIn(f, 0)}>
        How the World Connects: The Internet in 8 Minutes
      </T>
      <T x={150} y={320} w={800} size={240} color={C.ink} opacity={fadeIn(f, 60, 30)}>
        1B
      </T>
      <T x={150} y={600} w={800} size={52} weight={600} color={C.muted} opacity={fadeIn(f, 90)}>
        online in 2005
      </T>
      <T x={960} y={320} w={900} size={240} color={C.cyan} opacity={fadeIn(f, 240, 30)}>
        {`${count.toFixed(1)}B`}
      </T>
      <T x={960} y={600} w={800} size={52} weight={600} color={C.muted} opacity={fadeIn(f, 260)}>
        today
      </T>
      <T x={120} y={820} w={1680} size={64} color={C.amber} opacity={fadeIn(f, 480)}>
        Two-thirds of humanity
      </T>
    </AbsoluteFill>
  );
};
