"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Clock, Smartphone, Calendar, Navigation, Star } from "lucide-react";

// Variáveis de animação
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

const Localizacao = () => {
  return (
    <section id="localizacao" className="relative w-full py-32 bg-[#050505] overflow-hidden antialiased">
      
      {/* ── Background Effects & Grain ── */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(184,133,58,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-stretch">
          
          {/* ═══════════════════════════════════════
              COLUNA ESQUERDA — CONTEÚDO EDITORIAL
              ═══════════════════════════════════════ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            
            {/* Header Editorial */}
            <motion.div variants={fadeUp} className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#b8853a]/60" />
                <span className="text-[#b8853a] font-mono text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Onde Estamos
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-[#f5f1eb] leading-[1.1] tracking-tight mb-6">
                Venha para a <br />
                <span className="italic text-[#b8853a] font-normal">Falcão.</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-md">
                Um espaço criado para quem valoriza presença, detalhe e experiência. Seu próximo visual começa aqui.
              </p>
            </motion.div>

            {/* Cards de Informação Premium */}
            <div className="space-y-4 mb-12">
              
              {/* Card 1 - Endereço */}
              <motion.div variants={fadeUp} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#b8853a]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden flex gap-5 items-start">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8853a]/0 via-[#b8853a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 mt-1 shrink-0">
                  <MapPin size={20} className="text-[#b8853a]" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-xs uppercase tracking-[0.15em] font-bold mb-2">Endereço</h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    R. Olavo Bilac, Centro<br />
                    Tapiramutá, BA — 44840-027
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Horário */}
              <motion.div variants={fadeUp} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#b8853a]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden flex gap-5 items-start">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8853a]/0 via-[#b8853a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 mt-1 shrink-0">
                  <Clock size={20} className="text-[#b8853a]" />
                </div>
                <div className="relative z-10 w-full">
                  <h4 className="text-white text-xs uppercase tracking-[0.15em] font-bold mb-2">Atendimento</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50 font-light">Seg a Sáb</span>
                    <span className="text-white/80 font-medium">09h às 19h</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Contato */}
              <motion.div variants={fadeUp} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#b8853a]/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden flex gap-5 items-start">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8853a]/0 via-[#b8853a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 mt-1 shrink-0">
                  <Smartphone size={20} className="text-[#b8853a]" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white text-xs uppercase tracking-[0.15em] font-bold mb-2">Contato</h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    WhatsApp + Instagram
                  </p>
                </div>
              </motion.div>

            </div>

            {/* CTA Secundário / Ação Rápida */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5 pt-4 border-t border-white/5">
              <h3 className="text-[#f5f1eb] text-xl md:text-2xl font-serif italic mb-2">
                Pronto para transformar seu visual?
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5574988732790"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden flex-1 flex items-center justify-center gap-3 bg-[#b8853a] text-[#050505] font-bold py-4 px-6 rounded-lg tracking-[0.15em] text-[11px] uppercase hover:scale-[1.02] transition-all duration-500 shadow-[0_0_20px_rgba(184,133,58,0.15)] hover:shadow-[0_0_30px_rgba(184,133,58,0.3)]"
                >
                  <Calendar size={16} />
                  <span className="relative z-10">Agendar Horário</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Barbearia+Falc%C3%A3o%2C+R.+Olavo+Bilac%2C+Centro%2C+Tapiramut%C3%A1+-+BA%2C+44840-027" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-white/10 bg-transparent text-white/70 py-4 px-6 rounded-lg text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white/[0.02] hover:border-[#b8853a]/50 hover:text-[#b8853a] transition-all duration-300"
                >
                  <Navigation size={14} />
                  Abrir no Maps
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* ═══════════════════════════════════════
              COLUNA DIREITA — MAPA CINEMATOGRÁFICO
              ═══════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group"
          >
            {/* Dark Mode Hack para o iFrame */}
            <div className="absolute inset-0 bg-black z-0" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.8130049692127!2d-40.79259352409216!3d-11.848359288373183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ba32c243da499%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1778200829077!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
              style={{ 
                border: 0,
                // Esse filtro CSS transforma o mapa padrão do Google em um mapa Dark/Gold premium!
                filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(105%) grayscale(20%) opacity(0.8)" 
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlays Cinematográficos */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(5,5,5,1)] z-20" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent z-20" />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-[2rem] z-30" />

            {/* Floating Card Premium no Mapa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:left-8 sm:bottom-8 sm:w-[320px] bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl z-40 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-serif italic text-lg tracking-wide mb-1">Falcão Barbearia</h4>
                  <p className="text-white/40 text-xs font-light tracking-widest uppercase">Tapiramutá • BA</p>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/5">
                  <Star size={10} className="text-[#b8853a] fill-[#b8853a]" />
                  <span className="text-white font-mono text-[10px] pt-px">5.0</span>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Barbearia+Falc%C3%A3o%2C+R.+Olavo+Bilac%2C+Centro%2C+Tapiramut%C3%A1+-+BA%2C+44840-027" 
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded flex items-center justify-center gap-2 bg-white/5 hover:bg-[#b8853a] border border-white/10 hover:border-[#b8853a] text-white/70 hover:text-[#050505] text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
              >
                <Navigation size={12} />
                Traçar Rota
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Localizacao;
