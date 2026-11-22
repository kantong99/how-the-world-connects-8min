// Render satu segmen (chunk) agar disk 11 GB aman. Pemakaian: node scripts/render-chunk.mjs 01
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';

// Rentang frame inklusif. 6 chunk berdurasi 80 detik (total 14400 frame = 8:00).
const CHUNKS = {
  '01': [0, 2399],
  '02': [2400, 4799],
  '03': [4800, 7199],
  '04': [7200, 9599],
  '05': [9600, 11999],
  '06': [12000, 14399],
};

const id = process.argv[2];
const range = CHUNKS[id];
if (!range) {
  console.error(`Chunk tidak dikenal: ${id}. Pilihan: ${Object.keys(CHUNKS).join(', ')}`);
  process.exit(1);
}

fs.mkdirSync('out/chunks', { recursive: true });
const out = `out/chunks/chunk${id}.mp4`;

const r = spawnSync(
  'npx',
  [
    'remotion', 'render', 'src/index.ts', 'DataExplainer', out,
    `--frames=${range[0]}-${range[1]}`,
    '--concurrency=1',
    '--image-format=jpeg',
    '--jpeg-quality=80',
    '--crf=23',
    '--audio-bitrate=128k',
    '--overwrite',
  ],
  { stdio: 'inherit', shell: process.platform === 'win32' }
);
if (r.status !== 0) process.exit(r.status ?? 1);

// Hapus folder sementara di proyek agar disk tidak menumpuk antar chunk.
fs.rmSync('out/tmp', { recursive: true, force: true });
console.log(`Selesai: ${out}`);
