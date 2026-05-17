"use client";

import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "../utils/links";

const GOLD       = "#b8853a";
const GOLD_LIGHT = "#d4aa7a";

const navLinks = [
  { label: "Início",      href: "#inicio"      },
  { label: "Sobre",       href: "#sobre"       },
  { label: "Serviços",    href: "#valores"     },
  { label: "Galeria",     href: "#cortes"      },
  { label: "Avaliações",  href: "#avaliacoes"  },
  { label: "Localização", href: "#localizacao" },
];

function CTAButton() {
  const shimmer = useAnimation();

  useEffect(() => {
    let active = true;
    const loop = async () => {
      while (active) {
        await shimmer.start({ x: ["-110%", "220%"], transition: { duration: 0.85, ease: "easeInOut" } });
        await new Promise((r) => setTimeout(r, 2600));
      }
    };
    loop();
    return () => { active = false; };
  }, [shimmer]);

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] flex-shrink-0 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 55%, #8f6425 100%)`,
        color: "#070707",
        boxShadow: "0 2px 20px rgba(184,133,58,0.32)",
      }}
      whileHover={{ scale: 1.04, boxShadow: "0 4px 40px rgba(184,133,58,0.62)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.30) 50%, transparent 65%)" }}
        animate={shimmer}
        aria-hidden
      />
      <span className="relative z-10">Agendar Horário</span>
    </motion.a>
  );
}

export default function Header() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`); },
        { threshold: 0.28, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => { observers.forEach((o) => o?.disconnect()); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none pt-4 lg:pt-6">
      <motion.div
        className="pointer-events-auto w-full transition-all duration-500 ease-in-out flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: scrolled ? "1200px" : "100%",
          margin: scrolled ? "0 1rem" : "0",
          borderRadius: scrolled ? "1rem" : "0px",
          padding: scrolled ? "0 1.5rem" : "0 2rem",
          height: scrolled ? "4.5rem" : "5rem",
          background: scrolled ? "rgba(7,7,7,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          border: scrolled ? "1px solid rgba(184,133,58,0.15)" : "1px solid transparent",
          boxShadow: scrolled ? "0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" : "none",
        }}
      >
        {/* ── 1. Bloco Esquerdo (Logo) ── */}
        <div className="flex-1 flex justify-start">
          <motion.a
            href="#inicio"
            aria-label="Falcão Barbearia — início"
            className="relative shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            <motion.div
              className="absolute inset-0 -z-10 blur-2xl scale-[2.2] rounded-full"
              style={{ background: "rgba(184,133,58,0.22)" }}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              aria-hidden
            />
            <Image
              src="/logo1.png"
              alt="Falcão Barbearia"
              width={120}
              height={48}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </motion.a>
        </div>

        {/* ── 2. Bloco Central (Navegação Desktop) ── */}
        <nav className="hidden lg:flex items-center justify-center gap-8 shrink-0" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 py-2"
                style={{ color: isActive ? "#f5f1eb" : "rgba(189,183,175,0.55)" }}
              >
                <span className="group-hover:text-[#f5f1eb] transition-colors duration-300 drop-shadow-sm">
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-desktop"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                      boxShadow: `0 -2px 10px ${GOLD_LIGHT}40`
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── 3. Bloco Direito (CTA e Menu Mobile) ── */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <CTAButton />
          
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg shrink-0 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            style={{ background: menuOpen ? "rgba(184,133,58,0.1)" : "transparent" }}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block w-5 h-[1.5px] origin-center rounded-full"
              style={{ background: GOLD }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] rounded-full"
              style={{ background: GOLD }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block w-5 h-[1.5px] origin-center rounded-full"
              style={{ background: GOLD }}
            />
          </button>
        </div>
      </motion.div>

      {/* ── Menu Mobile Full Screen ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[-1] pointer-events-auto bg-[#070707]/95 flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-8" aria-label="Menu mobile">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl font-serif italic tracking-wide"
                    style={{ color: isActive ? GOLD_LIGHT : "#f5f1eb" }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 flex items-center justify-center py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 55%, #8f6425 100%)`,
                  color: "#070707",
                  boxShadow: "0 10px 30px rgba(184,133,58,0.25)",
                }}
              >
                Agendar Horário
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}