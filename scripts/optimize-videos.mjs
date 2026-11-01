#!/usr/bin/env node
/*
 * Gera loops curtos e posters dos vídeos da galeria (public/cortes/vidN.mp4).
 *
 *   node scripts/optimize-videos.mjs
 *
 * Precisa do ffmpeg no PATH (macOS: `brew install ffmpeg`).
 *
 * Saída em public/generated/:
 *   loops/vidN.webm   VP9, 8 s, ~0,6 MB
 *   loops/vidN.mp4    H.264, 8 s, para Safari/iPhone antigos (adicione como <source> no LazyVideo)
 *   posters/vidN.webp quadro em 1,2 s
 *
 * Sem ffmpeg: abra o site em localhost:3000 num Chrome, rode no console uma função que
 * toca o vídeo, desenha os quadros num <canvas> e grava com MediaRecorder
 * ('video/webm;codecs=vp9', 900 kbps). Foi assim que a primeira versão foi gerada.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "public/cortes");
const out = path.join(root, "public/generated");
mkdirSync(path.join(out, "loops"), { recursive: true });
mkdirSync(path.join(out, "posters"), { recursive: true });

const ff = (...args) => execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...args], { stdio: "inherit" });

for (const file of readdirSync(src).filter((f) => /^vid\d+\.mp4$/.test(f))) {
  const name = file.replace(".mp4", "");
  const input = path.join(src, file);
  console.log(`→ ${name}`);

  ff("-ss", "2", "-t", "8", "-i", input, "-an", "-vf", "scale=-2:832",
     "-c:v", "libvpx-vp9", "-b:v", "900k", "-row-mt", "1", path.join(out, "loops", `${name}.webm`));

  ff("-ss", "2", "-t", "8", "-i", input, "-an", "-vf", "scale=-2:832",
     "-c:v", "libx264", "-profile:v", "main", "-crf", "28", "-preset", "slow",
     "-movflags", "+faststart", "-pix_fmt", "yuv420p", path.join(out, "loops", `${name}.mp4`));

  ff("-ss", "1.2", "-i", input, "-frames:v", "1", "-vf", "scale=540:-2",
     "-c:v", "libwebp", "-quality", "72", path.join(out, "posters", `${name}.webp`));
}
console.log("Pronto.");
