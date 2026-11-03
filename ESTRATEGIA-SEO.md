# Estratégia de SEO local — Falcão Barbearia

Objetivo: aparecer em primeiro quando alguém de Tapiramutá e região buscar
"barbearia", "barbeiro", "corte degradê" ou "barbearia perto de mim".

## 1. Perfil da Empresa no Google (o que mais pesa)

Em cidade pequena, o mapa do Google ("Local Pack") aparece antes de qualquer site.

- [ ] Confirmar que o perfil "Barbearia Falcão" está verificado e no nome de vocês.
- [ ] Categoria principal: **Barbearia**. Secundárias: *Barbeiro*, *Salão de beleza masculino*.
- [ ] Horário igual ao do site (Seg–Sáb 9h–19h). Feriados: marcar horário especial.
- [ ] Site: `https://www.falcaobarbearia.com.br` · Telefone: (74) 98873-2790.
- [ ] Atributos: "Aceita Pix", "Atende sem hora marcada", "Bom para crianças".
- [ ] Serviços com preço (mesma tabela do site).
- [ ] **Fotos toda semana** (cortes, fachada, interior, equipe). Perfil com foto nova sobe.
- [ ] **Avaliações**: pedir pra cada cliente satisfeito. Meta: 5 por semana.
      Pegue o link curto em *Perfil → Pedir avaliações* e cole em `config/site.ts`
      no campo `googleReview` (hoje aponta pro perfil geral). Responda TODAS as avaliações
      citando o serviço ("Valeu pelo degradê, Pedro!").
- [ ] Postar no perfil (Google Posts) 1x por semana — pode ser o mesmo post do blog.

## 2. Consistência de dados (NAP)

Nome, endereço e telefone **idênticos** em todo lugar: site, Google, Instagram
(bio + botão de contato), Facebook, WhatsApp Business. Tudo vem de `config/site.ts`.

## 3. Blog — pauta (1 post a cada 2 semanas)

Publicados (21): sem agendamento, tabela de preços, 7 cortes mais pedidos de 2026,
São João, formatura e casamento, quanto tempo dura o degradê, entradas e calvície,
cabelo cacheado, barba falhada e pigmentação, luzes e nevou, corte infantil na volta às aulas,
corte pelo formato do rosto, entrevista de emprego, sobrancelha masculina, desondulação,
alturas de degradê, rotina da barba, tesoura, mullet, corte infantil e freestyle.

Próximos (ideias):

1. Melhores produtos para finalizar o cabelo (pomada, cera, gel: quando usar cada)
2. Como cuidar do cabelo no calor e no sol da Chapada
3. Corte para o Natal e Réveillon
4. Barba lenhador x barba curta: qual combina com você
5. Como manter o freestyle por mais tempo
6. Caspa e couro cabeludo oleoso: o que ajuda (e quando procurar médico)

Os posts mais recentes aparecem automaticamente na seção "Dicas de cadeira" da home.

Como publicar: adicione um objeto em `app/estilo/data.ts` (slug, título, resumo, data,
imagem e conteúdo). O sitemap e o schema do Google atualizam sozinhos.

Regras de ouro para cada post:
- Título com a palavra-chave + "Tapiramutá" quando fizer sentido.
- Texto próprio (nada copiado), com fotos reais de cortes da Falcão.
- Terminar sempre com o convite pro WhatsApp e link para o serviço.

## 4. Depois de publicar o site

- [ ] Google Search Console: adicionar o domínio e enviar `/sitemap.xml`.
- [ ] Pedir indexação da home e dos posts novos.
- [ ] Conferir em 2–4 semanas o relatório "Desempenho" (buscas que trazem visitas).
- [ ] Testar o schema em https://search.google.com/test/rich-results
