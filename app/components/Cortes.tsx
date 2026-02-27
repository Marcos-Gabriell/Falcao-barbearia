"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const imagens = [
  { src: "/cortes/corte1.jpg",   featured: true  },
  { src: "/cortes/corte2.jpg",   featured: false },
  { src: "/cortes/corte3.png",   featured: false },
  { src: "/cortes/corte4.jpg",   featured: true  },
  { src: "/cortes/corte5.png",   featured: false },
  { src: "/cortes/corte6.jpg",   featured: false },
  { src: "/cortes/corte7.jpg",   featured: false },
  { src: "/cortes/corte8.png",   featured: true  },
  { src: "/cortes/corte9.png",   featured: false },
  { src: "/cortes/corte10.jpeg", featured: false },
];

const INSTAGRAM_URL = "https://instagram.com/barbeariafalcao_";

function GalleryItem({ src, index, featured }: { src: string; index: number; featured: boolean }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative cursor-pointer ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: "1/1" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
          animate={{
            boxShadow: hovered
              ? "inset 0 0 0 1.5px rgba(197,157,110,0.65), 0 20px 60px rgba(0,0,0,0.85)"
              : "inset 0 0 0 1px rgba(197,157,110,0.09), 0 8px 32px rgba(0,0,0,0.55)",
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ background: "#05050a" }}>
          {/* Imagem */}
          <motion.div
            className="w-full h-full"
            animate={{ scale: hovered ? 1.10 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={`Corte ${index + 1}`}
              fill
              className="object-cover"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          </motion.div>

          {/* Gradient base */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(5,5,10,0.88) 0%, rgba(5,5,10,0.15) 55%, transparent 100%)" }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay dourado sutil no hover */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(197,157,110,0.07) 0%, transparent 55%)" }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Corner brackets dourado */}
          <motion.div
            className="absolute top-3 right-3 w-6 h-6 z-20"
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.28, delay: 0.04 }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M0 0h9v1.5H1.5v9H0V0z" fill="rgba(197,157,110,0.85)" />
              <path d="M24 24h-9v-1.5h7.5V15H24v9z" fill="rgba(197,157,110,0.85)" />
            </svg>
          </motion.div>

          {/* Info bottom */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.26 }}
                className="absolute bottom-0 left-0 right-0 p-4 z-20"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <motion.div
                      className="h-px mb-2"
                      style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
                      initial={{ width: 0 }}
                      animate={{ width: 26 }}
                      transition={{ duration: 0.35, delay: 0.04 }}
                    />
                    <span className="text-[9px] font-mono tracking-[0.30em] uppercase" style={{ color: "#c59d6e" }}>
                      Falcão
                    </span>
                    <p className="text-[10px] mt-0.5" style={{ color: "rgba(184,180,192,0.60)" }}>Barbearia Premium</p>
                  </div>
                  <span className="text-[10px] font-mono tracking-wide" style={{ color: "rgba(197,157,110,0.55)" }}>
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shine sweep */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.06) 44%, transparent 50%)" }}
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "220%" : "-100%" }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Cortes() {
  const titleRef    = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const ctaRef      = useRef(null);
  const ctaInView   = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section
      id="cortes"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent", color: "#b8b4c0" }}
    >
      {/* Linha top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.35), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="font-mono text-[10px] tracking-[0.42em] uppercase" style={{ color: "rgba(197,157,110,0.75)" }}>
                  Galeria
                </span>
                <motion.div
                  className="h-px flex-1 max-w-[90px]"
                  style={{ background: "linear-gradient(to right, rgba(197,157,110,0.55), transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={titleInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.93] tracking-tight"
                style={{ color: "#e6dfd5" }}
              >
                Nossos<br />
                <span style={{ color: "#c59d6e" }}>Trabalhos</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="max-w-xs text-sm leading-relaxed lg:text-right"
              style={{ color: "rgba(160,156,174,0.50)" }}
            >
              Cada corte é uma obra de arte. Precisão, estilo e atenção aos detalhes em cada trabalho.
            </motion.p>
          </div>
        </div>

        {/* Grid galeria */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {imagens.map((img, i) => (
            <GalleryItem key={i} src={img.src} index={i} featured={img.featured} />
          ))}
        </div>

        {/* CTA Instagram */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 36 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col items-center"
        >
          <motion.div
            className="flex items-center gap-4 mb-9"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-14 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(197,157,110,0.22))" }} />
            <motion.div
              className="w-1.5 h-1.5 rotate-45"
              style={{ border: "1px solid rgba(197,157,110,0.38)" }}
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-14 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(197,157,110,0.22))" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28 }}
            className="text-[10px] font-mono tracking-[0.32em] uppercase mb-6"
            style={{ color: "rgba(160,156,174,0.40)" }}
          >
            Veja mais no Instagram
          </motion.p>

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Ícone */}
            <motion.div
              className="relative flex items-center justify-center w-14 h-14 rounded-full"
              style={{ border: "1px solid rgba(197,157,110,0.26)", color: "rgba(197,157,110,0.70)" }}
              whileHover={{ borderColor: "rgba(197,157,110,0.55)", boxShadow: "0 0 26px rgba(197,157,110,0.22)" }}
              transition={{ duration: 0.3 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px dashed rgba(197,157,110,0.16)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Label */}
            <div className="flex items-center gap-3">
              <span
                className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#e6dfd5]"
                style={{ color: "#b8b4c0" }}
              >
                @barbeariafalcao_
              </span>
              <motion.div
                style={{ color: "#c59d6e" }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to top, rgba(197,157,110,0.18), transparent)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}