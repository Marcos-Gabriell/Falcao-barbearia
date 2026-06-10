"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Clock, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

// Animações extraídas para fora do componente
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Links do Mapa do Site
  const linksPrincipais = [
    { nome: "Início", url: "/" },
    { nome: "Nossa História", url: "/sobre" },
    { nome: "A Equipe", url: "/equipe" },
    { nome: "Revista & Estilo", url: "/estilo" },
    { nome: "Contato & Local", url: "/contato" },
  ];

  // Links de Serviços (SEO Internal Linking)
  const linksServicos = [
    { nome: "Tabela Completa", url: "/servicos" },
    { nome: "Corte Degradê", url: "/servicos/corte-degrade" },
    { nome: "Desondulação", url: "/servicos/desondulacao" },
    { nome: "Corte na Tesoura", url: "/servicos/corte-tesoura" },
    { nome: "Corte Infantil", url: "/servicos/corte-infantil" },
  ];

  return (
    <footer className="relative w-full bg-[#050505] pt-32 pb-10 overflow-hidden antialiased z-10">
      
      {/* ── Background Effects & Grain ── */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(184,133,58,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ── Linha Dourada de Topo ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8853a]/40 to-transparent opacity-70" />

      {/* ── WATERMARK "FALCÃO" INTEGRADO ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full flex justify-center z-0 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_60%,transparent)]">
        <h3 className="text-[28vw] font-serif font-black leading-none tracking-tighter text-white opacity-[0.015] mix-blend-screen">
          FALCÃO
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION 1 — CTA PREMIUM (só na home) */}
        {isHome && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={fadeUp}
            className="relative w-full max-w-5xl mx-auto mb-32 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl transition-colors duration-700 group-hover:border-[#b8853a]/20 group-hover:bg-white/[0.03]" />
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#b8853a]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-1000" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif text-[#f5f1eb] mb-4 tracking-tight">
                Seu visual <span className="italic text-[#b8853a] font-normal">merece presença.</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide mb-10 leading-relaxed">
                Agende seu horário e viva uma experiência de barbearia feita nos detalhes. Onde técnica e estilo se encontram.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href="/agendar"
                  rel="noreferrer"
                  className="relative overflow-hidden group/btn px-8 py-4 bg-[#b8853a] text-[#050505] font-semibold tracking-widest uppercase text-xs rounded-sm hover:scale-[1.02] transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(184,133,58,0.2)] hover:shadow-[0_0_30px_rgba(184,133,58,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar size={16} /> Agendar Agora
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-transparent border border-white/10 text-white/70 font-semibold tracking-widest uppercase text-xs rounded-sm hover:border-[#b8853a]/50 hover:text-[#b8853a] hover:bg-white/[0.02] transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <FaInstagram size={16} /> Ver Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECTION 2 — FOOTER PRINCIPAL (GRID) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24"
        >
          {/* COLUNA 1 — Marca */}
          <motion.div variants={fadeUp} className="flex flex-col items-start">
            <Image
              src="/logo1.png"
              alt="Falcão Barbearia"
              width={180}
              height={60}
              className="h-16 w-auto object-contain brightness-[1.2] mb-8"
            />
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6 pe-4">
              Precisão, estilo e experiência em cada detalhe. Elevando a experiência da barbearia com um padrão de excelência inegociável.
            </p>
          </motion.div>

          {/* COLUNA 2 — Mapa do Site */}
          <motion.div variants={fadeUp} className="flex flex-col items-start lg:items-center">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-2">Mapa do Site</h4>
              {linksPrincipais.map((item, i) => (
                <Link 
                  key={i} 
                  href={item.url}
                  className="group relative text-sm font-light text-white/50 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span className="relative z-10">{item.nome}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b8853a] transition-all duration-500 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COLUNA 3 — Nossos Serviços */}
          <motion.div variants={fadeUp} className="flex flex-col items-start lg:items-center">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-2">Serviços</h4>
              {linksServicos.map((item, i) => (
                <Link 
                  key={i} 
                  href={item.url}
                  className="group relative text-sm font-light text-white/50 hover:text-[#d4aa7a] transition-colors duration-300 w-fit"
                >
                  <span className="relative z-10">{item.nome}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b8853a] transition-all duration-500 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COLUNA 4 — Contato & Social */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-2">Conecte-se</h4>
            
            <div className="flex gap-4 items-start group">
              <MapPin size={18} className="text-[#b8853a] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-sm text-white/50 font-light leading-relaxed">
                R. Olavo Bilac, Centro<br />Tapiramutá, BA
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <Clock size={18} className="text-[#b8853a] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Seg a Sáb<br />09:00 às 19:00
              </p>
            </div>

            <div className="flex gap-4 mt-2">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 hover:bg-[#b8853a] hover:border-[#b8853a] hover:text-[#050505] hover:scale-110 hover:shadow-[0_0_20px_rgba(184,133,58,0.3)] transition-all duration-500"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 hover:bg-[#b8853a] hover:border-[#b8853a] hover:text-[#050505] hover:scale-110 hover:shadow-[0_0_20px_rgba(184,133,58,0.3)] transition-all duration-500"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM BAR (Páginas Legais) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0"
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
            © {year} Falcão Barbearia
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 text-[10px] uppercase tracking-[0.2em] font-medium">
            <Link href="/termos-de-uso" className="text-white/30 hover:text-[#d4aa7a] transition-colors">
              Termos de Uso
            </Link>
            <span className="hidden lg:inline text-white/10">|</span>
            <Link href="/politica-de-privacidade" className="text-white/30 hover:text-[#d4aa7a] transition-colors">
              Política de Privacidade
            </Link>
          </div>

          <div className="text-[#b8853a] text-xs font-serif italic tracking-widest">
            Mais que corte. Presença.
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;