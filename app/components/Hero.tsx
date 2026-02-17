"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../utils/links";

const INSTAGRAM_LINK = "https://instagram.com/barbeariafalcao_";

const ORBS = [
  { w: 600, h: 600, x: "72%", y: "22%", delay: 0, dur: 14, a: 0.22 },
  { w: 420, h: 420, x: "12%", y: "62%", delay: 3, dur: 18, a: 0.16 },
  { w: 320, h: 320, x: "52%", y: "82%", delay: 6, dur: 12, a: 0.12 },
  { w: 220, h: 220, x: "88%", y: "72%", delay: 1, dur: 16, a: 0.14 },
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${(i * 5.1) % 100}%`,
  y: `${(i * 7.3) % 100}%`,
  size: 1 + (i % 3) * 0.7,
  delay: i * 0.4,
  dur: 6 + (i % 4) * 2,
}));

const FALCAO    = "FALCÃO".split("");
const BARBEARIA = "BARBEARIA".split("");

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fadeOut  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#040404]"
    >
      {/* ── BACKGROUND ORBS ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {ORBS.map((orb, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              width: orb.w, height: orb.h,
              left: orb.x, top: orb.y,
              translateX: "-50%", translateY: "-50%",
              filter: "blur(100px)",
              background: i % 2 === 0
                ? "radial-gradient(circle, #c59d6e 0%, #7a5020 60%, transparent 100%)"
                : "radial-gradient(circle, #a06b35 0%, #3d1f05 60%, transparent 100%)",
              opacity: orb.a,
            }}
            animate={{ scale:[1,1.35,.88,1.18,1], x:[0,50,-35,25,0], y:[0,-35,45,-18,0], opacity:[orb.a,orb.a*1.5,orb.a*.7,orb.a*1.2,orb.a] }}
            transition={{ duration: orb.dur, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(197,157,110,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(197,157,110,0.03) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <motion.div className="absolute inset-0 opacity-[0.025]"
          animate={{ backgroundPosition: ["0% 0%","100% 100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: "repeating-linear-gradient(45deg,rgba(197,157,110,1) 0px,transparent 1px,transparent 80px,rgba(197,157,110,1) 81px)" }}
        />
      </motion.div>

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div key={p.id} className="absolute rounded-full bg-[#c59d6e]"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ opacity:[0,.65,0], y:[0,-60,-120], scale:[1,1.6,0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity }}
          />
        ))}
      </div>

      {/* top hairline */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c59d6e]/50 to-transparent" />

      {/* ── CONTENT ── */}
      <motion.div
        style={{ y: contentY, opacity: fadeOut }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-16
                   flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20"
      >
        {/* ─ LOGO — ordem 1 mobile (topo), ordem 2 desktop (direita) — SÓ ELA TEM ENTRADA ─ */}
        <motion.div
          className="w-[160px] sm:w-[220px] md:w-[320px] lg:w-[400px] mx-auto md:mx-0 flex-shrink-0 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            {/* glow ambiente — sem anéis, sem fundo */}
            <div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(197,157,110,0.18) 0%, transparent 65%)" }}
            />
            <Image
              src="/logo1.png"
              alt="Logo Falcão Barbearia"
              width={400}
              height={400}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(197,157,110,0.35)]"
              style={{ mixBlendMode: "lighten" }}
            />
          </motion.div>
        </motion.div>

        {/* ─ TEXT — ordem 2 mobile (abaixo), ordem 1 desktop (esquerda) — SEM animações de entrada ─ */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

          {/* badge */}
          <div className="mb-4 flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="block h-px w-6 bg-[#c59d6e]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#c59d6e] uppercase whitespace-nowrap">
              Tapiramutá · BA · Desde 2020
            </span>
            <span className="block h-px w-6 bg-[#c59d6e]" />
          </div>

          {/* FALCÃO — só hover */}
          <div className="flex justify-center md:justify-start">
            {FALCAO.map((ch, i) => (
              <motion.span key={i}
                style={{ display: "inline-block", fontSize: "clamp(3.8rem,13vw,9.5rem)" }}
                className="font-['Cormorant_Garamond'] font-black italic leading-[0.92] text-[#e4ddd2] tracking-[-0.01em] cursor-default select-none"
                whileHover={{ color: "#c59d6e", y: -6 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* BARBEARIA — só hover */}
          <div className="flex justify-center md:justify-start gap-[2px] mt-1">
            {BARBEARIA.map((ch, i) => (
              <motion.span key={i}
                style={{ display: "inline-block", fontSize: "clamp(1.4rem,4.8vw,3.5rem)" }}
                className="font-['Barlow_Condensed'] font-light leading-tight tracking-[0.3em] uppercase text-[#c59d6e] cursor-default select-none"
                whileHover={{ color: "#e4ddd2", y: -3 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* ornament */}
          <div className="my-5 flex items-center gap-3 justify-center md:justify-start">
            <div className="h-px w-14 bg-gradient-to-r from-[#c59d6e] to-transparent" />
            <motion.span
              className="text-[#c59d6e] text-base sm:text-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >✦</motion.span>
            <div className="h-px w-14 bg-gradient-to-l from-[#c59d6e] to-transparent" />
          </div>

          {/* tagline */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
            Uma barbearia focada em{" "}
            <span className="text-[#c59d6e] font-medium">detalhe</span>,{" "}
            <span className="text-[#c59d6e] font-medium">estilo</span> e respeito ao seu tempo. Corte, barba e acabamento com padrão elevado.
          </p>

          {/* stats */}
          <div className="mt-5 flex items-center gap-5 sm:gap-7 justify-center md:justify-start">
            {[["4.9★","Google"],["100+","Clientes"],["2020","Fundação"]].map(([val,label]) => (
              <div key={label} className="text-center">
                <div className="text-base sm:text-lg font-black text-[#c59d6e] leading-none">{val}</div>
                <div className="mt-1 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-zinc-500">{label}</div>
              </div>
            ))}
          </div>

          {/* buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
            <motion.a href={WHATSAPP_LINK} target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-bold text-black w-full sm:w-auto"
              style={{ boxShadow: "0 0 32px rgba(197,157,110,0.55)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(197,157,110,0.85)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FaWhatsapp className="h-4 w-4 shrink-0" />
              <span>Agendar pelo WhatsApp</span>
            </motion.a>

            <motion.a href={INSTAGRAM_LINK} target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c59d6e]/55 px-6 py-3 text-sm font-semibold text-[#c59d6e] w-full sm:w-auto"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(197,157,110,0.08)", borderColor: "#c59d6e" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FaInstagram className="h-4 w-4 shrink-0" />
              <span>Ver Instagram</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* scroll — hidden mobile */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
        style={{ opacity: fadeOut }}
      >
        <span className="font-mono text-[7px] tracking-[0.5em] text-zinc-600 uppercase">Scroll</span>
        <div className="relative h-9 w-px overflow-hidden bg-zinc-800">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#c59d6e] to-transparent"
            animate={{ height:["0%","100%","0%"], top:["0%","0%","100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}