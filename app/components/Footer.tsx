"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "../utils/links";

const INSTAGRAM_URL = "https://instagram.com/barbeariafalcao_";

const horarios = [
  { dia: "Seg – Sex", hora: "09:00 – 19:00", aberto: true  },
  { dia: "Sábado",    hora: "08:00 – 20:00", aberto: true  },
  { dia: "Domingo",   hora: "Fechado",        aberto: false },
];

const navLinks = [
  { label: "Início",      href: "#inicio"     },
  { label: "Sobre",       href: "#sobre"      },
  { label: "Serviços",    href: "#valores"    },
  { label: "Galeria",     href: "#cortes"     },
  { label: "Avaliações",  href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao"},
];

const servicos = [
  "Corte na máquina",
  "Corte tesoura",
  "Barba completa",
  "Pezinho",
  "Pigmentação",
  "Sobrancelha",
];

function IGIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 256 258" fill="currentColor">
      <path d="M128.1 0C57.3 0 .7 56.5.7 126.3c0 22.1 5.8 43.7 16.8 62.7L0 256l69.9-17.9c18.3 10 39 15.3 60.3 15.3h.1c70.8 0 127.4-56.5 127.4-126.3C257.7 56.5 199 0 128.1 0zm75.2 180.4c-3.2 9-18.4 17.2-25.3 18.3-6.5 1-14.8 1.4-23.9-1.5-5.5-1.8-12.6-4.1-21.7-8.1-38.1-16.6-62.8-55.3-64.8-57.9-1.9-2.6-15.4-20.5-15.4-39.1 0-18.6 9.7-27.7 13.1-31.5 3.3-3.8 7.2-4.7 9.6-4.7 2.4 0 4.8 0 6.8.1 2.2.1 5.1-.8 8 6.1 3.2 7.5 10.8 26.2 11.7 28.1.9 1.9 1.5 4.1.3 6.6-1.2 2.6-1.8 4.1-3.5 6.3-1.8 2.1-3.8 4.7-5.3 6.3-1.8 1.9-3.7 3.9-1.6 7.4 2.1 3.6 9.3 15.4 20 24.8 13.8 12.4 24.9 16.3 28.4 18.1 3.5 1.9 5.5 1.6 7.5-.9 2.1-2.6 8.7-10.1 11-13.6 2.3-3.4 4.6-2.9 7.6-1.7 3.2 1.3 20.4 9.8 23.9 11.6 3.5 1.9 5.8 2.8 6.6 4.4.8 1.6.8 9.3-2.4 18.3z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export default function Footer() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const year   = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#070707", color: "#000000" }}
    >
      {/* ── Linha top com glow ── */}
      <div className="relative h-px">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(197,157,110,0.20) 15%, rgba(197,157,110,0.65) 50%, rgba(197,157,110,0.20) 85%, transparent 100%)",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "600px",
            height: "70px",
            background: "radial-gradient(ellipse at top, rgba(197,157,110,0.10) 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-18 pb-8">

        {/* ── Grid principal 4 colunas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 mb-16 pt-16">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* Logo */}
            <motion.div
              className="relative inline-block mb-5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <Image
                src="/logo1.png"
                alt="Falcão Barbearia"
                width={160}
                height={64}
                className="h-16 w-auto object-contain brightness-110"
              />
              <div
                className="absolute inset-0 -z-10 scale-150 blur-3xl opacity-20"
                style={{ background: "#c59d6e" }}
              />
            </motion.div>

            <p
              className="text-[13px] leading-relaxed mb-6"
              style={{ color: "rgba(160,156,174,0.55)", maxWidth: "210px" }}
            >
              Tradição e estilo desde 2021. Cortes precisos e atendimento premium no coração de Tapiramutá.
            </p>

            {/* Endereço */}
            <div
              className="flex items-start gap-2 mb-6"
              style={{ color: "rgba(160,156,174,0.48)" }}
            >
              <span className="mt-0.5 shrink-0" style={{ color: "rgba(197,157,110,0.55)" }}>
                <MapPinIcon />
              </span>
              <span className="text-[12px] leading-relaxed">
                R. Olavo Bilac — Tapiramutá, BA
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { href: INSTAGRAM_URL, icon: <IGIcon />, label: "Instagram" },
                { href: WHATSAPP_LINK, icon: <WAIcon />, label: "WhatsApp"  },
              ].map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
                  style={{
                    background: "rgba(197,157,110,0.07)",
                    border: "1px solid rgba(197,157,110,0.14)",
                    color: "rgba(197,157,110,0.55)",
                  }}
                  whileHover={{
                    scale: 1.12,
                    color: "#c59d6e",
                    boxShadow: "0 0 18px rgba(197,157,110,0.28)",
                    borderColor: "rgba(197,157,110,0.40)",
                  }}
                  whileTap={{ scale: 0.94 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.10 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Navegação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4
              className="text-[9px] font-mono tracking-[0.38em] uppercase mb-6"
              style={{ color: "rgba(197,157,110,0.70)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.22 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-[13px] transition-colors duration-200"
                    style={{ color: "rgba(160,156,174,0.55)" }}
                  >
                    <span
                      className="block h-px w-0 group-hover:w-5 transition-all duration-300"
                      style={{ background: "#c59d6e" }}
                    />
                    <span className="group-hover:text-[#e6dfd5] transition-colors duration-200">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4
              className="text-[9px] font-mono tracking-[0.38em] uppercase mb-6"
              style={{ color: "rgba(197,157,110,0.70)" }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {servicos.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.28 + i * 0.05 }}
                  className="flex items-center gap-2 text-[13px]"
                  style={{ color: "rgba(160,156,174,0.50)" }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: "rgba(197,157,110,0.40)" }}
                  />
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Horários + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.20, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4
              className="text-[9px] font-mono tracking-[0.38em] uppercase mb-6"
              style={{ color: "rgba(197,157,110,0.70)" }}
            >
              Horários
            </h4>

            <div className="space-y-3 mb-8">
              {horarios.map((h, i) => (
                <motion.div
                  key={h.dia}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.32 + i * 0.08 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: h.aberto ? "#34d399" : "rgba(160,156,174,0.22)" }}
                      animate={h.aberto ? { opacity: [1, 0.4, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-[12px]" style={{ color: "rgba(160,156,174,0.55)" }}>
                      {h.dia}
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-medium ml-2"
                    style={{ color: h.aberto ? "rgba(230,223,213,0.80)" : "rgba(160,156,174,0.28)" }}
                  >
                    {h.hora}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-black rounded-full px-5 py-2.5 w-full justify-center"
              style={{
                background: "linear-gradient(135deg, #c59d6e 0%, #e8c589 55%, #9b7540 100%)",
                boxShadow: "0 4px 20px rgba(197,157,110,0.22)",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 6px 32px rgba(197,157,110,0.44)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <WAIcon />
              Agendar agora
            </motion.a>
          </motion.div>
        </div>

        {/* ── Divisor central ── */}
        <motion.div
          className="flex items-center gap-5 mb-7"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(197,157,110,0.18))" }}
          />
          <div className="flex items-center gap-3">
            <span
              className="w-1 h-1 rotate-45 inline-block"
              style={{ background: "rgba(197,157,110,0.38)" }}
            />
            <motion.span
              className="text-[9px] font-mono tracking-[0.40em] uppercase"
              style={{ color: "rgba(197,157,110,0.35)" }}
              animate={{ opacity: [0.35, 0.60, 0.35] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Est. 2021
            </motion.span>
            <span
              className="w-1 h-1 rotate-45 inline-block"
              style={{ background: "rgba(197,157,110,0.38)" }}
            />
          </div>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to left, transparent, rgba(197,157,110,0.18))" }}
          />
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.56 }}
        >
          <div
            className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center text-[11px]"
            style={{ color: "rgba(160,156,174,0.30)" }}
          >
            <span>© 2021–{year} Falcão Barbearia</span>
            <span className="hidden sm:block">·</span>
            <span>Todos os direitos reservados</span>
          </div>
        </motion.div>
      </div>

      {/* ── Decorativos de fundo ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow dourado canto inferior direito */}
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: "-60px", right: "-60px",
            width: "360px", height: "360px",
            background: "radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hatch ultra sutil */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-52deg, transparent 0px, transparent 28px, rgba(197,157,110,0.8) 28px, rgba(197,157,110,0.8) 29px)",
          }}
        />
      </div>
    </footer>
  );
}