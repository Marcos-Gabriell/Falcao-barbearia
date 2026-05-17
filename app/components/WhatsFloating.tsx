"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../utils/links";

export default function WhatsFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostra o botão após o usuário rolar um pouco a página (evita poluição no Hero)
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-end"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* O Grupo permite expandir no desktop (opcional) ou manter o luxo do botão */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
            className="group relative flex items-center justify-center rounded-full p-4 backdrop-blur-xl bg-[#070707]/80 border border-[#b8853a]/30 shadow-[0_8px_32px_rgba(0,0,0,0.8)] overflow-hidden"
            whileHover={{ scale: 1.05, borderColor: "rgba(184,133,58,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efeito Glow Interno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b8853a]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Efeito Pulso Cinemático (borda sutil) */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#b8853a]"
              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            />
            
            {/* Glow Drop Shadow Dourado */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ boxShadow: ["0 0 10px rgba(184,133,58,0.2)", "0 0 25px rgba(184,133,58,0.5)", "0 0 10px rgba(184,133,58,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />

            {/* Ícone */}
            <FaWhatsapp size={26} className="text-[#d4aa7a] relative z-10 drop-shadow-md group-hover:text-white transition-colors duration-300" />
            
            {/* Tooltip Premium Escondido (Aparece no Hover no Desktop) */}
            <span className="absolute right-full mr-4 whitespace-nowrap bg-[#070707]/90 border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block backdrop-blur-md">
              Agendar Horário
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}