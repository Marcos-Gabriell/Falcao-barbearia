import type { Metadata } from "next";
import BlogPostClient from "./PageClient";
import { posts } from "../data";

const siteUrl = "https://www.falcaobarbearia.com.br";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return {
      title: "Artigo não encontrado | Falcão Barbearia",
      robots: { index: false, follow: false },
    };
  }

  const url = `${siteUrl}/estilo/${post.id}`;
  const ogImage = post.imagem.startsWith("/")
    ? `${siteUrl}${post.imagem}`
    : post.imagem;

  return {
    title: `${post.titulo} | Falcão Barbearia`,
    description: post.resumo,
    keywords: [
      post.categoria,
      "barbearia Tapiramutá",
      "estilo masculino",
      "Falcão Barbearia",
      post.titulo.split(":")[0],
    ],
    alternates: {
      canonical: url,
      languages: { "pt-BR": url },
    },
    openGraph: {
      type: "article",
      url,
      locale: "pt_BR",
      siteName: "Falcão Barbearia",
      title: post.titulo,
      description: post.resumo,
      publishedTime: new Date(post.data).toISOString(),
      authors: ["Falcão Barbearia"],
      section: post.categoria,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: post.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description: post.resumo,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
