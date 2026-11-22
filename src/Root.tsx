import React from 'react';
import { Composition } from 'remotion';
import { DataExplainer } from './DataExplainer';
import { FPS, HEIGHT, TOTAL_FRAMES, WIDTH } from './theme';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="DataExplainer"
    component={DataExplainer}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    width={WIDTH}
    height={HEIGHT}
  />
);
