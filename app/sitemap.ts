import { MetadataRoute } from "next";
import { posts } from "./estilo/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.falcaobarbearia.com.br";

  const staticRoutes: MetadataRoute.Sitemap = [
    // ── HOME ──
    {
      url: baseUrl,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── INSTITUCIONAIS ──
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── AGENDAMENTO ──
    {
      url: `${baseUrl}/agendar`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── SERVIÇOS ──
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos/corte-degrade`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/barba`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/desondulacao`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicos/corte-tesoura`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicos/corte-infantil`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicos/corte-social`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── BLOG INDEX ──
    {
      url: `${baseUrl}/estilo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ── LEGAL (baixa prioridade) ──
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

// ── BLOG POSTS (dinâmicos) ──
  const mesesPt: Record<string, string> = {
    Jan: "01", Fev: "02", Mar: "03", Abr: "04", Mai: "05", Jun: "06",
    Jul: "07", Ago: "08", Set: "09", Out: "10", Nov: "11", Dez: "12",
  };

  function parseDataPost(data: string): Date {
    // formato esperado: "12 Jun, 2026"
    const match = data.match(/(\d{1,2})\s+(\w{3}),?\s+(\d{4})/);
    if (!match) return new Date();
    const [, dia, mesAbrev, ano] = match;
    const mes = mesesPt[mesAbrev] ?? "01";
    return new Date(`${ano}-${mes}-${dia.padStart(2, "0")}`);
  }

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/estilo/${post.id}`,
    lastModified: parseDataPost(post.data),
    changeFrequency: "monthly" as const,
    priority: post.destaque ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
