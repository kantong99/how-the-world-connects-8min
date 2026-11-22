FOLDER public/ — FILE AUDIO YANG HARUS ANDA SIAPKAN

1. voiceover.mp3  (WAJIB)
   - Narasi bahasa Inggris, suara hangat dan netral (ElevenLabs atau Google TTS).
   - Kecepatan 145–155 wpm. Naskah ada di src/data/voiceover.json.
   - Durasi idealnya sekitar 8:00 (480 detik) agar selaras dengan visual.

2. music.mp3  (opsional)
   - Musik ambient minimal, bebas hak cipta (misal dari lisensi yang Anda miliki).
   - Volume sudah diatur 12% di src/DataExplainer.tsx.
   - Jangan pakai musik berhak cipta tanpa lisensi.

Jika file tidak ada, render akan gagal karena Remotion tidak menemukan audio.
Untuk tes tanpa audio, hapus sementara baris <Audio> di src/DataExplainer.tsx.
