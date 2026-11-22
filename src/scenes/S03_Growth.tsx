import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { C } from '../theme';
import { ease, fadeIn, T } from '../components/ui';
import { LineChart, Pt } from '../components/Charts';
import adoption from '../data/adoption.json';

const data: Pt[] = adoption.series.map((s) => ({ x: s.year, y: s.usersBn, label: s.label }));

// 1:15–2:05 — Line chart 2005–2024, kurva melambat.
export const S03_Growth: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', left: 240, top: 230 }}>
        <LineChart
          data={data}
          progress={ease(f, 0, 1, 30, 300)}
          w={1400}
          h={560}
          xMin={2005}
          xMax={2024}
          yMax={6}
          yStep={1}
        />
      </div>
      <T x={1200} y={120} w={640} size={58} color={C.amber} opacity={fadeIn(f, 330)} align="right">
        Growth is slowing
      </T>
    </AbsoluteFill>
  );
};
