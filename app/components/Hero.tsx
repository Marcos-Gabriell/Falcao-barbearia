"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { WHATSAPP_LINK } from "../utils/links";

const INSTAGRAM_LINK = "https://instagram.com/barbeariafalcao_";

const FALCAO = "FALCÃO".split("");
const BARBEARIA = "BARBEARIA".split("");

const mosaicImages = [
  "/cortes/corte1.jpg",
  "/cortes/corte2.jpg",
  "/cortes/corte3.png",
  "/cortes/corte4.jpg",
  "/cortes/corte5.png",
  "/cortes/corte6.jpg",
  "/cortes/corte7.jpg",
  "/cortes/corte8.png",
  "/cortes/corte9.png",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "3px",
          }}
        >
          {mosaicImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "blur(2px) saturate(0.6) brightness(0.35)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Overlay gradient principal */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,14,26,0.55) 0%, rgba(10,14,26,0.85) 60%, #0a0e1a 100%)",
          }}
        />

        {/* Vinheta nas bordas */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0a0e1a 0%, transparent 15%, transparent 80%, #0a0e1a 100%)",
          }}
        />

        {/* Glow dourado sutil */}
        <motion.div
          className="absolute"
          style={{
            top: "10%",
            right: "8%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(197,157,110,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow azul sutil */}
        <motion.div
          className="absolute"
          style={{
            bottom: "15%",
            left: "5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,157,110,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,157,110,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Top line */}
      <motion.div
        className="pointer-events-none absolute top-0 inset-x-0 h-px z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(197,157,110,0.7), transparent)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: fadeOut }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-16 flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20"
      >
        {/* TEXTO */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-1">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 flex-wrap justify-center md:justify-start"
          >
            <span
              className="block h-px w-8"
              style={{ background: "linear-gradient(to right, #c59d6e, #1e40af)" }}
            />
            <span
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap"
              style={{ color: "#c59d6e" }}
            >
              Tapiramutá · BA · Desde 2021
            </span>
            <span
              className="block h-px w-8"
              style={{ background: "linear-gradient(to left, #c59d6e, #1e40af)" }}
            />
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
                style={{
                  display: "inline-block",
                  fontSize: "clamp(3.8rem,13vw,9.5rem)",
                  color: "#e8e0d4",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 900,
                  fontStyle: "italic",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                  cursor: "default",
                  userSelect: "none",
                }}
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
                style={{
                  display: "inline-block",
                  fontSize: "clamp(1.4rem,4.8vw,3.5rem)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#c59d6e",
                  cursor: "default",
                  userSelect: "none",
                }}
                whileHover={{ color: "#e8e0d4", y: -3 }}
                transition={{ type: "spring", stiffness: 600, damping: 22 }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* ornamento dourado-azul */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-5 flex items-center gap-3 justify-center md:justify-start"
          >
            <div
              className="h-px w-14"
              style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
            />
            <motion.div
              className="w-2 h-2 rotate-45"
              style={{ background: "linear-gradient(135deg, #c59d6e, #3b82f6)" }}
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div
              className="h-px w-14"
              style={{ background: "linear-gradient(to left, #c59d6e, transparent)" }}
            />
          </motion.div>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md"
            style={{ color: "rgba(196,195,208,0.75)" }}
          >
            Uma barbearia focada em{" "}
            <span style={{ color: "#c59d6e", fontWeight: 600 }}>detalhe</span>,{" "}
            <span style={{ color: "#c59d6e", fontWeight: 600 }}>estilo</span> e respeito ao
            seu tempo. Corte, barba e acabamento com padrão elevado.
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-6 sm:gap-8 justify-center md:justify-start"
          >
            {[["4.9★", "Google"], ["100+", "Clientes"], ["2021", "Fundação"]].map(
              ([val, label]) => (
                <div key={label} className="text-center">
                  <div
                    className="text-base sm:text-lg font-black leading-none"
                    style={{ color: "#c59d6e" }}
                  >
                    {val}
                  </div>
                  <div
                    className="mt-1 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(148,163,184,0.6)" }}
                  >
                    {label}
                  </div>
                </div>
              )
            )}
          </motion.div>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-black w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #c59d6e 0%, #d4aa7a 50%, #b8853a 100%)",
                boxShadow: "0 4px 24px rgba(197,157,110,0.35)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 6px 40px rgba(197,157,110,0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <FaWhatsapp className="h-4 w-4 shrink-0" />
              <span>Agendar pelo WhatsApp</span>
            </motion.a>

            <motion.a
              href={INSTAGRAM_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold w-full sm:w-auto"
              style={{
                border: "1px solid rgba(59,130,246,0.4)",
                color: "#93c5fd",
                background: "rgba(30,64,175,0.08)",
              }}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(30,64,175,0.18)",
                borderColor: "rgba(59,130,246,0.7)",
              }}
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
          className="flex mx-auto md:mx-0 flex-shrink-0 order-2 items-center justify-center w-[260px] sm:w-[340px] md:w-[400px] lg:w-[480px]"
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
            style={{ touchAction: "manipulation", color: "#c59d6e" }}
            className="cursor-pointer select-none"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={razorControls}
              style={{
                filter: "drop-shadow(0 0 32px rgba(197,157,110,0.3)) drop-shadow(0 0 60px rgba(30,64,175,0.15))",
              }}
            >
              <GiRazor className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
        style={{ opacity: fadeOut as any }}
      >
        <span
          className="font-mono text-[7px] tracking-[0.5em] uppercase"
          style={{ color: "rgba(148,163,184,0.5)" }}
        >
          Scroll
        </span>
        <div
          className="relative h-9 w-px overflow-hidden"
          style={{ background: "rgba(148,163,184,0.15)" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{
              background: "linear-gradient(to bottom, #c59d6e, transparent)",
            }}
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}