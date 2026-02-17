"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { WHATSAPP_LINK } from "../utils/links";

const INSTAGRAM_LINK = "https://instagram.com/barbeariafalcao_";

const FALCAO = "FALCÃO".split("");
const BARBEARIA = "BARBEARIA".split("");

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const razorControls = useAnimation();
  const angleRef = useRef(0);

  useEffect(() => {
    razorControls.set({ rotate: 0 });
    razorControls.start({
      rotate: 360,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    });
    angleRef.current = 360;
  }, []);

  const spinRazor = () => {
    angleRef.current += 360;
    razorControls.start({
      rotate: angleRef.current,
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* BACKGROUND - Versão limpa com mais degradês */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, rgba(197,157,110,0.1) 0%, transparent 70%)", 
            filter: "blur(80px)" 
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, rgba(197,157,110,0.08) 0%, transparent 70%)", 
            filter: "blur(70px)" 
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Extra gradient - centro inferior */}
        <motion.div
          className="absolute bottom-[30%] left-[40%] w-[600px] h-[400px] rounded-full"
          style={{ 
            background: "radial-gradient(ellipse, rgba(197,157,110,0.06) 0%, transparent 70%)", 
            filter: "blur(100px)" 
          }}
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Extra gradient - topo esquerdo */}
        <motion.div
          className="absolute top-[20%] left-[20%] w-[350px] h-[350px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)", 
            filter: "blur(60px)" 
          }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(197,157,110,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(197,157,110,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vinheta */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.85)_100%)]" />
      </motion.div>

      {/* Top line */}
      <motion.div
        className="pointer-events-none absolute top-0 inset-x-0 h-px z-20"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.5), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: fadeOut }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-16
                   flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20"
      >
        {/* TEXTO */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-1">
          {/* badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-2 flex-wrap justify-center md:justify-start"
          >
            <span className="block h-px w-6 bg-[#c59d6e]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-[#c59d6e] uppercase whitespace-nowrap">
              Tapiramutá · BA · Desde 2021
            </span>
            <span className="block h-px w-6 bg-[#c59d6e]" />
          </motion.div>

          {/* FALCÃO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center md:justify-start"
          >
            {FALCAO.map((ch, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", fontSize: "clamp(3.8rem,13vw,9.5rem)" }}
                className="font-['Cormorant_Garamond'] font-black italic leading-[0.92] text-[#e4ddd2] tracking-[-0.01em] cursor-default select-none"
                whileHover={{ color: "#c59d6e", y: -6 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* BARBEARIA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-start gap-[2px] mt-1"
          >
            {BARBEARIA.map((ch, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", fontSize: "clamp(1.4rem,4.8vw,3.5rem)" }}
                className="font-['Barlow_Condensed'] font-light leading-tight tracking-[0.3em] uppercase text-[#c59d6e] cursor-default select-none"
                whileHover={{ color: "#e4ddd2", y: -3 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* ornament */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-5 flex items-center gap-3 justify-center md:justify-start"
          >
            <div className="h-px w-14 bg-gradient-to-r from-[#c59d6e] to-transparent" />
            <motion.div
              className="w-1.5 h-1.5 rotate-45 bg-[#c59d6e]"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="h-px w-14 bg-gradient-to-l from-[#c59d6e] to-transparent" />
          </motion.div>

          {/* tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md"
          >
            Uma barbearia focada em{" "}
            <span className="text-[#c59d6e] font-medium">detalhe</span>,{" "}
            <span className="text-[#c59d6e] font-medium">estilo</span> e respeito ao seu tempo. Corte,
            barba e acabamento com padrão elevado.
          </motion.p>

          {/* stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 flex items-center gap-5 sm:gap-7 justify-center md:justify-start"
          >
            {[["4.9★", "Google"], ["100+", "Clientes"], ["2021", "Fundação"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-base sm:text-lg font-black text-[#c59d6e] leading-none">{val}</div>
                <div className="mt-1 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-zinc-500">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-bold text-black w-full sm:w-auto"
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(197,157,110,0.6)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FaWhatsapp className="h-4 w-4 shrink-0" />
              <span>Agendar pelo WhatsApp</span>
            </motion.a>

            <motion.a
              href={INSTAGRAM_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c59d6e]/40 px-6 py-3 text-sm font-semibold text-[#c59d6e] w-full sm:w-auto"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(197,157,110,0.08)", borderColor: "#c59d6e" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FaInstagram className="h-4 w-4 shrink-0" />
              <span>Ver Instagram</span>
            </motion.a>
          </motion.div>
        </div>

        {/* NAVALHA */}
        <motion.div
          className="hidden md:flex mx-auto md:mx-0 flex-shrink-0 order-2 md:order-2 items-center justify-center
                     w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px]"
          initial={{ opacity: 0, scale: 0.85, rotate: -120 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            onClick={spinRazor}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? spinRazor() : null)}
            aria-label="Girar navalha"
            style={{ touchAction: "manipulation" }}
            className="cursor-pointer select-none text-[#c59d6e]"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={razorControls}
              className="drop-shadow-[0_0_40px_rgba(197,157,110,0.35)] hover:drop-shadow-[0_0_70px_rgba(197,157,110,0.55)] transition-all duration-300"
            >
              <GiRazor className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
        style={{ opacity: fadeOut }}
      >
        <span className="font-mono text-[7px] tracking-[0.5em] text-zinc-600 uppercase">Scroll</span>
        <div className="relative h-9 w-px overflow-hidden bg-zinc-800">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#c59d6e] to-transparent"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}