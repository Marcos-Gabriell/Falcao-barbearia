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

## Depois do redesign

_A preencher ao final._
