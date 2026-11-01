"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Navigation } from "lucide-react";
import { WHATSAPP_LINK, DIRECTIONS_LINK } from "../utils/links";

/* Barra fixa no rodapé (só celular/tablet): WhatsApp + Como chegar.
   Aparece depois que os botões do hero saem da tela; respeita a safe-area do iPhone. */
export default function BarraMobile() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* reserva espaço pra barra não cobrir o fim da página */}
      <div className="h-20 lg:hidden" aria-hidden />
      <nav
        aria-label="Ações rápidas"
        className={`pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#070707]/90 px-3 pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-xl gap-2.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp"
            data-track-label="barra-mobile"
            tabIndex={show ? 0 : -1}
            className="flex min-h-[50px] flex-[1.4] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c99a52] to-[#8f6425] text-[12px] font-black uppercase tracking-[0.12em] text-[#070707] active:scale-[0.98]"
          >
            <FaWhatsapp size={18} /> Chamar no Whats
          </a>
          <a
            href={DIRECTIONS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-track="maps"
            data-track-label="barra-mobile"
            tabIndex={show ? 0 : -1}
            className="flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-[12px] font-bold uppercase tracking-[0.1em] text-white/85 active:scale-[0.98]"
          >
            <Navigation size={16} /> Rota
          </a>
        </div>
      </nav>
    </>
  );
}
