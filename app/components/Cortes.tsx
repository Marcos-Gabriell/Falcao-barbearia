"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const imagens = [
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

function GalleryItem({ src, index }: { src: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  const col = index % 3;
  const delays = [0, 0.1, 0.2];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
      transition={{ duration: 0.7, delay: Math.floor(index / 3) * 0.1 + delays[col], ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group w-full aspect-square p-[10px] rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.7)] border border-[#3a2a16] cursor-pointer"
      style={{ backgroundColor: "#4a3a21" }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(0,0,0,0.9)" }}
    >
      <motion.div
        className="w-full h-full rounded-[16px] p-[4px] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]"
        animate={{
          background: hovered
            ? "linear-gradient(135deg, #f1d9a6, #c09155)"
            : "linear-gradient(135deg, #e4c08a, #a17843)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full overflow-hidden rounded-[12px] bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] relative">
          <motion.div
            animate={{ scale: hovered ? 1.08 : 1, filter: hovered ? "brightness(1.12)" : "brightness(1)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={`Corte ${index + 1}`}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-start p-3"
              >
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c59d6e]"
                >
                  Falcão Barbearia
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute inset-0 rounded-[12px]"
            animate={{ opacity: hovered ? 1 : 0 }}
            style={{ boxShadow: "inset 0 0 20px rgba(197,157,110,0.3)" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Cortes() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="cortes" className="relative w-full bg-black py-28 text-zinc-300 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.4), transparent)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16" ref={titleRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase border border-[#c59d6e]/30 px-3 py-1 mb-5"
          >
            ✦ Nosso trabalho
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl"
          >
            Portfólio de Cortes
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c59d6e] to-transparent"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-zinc-400"
          >
            Alguns dos cortes realizados na Falcão Barbearia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagens.map((src, i) => (
            <GalleryItem key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}