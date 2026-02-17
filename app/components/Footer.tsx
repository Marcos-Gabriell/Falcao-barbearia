"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WHATSAPP_LINK } from "../utils/links";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/barbeariafalcao_",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2A3 3 0 0 0 5 8v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5-3a1 1 0 1 1-.9.9 1 1 0 0 1 .9-.9Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_LINK,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

function DiamondIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="text-[#c59d6e]/60">
      <path d="M4 0L8 4L4 8L0 4L4 0Z" />
    </svg>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const startYear = 2021;
  const currentYear = new Date().getFullYear();

  return (
  <footer className="relative w-full bg-transparent text-zinc-400 overflow-hidden">

      {/* Decorative top border with glow */}
      <div className="relative">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(197,157,110,0.6) 50%, transparent 95%)" }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-8 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(197,157,110,0.15) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-8">
        
        {/* Top section: Logo centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Logo maior */}
          <motion.div
            className="relative mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src="/logo1.png"
              alt="Falcão Barbearia"
              width={180}
              height={72}
              className="h-20 w-auto object-contain brightness-110"
            />
            {/* Subtle glow behind logo */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-[#c59d6e] scale-150" />
          </motion.div>
          
          {/* Texto centralizado */}
          <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
            Tradição e estilo desde {startYear}. Cortes precisos e atendimento premium no coração de Tapiramutá.
          </p>
        </motion.div>

        {/* Social icons + CTA centralizados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 w-12 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-[#c59d6e] hover:border-[#c59d6e]/40 transition-colors duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(197,157,110,0.25)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1, type: "spring", stiffness: 400 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-px bg-zinc-800" />
          <div className="block sm:hidden w-16 h-px bg-zinc-800" />

          {/* CTA Button */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c59d6e] text-sm font-semibold text-black"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197,157,110,0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span>Agendar horário</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-800" />
          <DiamondIcon />
          <motion.span
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Est. {startYear}
          </motion.span>
          <DiamondIcon />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-800" />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-zinc-600">
              © {startYear}–{currentYear} Falcão Barbearia
            </p>
            <span className="hidden sm:block text-zinc-800">•</span>
            <p className="text-xs text-zinc-600">
              Todos os direitos reservados
            </p>
          </div>
          
          <motion.p
            className="text-[10px] text-zinc-700 font-mono tracking-wider"
            whileHover={{ color: "rgba(197,157,110,0.6)" }}
          >
            Tapiramutá, Bahia — Brasil
          </motion.p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Corner accent */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #c59d6e 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(197,157,110,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(197,157,110,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
    </footer>
  );
}