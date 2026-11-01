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
      Pegue o link curto em *Perfil → Pedir avaliações* e cole em `app/utils/site.ts`
      no campo `googleReview` (hoje aponta pro perfil geral). Responda TODAS as avaliações
      citando o serviço ("Valeu pelo degradê, Pedro!").
- [ ] Postar no perfil (Google Posts) 1x por semana — pode ser o mesmo post do blog.

## 2. Consistência de dados (NAP)

Nome, endereço e telefone **idênticos** em todo lugar: site, Google, Instagram
(bio + botão de contato), Facebook, WhatsApp Business. Tudo vem de `app/utils/site.ts`.

## 3. Blog — pauta (1 post a cada 2 semanas)

Já publicados: sem agendamento, tabela de preços, desondulação, alturas de degradê,
barba, tesoura, mullet, infantil, freestyle.

Próximos (focados em busca local e sazonal):

1. Corte para o São João: os estilos mais pedidos em Tapiramutá
2. Corte para formatura e casamento: como se preparar
3. Volta às aulas: cortes infantis práticos
4. Pigmentação de barba: vale a pena?
5. Luzes e nevou masculino: cuidados no sol da Chapada
6. Cabelo cacheado masculino: corte e finalização
7. Calvície e entradas: cortes que disfarçam
8. Quanto tempo dura um degradê? Frequência ideal de corte

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
