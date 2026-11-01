/* ─────────────────────────────────────────────────────────────────────────
   Blog da Falcão Barbearia.
   Para publicar um post novo: copie um objeto, troque o slug (URL),
   título, resumo, data (AAAA-MM-DD) e o conteúdo. O sitemap atualiza sozinho.
   ───────────────────────────────────────────────────────────────────────── */

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "citacao"; texto: string };

export type Post = {
  id: number; // ID antigo — os redirects /estilo/1 → /estilo/slug ficam no next.config.ts
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  imagem: string;
  data: string; // AAAA-MM-DD
  destaque?: boolean;
  palavrasChave: string[];
  servico?: { nome: string; href: string };
  conteudo: Bloco[];
};

export const posts: Post[] = [
  {
    id: 10,
    slug: "barbearia-em-tapiramuta-sem-agendamento",
    titulo: "Barbearia em Tapiramutá sem agendamento: como funciona na Falcão",
    resumo:
      "Na Falcão o atendimento é por ordem de chegada. Veja como funciona, quais os melhores horários e como saber o movimento antes de sair de casa.",
    categoria: "Barbearia",
    imagem: "/thaylle3.jpeg",
    data: "2026-10-31",
    destaque: true,
    palavrasChave: ["barbearia Tapiramutá", "barbearia sem agendamento", "barbeiro Tapiramutá", "ordem de chegada"],
    conteudo: [
      { tipo: "p", texto: "Em cidade pequena a gente sabe como é: ninguém quer baixar aplicativo, criar senha e escolher horário pra cortar o cabelo. Por isso a Falcão Barbearia, no Centro de Tapiramutá, funciona do jeito mais simples possível — por ordem de chegada." },
      { tipo: "h2", texto: "Como funciona o atendimento por ordem de chegada" },
      { tipo: "p", texto: "Você chega, avisa que quer cortar e aguarda a sua vez. Sem cadastro, sem taxa e sem burocracia. A barbearia abre de segunda a sábado, das 9h às 19h, na R. Olavo Bilac." },
      { tipo: "lista", itens: [
        "Quer saber se está cheio? Mande um oi no WhatsApp (74) 98873-2790 e a gente responde como está o movimento.",
        "Chegou e tem gente na frente? Dá pra aproveitar a resenha ou dar uma volta e retornar.",
        "O pagamento é no final: Pix, dinheiro ou cartão.",
      ] },
      { tipo: "h2", texto: "Melhores horários para pegar menos fila" },
      { tipo: "p", texto: "Em geral, o começo da manhã e o meio da tarde em dias de semana são os momentos mais tranquilos. Sexta à tarde e sábado são os dias mais disputados, principalmente antes de festa, formatura ou São João. Se tiver compromisso, venha mais cedo." },
      { tipo: "citacao", texto: "Sem agendamento não quer dizer sem organização: quem chega primeiro senta primeiro, e todo mundo recebe o mesmo capricho." },
      { tipo: "h2", texto: "Como chegar na Falcão Barbearia" },
      { tipo: "p", texto: "Estamos na R. Olavo Bilac, Centro de Tapiramutá – BA (CEP 44840-027). No Google Maps, basta buscar \"Barbearia Falcão\" e seguir a rota. Tem vaga na rua em frente e nas laterais." },
    ],
  },
  {
    id: 11,
    slug: "quanto-custa-corte-de-cabelo-em-tapiramuta",
    titulo: "Quanto custa um corte de cabelo masculino em Tapiramutá? (Tabela 2026)",
    resumo:
      "Preços atualizados de corte, barba, sobrancelha, pigmentação, luzes e desondulação na Falcão Barbearia, em Tapiramutá-BA.",
    categoria: "Preços",
    imagem: "/tabela.png",
    data: "2026-10-28",
    palavrasChave: ["preço corte de cabelo Tapiramutá", "quanto custa corte masculino", "tabela barbearia", "preço barba"],
    servico: { nome: "Ver tabela completa", href: "/servicos" },
    conteudo: [
      { tipo: "p", texto: "Uma das perguntas que mais chega no nosso WhatsApp é: quanto custa o corte? Pra facilitar, juntamos aqui os valores praticados na Falcão Barbearia em 2026." },
      { tipo: "h2", texto: "Cortes" },
      { tipo: "lista", itens: ["Corte tradicional (máquina e tesoura): R$ 30", "Corte na tesoura: R$ 40", "Pezinho (contorno e nuca): R$ 15"] },
      { tipo: "h2", texto: "Barba e rosto" },
      { tipo: "lista", itens: ["Barba com toalha quente e navalha: R$ 15", "Sobrancelha: R$ 10", "Pigmentação: R$ 20"] },
      { tipo: "h2", texto: "Química e cor" },
      { tipo: "lista", itens: ["Luzes: R$ 80", "Nevou (platinado): R$ 100", "Desondulação: R$ 100"] },
      { tipo: "p", texto: "Os valores podem variar conforme o comprimento e o volume do cabelo, principalmente nos serviços químicos. Na dúvida, mande uma foto do seu cabelo no WhatsApp que a gente passa o valor certinho." },
      { tipo: "h2", texto: "Formas de pagamento" },
      { tipo: "p", texto: "Aceitamos Pix, dinheiro e cartões de crédito e débito. O pagamento é feito no final do atendimento, sem sinal e sem reserva." },
    ],
  },
  {
    id: 1,
    slug: "desondulacao-masculina-o-que-e",
    titulo: "Desondulação masculina: o segredo para o caimento perfeito",
    resumo:
      "Cansado do volume e dos fios rebeldes? A desondulação relaxa a estrutura do cabelo e facilita o penteado no dia a dia sem perder a naturalidade.",
    categoria: "Química & Tratamento",
    imagem: "/cortes/corte21.png",
    data: "2026-06-12",
    palavrasChave: ["desondulação masculina", "desondulação Tapiramutá", "alisamento masculino", "cabelo com volume"],
    servico: { nome: "Desondulação", href: "/servicos/desondulacao" },
    conteudo: [
      { tipo: "p", texto: "A desondulação é um tratamento químico que reduz o volume e solta os cachos e ondas, deixando o fio mais alinhado. Diferente de uma progressiva pesada, o objetivo aqui é um resultado natural: o cabelo fica mais fácil de pentear, mas continua com movimento." },
      { tipo: "h2", texto: "Pra quem é indicada" },
      { tipo: "lista", itens: ["Quem tem cabelo muito armado e quer um penteado que fique no lugar.", "Quem usa cortes com franja ou topo mais longo, como o mullet e o corte texturizado.", "Quem quer passar menos tempo com secador e pomada todo dia."] },
      { tipo: "h2", texto: "Quanto tempo dura" },
      { tipo: "p", texto: "O efeito acompanha o fio tratado. Conforme o cabelo cresce, a raiz volta ao natural — por isso a maioria dos clientes refaz a cada dois ou três meses, junto com o corte." },
      { tipo: "h2", texto: "Cuidados depois da desondulação" },
      { tipo: "lista", itens: ["Espere ao menos 48 horas para lavar o cabelo.", "Use shampoo sem sal e hidrate uma vez por semana.", "Evite prender ou usar boné apertado nos primeiros dias."] },
      { tipo: "citacao", texto: "Química bem feita é a que ninguém percebe — só repara que seu cabelo está sempre no lugar." },
    ],
  },
  {
    id: 2,
    slug: "low-mid-high-fade-qual-degrade-escolher",
    titulo: "Low, mid ou high fade: qual degradê combina com você?",
    resumo:
      "Entenda a diferença entre as alturas do degradê e descubra qual técnica valoriza mais o formato do seu rosto.",
    categoria: "Tendências",
    imagem: "/cortes/corte4.jpg",
    data: "2026-06-05",
    palavrasChave: ["degradê", "low fade", "mid fade", "high fade", "corte degradê Tapiramutá"],
    servico: { nome: "Corte Degradê", href: "/servicos/corte-degrade" },
    conteudo: [
      { tipo: "p", texto: "O degradê (ou fade) é o corte mais pedido da Falcão. Mas \"faz um degradê\" pode significar muita coisa: a altura onde a transição começa muda completamente o resultado." },
      { tipo: "h2", texto: "Low fade (degradê baixo)" },
      { tipo: "p", texto: "A transição começa perto da orelha e da nuca. É discreto, funciona no trabalho e na festa, e é a escolha certa pra quem está experimentando o degradê pela primeira vez." },
      { tipo: "h2", texto: "Mid fade (degradê médio)" },
      { tipo: "p", texto: "Começa no meio da lateral, mais ou menos na altura das têmporas. É o equilíbrio entre o clássico e o moderno, e combina com quase todo formato de rosto." },
      { tipo: "h2", texto: "High fade (degradê alto)" },
      { tipo: "p", texto: "A pele aparece até bem perto do topo. É um visual marcante, que valoriza rostos mais arredondados porque alonga a silhueta." },
      { tipo: "h2", texto: "E o skin fade?" },
      { tipo: "p", texto: "Skin fade é quando a parte mais baixa é zerada na navalha. Pode ser low, mid ou high — o que muda é o acabamento na pele." },
      { tipo: "lista", itens: ["Rosto redondo: mid ou high fade com volume no topo.", "Rosto alongado: low fade, mantendo mais cabelo nas laterais.", "Rosto quadrado: qualquer altura, aproveite o contorno marcado."] },
    ],
  },
  {
    id: 3,
    slug: "cuidados-com-a-barba-rotina-diaria",
    titulo: "Barba de respeito: 3 passos diários essenciais",
    resumo:
      "Ter uma barba cheia e alinhada não é só genética. Veja a rotina de 3 minutos que muda o aspecto dos fios.",
    categoria: "Cuidados",
    imagem: "/cortes/Barba.png",
    data: "2026-05-28",
    palavrasChave: ["cuidados com a barba", "como deixar a barba bonita", "óleo para barba", "barba Tapiramutá"],
    servico: { nome: "Barba Premium", href: "/servicos/barba" },
    conteudo: [
      { tipo: "p", texto: "A barba na navalha feita na barbearia deixa o contorno perfeito, mas o que mantém o visual entre uma visita e outra é a rotina em casa. A boa notícia: são só três passos." },
      { tipo: "h2", texto: "1. Lave com o produto certo" },
      { tipo: "p", texto: "Sabonete comum resseca a pele e deixa os fios ásperos. Use um shampoo próprio para barba, de três a quatro vezes por semana, com água fria ou morna." },
      { tipo: "h2", texto: "2. Hidrate todo dia" },
      { tipo: "p", texto: "Duas ou três gotas de óleo ou balm, espalhadas com os dedos até a pele, acabam com a coceira e o aspecto ressecado. Barba hidratada parece mais cheia." },
      { tipo: "h2", texto: "3. Penteie e modele" },
      { tipo: "p", texto: "Um pente ou escova de cerdas naturais direciona os fios e disfarça falhas. Penteie sempre a favor do crescimento." },
      { tipo: "citacao", texto: "No calor da Chapada, hidratar a barba não é vaidade — é o que evita a coceira e a pele descamando." },
      { tipo: "p", texto: "Se a barba tem falhas, a pigmentação ajuda a uniformizar o desenho com aspecto natural. Vale conversar com o Thaylle na próxima visita." },
    ],
  },
  {
    id: 4,
    slug: "corte-na-tesoura-masculino",
    titulo: "Corte na tesoura: o clássico que nunca sai de moda",
    resumo:
      "Para quem tem cabelo mais longo ou ondulado, a tesoura entrega um caimento que a máquina não consegue.",
    categoria: "Clássicos",
    imagem: "/cortes/corte12.jpeg",
    data: "2026-05-15",
    palavrasChave: ["corte na tesoura masculino", "corte social tesoura", "cabelo médio masculino"],
    servico: { nome: "Corte na Tesoura", href: "/servicos/corte-tesoura" },
    conteudo: [
      { tipo: "p", texto: "A máquina é rápida e precisa nas laterais, mas quando o cabelo tem comprimento a tesoura é insubstituível. Ela permite tirar volume sem perder o movimento, ajustar o caimento fio a fio e criar um acabamento mais natural." },
      { tipo: "h2", texto: "Quando escolher o corte 100% na tesoura" },
      { tipo: "lista", itens: ["Cabelo médio ou longo que você quer manter.", "Cabelo ondulado ou cacheado, que reage mal à máquina.", "Quem quer crescer o cabelo sem passar pela fase do \"capacete\"."] },
      { tipo: "h2", texto: "Quanto tempo leva" },
      { tipo: "p", texto: "Um corte na tesoura bem feito leva mais tempo que o tradicional, porque é feito em camadas. É o tipo de serviço que vale a pena fazer com calma." },
      { tipo: "h2", texto: "Como manter" },
      { tipo: "p", texto: "Retoque a cada cinco ou seis semanas para manter o formato. Em casa, prefira finalizar com creme ou pomada de efeito natural, que respeita o caimento do corte." },
    ],
  },
  {
    id: 6,
    slug: "mullet-moderno-com-degrade",
    titulo: "Mullet moderno: a volta do estilo com atitude",
    resumo:
      "O mullet voltou com tudo, misturado com o fade lateral. Veja como aderir a essa tendência sem errar.",
    categoria: "Tendências",
    imagem: "/cortes/corte8.png",
    data: "2026-05-02",
    palavrasChave: ["mullet masculino", "mullet com degradê", "corte mullet 2026"],
    servico: { nome: "Corte Degradê", href: "/servicos/corte-degrade" },
    conteudo: [
      { tipo: "p", texto: "Esquece o mullet dos anos 80. A versão de agora combina laterais em degradê com a nuca mais longa e texturizada — o famoso mullet com fade, que domina os pedidos da galera mais nova." },
      { tipo: "h2", texto: "Os tipos mais pedidos" },
      { tipo: "lista", itens: ["Mullet com low fade: mais discreto, nuca média.", "Mullet com burst fade: o degradê contorna a orelha em semicírculo.", "Mullet texturizado: topo e nuca com desondulação ou fios bagunçados de propósito."] },
      { tipo: "h2", texto: "Precisa deixar crescer?" },
      { tipo: "p", texto: "Sim, a nuca precisa de alguns centímetros. Se seu cabelo está curto, dá pra começar com um low fade e ir deixando a parte de trás crescer nas próximas visitas." },
      { tipo: "h2", texto: "Manutenção" },
      { tipo: "p", texto: "As laterais pedem retoque a cada duas ou três semanas para o degradê continuar limpo. A nuca pode ir mais tempo." },
    ],
  },
  {
    id: 7,
    slug: "corte-infantil-em-tapiramuta",
    titulo: "Estilo desde cedo: como é o corte infantil na Falcão",
    resumo:
      "Cortar o cabelo dos pequenos exige paciência e técnica. Veja como transformamos o choro em diversão e muito estilo.",
    categoria: "Kids",
    imagem: "/cortes/corte1.jpg",
    data: "2026-04-25",
    palavrasChave: ["corte infantil Tapiramutá", "barbearia infantil", "corte de cabelo criança"],
    servico: { nome: "Corte Infantil", href: "/servicos/corte-infantil" },
    conteudo: [
      { tipo: "p", texto: "Pra muita criança, cortar o cabelo é sinônimo de choro. Aqui na Falcão a ideia é o contrário: que o momento da cadeira seja divertido e que o pequeno saia se achando." },
      { tipo: "h2", texto: "Dicas para os pais" },
      { tipo: "lista", itens: ["Venha num horário em que a criança não esteja com sono ou fome.", "Mostre fotos do corte antes — criança gosta de saber o que vai acontecer.", "Prefira os horários de menor movimento, no meio da manhã ou da tarde em dia de semana."] },
      { tipo: "h2", texto: "Os cortes mais pedidos" },
      { tipo: "p", texto: "Degradê baixo, social na tesoura e os famosos riscos (freestyle) na lateral são os campeões entre a garotada." },
      { tipo: "citacao", texto: "Paciência é a ferramenta mais importante no corte infantil — mais que a máquina." },
    ],
  },
  {
    id: 9,
    slug: "freestyle-desenho-no-cabelo",
    titulo: "Freestyle e design: arte na lateral do cabelo",
    resumo:
      "Linhas, traços e desenhos que mostram personalidade. Como escolher o freestyle ideal para o seu corte.",
    categoria: "Arte Urbana",
    imagem: "/cortes/corte14.jpeg",
    data: "2026-04-10",
    palavrasChave: ["freestyle cabelo", "risco no cabelo", "desenho no cabelo masculino"],
    conteudo: [
      { tipo: "p", texto: "O freestyle é o desenho feito com navalha ou máquina de acabamento na lateral ou na nuca. Pode ser um risco simples na sobrancelha ou uma arte completa que ocupa toda a lateral." },
      { tipo: "h2", texto: "Como escolher o desenho" },
      { tipo: "lista", itens: ["Riscos retos ou em diagonal são discretos e combinam com qualquer degradê.", "Desenhos curvos e tribais pedem cabelo mais baixo na lateral para aparecer.", "Leve uma referência — mas confie no barbeiro para adaptar ao formato da sua cabeça."] },
      { tipo: "h2", texto: "Quanto tempo dura" },
      { tipo: "p", texto: "Como o cabelo cresce rápido, o desenho fica nítido por uma a duas semanas. Quem gosta de manter costuma voltar para retocar junto com o pezinho." },
    ],
  },
];

export const postsOrdenados = [...posts].sort((a, b) => b.data.localeCompare(a.data));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function tempoLeitura(post: Post) {
  const palavras = post.conteudo
    .map((b) => ("texto" in b ? b.texto : b.itens.join(" ")))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(palavras / 200));
}
