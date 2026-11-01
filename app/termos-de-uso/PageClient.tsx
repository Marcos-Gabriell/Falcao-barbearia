"use client";

import { motion } from "framer-motion";
import Navbar from "../../app/components/Header"; // Ajuste se necessário
import Footer from "../../app/components/Footer"; // Ajuste se necessário

export default function TermosDeUsoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Legal
              </span>
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-[#f5f1eb] leading-tight mb-4">
              Termos de <span className="text-[#d4aa7a] italic">Uso.</span>
            </h1>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-bold">
              Última atualização: outubro de 2026
            </p>
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-invert max-w-none text-white/70 prose-headings:text-[#f5f1eb] prose-headings:font-serif prose-headings:font-bold prose-strong:text-[#d4aa7a] prose-a:text-[#b8853a] hover:prose-a:text-[#d4aa7a]"
          >
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">Ao acessar o site da Falcão Barbearia (falcaobarbearia.com.br), localizada na R. Olavo Bilac, Centro, Tapiramutá – BA, você concorda com estes Termos de Uso.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">2. Sobre o Site</h2>
              <p className="leading-relaxed">Este site é informativo: apresenta serviços, preços de referência, fotos de trabalhos, localização e conteúdos do blog. A Falcão Barbearia não realiza agendamentos pelo site — o atendimento é por ordem de chegada.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">3. Preços e Serviços</h2>
              <p className="leading-relaxed">Os valores exibidos são de referência e podem variar conforme comprimento, volume e tipo de cabelo, especialmente em serviços químicos. O valor final é confirmado pessoalmente ou pelo WhatsApp antes do serviço.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">4. Links Externos</h2>
              <p className="leading-relaxed">O site contém links para WhatsApp, Instagram e Google Maps. Ao acessá-los, você passa a estar sujeito aos termos e políticas dessas plataformas.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">5. Propriedade Intelectual</h2>
              <p className="leading-relaxed">Fotos, vídeos, textos, logotipo e identidade visual pertencem à Falcão Barbearia e não podem ser reproduzidos sem autorização.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">6. Alterações</h2>
              <p className="leading-relaxed">Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">7. Contato</h2>
              <p className="leading-relaxed">Dúvidas? Fale com a gente pelo WhatsApp (74) 98873-2790 ou pelo Instagram @barbeariafalcao_.</p>
            </section>

          </motion.article>

        </div>
      </main>
      <Footer />
    </>
  );
}