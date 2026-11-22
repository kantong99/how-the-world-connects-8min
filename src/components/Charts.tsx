import React from 'react';
import { C } from '../theme';
import { FONT } from '../font';
import { ease } from './ui';

export type IconName = 'phone' | 'home' | 'person' | 'signal' | 'briefcase' | 'school' | 'store';

// Donat: pct 0–1, progress 0–1 (animasi).
export const Donut: React.FC<{ pct: number; progress: number; size?: number; color?: string }> = ({
  pct,
  progress,
  size = 520,
  color = C.cyan,
}) => {
  const r = 160;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <circle cx={200} cy={200} r={r} fill="none" stroke={C.line} strokeWidth={44} />
      <circle
        cx={200}
        cy={200}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={44}
        strokeDasharray={`${circ * pct * progress} ${circ}`}
        transform="rotate(-90 200 200)"
      />
    </svg>
  );
};

export interface Pt {
  x: number;
  y: number;
  label: string;
}

// Line chart sederhana dengan animasi penggambaran garis.
export const LineChart: React.FC<{
  data: Pt[];
  progress: number;
  w: number;
  h: number;
  xMin: number;
  xMax: number;
  yMax: number;
  yStep: number;
}> = ({ data, progress, w, h, xMin, xMax, yMax, yStep }) => {
  const px = (x: number) => ((x - xMin) / (xMax - xMin)) * w;
  const py = (y: number) => h - (y / yMax) * h;
  const path = data.map((p, i) => `${i === 0 ? 'M' : 'L'} ${px(p.x)} ${py(p.y)}`).join(' ');
  const ticks: number[] = [];
  for (let v = 0; v <= yMax; v += yStep) ticks.push(v);

  return (
    <svg width={w + 120} height={h + 120} viewBox={`-100 -60 ${w + 120} ${h + 120}`} style={{ overflow: 'visible' }}>
      {ticks.map((v) => (
        <g key={v}>
          <line x1={0} x2={w} y1={py(v)} y2={py(v)} stroke={C.line} strokeWidth={2} />
          <text x={-18} y={py(v) + 9} textAnchor="end" fill={C.muted} fontSize={26} fontFamily={FONT}>
            {v}B
          </text>
        </g>
      ))}
      <path
        d={path}
        fill="none"
        stroke={C.cyan}
        strokeWidth={10}
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={`${progress} 1`}
      />
      {data.map((p, i) => {
        const on = progress * data.length > i;
        return (
          <g key={p.label} opacity={on ? 1 : 0}>
            <circle cx={px(p.x)} cy={py(p.y)} r={12} fill={C.navy} stroke={C.cyan} strokeWidth={6} />
            <text x={px(p.x)} y={py(p.y) - 26} textAnchor="middle" fill={C.ink} fontSize={30} fontWeight={800} fontFamily={FONT}>
              {p.label}
            </text>
            <text x={px(p.x)} y={h + 50} textAnchor="middle" fill={C.muted} fontSize={26} fontFamily={FONT}>
              {p.x}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export interface BarItem {
  label: string;
  value: number;
  display: string;
  color?: string;
}

// Bar horizontal; setiap baris muncul bergantian.
export const BarRows: React.FC<{ items: BarItem[]; progress: number; max: number; w: number }> = ({
  items,
  progress,
  max,
  w,
}) => (
  <div style={{ width: w, display: 'flex', flexDirection: 'column', gap: 30, fontFamily: FONT }}>
    {items.map((b, i) => {
      const p = Math.min(1, Math.max(0, progress * items.length - i));
      return (
        <div key={b.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 36, fontWeight: 600, color: C.ink, marginBottom: 10 }}>
            <span>{b.label}</span>
            <span>{b.display}</span>
          </div>
          <div style={{ height: 34, background: C.line, borderRadius: 17, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${(b.value / max) * 100 * p}%`,
                background: b.color ?? C.cyan,
                borderRadius: 17,
              }}
            />
          </div>
        </div>
      );
    })}
  </div>
);

// Speedometer setengah lingkaran; value dalam satuan max.
export const Speedometer: React.FC<{ value: number; max: number; progress: number; size?: number; unit: string }> = ({
  value,
  max,
  progress,
  size = 560,
  unit,
}) => {
  const frac = (value / max) * progress;
  const needleDeg = 180 + frac * 180;
  const pt = (deg: number, r: number): [number, number] => [
    200 + r * Math.cos((deg * Math.PI) / 180),
    200 + r * Math.sin((deg * Math.PI) / 180),
  ];
  const [ex, ey] = pt(needleDeg, 160);
  const [nx, ny] = pt(needleDeg, 130);
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 400 280">
      <path d="M 40 200 A 160 160 0 0 1 360 200" fill="none" stroke={C.line} strokeWidth={28} strokeLinecap="round" />
      <path
        d={`M 40 200 A 160 160 0 ${frac > 0.5 ? 1 : 0} 1 ${ex} ${ey}`}
        fill="none"
        stroke={C.cyan}
        strokeWidth={28}
        strokeLinecap="round"
      />
      <line x1={200} y1={200} x2={nx} y2={ny} stroke={C.amber} strokeWidth={10} strokeLinecap="round" />
      <circle cx={200} cy={200} r={14} fill={C.amber} />
      <text x={200} y={250} textAnchor="middle" fill={C.ink} fontSize={58} fontWeight={800} fontFamily={FONT}>
        {Math.round(value * frac)}
      </text>
      <text x={200} y={275} textAnchor="middle" fill={C.muted} fontSize={18} fontFamily={FONT}>
        {unit}
      </text>
    </svg>
  );
};

// Ikon garis sederhana (24x24).
export const Icon: React.FC<{ name: IconName; size?: number; color?: string }> = ({ name, size = 96, color = C.cyan }) => {
  const paths: Record<IconName, React.ReactNode> = {
    phone: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
    home: (
      <>
        <path d="M3 11 12 3l9 8" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1-4.5 4-6.5 8-6.5s7 2 8 6.5" />
      </>
    ),
    signal: (
      <>
        <path d="M4 9a11 11 0 0 1 16 0" />
        <path d="M7 12.5a6.5 6.5 0 0 1 10 0" />
        <circle cx="12" cy="16.5" r="1.5" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5h6v2" />
      </>
    ),
    school: (
      <>
        <path d="M2 9l10-5 10 5-10 5z" />
        <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
    store: (
      <>
        <path d="M3 9l2-5h14l2 5" />
        <path d="M4 9v11h16V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

// Muncul bertahap (untuk kartu/ikon).
export const rise = (frame: number, at: number): { opacity: number; transform: string } => {
  const p = ease(frame, 0, 1, at, at + 24);
  return { opacity: p, transform: `translateY(${(1 - p) * 40}px)` };
};
