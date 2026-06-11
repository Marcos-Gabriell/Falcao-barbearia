import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.falcaobarbearia.com.br';

  return [
    // ── PÁGINA INICIAL ──
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // ── PÁGINAS PRINCIPAIS INSTITUCIONAIS E MENU ──
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Weekly porque você pode adicionar fotos novas
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estilo`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Weekly se você postar conteúdos/revista com frequência
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── PÁGINAS DE SERVIÇOS ESPECÍFICOS (Funil de Vendas) ──
    {
      url: `${baseUrl}/servicos/corte-degrade`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/barba`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/desondulacao`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicos/corte-tesoura`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicos/corte-infantil`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ]
}