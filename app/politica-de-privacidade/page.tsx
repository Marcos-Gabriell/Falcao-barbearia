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
              Última atualização: junho de 2026
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
              <p className="leading-relaxed">
                A Falcão Barbearia, localizada em Tapiramutá – BA, está comprometida com a proteção dos dados pessoais de seus clientes, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
                <br /><br />
                Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações ao utilizar nosso sistema de agendamento online.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">2. Dados Coletados</h2>
              <p className="mb-4">Ao realizar um agendamento, coletamos os seguintes dados pessoais:</p>
              
              {/* Tabela de Dados Estilizada */}
              <div className="overflow-x-auto my-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-5 text-[#d4aa7a] font-bold uppercase tracking-wider text-sm">Dado</th>
                      <th className="p-5 text-[#d4aa7a] font-bold uppercase tracking-wider text-sm">Finalidade</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 text-sm">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-5 font-bold text-[#f5f1eb]">Nome completo</td>
                      <td className="p-5">Identificação no agendamento</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-5 font-bold text-[#f5f1eb]">E-mail</td>
                      <td className="p-5">Envio de confirmações, lembretes e notificações</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-5 font-bold text-[#f5f1eb]">Telefone</td>
                      <td className="p-5">Contato em caso de necessidade</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-5 font-bold text-[#f5f1eb]">Histórico de agendamentos</td>
                      <td className="p-5">Melhoria do atendimento e fidelização</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">3. Base Legal para Tratamento</h2>
              <p className="mb-4">Os dados são tratados com base nas seguintes hipóteses previstas na LGPD:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Execução de contrato</strong> — para viabilizar a prestação do serviço agendado (art. 7º, V);</li>
                <li><strong>Legítimo interesse</strong> — para envio de lembretes e melhoria contínua do atendimento (art. 7º, IX).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">4. Como Utilizamos seus Dados</h2>
              <p className="mb-4">Seus dados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-6">
                <li>Realizar e gerenciar seus agendamentos;</li>
                <li>Enviar confirmações, lembretes e notificações de cancelamento por e-mail;</li>
                <li>Manter o histórico de atendimentos para melhor personalização do serviço;</li>
                <li>Cumprir obrigações legais quando necessário.</li>
              </ul>
              <p className="font-bold text-[#d4aa7a]">
                Não vendemos, compartilhamos nem cedemos seus dados a terceiros para fins comerciais.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">5. Compartilhamento de Dados</h2>
              <p className="mb-4">Seus dados poderão ser acessados apenas por:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Profissionais da Falcão Barbearia envolvidos no seu atendimento;</li>
                <li>Prestadores de serviço de tecnologia que operam a plataforma de agendamento, mediante obrigação de confidencialidade.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">6. Armazenamento e Segurança</h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>6.1.</strong> Seus dados são armazenados em servidores seguros com acesso restrito e protegido por autenticação.</li>
                <li><strong>6.2.</strong> Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou alteração.</li>
                <li><strong>6.3.</strong> Os dados são mantidos pelo prazo necessário à prestação do serviço e ao cumprimento de obrigações legais.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">7. Seus Direitos como Titular</h2>
              <p className="mb-4">Nos termos da LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-6">
                <li>Confirmar a existência de tratamento dos seus dados;</li>
                <li>Acessar seus dados pessoais que mantemos;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a exclusão dos seus dados, quando não houver base legal para mantê-los;</li>
                <li>Revogar o consentimento a qualquer momento, quando aplicável.</li>
              </ul>
              <p>Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail ou telefone disponível no site.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">8. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed">
                O sistema de agendamento pode utilizar cookies técnicos essenciais para o funcionamento da plataforma. Não utilizamos cookies para rastreamento publicitário.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">9. Alterações nesta Política</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no início do documento. Recomendamos que você a revise periodicamente.
              </p>
            </section>

            <section className="mb-10 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
              <h2 className="text-2xl mb-4 border-b border-white/10 pb-2">10. Contato — Encarregado de Dados (DPO)</h2>
              <p className="leading-relaxed">
                Para dúvidas, solicitações ou exercício dos seus direitos relacionados à privacidade:<br /><br />
                <strong>Falcão Barbearia</strong><br />
                Tapiramutá – Bahia<br />
                <em>(e-mail e telefone disponíveis na página de Contato)</em>
              </p>
              <p className="mt-6 text-xs text-white/40 italic">
                Este documento foi elaborado em conformidade com a Lei nº 13.709/2018 (LGPD).
              </p>
            </section>
          </motion.article>

        </div>
      </main>
      <Footer />
    </>
  );
}