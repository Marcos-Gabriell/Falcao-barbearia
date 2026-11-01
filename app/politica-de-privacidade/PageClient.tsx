"use client";

import { motion } from "framer-motion";
import Navbar from "../../app/components/Header"; // Ajuste se necessário
import Footer from "../../app/components/Footer"; // Ajuste se necessário

export default function PoliticaPrivacidadePage() {
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
              Política de <span className="text-[#d4aa7a] italic">Privacidade.</span>
            </h1>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-bold">
              Última atualização: outubro de 2026
            </p>
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-invert max-w-none text-white/70 prose-headings:text-[#f5f1eb] prose-headings:font-serif prose-headings:font-bold prose-strong:text-[#d4aa7a] prose-a:text-[#b8853a]"
          >
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">1. Introdução</h2>
              <p className="leading-relaxed">Esta Política explica como a Falcão Barbearia trata informações de quem visita o site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">2. Dados Coletados</h2>
              <p className="leading-relaxed">O site não possui cadastro, login, formulários nem agendamento online, e não pede seus dados pessoais. Quando você nos chama no WhatsApp, as informações que você enviar (nome, telefone e mensagem) ficam apenas na conversa e são usadas exclusivamente para responder ao seu contato.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">3. Dados Técnicos</h2>
              <p className="leading-relaxed">Como qualquer site, o servidor de hospedagem pode registrar dados técnicos de acesso (como endereço IP, navegador e páginas visitadas) para segurança e estatísticas agregadas. Mapas incorporados do Google podem usar cookies próprios, conforme a política do Google.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">4. Compartilhamento</h2>
              <p className="leading-relaxed">Não vendemos nem compartilhamos dados pessoais com terceiros para fins de marketing.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">5. Seus Direitos</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmar se tratamos algum dado seu;</li>
                <li>Pedir correção ou exclusão de informações enviadas pelo WhatsApp;</li>
                <li>Tirar dúvidas sobre esta política a qualquer momento.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">6. Alterações</h2>
              <p className="leading-relaxed">Esta política pode ser atualizada. A versão vigente é sempre a publicada nesta página.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">7. Contato</h2>
              <p className="leading-relaxed">Falcão Barbearia — R. Olavo Bilac, Centro, Tapiramutá – BA. WhatsApp (74) 98873-2790.</p>
            </section>

          </motion.article>

        </div>
      </main>
      <Footer />
    </>
  );
}