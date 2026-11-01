# Assets gerados

Tudo aqui é derivado de material real que já está em `public/cortes/`.
Nada é foto ou vídeo inventado.

## `posters/vidN.webp`

Quadro do vídeo `public/cortes/vidN.mp4` (em ~1,2 s), 540 px de largura, WebP q72.
É o que aparece antes do vídeo tocar, então a página não baixa vídeo na abertura.

## `loops/vidN.webm`

Trecho de 8 s (a partir de 2 s) de cada `vidN.mp4`, em WebM VP9 a ~900 kbps (~0,6 MB).
É usado na galeria em loop. O vídeo completo original continua abrindo no lightbox.

### Como regerar

**Com ffmpeg (recomendado):**

```bash
node scripts/optimize-videos.mjs
```

O script gera os loops em WebM e MP4 H.264 (compatível com iPhone antigo) e os posters.

**Sem ffmpeg (como foi feito da primeira vez):** os arquivos foram gerados no próprio
navegador, com `<canvas>` + `MediaRecorder` rodando sobre a página em `localhost:3000`.
O passo a passo está em `scripts/optimize-videos.mjs`, no comentário do topo.
