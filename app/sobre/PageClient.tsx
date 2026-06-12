"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../app/components/Header"; // Ajuste o caminho se precisar
import Footer from "../../app/components/Footer"; // Ajuste o caminho se precisar
import { WHATSAPP_LINK } from "../utils/links";

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* ================= HERO SOBRE ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            
            {/* Texto da História */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
                <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                  Desde 2021
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#f5f1eb] leading-tight mb-8">
                A Essência <br /> da <span className="text-[#d4aa7a] italic">Falcão.</span>
              </h1>
              
              <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed font-medium mb-10">
                <p>
                  Tudo começou em 2021, em Tapiramutá, Bahia. A Falcão Barbearia não nasceu apenas para ser um ponto de corte de cabelo, mas para redefinir o padrão de estética masculina na região.
                </p>
                <p>
                  Nós acreditamos que a sua imagem é o seu maior cartão de visitas. Por isso, construímos um espaço onde técnica de alto nível e um ambiente de respeito se encontram. Cada detalhe, da cadeira à lâmina, foi pensado para entregar uma experiência premium.
                </p>
                <p>
                  Hoje, com mais de 4 anos de mercado e centenas de clientes fiéis, mantemos a mesma missão do primeiro dia: <strong className="text-[#d4aa7a]">elevar a sua autoestima através de um visual inegociável.</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                   href="/agendar"
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)] text-center"
                >
                  Agendar Horário
                </a>
                <Link 
                  href="/equipe" 
                  className="border border-white/10 bg-white/[0.02] text-white/70 hover:text-[#d4aa7a] hover:border-[#d4aa7a]/40 px-8 py-4 rounded-xl font-bold uppercase text-[11px] tracking-[0.2em] transition-all text-center"
                >
                  Conheça o Thaylle
                </Link>
              </div>
            </motion.div>

            {/* Colagem de Imagens (E-E-A-T Visual) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] order-1 lg:order-2"
            >
              {/* Foto Principal */}
              <div className="absolute right-0 top-0 w-3/4 h-3/4 rounded-3xl overflow-hidden border border-white/10 z-10">
                <Image src="/thaylle.jpg" alt="Falcão Barbearia" fill className="object-cover grayscale-[0.2]" />
              </div>
              {/* Foto Secundária sobreposta */}
              <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-3xl overflow-hidden border-4 border-[#070707] shadow-2xl z-20">
                <Image src="/thaylle4.png" alt="Detalhe de Corte Falcão" fill className="object-cover" />
              </div>
              {/* Elemento Decorativo */}
              <div className="absolute -z-10 right-10 top-1/2 w-64 h-64 bg-[#b8853a]/20 rounded-full blur-[80px]" />
            </motion.div>

          </div>

          {/* ================= NOSSOS VALORES ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-20">
            {[
              { title: "Precisão", desc: "Técnica apurada. Do degradê na navalha à finalização na tesoura, o erro não tem espaço aqui." },
              { title: "Atendimento", desc: "Esqueça a pressa. Seu horário é seu. Focamos em entender o que você quer e entregar o que você precisa." },
              { title: "Ambiente", desc: "Um refúgio urbano. Resenha boa, música ambiente e um espaço criado para você recarregar as energias." }
            ].map((valor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#b8853a]/30 transition-colors"
              >
                <div className="text-[#b8853a] font-serif italic text-4xl mb-4">0{idx + 1}.</div>
                <h3 className="text-xl font-bold text-[#f5f1eb] mb-3 uppercase tracking-wider">{valor.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{valor.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}