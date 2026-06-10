"use client";

import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const GOLD       = "#b8853a";
const GOLD_LIGHT = "#d4aa7a";

const navLinks = [
  { label: "Início",      href: "/#inicio"      },
  { label: "Sobre",       href: "/#sobre"       },
  { label: "Serviços",    href: "/#servicos"    },
  { label: "Galeria",     href: "/#cortes"      },
  { label: "Avaliações",  href: "/#avaliacoes"  },
  { label: "Localização", href: "/#localizacao" },
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
      href="/agendar"
      className="hidden lg:inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[11px] font-black uppercase tracking-[0.2em] flex-shrink-0 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 50%, #8f6425 100%)`,
        color: "#070707",
        boxShadow: "0 4px 20px rgba(184,133,58,0.25)",
      }}
      whileHover={{ scale: 1.04, boxShadow: "0 6px 30px rgba(184,133,58,0.4)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.40) 50%, transparent 65%)" }}
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
    const ids = navLinks
      .map((l) => (l.href.includes("#") ? l.href.split("#")[1] : null))
      .filter(Boolean) as string[];

    const update = () => {
      let current = ids[0];
      const probeY = window.innerHeight * 0.4;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) current = id;
        }
      });
      setActiveSection(`#${current}`);
    };

    // Aplica o hash da URL imediatamente (evita delay na navegação por âncora)
    const hash = window.location.hash.slice(1);
    if (hash && ids.includes(hash)) setActiveSection(`#${hash}`);

    // Delay pequeno para garantir que o browser terminou de rolar até o hash
    const t = setTimeout(update, 120);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", update);
    };
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
          maxWidth:          scrolled ? "1200px" : "100%",
          margin:            scrolled ? "0 1.5rem" : "0",
          borderRadius:      scrolled ? "100px" : "0px",
          padding:           scrolled ? "0 1.5rem 0 2rem" : "0 2rem",
          height:            scrolled ? "4.5rem" : "5.5rem",
          background:        scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter:    scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          border:            scrolled ? "1px solid rgba(184,133,58,0.15)" : "1px solid transparent",
          boxShadow:         scrolled ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* LOGO */}
        <div className="flex-1 flex justify-start">
          <motion.a
            href="/"
            aria-label="Falcão Barbearia — início"
            className="relative shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/logo1.png"
              alt="Falcão Barbearia"
              width={130}
              height={52}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </motion.a>
        </div>

        {/* LINKS DESKTOP */}
        <nav className="hidden lg:flex items-center justify-center gap-10 shrink-0">
          {navLinks.map((link) => {
            const isActive = link.href.includes("#")
              ? activeSection === "#" + link.href.split("#")[1]
              : false;
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 py-2"
                style={{ color: isActive ? "#f5f1eb" : "rgba(255,255,255,0.4)" }}
              >
                <span className="group-hover:text-[#f5f1eb] transition-colors duration-300">
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-desktop"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                      boxShadow: `0 -2px 10px ${GOLD_LIGHT}40`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA + HAMBÚRGUER */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <CTAButton />

          <button
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-12 h-12 rounded-full shrink-0 transition-colors pointer-events-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: menuOpen ? "rgba(184,133,58,0.15)" : "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}    className="block w-5 h-[1.5px] origin-center rounded-full" style={{ background: GOLD_LIGHT }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }} className="block w-5 h-[1.5px] rounded-full"              style={{ background: GOLD_LIGHT }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}  className="block w-5 h-[1.5px] origin-center rounded-full" style={{ background: GOLD_LIGHT }} />
          </button>
        </div>
      </motion.div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[-1] pointer-events-auto bg-[#070707]/95 flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-3xl font-serif italic tracking-wide"
                  style={{
                    color:
                      link.href.includes("#") &&
                      activeSection === "#" + link.href.split("#")[1]
                        ? GOLD_LIGHT
                        : "#f5f1eb",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-8"
              >
                <a
                  href="/agendar"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full rounded-xl px-6 py-4 text-[13px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)]"
                >
                  Agendar Horário
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
