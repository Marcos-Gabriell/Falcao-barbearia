import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import TrackClicks from "./components/TrackClicks";
import { SITE } from "@/config/site";

/* Fontes servidas pelo próprio site (sem @import bloqueando a renderização) */
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-montserrat", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });

// GA4: defina NEXT_PUBLIC_GA_ID na Vercel (ex.: G-XXXXXXX). Sem ele, nada carrega.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const DESCRIPTION =
  "Barbearia em Tapiramutá - BA, no Centro (R. Olavo Bilac). Corte degradê, corte na tesoura, barba na navalha e desondulação. Sem agendamento: atendimento por ordem de chegada. Chame no WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "Barbearia em Tapiramutá - BA | Falcão Barbearia",
    template: "%s | Falcão Barbearia",
  },
  description: DESCRIPTION,


  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Barbearia",

  alternates: { canonical: "/" },

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
    url: SITE.url,
    siteName: SITE.name,
    title: "Barbearia em Tapiramutá - BA | Falcão Barbearia",
    description: "Degradê, tesoura e barba na navalha no Centro de Tapiramutá. Sem agendamento — chega ou chama no Whats.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Falcão Barbearia | Tapiramutá - BA",
    description: "Degradê, tesoura e barba na navalha. Sem agendamento, por ordem de chegada.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  other: {
    "geo.region": "BR-BA",
    "geo.placename": SITE.city,
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = { themeColor: "#050505" };

const servicos: [string, string, number][] = [
  ["Corte Tradicional", "Corte masculino clássico, na régua.", 30],
  ["Corte na Tesoura", "Design exclusivo feito 100% na tesoura.", 40],
  ["Corte Degradê", "Degradê navalhado: low, mid, high e skin fade.", 30],
  ["Pezinho", "Alinhamento rápido de contorno e nuca.", 15],
  ["Barba Premium", "Barba com toalha quente e acabamento na navalha.", 15],
  ["Sobrancelha", "Limpeza de contorno prática e bem alinhada.", 10],
  ["Pigmentação", "Correção de falhas com aspecto natural.", 20],
  ["Luzes", "Mechas e reflexos de alto contraste.", 80],
  ["Nevou", "Descoloração global platinada.", 100],
  ["Desondulação", "Redução de volume e alinhamento do fio.", 100],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HairSalon",
        "@id": `${SITE.url}/#barbershop`,
        name: SITE.name,
        alternateName: "Barbearia Falcão",
        url: SITE.url,
        image: [`${SITE.url}/thaylle2.jpeg`, `${SITE.url}/cortes/corte21.png`, `${SITE.url}/logo2.png`],
        logo: `${SITE.url}/logo2.png`,
        description: DESCRIPTION,
        telephone: SITE.phoneE164,
        priceRange: "R$ 10 – R$ 100",
        currenciesAccepted: "BRL",
        paymentAccepted: "Dinheiro, Pix, Cartão de Crédito, Cartão de Débito",
        foundingDate: String(SITE.foundingYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.street,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          postalCode: SITE.postalCode,
          addressCountry: SITE.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
        hasMap: SITE.googleCid,
        areaServed: [
          { "@type": "City", name: SITE.city, containedInPlace: { "@type": "State", name: SITE.state } },
        ],
        openingHoursSpecification: SITE.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        // Contato principal: WhatsApp (sem agendamento online)
        potentialAction: {
          "@type": "CommunicateAction",
          target: `https://wa.me/${SITE.whatsappNumber}`,
          name: "Chamar no WhatsApp",
        },
        employee: { "@type": "Person", name: SITE.barber, jobTitle: "Barbeiro" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Barbearia",
          itemListElement: servicos.map(([name, description, price]) => ({
            "@type": "Offer",
            price,
            priceCurrency: "BRL",
            itemOffered: { "@type": "Service", name, description },
          })),
        },
        sameAs: [SITE.instagram, SITE.googleCid],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE.url}/#barbershop` },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <TrackClicks />
        <Analytics />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
            <Script id="ga4" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
