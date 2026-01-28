import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const site = {
  name: "Falcão Barbearia",
  city: "Tapiramutá",
  region: "BA",
  country: "BR",
  street: "R. Olavo Bilac",
  postalCode: "44840-027",
  phoneE164: "+5574988732790",
  phoneDisplay: "(74) 98873-2790",
  url: "https://www.falcaobarbearia.online",
  logo: "https://www.falcaobarbearia.online/logo1.png",
  image1: "https://www.falcaobarbearia.online/cortes/corte1.jpg",
  whatsapp: "https://wa.me/5574988732790?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio%20na%20Falc%C3%A3o%20Barbearia.",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=R.%20Olavo%20Bilac%2C%20Tapiramut%C3%A1%20-%20BA",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} ${site.city} | Corte Masculino & Barba`,
    template: `%s | ${site.name}`,
  },

  description:
    `Barbearia em ${site.city} - ${site.region}. Corte masculino moderno, degradê, barba alinhada e acabamento profissional. Agende pelo WhatsApp!`,

  keywords: [
    `Barbearia ${site.city}`,
    site.name,
    `Corte masculino ${site.city}`,
    `Barbeiro em ${site.city} ${site.region}`,
    `Degradê ${site.city}`,
    `Barba alinhada ${site.city}`,
    "Barbearia Bahia",
    "Corte social masculino",
    "Corte navalhado",
    "Agendar barbearia WhatsApp",
  ],

  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,

  alternates: { canonical: site.url },

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

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Barbearia em ${site.city} - ${site.region}`,
    description:
      `Corte masculino moderno, degradê profissional e barba alinhada em ${site.city} - ${site.region}. Agende agora!`,
    images: [
      {
        url: site.logo,
        width: 1200,
        height: 1200,
        alt: `${site.name} - Logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.city} | Corte & Barba`,
    description:
      `Corte masculino moderno, degradê e barba alinhada. Atendimento com hora marcada em ${site.city} - ${site.region}.`,
    images: [site.logo],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org (JSON-LD) — super importante pro Google entender negócio local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "@id": site.url,
    name: site.name,
    url: site.url,
    image: [site.logo, site.image1],
    logo: site.logo,
    description:
      `Barbearia em ${site.city} - ${site.region}. Corte masculino moderno, degradê, barba alinhada e acabamento profissional.`,
    telephone: site.phoneE164,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: ["Cash", "Pix", "Credit Card"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    // Se você tiver coordenadas exatas, pode ajustar
    geo: {
      "@type": "GeoCoordinates",
      latitude: -11.8167,
      longitude: -40.7833,
    },
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "State", name: "Bahia" },
    },
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 08:00-20:00"],
    sameAs: [
      // Se tiver Instagram/Google Perfil, coloca aqui depois
      // "https://www.instagram.com/seuperfil",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Barbearia",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "0", // <- TROQUE pelo preço real
          itemOffered: {
            "@type": "Service",
            name: "Corte Masculino",
            description: "Corte masculino moderno com acabamento profissional",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "0", // <- TROQUE pelo preço real
          itemOffered: {
            "@type": "Service",
            name: "Degradê",
            description: "Degradê profissional em diferentes estilos",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "0", // <- TROQUE pelo preço real
          itemOffered: {
            "@type": "Service",
            name: "Barba Completa",
            description: "Barba alinhada e acabamento premium",
          },
        },
      ],
    },
  };

  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Script
          id="ld-json-barbershop"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
