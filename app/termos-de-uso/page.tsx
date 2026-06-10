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
              Última atualização: junho de 2026
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
              <p className="leading-relaxed">
                Ao acessar e utilizar o sistema de agendamento online da Falcão Barbearia, localizada em Tapiramutá – BA, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições, não utilize o serviço.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">2. Sobre o Serviço</h2>
              <p className="leading-relaxed">
                O sistema de agendamento online da Falcão Barbearia permite que clientes realizem agendamentos de serviços de barbearia de forma digital, escolhendo serviço, profissional, data e horário de sua preferência.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">3. Cadastro e Responsabilidade do Usuário</h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>3.1.</strong> Para realizar um agendamento, o cliente deverá informar nome completo, e-mail e telefone válidos.</li>
                <li><strong>3.2.</strong> O cliente é responsável pela veracidade das informações fornecidas.</li>
                <li><strong>3.3.</strong> O e-mail informado será utilizado para envio de confirmações, lembretes e informações relacionadas ao agendamento.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">4. Agendamentos</h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>4.1.</strong> Os agendamentos estão sujeitos à disponibilidade de horários e profissionais.</li>
                <li><strong>4.2.</strong> Após a confirmação, o cliente receberá um e-mail com os detalhes do agendamento e um link para cancelamento.</li>
                <li><strong>4.3.</strong> O cancelamento pelo cliente deve ser realizado com antecedência mínima de 10 minutos antes do horário marcado, por meio do link enviado por e-mail.</li>
                <li><strong>4.4.</strong> O não comparecimento sem cancelamento prévio poderá ser registrado como <em>no-show</em> no histórico do cliente.</li>
                <li><strong>4.5.</strong> A Falcão Barbearia reserva-se o direito de cancelar agendamentos em situações excepcionais, notificando o cliente por e-mail com a maior antecedência possível.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">5. Conduta do Usuário</h2>
              <p className="mb-4">O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Fornecer informações verdadeiras no momento do agendamento;</li>
                <li>Comparecer no horário agendado ou cancelar com antecedência;</li>
                <li>Tratar os profissionais e demais clientes com respeito.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">6. Limitação de Responsabilidade</h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>6.1.</strong> A Falcão Barbearia não se responsabiliza por falhas técnicas temporárias no sistema de agendamento.</li>
                <li><strong>6.2.</strong> Em caso de indisponibilidade do sistema, o cliente poderá entrar em contato diretamente com a barbearia para realizar seu agendamento.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">7. Modificações</h2>
              <p className="leading-relaxed">
                A Falcão Barbearia poderá alterar estes Termos de Uso a qualquer momento, sendo as alterações publicadas nesta página com a data de atualização.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">8. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas relacionadas a estes termos, entre em contato conosco pelo e-mail ou telefone disponível no site.<br /><br />
                <strong>Falcão Barbearia</strong><br />
                Tapiramutá – Bahia
              </p>
            </section>
          </motion.article>

        </div>
      </main>
      <Footer />
    </>
  );
}