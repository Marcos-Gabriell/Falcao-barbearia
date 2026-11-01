"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../utils/links";
import { faqs } from "../utils/faqs";


/* ─── COMPONENTE ITEM DO FAQ ────────────────────────────────────────────── */
function FaqItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#b8853a]/50 rounded-sm group cursor-pointer"
      >
        <span
          className={`text-[13px] md:text-sm font-semibold tracking-wide transition-colors duration-300 pr-4 leading-snug ${
            isOpen ? "text-[#d4aa7a]" : "text-[#f5f1eb]/90 group-hover:text-[#b8853a]"
          }`}
        >
          {faq.pergunta}
        </span>
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-[#d4aa7a]/60 bg-[#d4aa7a]/10 shadow-[0_0_12px_rgba(212,170,122,0.2)]"
              : "border-white/10 group-hover:border-[#b8853a]/40 group-hover:bg-[#b8853a]/5"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`text-base font-light leading-none select-none ${
              isOpen ? "text-[#d4aa7a]" : "text-white/40"
            }`}
          >
            +
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-white/50 text-[13px] md:text-sm font-medium leading-relaxed">
              {faq.resposta}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────── */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-24 md:py-32 bg-[#070707] select-none overflow-hidden border-t border-white/5">
      {/* ── Background Elements ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute left-[-10%] bottom-[-20%] rounded-full opacity-30"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(184,133,58,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#b8853a] rounded-full" />
            <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.35em] uppercase">
              Sem enrolação
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#b8853a] rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#f5f1eb] leading-[1] tracking-tight">
            Tira-dúvidas<span className="text-[#b8853a] italic font-normal">.</span>
          </h2>
          <p className="text-white/35 text-sm font-light mt-4 max-w-xs mx-auto leading-relaxed">
            As perguntas mais comuns antes de vir cortar.
          </p>
        </motion.div>

        {/* Lista de FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-sm"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b8853a] hover:text-[#d4aa7a] transition-colors"
          >
            <FaWhatsapp size={15} /> Outra dúvida? Chama no Whats
          </a>
        </div>
      </div>
    </section>
  );
}