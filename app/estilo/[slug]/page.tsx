import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsFloating from "../../components/WhatsFloating";
import { posts, getPost, formatarData, tempoLeitura, postsOrdenados, type Bloco } from "../data";
import { SITE, whatsapp } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo não encontrado", robots: { index: false, follow: false } };

  const url = `${SITE.url}/estilo/${post.slug}`;
  const ogImage = `${SITE.url}${post.imagem}`;

  return {
    title: post.titulo,
    description: post.resumo,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      locale: "pt_BR",
      siteName: SITE.name,
      title: post.titulo,
      description: post.resumo,
      publishedTime: post.data,
      authors: [SITE.name],
      section: post.categoria,
      images: [{ url: ogImage, alt: post.titulo }],
    },
    twitter: { card: "summary_large_image", title: post.titulo, description: post.resumo, images: [ogImage] },
  };
}

function renderBloco(b: Bloco, i: number) {
  switch (b.tipo) {
    case "h2":
      return <h2 key={i} className="mt-12 mb-4 text-2xl md:text-3xl font-serif font-bold text-[#f5f1eb]">{b.texto}</h2>;
    case "lista":
      return (
        <ul key={i} className="my-6 space-y-3">
          {b.itens.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8853a]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "citacao":
      return (
        <blockquote key={i} className="my-10 border-l-2 border-[#b8853a] pl-6 font-serif text-2xl italic leading-snug text-[#f5f1eb]/85">
          {b.texto}
        </blockquote>
      );
    default:
      return <p key={i} className="my-5">{b.texto}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/estilo/${post.slug}`;
  const relacionados = postsOrdenados.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.titulo,
        description: post.resumo,
        image: `${SITE.url}${post.imagem}`,
        datePublished: post.data,
        dateModified: post.data,
        inLanguage: "pt-BR",
        mainEntityOfPage: url,
        keywords: post.palavrasChave.join(", "),
        author: { "@type": "Person", name: SITE.barber, worksFor: { "@id": `${SITE.url}/#barbershop` } },
        publisher: { "@id": `${SITE.url}/#barbershop` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/estilo` },
          { "@type": "ListItem", position: 3, name: post.titulo, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Navegação estrutural" className="mb-10">
            <Link href="/estilo" className="inline-flex items-center gap-2 text-white/40 hover:text-[#d4aa7a] transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
              <ArrowLeft size={14} /> Voltar para o blog
            </Link>
          </nav>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#b8853a]/10 text-[#d4aa7a] px-3 py-1.5 rounded-md text-[9px] uppercase tracking-widest font-bold border border-[#b8853a]/20">
                {post.categoria}
              </span>
              <span className="text-white/35 text-[10px] uppercase tracking-widest font-bold">
                <time dateTime={post.data}>{formatarData(post.data)}</time> · {tempoLeitura(post)} min de leitura
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#f5f1eb] leading-tight mb-6">
              {post.titulo}
            </h1>
            <p className="text-xl text-white/55 font-light leading-relaxed">{post.resumo}</p>
          </header>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-14 border border-white/10 shadow-2xl">
            <Image src={post.imagem} alt={post.titulo} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
          </div>

          <div className="text-[17px] leading-[1.8] text-white/70">{post.conteudo.map(renderBloco)}</div>

          {/* CTA */}
          <aside className="mt-16 rounded-3xl border border-[#b8853a]/20 bg-gradient-to-br from-[#b8853a]/[0.08] to-transparent p-8 md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b8853a] mb-3">Falcão Barbearia · {SITE.city}</p>
            <h2 className="font-serif text-3xl font-bold text-[#f5f1eb] mb-3">Bora sair na régua?</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-7">
              Atendimento por ordem de chegada, de segunda a sábado, na {SITE.street}, {SITE.district}. Chama no Whats pra saber o movimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsapp(`Fala, ${SITE.barber}! Vi o post "${post.titulo}" no site. Como tá o movimento hoje?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#b8853a] text-[#070707] px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#d4aa7a] transition-colors"
              >
                <FaWhatsapp size={16} /> Chamar no WhatsApp
              </a>
              {post.servico && (
                <Link
                  href={post.servico.href}
                  className="inline-flex items-center justify-center border border-white/10 text-white/70 px-8 py-4 rounded-xl font-bold uppercase text-[11px] tracking-[0.2em] hover:border-[#b8853a]/40 hover:text-[#d4aa7a] transition-colors"
                >
                  {post.servico.nome}
                </Link>
              )}
            </div>
          </aside>
        </article>

        {/* Relacionados — links internos ajudam o Google a rastrear o blog */}
        <section aria-labelledby="relacionados" className="max-w-6xl mx-auto px-6 lg:px-8 mt-24">
          <h2 id="relacionados" className="text-2xl font-serif font-bold text-[#f5f1eb] mb-8 border-b border-white/5 pb-4">
            Continue lendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relacionados.map((r) => (
              <Link key={r.slug} href={`/estilo/${r.slug}`} className="group block rounded-2xl border border-white/5 bg-white/[0.01] p-4 hover:bg-white/[0.03] transition-colors">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image src={r.imagem} alt={r.titulo} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#b8853a]">{r.categoria}</span>
                <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[#f5f1eb] group-hover:text-[#d4aa7a] transition-colors">{r.titulo}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsFloating />
    </>
  );
}
