"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Clock, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const linksPrincipais = [
    { nome: "Início", url: "/" },
    { nome: "Nossa História", url: "/sobre" },
    { nome: "A Equipe", url: "/equipe" },
    { nome: "Revista & Estilo", url: "/estilo" },
    { nome: "Contato & Local", url: "/contato" },
  ];

  const linksServicos = [
    { nome: "Tabela Completa", url: "/servicos" },
    { nome: "Corte Degradê", url: "/servicos/corte-degrade" },
    { nome: "Barba Premium", url: "/servicos/barba" },
    { nome: "Desondulação", url: "/servicos/desondulacao" },
    { nome: "Corte na Tesoura", url: "/servicos/corte-tesoura" },
    { nome: "Corte Infantil", url: "/servicos/corte-infantil" },
  ];
const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="relative w-full bg-[#050505] pt-28 pb-10 overflow-hidden antialiased">

      {/* Linha dourada topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8853a]/30 to-transparent" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full flex justify-center z-0">
        <span className="text-[28vw] font-serif font-black leading-none tracking-tighter text-white opacity-[0.013]">
          FALCÃO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* CTA — só na home */}
        {isHome && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-28"
          >
            <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/[0.07] bg-white/[0.02] p-10 md:p-14 text-center overflow-hidden group hover:border-[#b8853a]/20 transition-colors duration-700">

              {/* Glow sutil no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(ellipse_at_center,rgba(184,133,58,0.06)_0%,transparent_70%)]" />

              <div className="relative z-10">
                <p className="text-[#b8853a] text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
                  Reserva Online
                </p>
                <h2 className="text-3xl md:text-[2.75rem] font-serif text-[#f5f1eb] leading-tight tracking-tight mb-4">
                  Seu visual{" "}
                  <span className="italic text-[#b8853a] font-normal">merece presença.</span>
                </h2>
                <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed mb-10">
                  Agende seu horário online. Técnica, estilo e experiência em cada detalhe.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/agendar"
                    className="flex items-center gap-2.5 px-8 py-3.5 bg-[#b8853a] text-black text-[11px] font-black tracking-widest uppercase rounded-xl hover:bg-[#d4aa7a] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
                  >
                    <Calendar size={15} />
                    Agendar Horário
                  </Link>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-8 py-3.5 border border-white/10 text-white/50 text-[11px] font-black tracking-widest uppercase rounded-xl hover:border-[#b8853a]/40 hover:text-white/70 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
                  >
                    <FaInstagram size={15} />
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Marca */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <Image
              src="/logo1.png"
              alt="Falcão Barbearia"
              width={160}
              height={55}
              className="h-20 w-auto object-contain mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6 pr-4">
              Estilo e precisão em cada corte. Barbearia premium em Tapiramutá, BA, desde 2021.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#b8853a] hover:border-[#b8853a] hover:text-black transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#b8853a] hover:border-[#b8853a] hover:text-black transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </motion.div>

          {/* Navegação */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {linksPrincipais.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="group text-sm text-white/40 hover:text-[#d4aa7a] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-[#b8853a] group-hover:w-4 transition-all duration-400 inline-block" />
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {linksServicos.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="group text-sm text-white/40 hover:text-[#d4aa7a] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-[#b8853a] group-hover:w-4 transition-all duration-400 inline-block" />
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              Encontre-nos
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#b8853a] mt-0.5 shrink-0" />
                <p className="text-sm text-white/40 leading-relaxed">
                  R. Olavo Bilac, Centro<br />
                  Tapiramutá — BA
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#b8853a] mt-0.5 shrink-0" />
                <p className="text-sm text-white/40 leading-relaxed">
                  Seg a Sex: 09h–19h<br />
                  Sábado: 08h–20h
                </p>
              </div>
              <Link
                href="/agendar"
                className="mt-1 flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-[#b8853a] hover:text-[#d4aa7a] transition-colors"
              >
                <Calendar size={13} />
                Agendar online
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/[0.07] pt-7 flex flex-col items-center gap-3 md:flex-row md:justify-between"
        >
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase md:hidden">
              © {year} Falcão Barbearia ·
            </p>
            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase md:hidden">
              Todos os direitos reservados
            </p>
            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase hidden md:block">
              © {year} Falcão Barbearia · Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-5 order-1 md:order-2">
            <Link href="/termos-de-uso" className="text-[10px] text-white/25 hover:text-white/50 tracking-[0.15em] uppercase transition-colors">
              Termos de Uso
            </Link>
            <span className="text-white/10 text-xs">|</span>
            <Link href="/politica-de-privacidade" className="text-[10px] text-white/25 hover:text-white/50 tracking-[0.15em] uppercase transition-colors">
              Privacidade
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;