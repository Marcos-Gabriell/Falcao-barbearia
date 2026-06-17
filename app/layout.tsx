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
  url: "https://www.falcaobarbearia.com.br",
  logo: "https://www.falcaobarbearia.com.br/logo2.png",
  image1: "https://www.falcaobarbearia.com.br/cortes/corte21.png",
  whatsapp:
    "https://wa.me/5574988732790?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20meu%20agendamento.",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=R.%20Olavo%20Bilac%2C%20Tapiramut%C3%A1%20-%20BA",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `Falcão Barbearia | O Melhor Corte em Tapiramutá - BA`,
    template: `%s | Falcão Barbearia`,
  },

  description:
    "Barbearia premium em Tapiramutá - BA. Corte masculino, corte degradê e barba na navalha. Faça seu agendamento 100% online através do nosso site.",

  // ← FIX: keywords ampliadas com variações exatas de busca
  keywords: [
    "Falcão Barbearia",
    "barbearia Tapiramutá",
    "barbearia em Tapiramutá BA",
    "barbearia Tapiramutá online",
    "agendamento barbearia Tapiramutá",
    "marcar barbeiro online",
    "corte de cabelo Tapiramutá",
    "corte masculino Tapiramutá",
    "corte degradê Tapiramutá",
    "degradê navalhado Tapiramutá",
    "barba Tapiramutá",
    "barba na navalha Tapiramutá",
    "melhor barbearia Tapiramutá",
    "barbearia premium Bahia",
    "Falcão barbeiro",
  ],

  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,

  alternates: {
    canonical: site.url,
    languages: { "pt-BR": site.url },
  },

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
    title: "Falcão Barbearia | Agendamento Online em Tapiramutá - BA",
    description:
      "Transforme seu visual com os melhores barbeiros de Tapiramutá. Agende seu horário diretamente no site de forma rápida e fácil.",
    images: [
      {
        url: site.logo,
        width: 1200,
        height: 1200,
        alt: "Falcão Barbearia – Logo",
      },
      {
        url: site.image1,
        width: 1200,
        height: 800,
        alt: "Falcão Barbearia – Corte masculino",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Falcão Barbearia | Agendamento Online",
    description:
      "Corte masculino moderno, degradê e barba. Agende agora online!",
    images: [site.logo],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "@id": `${site.url}/#barbershop`,
    name: site.name,
    url: site.url,
    image: [site.logo, site.image1],
    logo: {
      "@type": "ImageObject",
      url: site.logo,
      width: 1200,
      height: 1200,
    },
    description:
      "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, corte degradê, barba alinhada na navalha. Sistema de agendamento 100% online integrado.",
    telephone: site.phoneE164,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: ["Cash", "Pix", "Cartão de Crédito", "Cartão de Débito"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -11.8167,
      longitude: -40.7833,
    },
    hasMap: site.mapsQuery,
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "State", name: "Bahia" },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    /* A MÁGICA DO AGENDAMENTO ONLINE ESTÁ AQUI: */
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/agendar`,
        inLanguage: "pt-BR",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      result: {
        "@type": "Reservation",
        name: "Agendamento de Horário"
      }
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "customer support",
      availableLanguage: "Portuguese",
    },
    // ← FIX: catálogo completo — antes só tinha 2 serviços, agora cobre todos
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Barbearia",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Corte Tradicional",
            description: "Corte masculino clássico, na régua e no estilo que você já conhece.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Corte Degradê",
            description: "Degradê navalhado com transição perfeita, do clássico ao moderno.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Corte na Tesoura",
            description: "Design exclusivo feito 100% na tesoura.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Barba Premium",
            description: "Barba alinhada com toalha quente e acabamento na navalha.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Pezinho",
            description: "Alinhamento rápido de contorno e nuca.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Sobrancelha",
            description: "Limpeza de contorno prática e bem alinhada.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Pigmentação",
            description: "Correção de imperfeições com aspecto natural.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Luzes",
            description: "Mechas e reflexos de alto contraste.",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Desondulação",
            description: "Redução extrema de volume e alinhamento do fio.",
          },
        },
      ],
    },
    sameAs: [
      "https://instagram.com/barbeariafalcao_",
    ],
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