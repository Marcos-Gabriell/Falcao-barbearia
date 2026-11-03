"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FundoParticulas = dynamic(() => import("./FundoParticulas"), { ssr: false });

/* Liga o fundo 3D só depois que a página carregou (não disputa com o LCP). */
export default function FundoDinamico() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const start = () => setOn(true);
    const idle = () =>
      typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(start, { timeout: 2500 }) : setTimeout(start, 1200);
    if (document.readyState === "complete") idle();
    else window.addEventListener("load", idle, { once: true });
    return () => window.removeEventListener("load", idle);
  }, []);

  return on ? <FundoParticulas /> : null;
}
