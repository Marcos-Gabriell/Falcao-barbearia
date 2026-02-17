"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const imagens = [
  { src: "/cortes/corte1.jpg", featured: true },
  { src: "/cortes/corte2.jpg", featured: false },
  { src: "/cortes/corte3.png", featured: false },
  { src: "/cortes/corte4.jpg", featured: true },
  { src: "/cortes/corte5.png", featured: false },
  { src: "/cortes/corte6.jpg", featured: false },
  { src: "/cortes/corte7.jpg", featured: false },
  { src: "/cortes/corte8.png", featured: true },
  { src: "/cortes/corte9.png", featured: false },
    { src: "/cortes/corte10.jpeg", featured: false },
];

const INSTAGRAM_URL = "https://instagram.com/barbeariafalcao_";

function GalleryItem({ src, index, featured }: { src: string; index: number; featured: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative cursor-pointer ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Outer frame with gold accent */}
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl"
        style={{
          aspectRatio: featured ? "1/1" : "1/1",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gold border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
          animate={{
            boxShadow: hovered
              ? "inset 0 0 0 2px rgba(197,157,110,0.6), 0 20px 60px rgba(0,0,0,0.8)"
              : "inset 0 0 0 1px rgba(197,157,110,0.15), 0 10px 40px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Image container */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-zinc-950">
          <motion.div
            className="w-full h-full"
            animate={{
              scale: hovered ? 1.1 : 1,
            }}
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

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            animate={{ opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
          />

          {/* Corner accent */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path d="M0 0h12v2H2v10H0V0z" fill="rgba(197,157,110,0.8)" />
              <path d="M32 32h-12v-2h10V20h2v12z" fill="rgba(197,157,110,0.8)" />
            </svg>
          </motion.div>

          {/* Bottom info */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-5 z-20"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 32 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-px bg-[#c59d6e] mb-3"
                    />
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c59d6e]">
                      Falcão
                    </span>
                    <p className="text-xs text-zinc-400 mt-1">Barbearia Premium</p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-[#c59d6e]"
                  >
                    <span className="text-[10px] font-mono tracking-wider">#{String(index + 1).padStart(2, "0")}</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "200%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Cortes() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section id="cortes" className="relative w-full bg-[#030303] py-32 text-zinc-300 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,157,110,0.04),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,157,110,0.03),_transparent_50%)]" />
      </div>

      {/* Top decorative line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.4), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating accent shapes */}
      <motion.div
        className="pointer-events-none absolute top-40 -right-20 w-80 h-80 rounded-full opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #c59d6e 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header - asymmetric layout */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase">
                  Galeria
                </span>
                <motion.div
                  className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[#c59d6e]/60 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={titleInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e4ddd2] leading-[0.95] tracking-tight"
              >
                Nossos
                <br />
                <span className="text-[#c59d6e]">Trabalhos</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-xs text-sm leading-relaxed lg:text-right"
            >
              Cada corte é uma obra de arte. Precisão, estilo e atenção aos detalhes em cada trabalho.
            </motion.p>
          </div>
        </div>

        {/* Masonry-style gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {imagens.map((img, i) => (
            <GalleryItem key={i} src={img.src} index={i} featured={img.featured} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col items-center"
        >
          {/* Decorative line */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-zinc-800" />
            <motion.div
              className="w-2 h-2 rotate-45 border border-[#c59d6e]/40"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-zinc-800" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-600 mb-6"
          >
            Veja mais no Instagram
          </motion.p>

          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Icon circle */}
            <motion.div
              className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#c59d6e]/30 text-[#c59d6e]"
              whileHover={{ borderColor: "rgba(197,157,110,0.6)", boxShadow: "0 0 30px rgba(197,157,110,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <InstagramIcon />
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-[#c59d6e]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Text + arrow */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[#e4ddd2] group-hover:text-[#c59d6e] transition-colors duration-300">
                @barbeariafalcao_
              </span>
              <motion.div
                className="text-[#c59d6e]"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowIcon />
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-[#c59d6e]/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}