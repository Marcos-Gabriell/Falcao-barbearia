import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Falcão Barbearia",
    short_name: "Falcão",
    description:
      "Barbearia em Tapiramutá - BA. Corte masculino moderno, degradê e barba alinhada.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "pt-BR",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/logo1.png", sizes: "1200x1200", type: "image/png" },
    ],
  };
}
