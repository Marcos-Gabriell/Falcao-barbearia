import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const site = {
  name:         "Falcão Barbearia",
  city:         "Tapiramutá",
  region:       "BA",
  country:      "BR",
  street:       "R. Olavo Bilac",
  postalCode:   "44840-027",
  phoneE164:    "+5574988732790",
  phoneDisplay: "(74) 98873-2790",
  url:          "https://www.falcaobarbearia.com.br",
  logo:         "https://www.falcaobarbearia.com.br/logo2.png",
  ogImage:      "https://www.falcaobarbearia.com.br/og-home.png",
  image1:       "https://www.falcaobarbearia.com.br/cortes/corte21.png",
  instagram:    "https://instagram.com/barbeariafalcao_",
  booking:      "https://www.falcaobarbearia.com.br/agendar",
  mapsQuery:    "https://www.google.com/maps/search/?api=1&query=R.%20Olavo%20Bilac%2C%20Tapiramut%C3%A1%20-%20BA",
};

const title = "Falcão Barbearia em Tapiramutá-BA | Corte, Degradê e Barba";
const desc  = "Barbearia premium em Tapiramutá-BA. Corte masculino, corte degradê, barba na navalha e mais. Agende seu horário 100% online, sem fila e sem complicação.";

export const viewport: Viewport = {
  themeColor:  "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default:  title,
    template: `%s | Falcão Barbearia — Tapiramutá`,
  },
  description: desc,

  keywords: [
    "barbearia Tapiramutá",
    "barbearia em Tapiramutá BA",
    "corte de cabelo Tapiramutá",
    "corte masculino Tapiramutá",
    "corte degradê Tapiramutá",
    "degradê navalhado Tapiramutá",
    "barba Tapiramutá",
    "barba na navalha Tapiramutá",
    "barbeiro Tapiramutá",
    "melhor barbearia Tapiramutá",
    "barbearia premium Bahia",
    "agendamento online barbearia",
    "marcar corte de cabelo online",
    "Falcão Barbearia",
  ],

  authors:   [{ name: site.name, url: site.url }],
  creator:   site.name,
  publisher: site.name,

  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet":       -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "pt_BR",
    url:         site.url,
    siteName:    site.name,
    title:       "Falcão Barbearia | Corte, Degradê e Barba em Tapiramutá-BA",
    description: "Corte masculino, degradê e barba na navalha em Tapiramutá-BA. Agende online em poucos cliques.",
    images: [
      {
        url:    site.ogImage,
        width:  1200,
        height: 630,
        alt:    "Falcão Barbearia — Tapiramutá, BA",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Falcão Barbearia | Tapiramutá-BA",
    description: "Corte, degradê e barba. Agende online em Tapiramutá-BA.",
    images:      [site.ogImage],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple:    [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32x32.png",
  },

  // verification: { google: "SEU_CÓDIGO_AQUI" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    "Barbershop",
    "@id":      `${site.url}/#barbershop`,
    name:       site.name,
    url:        site.url,
    image:      [site.ogImage, site.logo, site.image1],
    logo: {
      "@type": "ImageObject",
      url:     site.logo,
      width:   1200,
      height:  1200,
    },
    description: desc,
    telephone:          site.phoneE164,
    priceRange:         "$$",
    currenciesAccepted: "BRL",
    paymentAccepted:    ["Cash", "Pix", "Cartão de Crédito", "Cartão de Débito"],

    address: {
      "@type":         "PostalAddress",
      streetAddress:   site.street,
      addressLocality: site.city,
      addressRegion:   site.region,
      postalCode:      site.postalCode,
      addressCountry:  site.country,
    },
    geo: {
      "@type":    "GeoCoordinates",
      latitude:  -11.8167,
      longitude: -40.7833,
    },
    hasMap: site.mapsQuery,
    areaServed: {
      "@type": "City",
      name:    site.city,
      containedInPlace: { "@type": "State", name: "Bahia" },
    },

    openingHoursSpecification: [
      {
        "@type":   "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens:     "09:00",
        closes:    "19:00",
      },
      {
        "@type":   "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens:     "08:00",
        closes:    "20:00",
      },
    ],

    /* Ativa botão "Reservar" direto no card do Google */
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type":         "EntryPoint",
        urlTemplate:     site.booking,
        inLanguage:      "pt-BR",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Agendamento de Horário" },
    },

    contactPoint: {
      "@type":           "ContactPoint",
      telephone:         site.phoneE164,
      contactType:       "customer support",
      availableLanguage: "Portuguese",
    },

    /* Catálogo completo — cobre as buscas de cada serviço específico */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Serviços de Barbearia",
      itemListElement: [
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Corte Tradicional", description: "Corte masculino clássico, na régua e no estilo que você já conhece." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Corte Degradê",     description: "Degradê navalhado com transição perfeita, do clássico ao moderno." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Corte na Tesoura",  description: "Design exclusivo feito 100% na tesoura." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Barba Premium",     description: "Barba alinhada com toalha quente e acabamento na navalha." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Pezinho",           description: "Alinhamento rápido de contorno e nuca." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Sobrancelha",       description: "Limpeza de contorno prática e bem alinhada." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Pigmentação",       description: "Correção de imperfeições com aspecto natural." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Luzes",             description: "Mechas e reflexos de alto contraste." } },
        { "@type": "Offer", priceCurrency: "BRL", itemOffered: { "@type": "Service", name: "Desondulação",      description: "Redução extrema de volume e alinhamento do fio." } },
      ],
    },

    sameAs: [site.instagram],
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