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
  image1: "https://www.falcaobarbearia.com.br/cortes/corte1.jpg",
  whatsapp:
    "https://wa.me/5574988732790?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio%20na%20Falc%C3%A3o%20Barbearia.",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=R.%20Olavo%20Bilac%2C%20Tapiramut%C3%A1%20-%20BA",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `Falcão Barbearia em Tapiramutá - BA | Corte Masculino, Degradê e Barba`,
    template: `%s | Falcão Barbearia – Tapiramutá`,
  },

  description:
    "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, degradê profissional, barba alinhada e acabamento com navalha. Atendimento com hora marcada via WhatsApp.",

  keywords: [
    "Falcão Barbearia",
    "Barbearia Tapiramutá",
    "Barbeiro Tapiramutá BA",
    "Corte masculino Tapiramutá",
    "Degradê Tapiramutá",
    "Barba alinhada Tapiramutá",
    "Corte navalhado Bahia",
    "Barbearia premium Bahia",
    "Corte social masculino",
    "Agendamento barbearia WhatsApp",
    "Barbearia R. Olavo Bilac Tapiramutá",
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
    title: "Falcão Barbearia | Corte Masculino em Tapiramutá - BA",
    description:
      "Corte masculino moderno, degradê profissional e barba alinhada em Tapiramutá - BA. Agende agora pelo WhatsApp!",
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
        alt: "Falcão Barbearia – Corte masculino em Tapiramutá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Falcão Barbearia | Tapiramutá - BA",
    description:
      "Corte masculino moderno, degradê e barba alinhada. Atendimento com hora marcada em Tapiramutá - BA.",
    images: [site.logo],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    // google: "SEU_CÓDIGO_AQUI", // ← descomente e cole o código do Google Search Console
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

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
      "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, degradê, barba alinhada e acabamento profissional.",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "reservations",
      availableLanguage: "Portuguese",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Barbearia",
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Corte Masculino",
            description: "Corte masculino moderno com acabamento profissional",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Degradê",
            description: "Degradê profissional em diferentes estilos",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Barba Completa",
            description: "Barba alinhada com navalha e acabamento premium",
          },
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          itemOffered: {
            "@type": "Service",
            name: "Corte + Barba",
            description: "Combo corte masculino e barba alinhada",
          },
        },
      ],
    },
    sameAs: [
      site.whatsapp,
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