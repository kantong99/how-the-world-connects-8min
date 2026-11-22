#!/usr/bin/env bash
# Menggabungkan semua chunk tanpa re-encode (-c copy), lalu chunk dihapus untuk menghemat disk.
set -euo pipefail
cd out/chunks
ls chunk*.mp4 | sort | sed "s/.*/file '&'/" > list.txt
ffmpeg -y -f concat -safe 0 -i list.txt -c copy ../DataExplainer-1080p.mp4
rm -f list.txt
echo "Selesai: out/DataExplainer-1080p.mp4"
echo "Cek dulu video hasil gabungan sebelum menghapus chunk (out/chunks)."
