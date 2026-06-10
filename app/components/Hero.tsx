"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

import { Calendar } from "lucide-react";
/* ─── FOTO PRINCIPAL ─────────────────────────────────────────────────────── */
// thaylle2 escolhida: ele olhando pra câmera enquanto corta → conexão direta
const HERO_IMAGE = "/thaylle2.jpeg";

/* ─── STATS ──────────────────────────────────────────────────────────────── */
const stats = [
  { val: "4.9★", label: "Google" },
  { val: "5+",   label: "Anos de cena" },
  { val: "100%", label: "Dedicação" },
];

/* ─── VARIANTS ──────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 1 },
});

/* ─── COMPONENTE ─────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageY    = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const fadeOut   = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100dvh] flex overflow-hidden select-none bg-[#070707]"
    >
      {/* ── Bg: noise + glow ──────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* gold ambient glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: "-15%", left: "0%",
            width: "70vw", height: "55vw",
            background: "radial-gradient(ellipse, rgba(184,133,58,0.13) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.75, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(#b8853a 1px, transparent 1px), linear-gradient(90deg, #b8853a 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* ══════════════════════════ DESKTOP ══════════════════════════════ */}
      <div className="hidden md:flex w-full relative z-10 max-w-[1920px] mx-auto">

        {/* ── Texto (coluna esquerda) ───────────────────────────────── */}
        <motion.div
          style={{ y: contentY, opacity: fadeOut }}
          className="flex flex-col justify-center px-12 lg:px-20 xl:px-28 w-[52%] pt-20 pb-10"
        >
          {/* eyebrow */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex items-center gap-4 mb-10 overflow-hidden"
          >
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#b8853a] to-transparent rounded-full" />
            <span className="text-[10px] tracking-[0.35em] uppercase font-black text-[#b8853a]">
              Tapiramutá · Bahia
            </span>
          </motion.div>

          {/* headline */}
          <div className="mb-10 relative">
            <motion.span
              {...fadeUp(0.25)}
              className="block text-xl lg:text-2xl xl:text-3xl font-light uppercase tracking-[0.22em] text-white/35 font-serif italic mb-3"
            >
              Seu visual merece
            </motion.span>

            <motion.h1
              {...fadeUp(0.4)}
              className="text-[7rem] lg:text-[9rem] xl:text-[10.5rem] font-black leading-[0.82] text-[#f5f1eb] font-serif -ml-1 drop-shadow-2xl"
            >
              corte.
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="block text-5xl lg:text-6xl xl:text-7xl font-serif italic font-bold text-[#d4aa7a] mt-3 drop-shadow-lg"
            >
              Identidade.
            </motion.span>
          </div>

          {/* corpo */}
          <motion.p
            {...fadeIn(0.8)}
            className="text-sm lg:text-[15px] text-white/55 max-w-[420px] leading-relaxed mb-12 font-medium"
          >
            Cada detalhe importa. Na Falcão Barbearia você encontra{" "}
            <strong className="text-[#d4aa7a] font-bold">técnica de nível</strong>,
            ambiente de respeito e um resultado que fala por si só.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(1)}
            className="flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="/agendar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 36px rgba(184,133,58,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#b8853a] to-[#8f6425] text-[#070707] px-8 py-4 rounded-full font-black text-[11px] tracking-[0.18em] uppercase flex items-center gap-3 shadow-[0_8px_40px_rgba(184,133,58,0.25)]"
            >
              {/* shine sweep */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
              <Calendar size={18} />
              Garantir meu horário
            </motion.a>

            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-white/55 hover:text-[#d4aa7a] transition-colors font-bold text-[11px] tracking-[0.15em] uppercase"
            >
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full border border-white/10 group-hover:border-[#d4aa7a]/40 transition-colors bg-white/[0.02]">
                <FaInstagram size={17} />
                <span className="absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-[#d4aa7a]/10 transition-all duration-500" />
              </span>
              Ver no Insta
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeIn(1.2)}
            className="mt-16 flex items-center gap-12 border-t border-white/[0.06] pt-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-2xl font-serif italic font-bold text-[#b8853a] group-hover:text-[#d4aa7a] transition-colors leading-none mb-1">
                  {s.val}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Foto (coluna direita — maior agora) ──────────────────────── */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* foto com parallax + scale no scroll */}
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Thaylle – Mestre Barbeiro Falcão Barbearia"
              fill
              className={`object-cover object-[center_20%] transition-all duration-[2000ms] ease-out ${
                loaded ? "grayscale-0" : "grayscale"
              }`}
              priority
              quality={100}
              onLoad={() => setLoaded(true)}
            />
          </motion.div>

          {/* gradientes de fusão */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* funde com o texto à esquerda */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/40 to-transparent" />
            {/* funde no topo e rodapé */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/30" />
            {/* vinheta circular sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,transparent_45%,#070707_100%)] opacity-70" />
          </div>

          {/* badge Thaylle */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-14 right-12 z-20 text-right backdrop-blur-md bg-black/25 px-6 py-5 rounded-2xl border border-white/[0.06] shadow-2xl"
          >
            <div className="h-[1.5px] w-8 bg-[#b8853a] ml-auto mb-3 rounded-full" />
            <p className="text-[#f5f1eb] font-serif italic text-[1.6rem] leading-none mb-1 drop-shadow-md">
              Thaylle
            </p>
            <p className="text-[8.5px] font-black uppercase tracking-[0.3em] text-[#b8853a]">
              Falcão Boss
            </p>
            <p className="text-[8px] uppercase tracking-[0.15em] text-white/30 mt-1">
              Master Barber
            </p>
          </motion.div>

          {/* linha vertical decorativa */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#b8853a]/20 to-transparent z-20" />
        </div>
      </div>

      {/* ══════════════════════════ MOBILE ════════════════════════════════ */}
      <div className="md:hidden w-full flex flex-col relative z-10">

        {/* foto ocupa 60vh no mobile */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Thaylle – Falcão Barbearia"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            quality={90}
            priority
          />
          {/* gradiente: transparente no topo, sólido em baixo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-[#070707]/60 to-[#070707] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#070707_85%)] z-10 opacity-90" />
        </div>

        {/* conteúdo flutua por cima */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col justify-end min-h-[100dvh] px-5 pb-1 pt-24"
        >
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
            <span className="text-[#b8853a] text-[9.5px] tracking-[0.25em] uppercase font-black">
              Tapiramutá · Bahia
            </span>
          </div>

          {/* headline */}
          <h1 className="text-[4.2rem] sm:text-[5rem] font-serif font-black text-[#f5f1eb] leading-[0.88] mb-1 drop-shadow-xl">
            corte.
          </h1>
          <p className="text-[2.4rem] sm:text-[2.8rem] font-serif italic font-bold text-[#d4aa7a] mb-5 leading-none drop-shadow-md">
            Identidade.
          </p>

          {/* copy */}
          <p className="text-white/60 text-[13px] mb-7 leading-relaxed max-w-xs font-medium">
            Técnica, ambiente e um resultado que você vai querer mostrar.{" "}
            <strong className="text-[#d4aa7a]">Venha conferir.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full mb-8">
            <a
              href="/agendar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] text-center py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.12em] shadow-[0_8px_32px_rgba(184,133,58,0.30)] flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
            >
               <Calendar size={17} />
              Garantir meu horário
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-white/75 text-center py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
            >
              <FaInstagram size={16} />
              Ver no Insta
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-between border-t border-white/[0.08] pt-5 px-1">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[1.15rem] font-serif italic font-bold text-[#b8853a] leading-none mb-1">
                  {s.val}
                </div>
                <div className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator (desktop) ────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-[#b8853a] font-bold">Scroll</span>
        <div className="w-[1.5px] h-10 rounded-full bg-gradient-to-b from-[#b8853a] via-[#b8853a]/40 to-transparent" />
      </motion.div>
    </section>
  );
}