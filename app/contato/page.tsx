"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Onde Estamos
              </span>
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-black text-[#f5f1eb] leading-tight tracking-tight">
              Localização & <span className="text-[#d4aa7a] italic">Contato.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* COLUNA ESQUERDA: Informações */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card Endereço */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:border-[#b8853a]/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#b8853a]/10 text-[#d4aa7a] flex items-center justify-center flex-shrink-0 text-xl border border-[#b8853a]/20">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-[#f5f1eb] font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    R. Olavo Bilac, Centro<br />
                    Tapiramutá, BA — 44840-027
                  </p>
                  <a href="https://maps.app.goo.gl/G4MWzTr9TzYXRYAV7" target="_blank" rel="noreferrer" className="inline-block mt-4 text-[#b8853a] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#d4aa7a] transition-colors">
                    Como chegar →
                  </a>
                </div>
              </div>

              {/* Card Horário */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:border-[#b8853a]/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#b8853a]/10 text-[#d4aa7a] flex items-center justify-center flex-shrink-0 text-xl border border-[#b8853a]/20">
                  <FaClock />
                </div>
                <div className="w-full">
                  <h3 className="text-[#f5f1eb] font-bold text-lg mb-2">Atendimento</h3>
                  <div className="flex justify-between text-white/50 text-sm mb-2">
                    <span>Segunda a Sábado</span>
                    <span className="font-medium text-white/80">09h às 19h</span>
                  </div>
                  <div className="flex justify-between text-white/50 text-sm">
                    <span>Domingo</span>
                    <span className="text-[#b8853a] font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Botão Agendar + Redes */}
              <Link 
                href="/agendar"
                className="bg-gradient-to-r from-[#b8853a] to-[#8f6425] p-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]"
              >
                <FaCalendarAlt className="text-[#070707]" />
                <span className="text-[#070707] font-black text-sm uppercase tracking-widest">Agendar Experiência</span>
              </Link>

              <div className="grid grid-cols-2 gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex flex-col items-center gap-2 hover:border-[#b8853a]/50 transition-all">
                  <FaWhatsapp className="text-xl text-[#d4aa7a]" />
                  <span className="text-white/80 font-bold text-[11px]">WhatsApp</span>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl flex flex-col items-center gap-2 hover:border-[#b8853a]/50 transition-all">
                  <FaInstagram className="text-xl text-white/50" />
                  <span className="text-white/80 font-bold text-[11px]">Instagram</span>
                </a>
              </div>
            </div>

            {/* COLUNA DIREITA: Mapa Premium */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 relative h-[500px] lg:h-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <iframe
                // Link embed do Google Maps (Place) para abrir direto com o balão da barbearia
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.4065023948574!2d-40.7910955!3d-11.848117799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ba32c243da499%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1717978253100!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "invert(90%) hue-rotate(180deg) contrast(105%) brightness(90%)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}