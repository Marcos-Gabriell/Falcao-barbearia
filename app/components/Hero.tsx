import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Navigation, Star } from "lucide-react";
import { SITE, SINCE, RATING } from "@/config/site";
import { WHATSAPP_LINK, INSTAGRAM_URL, DIRECTIONS_LINK } from "../utils/links";

/* Hero único e responsivo (server component).
   - Um só H1 com a palavra-chave local; "corte. Identidade." é visual.
   - Foto do Thaylle como destaque (sem elementos sobrepostos).
   - Uma só imagem LCP (priority), com sizes corretos.
   - Animações de entrada em CSS (.hero-in), sem esperar JavaScript. */
export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100dvh] overflow-hidden"
    >
      {/* ── Foto: tela cheia no celular, metade direita no desktop ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden lg:left-[38%]">
        <Image
          src="/thaylle2.jpeg"
          alt={`${SITE.barber}, barbeiro da Falcão Barbearia, cortando cabelo em ${SITE.city} - BA`}
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[center_22%] hero-photo"
        />
        {/* celular: escurece de baixo pra cima */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/20 via-[#070707]/55 to-[#070707] lg:hidden" />
        {/* desktop: funde com o texto à esquerda */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#070707] via-[#070707]/10 to-transparent" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-t from-[#070707]/80 via-transparent to-[#070707]/30" />
      </div>

      {/* ── Ambiente: brilho dourado + grão ── */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute bottom-[-20%] left-[-10%] h-[60vw] w-[70vw] rounded-full bg-[radial-gradient(ellipse,rgba(184,133,58,0.14)_0%,transparent_65%)] blur-3xl" />
        <div className="grain absolute inset-0 opacity-[0.035]" />
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-28 pt-28 sm:px-8 lg:justify-center lg:px-16 lg:pb-16 xl:px-24">

        <div className="max-w-xl lg:max-w-[34rem]">
          <h1
            id="hero-title"
            className="hero-in [--d:0ms] mb-4 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#d4aa7a] sm:text-xs"
          >
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#b8853a] to-transparent" aria-hidden />
            Barbearia em {SITE.city} – Falcão
          </h1>

          <div className="mb-6 font-serif leading-none" aria-hidden>
            <span className="hero-in [--d:40ms] mb-2 hidden text-2xl font-light uppercase italic tracking-[0.22em] text-white/35 lg:block xl:text-3xl">
              Seu visual merece
            </span>
            <span className="hero-in [--d:80ms] block text-[clamp(4rem,17vw,10.5rem)] font-black leading-[0.84] text-[#f5f1eb] drop-shadow-2xl">
              corte.
            </span>
            <span className="hero-in [--d:120ms] mt-2 block text-[clamp(2.4rem,9vw,4.75rem)] font-bold italic text-[#d4aa7a]">
              Identidade.
            </span>
          </div>

          <p className="hero-in [--d:160ms] mb-8 max-w-md text-[15px] font-medium leading-relaxed text-white/65">
            Degradê, barba na navalha e corte na tesoura com{" "}
            <strong className="font-bold text-[#d4aa7a]">técnica de nível</strong> no Centro de {SITE.city}.
            Sem agendamento: chega e senta — ou chama no Whats pra saber o movimento.
          </p>

          {/* CTAs */}
          <div className="hero-in [--d:200ms] flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp"
              data-track-label="hero"
              className="btn-shine group relative inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#c99a52] to-[#8f6425] px-8 text-[12px] font-black uppercase tracking-[0.16em] text-[#070707] shadow-[0_10px_40px_rgba(184,133,58,0.3)] transition-transform hover:scale-[1.03] active:scale-[0.97] sm:rounded-full"
            >
              <FaWhatsapp size={18} />
              Chamar no WhatsApp
            </a>
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-track="maps"
              data-track-label="hero"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-[12px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md transition-colors hover:border-[#d4aa7a]/40 hover:text-[#d4aa7a] sm:rounded-full"
            >
              <Navigation size={16} />
              Como chegar
            </a>
          </div>

          {/* Prova social logo abaixo do CTA */}
          <div className="hero-in [--d:240ms] mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6">
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              data-track="google"
              data-track-label="hero-nota"
              className="group flex min-h-[44px] items-center gap-3"
            >
              <span className="flex gap-0.5 text-[#d4aa7a]" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                <strong className="font-serif text-lg italic text-[#f5f1eb]">{RATING}</strong> no Google
              </span>
            </a>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">{SINCE}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">+{SITE.cortesRealizados} cortes</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="instagram"
              data-track-label="hero"
              aria-label="Instagram da Falcão Barbearia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-[#d4aa7a]/40 hover:text-[#d4aa7a]"
            >
              <FaInstagram size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Selo do barbeiro (desktop) */}
      <div className="hero-in [--d:300ms] absolute bottom-14 right-12 z-10 hidden rounded-2xl border border-white/[0.06] bg-black/30 px-6 py-5 text-right shadow-2xl backdrop-blur-md lg:block">
        <div className="mb-3 ml-auto h-[1.5px] w-8 rounded-full bg-[#b8853a]" />
        <p className="mb-1 font-serif text-[1.6rem] italic leading-none text-[#f5f1eb]">{SITE.barber}</p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#b8853a]">Master Barber</p>
      </div>
    </section>
  );
}
