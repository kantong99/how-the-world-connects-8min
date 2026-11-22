import json
import os
import subprocess

from gtts import gTTS

FPS = 30
os.makedirs('out/voice', exist_ok=True)
os.makedirs('public', exist_ok=True)

with open('src/data/voiceover.json', encoding='utf-8') as f:
    data = json.load(f)


def probe(path):
    r = subprocess.run(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
         '-of', 'csv=p=0', path],
        capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


parts = []
for sc in data['scenes']:
    dur = sc['dur'] / FPS
    raw = f"out/voice/{sc['id']}.mp3"
    gTTS(text=sc['text'], lang='en', tld='com', slow=False).save(raw)
    clip = probe(raw)
    ratio = clip / dur

    filters = []
    if ratio > 1.0:
        tempo = min(ratio, 1.25)
        filters.append(f'atempo={tempo:.4f}')
        if ratio > 1.25:
            print(f"PERINGATAN {sc['id']}: narasi {clip:.1f}s lebih panjang dari scene {dur:.1f}s, sebagian akan terpotong")
    filters.append('apad')

    seg = f"out/voice/{sc['id']}_seg.wav"
    subprocess.run(
        ['ffmpeg', '-y', '-i', raw, '-af', ','.join(filters),
         '-t', f'{dur:.3f}', '-ar', '44100', '-ac', '2', seg],
        check=True)
    parts.append(seg)
    print(f"{sc['id']}: narasi {clip:.1f}s, scene {dur:.1f}s")

with open('out/voice/list.txt', 'w', encoding='utf-8') as f:
    for p in parts:
        f.write(f"file '{os.path.abspath(p)}'\n")

subprocess.run(
    ['ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', 'out/voice/list.txt',
     '-c:a', 'libmp3lame', '-b:a', '192k', 'public/voiceover.mp3'],
    check=True)
print('public/voiceover.mp3 dibuat')
