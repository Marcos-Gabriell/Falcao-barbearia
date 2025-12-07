import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seusite.com"), // coloque seu domínio final depois
  title: {
    default: "Falcão Barbearia Tapiramutá | Corte Masculino, Barba e Degradê - BA",
    template: "%s | Falcão Barbearia",
  },
  description:
    "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, degradê, barba alinhada e acabamento profissional. Atendimento com hora marcada. Agende pelo WhatsApp!",
  keywords: [
    "Barbearia Tapiramutá",
    "Falcão Barbearia",
    "Corte de cabelo masculino Tapiramutá",
    "Barbeiro em Tapiramutá BA",
    "Corte masculino Tapiramutá",
    "Degradê Tapiramutá",
    "Barba alinhada Tapiramutá",
    "Barbearia Bahia",
    "Barbearia premium Tapiramutá",
    "Corte social masculino",
    "Barba completa",
    "Acabamento profissional",
    "Agendar barbearia WhatsApp",
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
    title: "Falcão Barbearia | Corte Masculino e Barba Premium em Tapiramutá",
    description:
      "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, degradê profissional, barba alinhada. Atendimento com hora marcada. Agende agora!",
    images: [
      {
        url: "https://www.seusite.com/logo1.png",
        width: 1200,
        height: 1200,
        alt: "Falcão Barbearia - Logo - Tapiramutá BA",
        type: "image/png",
      },
    ],
  },

  // ✔ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Falcão Barbearia Tapiramutá | Corte & Barba Premium",
    description:
      "Corte masculino moderno, degradê, barba alinhada e acabamento profissional. Atendimento com hora marcada em Tapiramutá - BA.",
    images: ["https://www.seusite.com/logo1.png"],
    creator: "@falcaobarbearia",
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
      "@id": "https://www.seusite.com",
      name: "Falcão Barbearia",
      alternateName: "Falcão Barbearia Tapiramutá",
      description: "Barbearia premium em Tapiramutá - BA especializada em corte masculino moderno, degradê, barba alinhada e acabamento profissional.",
      image: [
        "https://www.seusite.com/logo1.png",
        "https://www.seusite.com/cortes/corte1.jpg",
      ],
      logo: "https://www.seusite.com/logo1.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Olavo Bilac",
        addressLocality: "Tapiramutá",
        addressRegion: "BA",
        postalCode: "44840-027",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -11.8167,
        longitude: -40.7833,
      },
      url: "https://www.seusite.com",
      telephone: "+55 74 9 8873-2790",
      openingHours: ["Mo-Fr 09:00-19:00", "Sa 08:00-20:00"],
      priceRange: "$$",
      paymentAccepted: ["Cash", "Pix", "Credit Card"],
      currenciesAccepted: "BRL",
      areaServed: {
        "@type": "City",
        name: "Tapiramutá",
        containedIn: "Bahia, Brasil",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Barbearia",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corte Masculino",
              description: "Corte masculino moderno com acabamento profissional",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Degradê",
              description: "Degradê profissional em diferentes estilos",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Barba Completa",
              description: "Barba alinhada e acabamento premium",
            },
          },
        ],
      },
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
