"use client";

import dynamic from "next/dynamic";
import { useEffect, useId, useRef, useState } from "react";
import BarberPoleSVG from "./BarberPoleSVG";

const BarberPole3D = dynamic(() => import("./BarberPole3D"), { ssr: false });

type NavigatorExtra = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string };
};

/** Aparelho aguenta WebGL sem travar? */
function canRun3D() {
  const nav = navigator as NavigatorExtra;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (nav.connection?.saveData) return false;
  if (nav.connection?.effectiveType && /(^|-)2g$/.test(nav.connection.effectiveType)) return false;
  if ((nav.hardwareConcurrency ?? 4) < 4) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  return true;
}

/**
 * Mostra o poste em SVG na hora (vem no HTML, não pesa no LCP) e troca pelo
 * 3D só quando faz sentido:
 *  - desktop: quando o navegador fica ocioso depois do carregamento;
 *  - celular: no primeiro toque/rolagem (quem só abre e sai não baixa o 3D).
 */
export default function HeroVisual({ className = "" }: { className?: string }) {
  const svgWrap = useRef<HTMLDivElement>(null);
  const svgId = useId().replace(/:/g, "");
  const [mount3D, setMount3D] = useState(false);
  const [ready3D, setReady3D] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) svgWrap.current?.querySelector("svg")?.pauseAnimations();
    // Há uma instância por breakpoint; só a visível pode carregar o 3D
    if (!canRun3D() || svgWrap.current?.offsetParent === null) return;

    const desktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    let cancelled = false;
    const start = () => !cancelled && setMount3D(true);

    if (desktop) {
      const idle = (cb: () => void) =>
        typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(cb, { timeout: 3000 }) : setTimeout(cb, 1500);
      const onLoad = () => idle(start);
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad, { once: true });
      return () => {
        cancelled = true;
        window.removeEventListener("load", onLoad);
      };
    }

    const events = ["scroll", "touchstart", "pointerdown"] as const;
    const onFirst = () => {
      events.forEach((e) => window.removeEventListener(e, onFirst));
      start();
    };
    events.forEach((e) => window.addEventListener(e, onFirst, { passive: true, once: true }));
    return () => {
      cancelled = true;
      events.forEach((e) => window.removeEventListener(e, onFirst));
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      <div
        ref={svgWrap}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${ready3D ? "opacity-0" : "opacity-100"}`}
      >
        <BarberPoleSVG id={svgId} className="h-[88%] w-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]" />
      </div>
      {mount3D && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready3D ? "opacity-100" : "opacity-0"}`}>
          <BarberPole3D className="h-full w-full" onReady={() => setReady3D(true)} />
        </div>
      )}
    </div>
  );
}
