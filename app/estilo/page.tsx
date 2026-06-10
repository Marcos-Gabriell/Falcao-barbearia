"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../app/components/Header";
import Footer from "../../app/components/Footer";

/* ─── DADOS DO BLOG (Atualizados com Corte Infantil e mais posts) ─── */
export const posts = [
  {
    id: 1,
    titulo: "Desondulação: O Segredo para o Caimento Perfeito",
    resumo: "Cansado do volume excessivo e dos fios rebeldes? A desondulação relaxa a estrutura do cabelo, facilitando o penteado no dia a dia sem perder a naturalidade.",
    categoria: "Química & Tratamento",
    imagem: "/cortes/corte21.png", 
    data: "12 Jun, 2026",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Mid, Low ou High Fade: Qual degradê combina com você?",
    resumo: "Entenda a diferença entre as alturas do degradê e descubra qual técnica valoriza mais o formato do seu rosto.",
    categoria: "Tendências",
    imagem: "/cortes/corte4.jpg",
    data: "05 Jun, 2026",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Barba de Respeito: 3 passos diários essenciais",
    resumo: "Ter uma barba cheia e alinhada não é só genética. Veja a rotina de 3 minutos que muda o aspecto dos fios.",
    categoria: "Cuidados",
    imagem: "/cortes/Barba.png",
    data: "28 Mai, 2026",
    destaque: false,
  },
  {
    id: 4,
    titulo: "Corte na Tesoura: O Clássico que nunca morre",
    resumo: "Para quem tem cabelo mais longo ou ondulado, a tesoura entrega um caimento que a máquina não consegue.",
    categoria: "Clássicos",
    imagem: "/cortes/corte12.jpeg",
    data: "15 Mai, 2026",
    destaque: false,
  },
  {
    id: 6,
    titulo: "Mullet Moderno: A volta do estilo com atitude",
    resumo: "O Mullet voltou com tudo, misturado com o fade lateral. Veja como aderir a essa tendência sem errar.",
    categoria: "Tendências",
    imagem: "/cortes/corte8.png",
    data: "02 Mai, 2026",
    destaque: false,
  },
  {
    id: 7,
    titulo: "Estilo Desde Cedo: A experiência do Corte Infantil",
    resumo: "Cortar o cabelo dos pequenos exige paciência e técnica. Veja como transformamos o choro em um momento de diversão e muito estilo.",
    categoria: "Kids",
    imagem: "/cortes/corte1.jpg", // A foto da criança da sua galeria
    data: "25 Abr, 2026",
    destaque: false,
  },
  {
    id: 9,
    titulo: "Freestyle & Design: Arte na lateral do cabelo",
    resumo: "Linhas, traços e desenhos que mostram personalidade. Como escolher o freestyle ideal para o seu formato de corte.",
    categoria: "Arte Urbana",
    imagem: "/cortes/corte14.jpeg",
    data: "10 Abr, 2026",
    destaque: false,
  },
];

export default function EstiloBlogPage() {
  const postDestaque = posts[0];
  const postsSecundarios = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* ================= CABEÇALHO ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Revista Digital
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#f5f1eb] leading-tight tracking-tight">
              Cultura & <span className="text-[#d4aa7a] italic">Estilo.</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl font-medium mx-auto md:mx-0">
              Dicas, tendências e tudo o que você precisa saber para manter a sua presença em alta, dentro e fora da barbearia.
            </p>
          </motion.div>

          {/* ================= POST EM DESTAQUE ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20"
          >
            <Link href={`/estilo/${postDestaque.id}`} className="group block relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                  <Image 
                    src={postDestaque.imagem} 
                    alt={postDestaque.titulo} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070707] opacity-0 lg:opacity-100" />
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center relative z-10 bg-[#070707] lg:bg-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[#b8853a]/10 text-[#d4aa7a] px-3 py-1.5 rounded-md text-[9px] uppercase tracking-widest font-bold border border-[#b8853a]/20">
                      {postDestaque.categoria}
                    </span>
                    <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                      {postDestaque.data}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#f5f1eb] leading-tight mb-6 group-hover:text-[#d4aa7a] transition-colors">
                    {postDestaque.titulo}
                  </h2>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium mb-8">
                    {postDestaque.resumo}
                  </p>
                  <div className="flex items-center gap-3 text-[#b8853a] text-xs font-bold uppercase tracking-[0.2em] group-hover:text-[#d4aa7a] transition-colors">
                    Ler Artigo Completo <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ================= GRID DE POSTS ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-[#f5f1eb] mb-8 border-b border-white/5 pb-4">
              Publicações Recentes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsSecundarios.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <Link href={`/estilo/${post.id}`} className="group block flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-2xl p-4 hover:bg-white/[0.03] transition-colors">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <Image 
                      src={post.imagem} 
                      alt={post.titulo} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    />
                    <div className="absolute top-3 left-3 bg-[#070707]/80 backdrop-blur-sm text-[#d4aa7a] px-3 py-1.5 rounded-md text-[8px] uppercase tracking-widest font-bold border border-white/10">
                      {post.categoria}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-2">
                    <span className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-3">
                      {post.data}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-[#f5f1eb] leading-tight mb-3 group-hover:text-[#d4aa7a] transition-colors">
                      {post.titulo}
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed font-medium mb-6 flex-grow line-clamp-3">
                      {post.resumo}
                    </p>
                    <div className="mt-auto text-[#b8853a] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Ler mais <span className="text-lg leading-none">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}