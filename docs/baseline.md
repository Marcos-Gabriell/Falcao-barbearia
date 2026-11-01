# Baseline de performance — Home

Lighthouse 13.6.0, Chromium headless (Playwright 1194), emulação padrão
(mobile = Moto G Power com 4G lento + CPU 4x mais lenta; desktop = preset desktop).
Medido em 31/10/2026.

## Antes do redesign

### A) Site no ar — https://www.falcaobarbearia.com.br (versão antiga, com agendamento)

| | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Peso da página |
|---|---|---|---|---|---|---|---|---|
| Mobile | **49** | 91 | 96 | 100 | 3,8 s | 0 | 2.820 ms | 17,3 MB |
| Desktop | 93 | 95 | 96 | 100 | 1,0 s | 0 | 0 ms | 22,3 MB |

### B) Build local da branch `redesign-landing` antes do redesign (sem agendamento + poste 3D)

| | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Peso da página |
|---|---|---|---|---|---|---|---|---|
| Mobile | **40** | 95 | 96 | 100 | 11,8 s | 0 | 9.870 ms | 17,0 MB |
| Desktop | 81 | 98 | 96 | 100 | 1,6 s | 0 | 270 ms | 21,7 MB |

### Principais causas

1. **Vídeos da galeria (~16 MB)** baixam todos na abertura (`autoPlay`, sem `preload="none"`, sem poster).
   Os arquivos originais têm de 1,5 a 11 MB cada (`public/cortes` = 92 MB).
2. **Galeria renderizada 2x** (carrossel mobile + grade desktop no mesmo HTML) → vídeos baixados em dobro.
3. **3D no mobile**: o chunk do three.js ocupou 25 s de CPU na emulação mobile (TBT 9,8 s).
   Precisa de fallback estático em aparelho fraco/mobile e carregar só depois do LCP.
4. `public/cortes.zip` (52 MB) está publicado e acessível por URL.

## Depois do redesign (branch `redesign-landing`, build de produção local)

Medido em 01/11/2026, mesma ferramenta e emulação. Média de 4 rodadas mobile e 3 desktop,
com a máquina sem outros processos pesados (servidor de dev parado).

| | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Peso da página |
|---|---|---|---|---|---|---|---|---|
| Mobile | **96** (90–98) | **100** | **100** | 100 | 1,0 s | 0 | 110–370 ms | **1,0 MB** |
| Desktop | **96** (95–97) | **100** | **100** | 100 | 1,2 s | 0 | 60–120 ms | 1,0 MB |

### Antes × depois (mobile)

| | Site no ar (antes) | Redesign | |
|---|---|---|---|
| Performance | 49 | 96 | +47 |
| Acessibilidade | 91 | 100 | +9 |
| Boas práticas | 96 | 100 | +4 |
| LCP | 3,8 s | 1,0 s | −74% |
| TBT | 2.820 ms | ~200 ms | −93% |
| Peso da página | 17,3 MB | 1,0 MB | −94% |

Observação: com outros processos pesados rodando na mesma máquina (build/servidor de dev),
o mobile oscilou entre 75 e 89, sempre por TBT. LCP e CLS ficaram estáveis em qualquer cenário.
Vale medir de novo no PageSpeed Insights depois do deploy na Vercel.

### O que mais pesou na melhora

1. Vídeos com `preload="none"` + poster; loops de 8 s (~0,6 MB) no lugar dos originais (1,5–11 MB).
2. Galeria com um só DOM (antes, duas cópias baixavam os vídeos em dobro).
3. 3D carregado só na primeira interação e só em aparelho capaz; poste em SVG no HTML.
4. `sizes` em todas as imagens e AVIF/WebP (antes caía em `w=3840`).
5. Animações infinitas em JS trocadas por CSS; `content-visibility` abaixo da dobra.

### Bundle

| Lib | Quando carrega | gzip |
|---|---|---|
| three.js (poste 3D) | primeira interação, aparelho capaz | 126 KB |
| lenis (rolagem suave) | só desktop com mouse | 4 KB |
| @vercel/analytics | sempre (só ativa com `NEXT_PUBLIC_VERCEL_ANALYTICS=1`) | 3 KB |
| JS inicial da home (total) | carregamento | 289 KB |
