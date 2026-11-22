// Timing scene dalam frame (30 fps). Total = 14400 frame = 8:00.
export type SceneId =
  | 'S01' | 'S02' | 'S03' | 'S04' | 'S05' | 'S06'
  | 'S07' | 'S08' | 'S09' | 'S10' | 'S11';

export interface SceneSlot {
  id: SceneId;
  from: number;
  dur: number;
  label: string;
}

export const SCENES: SceneSlot[] = [
  { id: 'S01', from: 0, dur: 750, label: '0:00–0:25 Intro' },
  { id: 'S02', from: 750, dur: 1050, label: '0:25–1:00 Headline' },
  { id: 'S03', from: 1800, dur: 1350, label: '1:00–1:45 Growth' },
  { id: 'S04', from: 3150, dur: 1500, label: '1:45–2:35 Regions' },
  { id: 'S05', from: 4650, dur: 1350, label: '2:35–3:20 Mobile' },
  { id: 'S06', from: 6000, dur: 1350, label: '3:20–4:05 Affordability' },
  { id: 'S07', from: 7350, dur: 1350, label: '4:05–4:50 Speed' },
  { id: 'S08', from: 8700, dur: 1350, label: '4:50–5:35 Who is left out' },
  { id: 'S09', from: 10050, dur: 1350, label: '5:35–6:20 Why it matters' },
  { id: 'S10', from: 11400, dur: 1650, label: '6:20–7:15 Three levers' },
  { id: 'S11', from: 13050, dur: 1350, label: '7:15–8:00 End card' },
];
