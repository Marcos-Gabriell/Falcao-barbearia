"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

const COLORS = {
  GOLD: "#b8853a",
  GOLD_LIGHT: "#d4aa7a",
  DARK: "#070707",
  TEXT_OFF: "#f5f1eb",
  SUBTEXT: "rgba(189,183,175,0.65)"
};

const stats = [
  { val: "4.9★", label: "Google" },
  { val: "+200", label: "Parceiros" },
  { val: "2021", label: "Na Cena" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100dvh] flex overflow-hidden select-none bg-[#070707]"
    >
      {/* ── Background: Cinematic Noise & Grid ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: "-20%", left: "5%",
            width: "900px", height: "600px",
            background: `radial-gradient(ellipse, rgba(184,133,58,0.12) 0%, transparent 60%)`,
            filter: "blur(90px)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(${COLORS.GOLD} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.GOLD} 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* ══════════════════════ DESKTOP ══════════════════════ */}
      <div className="hidden md:flex w-full relative z-10 max-w-[1920px] mx-auto">
        <motion.div
          style={{ y: contentY, opacity: fadeOut }}
          className="flex flex-col justify-center px-12 lg:px-24 xl:px-32 w-[55%] pt-16"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8 overflow-hidden whitespace-nowrap"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#b8853a] to-transparent rounded-full" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-black text-[#b8853a]">
              O Fim do Básico
            </span>
          </motion.div>

          <div className="mb-8 relative">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block text-2xl lg:text-3xl font-light uppercase tracking-[0.2em] text-white/40 font-serif italic mb-2"
            >
              Muito mais que
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem] font-black leading-[0.85] text-[#f5f1eb] font-serif -ml-2 drop-shadow-2xl"
            >
              corte.
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="block text-5xl lg:text-7xl xl:text-8xl font-serif italic font-bold text-[#d4aa7a] mt-2"
            >
              Atitude.
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm lg:text-base text-white/60 max-w-md leading-relaxed mb-12 font-medium"
          >
            Esquece aquele corte genérico. Aqui a gente une <strong className="text-[#d4aa7a] font-bold">técnica afiada</strong>, resenha de primeira e um ambiente feito pra você sair com o visual no topo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(184,133,58,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#b8853a] to-[#8f6425] text-[#070707] px-8 py-4 rounded-full font-black text-[12px] tracking-[0.15em] uppercase flex items-center gap-3 transition-all"
            >
              <FaWhatsapp size={18} />
              Garantir meu horário
            </motion.a>
            
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              className="group flex items-center gap-4 text-white/60 hover:text-[#d4aa7a] transition-colors font-bold text-[11px] tracking-[0.15em] uppercase"
            >
              <span className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#d4aa7a]/40 transition-colors bg-white/[0.02]">
                <FaInstagram size={18} />
                <span className="absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-[#d4aa7a]/10 transition-all duration-500 ease-out" />
              </span>
              Ver no Insta
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 flex items-center gap-14 border-t border-white/5 pt-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-2xl font-serif italic font-bold text-[#b8853a] group-hover:text-[#d4aa7a] transition-colors">{s.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex-1 h-full overflow-hidden">
          <motion.div style={{ y: imageY, scale: 1.05 }} className="h-full w-full relative">
            <Image
              src="/thaylle.jpg"
              alt="Mestre Barbeiro Thaylle"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070707_100%)] opacity-80 z-10 mix-blend-multiply" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-16 right-16 z-20 text-right backdrop-blur-md bg-black/20 p-6 rounded-2xl border border-white/5 shadow-2xl"
          >
            <div className="h-[2px] w-8 bg-[#b8853a] ml-auto mb-3 rounded-full" />
            <p className="text-[#f5f1eb] font-serif italic text-2xl mb-1 drop-shadow-md">Thaylle</p>
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#b8853a]">Falcão Boss</p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════ MOBILE (Ajustado) ══════════════════════ */}
      <div className="md:hidden w-full flex flex-col relative z-10 justify-end pb-10">
        <div className="absolute inset-0 z-0 h-[65vh]">
          <Image src="/thaylle.jpg" alt="Falcão" fill className="object-cover object-top opacity-50 grayscale" quality={90} priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/10 via-[#070707]/60 to-[#070707] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#070707_100%)] z-10 opacity-90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 px-6 pt-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
            <span className="text-[#b8853a] text-[10px] tracking-[0.2em] uppercase font-black">O Fim do Básico</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-serif font-black text-[#f5f1eb] leading-none mb-1 drop-shadow-lg tracking-tight">corte.</h1>
          <h2 className="text-4xl sm:text-5xl font-serif italic font-bold text-[#d4aa7a] mb-5 drop-shadow-md">Atitude.</h2>
          
          <p className="text-white/70 text-[13px] sm:text-sm mb-8 leading-relaxed max-w-sm font-medium">
            Esquece o padrão. <strong className="text-[#d4aa7a]">Técnica, resenha e estilo</strong> pra você sair com o visual no topo.
          </p>
          
          <div className="flex flex-col gap-3 w-full">
            <a href={WHATSAPP_LINK} className="w-full bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] text-center py-3.5 rounded-xl font-black uppercase text-[11px] tracking-[0.1em] shadow-[0_8px_30px_rgba(184,133,58,0.25)] flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <FaWhatsapp size={16} /> Garantir meu horário
            </a>
            <a href={INSTAGRAM_URL} className="w-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 text-center py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <FaInstagram size={16} /> Ver no Insta
            </a>
          </div>

          <div className="flex justify-between mt-8 border-t border-white/10 pt-6 px-1">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-serif italic font-bold text-[#b8853a] mb-1">{s.val}</div>
                <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Desktop */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase trackin1.g-[0.4em] text-[#b8853a] font-bold">Scroll</span>
        <div className="w-[2px] h-12 rounded-full bg-gradient-to-b from-[#b8853a] via-[#b8853a]/50 to-transparent" />
      </motion.div>
    </section>
  );
}