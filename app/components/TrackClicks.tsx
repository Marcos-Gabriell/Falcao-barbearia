"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Descobre o tipo de CTA pelo data-track ou pelo destino do link. */
function classificar(a: HTMLAnchorElement) {
  if (a.dataset.track) return a.dataset.track;
  const href = a.href;
  if (href.includes("wa.me")) return "whatsapp";
  if (href.includes("g.page") || href.includes("/review")) return "google-review";
  if (href.includes("google.com/maps") || href.includes("maps.app.goo.gl")) return "maps";
  if (href.includes("instagram.com")) return "instagram";
  if (href.startsWith("tel:")) return "telefone";
  return null;
}

/* Um único ouvinte de clique pro site inteiro: dispara eventos de conversão
   pro GA4 (se NEXT_PUBLIC_GA_ID estiver configurado) e pra Vercel Analytics. */
export default function TrackClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!(a instanceof HTMLAnchorElement)) return;
      const cta = classificar(a);
      if (!cta) return;

      const params = { cta, local: a.dataset.trackLabel ?? "outro", pagina: window.location.pathname };
      window.gtag?.("event", "cta_click", params);
      try {
        track("cta_click", params);
      } catch {
        /* analytics nunca pode quebrar o clique */
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
