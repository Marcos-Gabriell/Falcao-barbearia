"use client";

import { useEffect } from "react";

/* Rolagem suave (Lenis) só no desktop com mouse e sem "reduzir movimento".
   No celular a rolagem nativa é melhor (e mais leve), então nem carrega. */
export default function SmoothScroll() {
  useEffect(() => {
    const ok = window.matchMedia("(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
    if (!ok) return;

    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.12, anchors: { offset: -80 } });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
