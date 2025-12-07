"use client";

import Image from "next/image";
import { WHATSAPP_LINK } from "../utils/links";
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const INSTAGRAM_LINK = "https://instagram.com/barbeariafalcao_";

export default function Hero() {
  const [title, setTitle] = useState("");

  // --- Efeito de digitação ---
  useEffect(() => {
    const full = "Falcão Barbearia";
    let index = 0;

    const interval = setInterval(() => {
      setTitle(full.slice(0, index));
      index++;
      if (index > full.length) clearInterval(interval);
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24"
    >
      {/* Degradê mais clean */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22140b_0,_#000_70%)]" />

      {/* Glow leve atrás da logo */}
      <div className="pointer-events-none absolute right-[10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c59d6e]/20 blur-3xl" />

      {/* Glow extra na área dos botões (mobile/geral) */}
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#c59d6e]/14 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse gap-12 px-4 py-16
        md:flex-row md:items-center md:gap-24 lg:px-6">

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="hero-title text-5xl font-extrabold leading-tight text-[#e4ddd2] sm:text-6xl lg:text-7xl">
            {title}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-5 max-w-xl mx-auto md:mx-0 text-lg text-zinc-300 sm:text-xl">
            O corte que reflete a sua{" "}
            <span className="text-[#c59d6e] font-semibold">atitude</span> e
            <span className="text-[#c59d6e] font-semibold"> personalidade</span>.
          </p>

          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Uma barbearia focada em detalhe, estilo e respeito ao seu tempo.
            Corte, barba e acabamento com padrão elevado, em um ambiente pensado
            para você relaxar e sair alinhado.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              aria-label="Agendar pelo WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-semibold text-black 
              shadow-[0_0_36px_rgba(197,157,110,0.7)] transition hover:bg-[#d6b37f]"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden />
              <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              aria-label="Ver Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-[#c59d6e]/70 px-6 py-3 
              text-sm font-semibold text-[#c59d6e] transition hover:bg-[#c59d6e]/10"
            >
              <FaInstagram className="h-5 w-5" aria-hidden />
              <span className="hidden sm:inline">Ver Instagram</span>
            </a>
          </div>
        </div>

        {/* LOGO PURA */}
        <div className="flex flex-1 items-center justify-center md:pl-6 lg:pl-10">
          <Image
            src="/logo1.png"
            alt="Logo Falcão Barbearia"
            width={500}
            height={500}
            priority
            className="
              object-contain drop-shadow-[0_0_40px_rgba(197,157,110,0.4)]
              max-w-[280px] sm:max-w-[340px] md:max-w-[420px]
            "
          />
        </div>

      </div>
    </section>
  );
}
