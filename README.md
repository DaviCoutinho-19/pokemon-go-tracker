# Pokémon GO Tracker

Um tracker de coleção para Pokémon GO, com progresso salvo no navegador.

## Coleções regionais de shinies e shundos

Acompanhe suas coleções de Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Hisui e Paldea. São 1.023 espécies nas abas regionais, com uma forma principal por espécie nesta versão. A aba Outros sai da navegação; as marcações existentes de Meltan e Melmetal continuam preservadas no armazenamento e nos backups.

As três coleções anteriores continuam disponíveis:

- **Mega Dex:** Mega Evoluções e Reversões Primais.
- **Safari Urbano:** tracker de coleção do evento realizado nos dias 26 e 27 de setembro em Rio de Janeiro, Lisboa, Brisbane, Marseille e Munique.
- **Shundos Iniciais:** iniciais de Kanto a Paldea em seus três estágios, com estado Aguardando evento.

Cada coleção possui marcações e progresso independentes.

- Um clique marca shiny; dois cliques marcam shundo nas coleções regionais.
- Duas barras regionais lado a lado: shinies, incluindo shundos, e shundos separadamente.
- Filtros para coletados e faltantes, além de busca e tipos de Pokémon.
- Imagens shiny e avisos para Pokémon ou shinies não liberados conforme os dados desta versão.
- Exportação TXT da visualização atual, dos coletados ou dos faltantes.
- Exportação PNG/SVG da visualização atual, com marca d'água.
- Abas que podem ser ocultadas e restauradas sem apagar o progresso.
- Backup JSON de todas as coleções e das abas ocultas, com importação de backups anteriores.

Os catálogos incluem espécies ainda não lançadas. Os textos dos avisos foram atualizados em 20/10/2026. A disponibilidade não é atualizada automaticamente. A presença de um Pokémon no tracker não confirma sua disponibilidade atual no jogo.

## Como usar

Mantenha `index.html` junto das pastas `css/` e `js/` e abra-o em um navegador. Escolha uma aba em Trackers ou Coleções por região.

Nas coleções regionais, um clique marca shiny e dois cliques marcam shundo. Um shundo também conta no progresso shiny. Pelo teclado, use Enter ou espaço para shiny e Shift + Enter ou Shift + espaço para shundo. Repita a ação correspondente para desmarcar. A marcação shiny responde imediatamente ao primeiro clique. Com filtro de status ativo, uma carta que deixou de corresponder ao filtro permanece brevemente na tela para permitir o duplo clique de shundo, antes de a lista se reorganizar.

Na Mega Dex e no Safari Urbano, clique para marcar ou desmarcar o Pokémon obtido. Nos Shundos Iniciais, um clique marca Tenho e dois cliques marcam Aguardando evento, indicando que você já possui o Pokémon e o reservou para evoluir durante um evento.

Use o ícone de olho ao lado de uma aba para retirá-la da navegação. Abra Abas arquivadas para restaurá-la; as marcações são mantidas.

Abra Filtros para ajustar a visualização. No menu Exportar, selecione o conteúdo da lista TXT e clique em Baixar lista em texto. PNG e SVG utilizam a visualização atual da aba. JSON salva todas as coleções e a lista de abas ocultas.

A importação substitui as marcações das coleções presentes no backup; as outras são preservadas. A configuração de abas ocultas só muda quando essa informação está no arquivo importado. Exporte um backup antes de importar ou limpar o progresso.

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

Esta atualização torna a resposta ao clique imediata nas coleções regionais e melhora a marcação por duplo clique quando há filtros de status ativos. Novas coleções e funcionalidades serão adicionadas nas próximas atualizações.

## Apoio no desenvolvimento

Durante o desenvolvimento deste projeto, utilizei ferramentas de inteligência artificial como apoio no processo, auxiliando na implementação, na organização e na revisão do código. Essas ferramentas serviram como suporte às minhas ideias e decisões sobre o projeto.

## Créditos

Referência de dados e imagens externas: [Dittobase](https://www.dittobase.com/pokemon-go/best-attackers/mega).

Imagens creditadas na aplicação a PokeMiners / Niantic e The Pokémon Company. Projeto de fã, sem afiliação oficial.

Exportação PNG com [html2canvas](https://html2canvas.hertzen.com/).
