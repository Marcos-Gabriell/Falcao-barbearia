"use client";

import { motion, type Variants } from "framer-motion";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { Navigation, Armchair } from "lucide-react";
import Tilt3D from "./Tilt3D";
import { SITE } from "../utils/site";
import { WHATSAPP_LINK, DIRECTIONS_LINK } from "../utils/links";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const passos = [
  {
    n: "01",
    icon: <FaWhatsapp size={22} />,
    title: "Chama no Whats",
    desc: "Quer saber se tá tranquilo? Manda um oi e a gente te fala como tá o movimento na hora.",
    cta: { label: "Chamar agora", href: WHATSAPP_LINK },
  },
  {
    n: "02",
    icon: <Navigation size={22} strokeWidth={1.75} />,
    title: "Chega na Falcão",
    desc: `${SITE.street}, ${SITE.district} de ${SITE.city}. Abre o Google Maps e vem direto, sem erro.`,
    cta: { label: "Abrir rota", href: DIRECTIONS_LINK },
  },
  {
    n: "03",
    icon: <Armchair size={22} strokeWidth={1.75} />,
    title: "Senta e sai na régua",
    desc: "Atendimento por ordem de chegada, sem agendamento e sem burocracia. Pagou no Pix ou cartão, tá pronto.",
    cta: { label: "Ver no Google", href: SITE.googleMaps },
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="relative w-full py-24 md:py-32 bg-[#070707] overflow-hidden select-none"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-10%] top-[10%] w-[520px] h-[520px] rounded-full bg-[#b8853a]/[0.06] blur-[120px]" />
        {/* chão em perspectiva */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#b8853a 1px, transparent 1px), linear-gradient(90deg, #b8853a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            transform: "perspective(600px) rotateX(62deg)",
            transformOrigin: "bottom",
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14 md:mb-20 grid gap-6 md:grid-cols-2 md:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[10px] tracking-[0.3em] uppercase">
                Sem agendamento
              </span>
            </div>
            <h2
              id="como-funciona-title"
              className="text-4xl md:text-6xl font-serif font-black text-[#f5f1eb] tracking-tight leading-[1.02]"
            >
              Chegou, <span className="italic text-[#d4aa7a]">cortou.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-base leading-relaxed max-w-md md:justify-self-end">
            Aqui em {SITE.city} é do jeito que tem que ser: atendimento por ordem de chegada, de segunda a sábado. Sem app, sem cadastro, sem complicação.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {passos.map((p) => (
            <motion.li key={p.n} variants={fadeUp} className="list-none">
              <Tilt3D className="group h-full rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 md:p-8 backdrop-blur-sm hover:border-[#b8853a]/30 transition-colors">
                <div style={{ transform: "translateZ(40px)" }} className="flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#b8853a]/25 bg-[#b8853a]/10 text-[#d4aa7a] shadow-[0_10px_30px_rgba(184,133,58,0.15)]">
                      {p.icon}
                    </span>
                    <span className="font-serif text-6xl font-black italic leading-none text-white/[0.06] group-hover:text-[#b8853a]/20 transition-colors">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#f5f1eb] tracking-tight">{p.title}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-white/50">{p.desc}</p>
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b8853a] hover:text-[#d4aa7a] transition-colors"
                  >
                    {p.cta.label} <span aria-hidden>→</span>
                  </a>
                </div>
              </Tilt3D>
            </motion.li>
          ))}
        </motion.ol>

        {/* Faixa de avaliação no Google — avaliações são o que mais pesa no Maps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#070707]">
              <FaGoogle size={18} />
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-[#f5f1eb]">Já cortou com a gente?</strong> Deixa sua avaliação no Google — ajuda demais quem procura barbearia em {SITE.city}.
            </p>
          </div>
          <a
            href={SITE.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#b8853a]/40 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#d4aa7a] hover:bg-[#b8853a] hover:text-[#070707] transition-colors"
          >
            Avaliar no Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
