import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { DotMap } from '../components/DotMap';

// 7:15–8:00 — Bumi kembali, titik menyala, end card.
export const S11_EndCard: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <DotMap progress={ease(f, 0, 1, 0, 240)} count={1400} seed={11} />
      <T x={120} y={300} w={1680} size={84} weight={600} color={C.ink} opacity={fadeIn(f, 200)}>
        The next billion is the hardest
      </T>
      <T x={120} y={440} w={1680} size={120} color={C.cyan} opacity={fadeIn(f, 330)}>
        Who gets to participate?
      </T>
      <T x={120} y={690} w={1680} size={36} weight={600} color={C.muted} opacity={fadeIn(f, 480)}>
        Sources: ITU, World Bank, GSMA, Ookla
      </T>
    </AbsoluteFill>
  );
};
