import type { NextConfig } from "next";

// Posts antigos com ID numérico → URL nova (slug)
const legacyPosts: Record<number, string> = {
  1: "desondulacao-masculina-o-que-e",
  2: "low-mid-high-fade-qual-degrade-escolher",
  3: "cuidados-com-a-barba-rotina-diaria",
  4: "corte-na-tesoura-masculino",
  6: "mullet-moderno-com-degrade",
  7: "corte-infantil-em-tapiramuta",
  9: "freestyle-desenho-no-cabelo",
};

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1600, 1920],
  },

  // URLs antigas do agendamento/portal e posts com ID numérico.
  // 301 preserva a força dessas páginas no Google e evita 404.
  async redirects() {
    return [
      { source: "/agendar", destination: "/#como-funciona", permanent: true },
      { source: "/agendar/:path*", destination: "/#como-funciona", permanent: true },
      { source: "/cancelar-agendamento", destination: "/", permanent: true },
      { source: "/cancelar-agendamento/:path*", destination: "/", permanent: true },
      { source: "/portal", destination: "/", permanent: true },
      { source: "/portal/:path*", destination: "/", permanent: true },
      ...Object.entries(legacyPosts).map(([id, slug]) => ({
        source: `/estilo/${id}`,
        destination: `/estilo/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
