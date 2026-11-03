import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postsOrdenados, formatarData, tempoLeitura } from "../estilo/data";

/* Últimos posts na home: links internos da página mais forte do site
   para o blog (ajuda o Google a descobrir e valorizar os artigos). */
export default function DoBlog() {
  const ultimos = postsOrdenados.slice(0, 3);

  return (
    <section id="blog" aria-labelledby="blog-title" className="relative w-full bg-[#050505]/80 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-6 rounded-full bg-[#b8853a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8853a]">Blog da Falcão</span>
            </div>
            <h2 id="blog-title" className="font-serif text-4xl font-black tracking-tight text-[#f5f1eb] md:text-6xl">
              Dicas de <span className="italic text-[#d4aa7a]">cadeira.</span>
            </h2>
          </div>
          <Link
            href="/estilo"
            className="inline-flex min-h-[48px] items-center gap-2 self-start rounded-full border border-white/10 px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-[#b8853a]/50 hover:text-[#d4aa7a] md:self-auto"
          >
            Ver todos os artigos <ArrowRight size={14} />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ultimos.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/estilo/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a0a0a]/80 transition-colors hover:border-[#b8853a]/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-[#070707]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#d4aa7a] backdrop-blur-sm">
                    {post.categoria}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    <time dateTime={post.data}>{formatarData(post.data)}</time> · {tempoLeitura(post)} min
                  </span>
                  <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-[#f5f1eb] transition-colors group-hover:text-[#d4aa7a]">
                    {post.titulo}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/55">{post.resumo}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
