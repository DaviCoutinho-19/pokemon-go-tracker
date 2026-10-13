# Pokémon GO Tracker

Um tracker de coleção para Pokémon GO, com progresso salvo no navegador.

## Primeira etapa: Mega Dex

Esta versão contém 62 entradas de Mega Evoluções e Reversões Primais da base histórica, incluindo entradas anunciadas na lista original. Ela preserva esse catálogo e não representa uma lista atualizada de disponibilidade no jogo.

- Imagens dos Pokémon embutidas no JavaScript.
- Marcação e desmarcação dos Pokémon obtidos.
- Busca por nome ou número da Pokédex.
- Filtros Todas, Tenho e Faltam.
- Contador, barra e percentual de progresso.
- Exportação e importação do progresso em JSON.
- Botão para limpar o progresso, com confirmação.
- Layout adaptável a telas menores.

## Como usar

Mantenha `index.html` junto das pastas `css/` e `js/` e abra-o em um navegador. Clique em uma carta para alternar sua marcação; também é possível selecionar a carta pelo teclado e usar Enter ou espaço.

Use a busca e os filtros para localizar Pokémon. O botão Exportar baixa um backup JSON; Importar carrega um backup e substitui as marcações atuais pelos dados válidos desse arquivo.

## Armazenamento do progresso

O progresso fica no armazenamento local do navegador. Ele não é gravado dentro do HTML e não é sincronizado automaticamente entre navegadores, dispositivos ou endereços do site.

Para transferir suas marcações, exporte um backup e importe-o no destino. Os backups pessoais não fazem parte deste repositório.

## Estrutura

- `index.html`: estrutura da página.
- `css/styles.css`: estilos da aplicação.
- `js/app.js`: funcionalidades e imagens embutidas.
- `README.md`: apresentação e instruções de uso.
- `CHANGELOG.md`: registro das etapas publicadas.
- `.nojekyll`: arquivo vazio para publicação estática no GitHub Pages.

Não é necessário instalar dependências ou compilar o projeto. As fontes tipográficas são carregadas do Google Fonts; sem conexão, o navegador utiliza fontes alternativas.

## Evolução do projeto

O Tracker Pokémon GO está sendo lançado em etapas, seguindo a evolução de suas funcionalidades. Cada atualização amplia os recursos disponíveis para acompanhar sua coleção.

Esta primeira versão apresenta a coleção Mega Dex, com marcação dos Pokémon obtidos, busca, filtros e backup do progresso. Novas coleções e funcionalidades serão adicionadas nas próximas atualizações.

## Apoio no desenvolvimento

Durante o desenvolvimento deste projeto, utilizei ferramentas de inteligência artificial como apoio no processo, auxiliando na implementação, na organização e na revisão do código. Essas ferramentas serviram como suporte às minhas ideias e decisões sobre o projeto.

## Créditos

Referência de dados indicada na base original: [Dittobase](https://www.dittobase.com/pokemon-go/best-attackers/mega).

Imagens creditadas na aplicação a PokeMiners / Niantic e The Pokémon Company. Projeto de fã, sem afiliação oficial.
