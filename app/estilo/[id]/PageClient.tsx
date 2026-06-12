"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// Importações corrigidas: ../../ volta para a pasta 'app' e entra em 'components'
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

import { posts } from "../data";

export default function BlogPost() {
  const params = useParams();
  const id = Number(params?.id);
  
  // Busca o post correto
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070707] flex items-center justify-center text-white">
        <h1 className="text-2xl font-serif">Artigo não encontrado.</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          
          {/* Botão Voltar */}
          <Link href="/estilo" className="inline-flex items-center gap-2 text-white/40 hover:text-[#d4aa7a] transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            <ArrowLeft size={14} /> Voltar para a Revista
          </Link>

          {/* Cabeçalho do Artigo */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#b8853a]/10 text-[#d4aa7a] px-3 py-1.5 rounded-md text-[9px] uppercase tracking-widest font-bold border border-[#b8853a]/20">
                {post.categoria}
              </span>
              <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                {post.data}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#f5f1eb] leading-tight mb-6">
              {post.titulo}
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              {post.resumo}
            </p>
          </header>

          {/* Imagem de Capa */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl">
            <Image 
              src={post.imagem} 
              alt={post.titulo} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Conteúdo Falso (O corpo do texto) */}
          <div className="prose prose-invert prose-lg max-w-none text-white/70 prose-headings:text-[#f5f1eb] prose-headings:font-serif prose-a:text-[#d4aa7a]">
            <p>
              Manter o visual alinhado não termina quando você sai da cadeira da barbearia. É no dia a dia que a verdadeira manutenção acontece. Se você escolheu esse estilo, precisa entender que a rotina de cuidados será o seu maior aliado.
            </p>
            <h2>A Importância da Manutenção</h2>
            <p>
              O principal erro que os homens cometem é achar que o produto usado não faz diferença. Usar shampoos comuns pode ressecar os fios ou retirar a proteção natural do couro cabeludo. Sempre invista em produtos específicos para a sua necessidade.
            </p>
            <blockquote className="border-l-4 border-[#b8853a] pl-4 italic text-white/80 my-8">
              "Seu cabelo e sua barba são a moldura do seu rosto. Cuide deles com o mesmo respeito que você tem pela sua imagem."
            </blockquote>
            <h2>3 Passos Essenciais</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-[#f5f1eb]">Limpeza correta:</strong> Usar água morna ou fria. A água muito quente agride o fio e estimula a oleosidade.</li>
              <li><strong className="text-[#f5f1eb]">Hidratação:</strong> Mesmo cabelos curtos precisam de hidratação. Um bom balm ou óleo (no caso da barba) salva o aspecto ressecado.</li>
              <li><strong className="text-[#f5f1eb]">Finalização:</strong> Pomada matte para um visual natural, ou gel para um visual clássico. Nunca durma com o produto no cabelo.</li>
            </ul>
            <p className="mt-8">
              A Falcão Barbearia está sempre pronta para te receber e renovar o seu estilo, mas a coroa quem mantém em casa é você. Agende seu próximo horário e venha bater um papo sobre qual é a melhor rotina para o seu tipo de fio.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex justify-center">
             <Link href="/agendar" className="bg-[#b8853a] text-[#070707] px-10 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]">
               Agendar Meu Horário
             </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}