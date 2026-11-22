import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { FONT } from '../font';
import subtitles from '../subtitles.json';

interface Cue {
  scene: string;
  start: number;
  end: number;
  lines: string[];
}

const CUES = subtitles as Cue[];

// Caption custom: satu cue aktif per waktu, maksimal 2 baris, 42 karakter per baris.
export const Captions: React.FC = () => {
  const f = useCurrentFrame();
  const cue = CUES.find((c) => f >= c.start && f < c.end);
  if (!cue) return null;
  const opacity = interpolate(f, [cue.start, cue.start + 6, cue.end - 6, cue.end], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 64, display: 'flex', justifyContent: 'center', opacity }}>
      <div
        style={{
          background: 'rgba(11,18,32,0.8)',
          padding: '14px 28px',
          borderRadius: 12,
          fontFamily: FONT,
          fontSize: 38,
          fontWeight: 600,
          color: '#F8FAFC',
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        {cue.lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
};
