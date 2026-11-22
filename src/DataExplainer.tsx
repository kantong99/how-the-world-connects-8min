import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { C, SOURCE_LINE } from './theme';
import { SCENES } from './timeline';
import { Captions } from './components/Captions';
import { S01_Intro } from './scenes/S01_Intro';
import { S02_Share } from './scenes/S02_Share';
import { S03_Growth } from './scenes/S03_Growth';
import { S04_Regions } from './scenes/S04_Regions';
import { S05_Mobile } from './scenes/S05_Mobile';
import { S06_Affordability } from './scenes/S06_Affordability';
import { S07_Speed } from './scenes/S07_Speed';
import { S08_Inequality } from './scenes/S08_Inequality';
import { S09_Split } from './scenes/S09_Split';
import { S10_Levers } from './scenes/S10_Levers';
import { S11_EndCard } from './scenes/S11_EndCard';

const COMPONENTS: Record<string, React.FC> = {
  S01: S01_Intro,
  S02: S02_Share,
  S03: S03_Growth,
  S04: S04_Regions,
  S05: S05_Mobile,
  S06: S06_Affordability,
  S07: S07_Speed,
  S08: S08_Inequality,
  S09: S09_Split,
  S10: S10_Levers,
  S11: S11_EndCard,
};

export const DataExplainer: React.FC = () => (
  <AbsoluteFill style={{ background: C.navy }}>
    {SCENES.map((s) => {
      const Scene = COMPONENTS[s.id];
      return (
        <Sequence key={s.id} from={s.from} durationInFrames={s.dur} name={s.label}>
          <Scene />
        </Sequence>
      );
    })}

    <Audio src={staticFile('voiceover.mp3')} />
    <Audio src={staticFile('music.mp3')} volume={0.12} loop />

    <Captions />

    <div
      style={{
        position: 'absolute',
        left: 48,
        bottom: 16,
        fontFamily: 'sans-serif',
        fontSize: 18,
        color: C.muted,
      }}
    >
      {SOURCE_LINE}
    </div>
  </AbsoluteFill>
);
