# Pokémon GO Tracker

Um tracker de coleção para Pokémon GO, com progresso salvo no navegador.

## Mega Dex: filtros e exportação

A coleção Mega Dex possui 62 entradas de Mega Evoluções e Reversões Primais. O catálogo inclui entradas anunciadas na lista original; a presença de um Pokémon na coleção não indica sua disponibilidade atual no jogo.

- Marcação e desmarcação dos Pokémon obtidos.
- Busca por nome ou número da Pokédex.
- Painel de filtros por status, categoria e tipo.
- Contador, barra e percentual de progresso.
- Imagens externas com alternativa de carregamento.
- Exportação da coleção filtrada em PNG e SVG, com marca d'água.
- Exportação e importação de backup JSON, incluindo backups da primeira versão.
- Limpeza do progresso com confirmação e layout adaptável a telas menores.

## Como usar

Mantenha `index.html` junto das pastas `css/` e `js/` e abra-o em um navegador. Clique nas cartas para marcar ou desmarcar os Pokémon obtidos.

Abra o painel de filtros para combinar status, categoria e tipos. Use a busca para localizar Pokémon e o menu Exportar para escolher PNG, SVG ou backup JSON.

Importar um backup substitui as marcações atuais pelos dados válidos desse arquivo. Exporte um backup antes de substituir ou limpar seu progresso.

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

Esta atualização amplia a Mega Dex com novos filtros e exportação em imagem. Novas coleções e funcionalidades serão adicionadas nas próximas atualizações.

## Apoio no desenvolvimento

Durante o desenvolvimento deste projeto, utilizei ferramentas de inteligência artificial como apoio no processo, auxiliando na implementação, na organização e na revisão do código. Essas ferramentas serviram como suporte às minhas ideias e decisões sobre o projeto.

## Créditos

Referência de dados e imagens externas: [Dittobase](https://www.dittobase.com/pokemon-go/best-attackers/mega).

Imagens creditadas na aplicação a PokeMiners / Niantic e The Pokémon Company. Projeto de fã, sem afiliação oficial.

Exportação PNG com [html2canvas](https://html2canvas.hertzen.com/).
