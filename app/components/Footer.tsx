"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "../utils/links";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const startYear = 2021;
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative w-full bg-[#0a0a0a] text-zinc-300 pt-16 pb-8 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.5), transparent)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3
              className="text-2xl font-bold text-[#e4ddd2] mb-1"
              animate={{ textShadow: ["0 0 0px #c59d6e", "0 0 20px rgba(197,157,110,0.2)", "0 0 0px #c59d6e"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Falcão Barbearia
            </motion.h3>
            <motion.div
              className="mb-4 h-[1px] w-12 bg-gradient-to-r from-[#c59d6e] to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-zinc-400 leading-relaxed text-sm">
              Corte, barba e experiência premium feita com precisão, estilo e dedicação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold text-[#e4ddd2] uppercase tracking-[0.2em] mb-4">Contato</h4>
            <p className="text-zinc-400 text-sm leading-loose">
              R. Olavo Bilac – Tapiramutá, BA<br />
              CEP 44840-027
            </p>
            <p className="mt-3 text-sm leading-loose text-zinc-400">
              <span className="text-[#c59d6e] font-medium">Seg - Sex:</span> 09:00 às 19:00<br />
              <span className="text-[#c59d6e] font-medium">Sábado:</span> 08:00 às 20:00
            </p>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#c59d6e] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_28px_rgba(197,157,110,0.6)]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 44px rgba(197,157,110,0.9)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Agendar pelo WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold text-[#e4ddd2] uppercase tracking-[0.2em] mb-4">Siga-nos</h4>
            <div className="flex gap-3 mt-2">
              <motion.a
                href="https://instagram.com/barbeariafalcao_"
                target="_blank"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-[#c59d6e]/50 text-[#c59d6e]"
                whileHover={{ scale: 1.12, backgroundColor: "rgba(197,157,110,0.15)", boxShadow: "0 0 16px rgba(197,157,110,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2A3 3 0 0 0 5 8v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5-3a1 1 0 1 1-.9.9 1 1 0 0 1 .9-.9Z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 border-t border-zinc-800 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-sm text-zinc-500">
            © {startYear}–{currentYear} Falcão Barbearia — Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}