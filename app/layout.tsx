import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seusite.com"), // coloque seu domínio final depois
  title: {
    default: "Falcão Barbearia | Corte, Estilo e Precisão em Tapiramutá",
    template: "%s | Falcão Barbearia",
  },
  description:
    "A Falcão Barbearia oferece cortes modernos, degradê, barba completa e atendimento profissional em Tapiramutá – BA. Estilo, precisão e experiência premium.",
  keywords: [
    "Barbearia Tapiramutá",
    "Falcão Barbearia",
    "Corte de cabelo Tapiramutá",
    "Barbeiro em Tapiramutá",
    "Corte masculino",
    "Degradê",
    "Barba alinhada",
    "Barbearia Bahia",
  ],
  authors: [{ name: "Falcão Barbearia" }],
  creator: "Falcão Barbearia",
  publisher: "Falcão Barbearia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // ✔ OpenGraph (Compartilhamento)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.seusite.com",
    siteName: "Falcão Barbearia",
    title: "Falcão Barbearia | Corte, Estilo e Precisão",
    description:
      "Cortes modernos, barba alinhada e experiência premium em Tapiramutá – BA.",
    images: [
      {
        url: "https://www.seusite.com/og-image.jpg", // coloque uma imagem real depois
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia - Tapiramutá",
      },
    ],
  },

  // ✔ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Falcão Barbearia | Estilo e Precisão",
    description:
      "Cortes masculinos, barba profissional e atendimento premium em Tapiramutá – BA.",
    images: ["https://www.seusite.com/og-image.jpg"],
  },

  // ✔ Ícones / Favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✔ Dados estruturados (Rich Snippets para barbearia no Google)
  other: {
    "script:type": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Barbershop",
      name: "Falcão Barbearia",
      image: "https://www.seusite.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Olavo Bilac",
        addressLocality: "Tapiramutá",
        addressRegion: "BA",
        postalCode: "44840-027",
        addressCountry: "BR",
      },
      url: "https://www.seusite.com",
      telephone: "+55 74 9 8873-2790",
      openingHours: ["Mo-Fr 09:00-19:00", "Sa 08:00-20:00"],
      priceRange: "$",
    }),
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
