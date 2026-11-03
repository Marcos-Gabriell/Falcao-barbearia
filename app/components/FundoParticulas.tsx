"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   Fundo 3D de partículas douradas que se transforma com a rolagem:
     topo → poeira  ·  espiral dupla (listras do poste)  ·  andaime (construção)  ·  anel
   WebGL puro (sem biblioteca): as 4 formas vão pra GPU uma vez e a mistura
   entre elas é feita no shader. Por quadro a CPU só atualiza 5 números.
   ───────────────────────────────────────────────────────────────────────── */

const VERT = `
attribute vec3 aA; attribute vec3 aB; attribute vec3 aC; attribute vec3 aD;
attribute float aSeed;
uniform float uP, uTime, uRot, uTilt, uAspect, uSize, uShift;
varying float vAlpha; varying float vSeed;

float ease(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }

void main() {
  // cada partícula chega com um leve atraso próprio → a forma "se monta"
  float d = aSeed * 0.35;
  vec3 p = mix(aA, aB, ease((uP - d) / 0.65));
  p = mix(p, aC, ease((uP - 1.0 - d) / 0.65));
  p = mix(p, aD, ease((uP - 2.0 - d) / 0.65));

  // respiração
  p += 0.06 * vec3(sin(uTime * 0.7 + aSeed * 40.0), cos(uTime * 0.5 + aSeed * 23.0), sin(uTime * 0.6 + aSeed * 11.0));

  // rotação (tempo + rolagem + mouse)
  float cy = cos(uRot), sy = sin(uRot);
  p = vec3(cy * p.x + sy * p.z, p.y, -sy * p.x + cy * p.z);
  float cx = cos(uTilt), sx = sin(uTilt);
  p = vec3(p.x, cx * p.y - sx * p.z, sx * p.y + cx * p.z);

  p.x += uShift;
  p.z -= 11.0;
  float f = 1.9;
  gl_Position = vec4(p.x * f / uAspect, p.y * f, 0.0, -p.z);
  gl_PointSize = uSize * (0.6 + aSeed) * (11.0 / -p.z);
  vAlpha = clamp(1.4 - (-p.z - 6.0) / 10.0, 0.15, 1.0);
  vSeed = aSeed;
}`;

const FRAG = `
precision mediump float;
varying float vAlpha; varying float vSeed;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, r);
  vec3 gold = vec3(0.79, 0.60, 0.32);
  vec3 cream = vec3(0.96, 0.92, 0.85);
  vec3 col = mix(gold, cream, step(0.86, vSeed));
  gl_FragColor = vec4(col * a * 0.8, a * vAlpha * 0.4);
}`;

/** Gera as 4 formas (mesma quantidade de pontos em cada). */
function formas(n: number) {
  const A = new Float32Array(n * 3), B = new Float32Array(n * 3), C = new Float32Array(n * 3), D = new Float32Array(n * 3);
  const seed = new Float32Array(n);
  let s = 1234567;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);

  for (let i = 0; i < n; i++) {
    const u = i / n, k = i * 3;
    seed[i] = rnd();

    // A — poeira: casca esférica larga
    const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1), r = 3 + rnd() * 5;
    A[k] = r * Math.sin(ph) * Math.cos(th) * 1.4; A[k + 1] = r * Math.cos(ph); A[k + 2] = r * Math.sin(ph) * Math.sin(th);

    // B — espiral dupla (poste de barbearia), com 3 fitas
    const fita = i % 3, t = u * Math.PI * 16 + fita * (Math.PI * 2 / 3);
    const rb = 2.1 + (rnd() - 0.5) * 0.25;
    B[k] = rb * Math.cos(t); B[k + 1] = (u - 0.5) * 11; B[k + 2] = rb * Math.sin(t);

    // C — andaime: arestas de uma treliça 5×5×5
    const g = [-2.4, -1.2, 0, 1.2, 2.4], eixo = i % 3, lin = rnd() * 4.8 - 2.4;
    const a1 = g[Math.floor(rnd() * 5)], a2 = g[Math.floor(rnd() * 5)];
    const c = eixo === 0 ? [lin, a1, a2] : eixo === 1 ? [a1, lin, a2] : [a1, a2, lin];
    C[k] = c[0]; C[k + 1] = c[1]; C[k + 2] = c[2];

    // D — anel: nó toroidal (2,3)
    const tt = u * Math.PI * 2, rr = 2.5 + 0.85 * Math.cos(3 * tt);
    const jit = () => (rnd() - 0.5) * 0.22;
    D[k] = rr * Math.cos(2 * tt) + jit(); D[k + 1] = 0.85 * Math.sin(3 * tt) + jit(); D[k + 2] = rr * Math.sin(2 * tt) + jit();
  }
  return { A, B, C, D, seed };
}

export default function FundoParticulas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power", premultipliedAlpha: true });
    if (!gl) return; // sem WebGL: fica o fundo em CSS

    type Nav = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const nav = navigator as Nav;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fraco = (nav.hardwareConcurrency ?? 4) < 4 || (nav.deviceMemory ?? 8) < 4 || !!nav.connection?.saveData;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const N = fraco ? 1200 : mobile ? 2000 : 3600;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const f = formas(N);
    const attr = (name: string, data: Float32Array, size: number) => {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
      return buf;
    };
    const bufs = [attr("aA", f.A, 3), attr("aB", f.B, 3), attr("aC", f.C, 3), attr("aD", f.D, 3), attr("aSeed", f.seed, 1)];

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uP = u("uP"), uTime = u("uTime"), uRot = u("uRot"), uTilt = u("uTilt"), uAspect = u("uAspect"), uSize = u("uSize"), uShift = u("uShift");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uAspect, canvas.width / canvas.height);
      gl.uniform1f(uSize, (mobile ? 3.2 : 3.6) * dpr);
      // no desktop as formas ficam à direita, longe da coluna de texto
      gl.uniform1f(uShift, window.innerWidth >= 1024 ? 2.4 : 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // progresso da rolagem: 0 no topo → 3 no fim da página
    let alvoP = 0, p = 0, mx = 0, my = 0, rot = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      alvoP = max > 0 ? (window.scrollY / max) * 3.2 : 0;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      p += (alvoP - p) * 0.06;
      rot += ((reduce ? 0 : t * 0.05) + p * 0.9 + mx * 0.5 - rot) * 0.05;
      gl.uniform1f(uP, p);
      gl.uniform1f(uTime, reduce ? 0 : t);
      gl.uniform1f(uRot, rot);
      gl.uniform1f(uTilt, 0.25 + my * 0.3);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, N);
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    canvas.style.opacity = "1";
    if (reduce) {
      // sem animação: redesenha só quando rola (a forma ainda muda com a página)
      const redraw = () => { onScroll(); p = alvoP; frame(performance.now()); };
      redraw();
      window.addEventListener("scroll", redraw, { passive: true });
      return () => {
        window.removeEventListener("scroll", redraw);
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onMove);
      };
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      bufs.forEach((b) => gl.deleteBuffer(b));
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-[1500ms]"
    />
  );
}
