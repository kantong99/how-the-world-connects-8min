# How the World Connects: The Internet in 8 Minutes

Video penjelasan data 16:9, 1920×1080, 30 fps, durasi 8:00 (14400 frame), narasi bahasa Inggris.
Composition ID: `DataExplainer`.

> **Peringatan penting**
> - Semua angka adalah **ilustrasi**. Verifikasi dengan ITU Facts and Figures 2024, World Bank, GSMA, dan Ookla sebelum publikasi.
> - Render **belum diuji** di mesin Anda. Jalankan `npm run typecheck` dan `npm start` dulu.
> - Disk Anda 11 GB. **Jangan render satu file penuh.** Gunakan chunk dan hapus file sementara.
> - Narasi dan musik harus Anda sediakan (lihat `public/README.txt`). Jangan pakai musik berhak cipta.
> - `loadFont` (Inter) butuh internet saat render. Jika gagal, ganti `src/font.ts` ke `sans-serif`.

## Instalasi

Butuh Node.js 18 atau lebih baru dan ffmpeg.

```bash
npm install
npm run typecheck
npm run subtitles
npm start
```

## Render chunk (disk 11 GB)

Total 14400 frame dibagi menjadi **6 chunk** masing-masing 80 detik.

| Script | Frame |
|---|---|
| `npm run render:chunk01` | 0–2399 |
| `npm run render:chunk02` | 2400–4799 |
| `npm run render:chunk03` | 4800–7199 |
| `npm run render:chunk04` | 7200–9599 |
| `npm run render:chunk05` | 9600–11999 |
| `npm run render:chunk06` | 12000–14399 |
| `npm run concat` | gabung ke `out/DataExplainer-1080p.mp4` |

Urutan aman:
1. Jalankan `npm run render:chunk01` dulu dan cek hasilnya.
2. Lanjutkan chunk 02 sampai 06 satu per satu. Jangan paralel.
3. Pantau sisa disk dengan `df -h`.
4. Setelah `npm run concat` dan video sudah diperiksa, hapus `out/chunks/`.

## Subtitle

- `src/subtitles.json` dipakai komponen `Captions`.
- `subtitles.srt` untuk diunggah ke platform.
- Maksimal 42 karakter per baris, 2 baris per cue.
- Jika naskah diubah, jalankan `npm run subtitles`.

## Narasi

Naskah ada di `src/data/voiceover.json`. Skrip `make-subtitles` menampilkan perkiraan wpm per scene. Target 145–155 wpm. Jika scene keluar dari target, atur kecepatan TTS atau sesuaikan naskah.
