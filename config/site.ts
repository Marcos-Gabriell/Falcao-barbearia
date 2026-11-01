/* ─────────────────────────────────────────────────────────────────────────
   Fonte única dos dados da barbearia.
   Mudou telefone, horário ou endereço? Altere só aqui — site, rodapé,
   schema do Google (JSON-LD) e sitemap leem deste arquivo.
   ───────────────────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Falcão Barbearia",
  url: "https://www.falcaobarbearia.com.br",
  barber: "Thaylle",

  phoneE164: "+5574988732790",
  phoneDisplay: "(74) 98873-2790",
  whatsappNumber: "5574988732790",

  street: "R. Olavo Bilac",
  district: "Centro",
  city: "Tapiramutá",
  region: "BA",
  state: "Bahia",
  postalCode: "44840-027",
  country: "BR",
  geo: { lat: -11.848118, lng: -40.791096 },

  // Atendimento por ordem de chegada (sem agendamento)
  hours: [
    { label: "Segunda a Sábado", value: "09h às 19h", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
  ],
  closedLabel: "Domingo",

  instagram: "https://instagram.com/barbeariafalcao_",
  instagramHandle: "@barbeariafalcao_",

  // Perfil da empresa no Google (Maps)
  googleMaps: "https://maps.app.goo.gl/G4MWzTr9TzYXRYAV7",
  googleDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Barbearia+Falc%C3%A3o%2C+R.+Olavo+Bilac%2C+Centro%2C+Tapiramut%C3%A1+-+BA",
  googleCid: "https://www.google.com/maps?cid=7732497619216377836",
  // Troque pelo link curto de "Pedir avaliações" do Perfil da Empresa no Google
  googleReview: "https://www.google.com/maps?cid=7732497619216377836",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.4065023948574!2d-40.7910955!3d-11.848117799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ba32c243da499%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1717978253100!5m2!1spt-BR!2sbr",

  foundingYear: 2021,

  // Nota do Perfil da Empresa no Google — manter igual ao que aparece no Maps.
  // (Não vai para o JSON-LD: o Google não aceita nota "autodeclarada" no próprio site.)
  rating: { value: 4.9 },
  cortesRealizados: 300,
} as const;

/** "Desde 2021" — usado no lugar de "X anos", que fica desatualizado. */
export const SINCE = `Desde ${SITE.foundingYear}`;

export const RATING = SITE.rating.value.toLocaleString("pt-BR", { minimumFractionDigits: 1 });

/** Link do WhatsApp com mensagem pronta. */
export function whatsapp(message = `Fala, ${SITE.barber}! Tudo certo? Queria cortar o cabelo. Como tá o movimento aí hoje?`) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagem de WhatsApp já citando o serviço. */
export function whatsappServico(servico: string) {
  return whatsapp(`Fala, ${SITE.barber}! Queria fazer ${servico}. Como tá o movimento aí hoje?`);
}
