# Pokémon GO Tracker

Um tracker de coleção para Pokémon GO, com progresso salvo no navegador.

## Três coleções em um só lugar

- **Mega Dex:** acompanhamento de Mega Evoluções e Reversões Primais.
- **Safari Urbano:** tracker de coleção do evento realizado nos dias 26 e 27 de setembro, nas cidades de Rio de Janeiro, Lisboa, Brisbane, Marseille e Munique.
- **Shundos Iniciais:** coleção dos iniciais de Kanto a Paldea em seus três estágios, com imagens shiny. Shundo significa shiny com IV 100%.

As abas possuem marcações e progresso independentes. Os catálogos preservam as listas desta versão; a presença de um Pokémon não indica sua disponibilidade atual no jogo.

- Busca por nome ou número, com filtros próprios para cada coleção.
- Filtros por status, categoria/estágio e tipo; filtro por região nos Shundos Iniciais.
- Estado Aguardando evento nos Shundos Iniciais.
- Imagens externas com alternativas de carregamento.
- Exportação PNG/SVG da aba atual, com os filtros e a marca d'água.
- Backup JSON do progresso das três abas, com importação de backups anteriores da Mega Dex.
- Limpeza de progresso apenas da aba atual, com confirmação.

## Como usar

Mantenha `index.html` junto das pastas `css/` e `js/` e abra-o em um navegador. Selecione a coleção nas abas superiores.

Na Mega Dex e no Safari Urbano, clique nas cartas para marcar ou desmarcar os Pokémon obtidos. Nos Shundos Iniciais, um clique marca Tenho em verde; dois cliques marcam Aguardando evento em amarelo. Pelo teclado, use Enter ou espaço para Tenho e Shift + Enter ou Shift + espaço para Aguardando evento.

O estado Aguardando evento indica um Pokémon que você já possui e reservou para evoluir durante um evento. Ele também entra na contagem do progresso.

Abra o painel de filtros para combinar as opções da coleção. No menu Exportar, escolha PNG/SVG para a aba atual ou JSON para salvar o progresso das três abas.

A importação substitui as marcações das coleções presentes no backup; as outras abas são preservadas. Exporte um backup antes de importar ou limpar o progresso.

## Armazenamento do progresso

O progresso fica no armazenamento local do navegador. Ele não é gravado dentro dos arquivos do programa e não é sincronizado automaticamente entre navegadores, dispositivos ou endereços do site.

Para transferir suas marcações, exporte um backup e importe-o no destino. Os backups pessoais não fazem parte deste repositório.

## Estrutura

- `index.html`: estrutura da página.
- `css/styles.css`: estilos da aplicação.
- `js/app.js`: funcionalidades e referências das imagens.
- `README.md`: apresentação e instruções de uso.
- `CHANGELOG.md`: registro das atualizações.
- `.nojekyll`: arquivo vazio para publicação estática no GitHub Pages.

Não é necessário instalar dependências ou compilar o projeto. Fontes, imagens e a biblioteca html2canvas para exportação PNG são carregadas de serviços externos e dependem de conexão. Caso a geração de PNG falhe, a aplicação oferece a exportação SVG como alternativa.

## Evolução do projeto

O Tracker Pokémon GO está sendo lançado em etapas, seguindo a evolução de suas funcionalidades. Cada atualização amplia os recursos disponíveis para acompanhar sua coleção.

Esta atualização reúne Mega Dex, Safari Urbano e Shundos Iniciais em uma interface com abas. Novas coleções e funcionalidades serão adicionadas nas próximas atualizações.

## Apoio no desenvolvimento

Durante o desenvolvimento deste projeto, utilizei ferramentas de inteligência artificial como apoio no processo, auxiliando na implementação, na organização e na revisão do código. Essas ferramentas serviram como suporte às minhas ideias e decisões sobre o projeto.

## Créditos

Referência de dados e imagens externas: [Dittobase](https://www.dittobase.com/pokemon-go/best-attackers/mega).

Imagens creditadas na aplicação a PokeMiners / Niantic e The Pokémon Company. Projeto de fã, sem afiliação oficial.

Exportação PNG com [html2canvas](https://html2canvas.hertzen.com/).
