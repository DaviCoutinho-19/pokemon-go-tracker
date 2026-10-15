

/* ======================================================
   DADOS — Aba 1: Mega Evoluções
   ====================================================== */

const MEGA_LIST = [

    { name: "Mega Venusaur", dex: 3, slug: "venusaur-mega", types: ["Grass", "Poison"], category: "normal" },
    { name: "Mega Charizard Y", dex: 6, slug: "charizard-mega-y", types: ["Fire", "Flying"], category: "normal" },
    { name: "Mega Charizard X", dex: 6, slug: "charizard-mega-x", types: ["Fire", "Dragon"], category: "normal" },
    { name: "Mega Blastoise", dex: 9, slug: "blastoise-mega", types: ["Water"], category: "normal" },
    { name: "Mega Beedrill", dex: 15, slug: "beedrill-mega", types: ["Bug", "Poison"], category: "normal" },
    { name: "Mega Pidgeot", dex: 18, slug: "pidgeot-mega", types: ["Normal", "Flying"], category: "normal" },
    { name: "Mega Raichu Y", dex: 26, slug: "raichu-mega-y", types: ["Electric"], category: "normal" },
    { name: "Mega Raichu X", dex: 26, slug: "raichu-mega-x", types: ["Electric"], category: "normal" },
    { name: "Mega Alakazam", dex: 65, slug: "alakazam-mega", types: ["Psychic"], category: "normal" },
    { name: "Mega Victreebel", dex: 71, slug: "victreebel-mega", types: ["Grass", "Poison"], category: "normal" },
    { name: "Mega Slowbro", dex: 80, slug: "slowbro-mega", types: ["Water", "Psychic"], category: "normal" },
    { name: "Mega Gengar", dex: 94, slug: "gengar-mega", types: ["Ghost", "Poison"], category: "normal" },
    { name: "Mega Kangaskhan", dex: 115, slug: "kangaskhan-mega", types: ["Normal"], category: "normal" },
    { name: "Mega Starmie", dex: 121, slug: "starmie-mega", types: ["Water", "Psychic"], category: "normal" },
    { name: "Mega Pinsir", dex: 127, slug: "pinsir-mega", types: ["Bug", "Flying"], category: "normal" },
    { name: "Mega Gyarados", dex: 130, slug: "gyarados-mega", types: ["Water", "Dark"], category: "normal" },
    { name: "Mega Aerodactyl", dex: 142, slug: "aerodactyl-mega", types: ["Rock", "Flying"], category: "normal" },
    { name: "Mega Dragonite", dex: 149, slug: "dragonite-mega", types: ["Dragon", "Flying"], category: "pseudo" },
    { name: "Mega Mewtwo Y", dex: 150, slug: "mewtwo-mega-y", types: ["Psychic"], category: "legendary" },
    { name: "Mega Mewtwo X", dex: 150, slug: "mewtwo-mega-x", types: ["Psychic", "Fighting"], category: "legendary" },
    { name: "Mega Ampharos", dex: 181, slug: "ampharos-mega", types: ["Electric", "Dragon"], category: "normal" },
    { name: "Mega Steelix", dex: 208, slug: "steelix-mega", types: ["Steel", "Ground"], category: "normal" },
    { name: "Mega Scizor", dex: 212, slug: "scizor-mega", types: ["Bug", "Steel"], category: "normal" },
    { name: "Mega Heracross", dex: 214, slug: "heracross-mega", types: ["Bug", "Fighting"], category: "normal" },
    { name: "Mega Skarmory", dex: 227, slug: "skarmory-mega", types: ["Steel", "Flying"], category: "normal" },
    { name: "Mega Houndoom", dex: 229, slug: "houndoom-mega", types: ["Dark", "Fire"], category: "normal" },
    { name: "Mega Tyranitar", dex: 248, slug: "tyranitar-mega", types: ["Rock", "Dark"], category: "pseudo" },
    { name: "Mega Sceptile", dex: 254, slug: "sceptile-mega", types: ["Grass", "Dragon"], category: "normal" },
    { name: "Mega Blaziken", dex: 257, slug: "blaziken-mega", types: ["Fire", "Fighting"], category: "normal" },
    { name: "Mega Swampert", dex: 260, slug: "swampert-mega", types: ["Water", "Ground"], category: "normal" },
    { name: "Mega Gardevoir", dex: 282, slug: "gardevoir-mega", types: ["Psychic", "Fairy"], category: "normal" },
    { name: "Mega Sableye", dex: 302, slug: "sableye-mega", types: ["Dark", "Ghost"], category: "normal" },
    { name: "Mega Mawile", dex: 303, slug: "mawile-mega", types: ["Steel", "Fairy"], category: "normal" },
    { name: "Mega Aggron", dex: 306, slug: "aggron-mega", types: ["Steel"], category: "normal" },
    { name: "Mega Medicham", dex: 308, slug: "medicham-mega", types: ["Fighting", "Psychic"], category: "normal" },
    { name: "Mega Manectric", dex: 310, slug: "manectric-mega", types: ["Electric"], category: "normal" },
    { name: "Mega Sharpedo", dex: 319, slug: "sharpedo-mega", types: ["Water", "Dark"], category: "normal" },
    { name: "Mega Camerupt", dex: 323, slug: "camerupt-mega", types: ["Fire", "Ground"], category: "normal" },
    { name: "Mega Altaria", dex: 334, slug: "altaria-mega", types: ["Dragon", "Fairy"], category: "normal" },
    { name: "Mega Banette", dex: 354, slug: "banette-mega", types: ["Ghost"], category: "normal" },
    { name: "Mega Absol", dex: 359, slug: "absol-mega", types: ["Dark"], category: "normal" },
    { name: "Mega Glalie", dex: 362, slug: "glalie-mega", types: ["Ice"], category: "normal" },
    { name: "Mega Salamence", dex: 373, slug: "salamence-mega", types: ["Dragon", "Flying"], category: "pseudo" },
    { name: "Mega Metagross", dex: 376, slug: "metagross-mega", types: ["Steel", "Psychic"], category: "pseudo" },
    { name: "Mega Latias", dex: 380, slug: "latias-mega", types: ["Dragon", "Psychic"], category: "legendary" },
    { name: "Mega Latios", dex: 381, slug: "latios-mega", types: ["Dragon", "Psychic"], category: "legendary" },
    { name: "Primal Kyogre", dex: 382, slug: "kyogre-primal", types: ["Water"], category: "legendary" },
    { name: "Primal Groudon", dex: 383, slug: "groudon-primal", types: ["Ground", "Fire"], category: "legendary" },
    { name: "Mega Rayquaza", dex: 384, slug: "rayquaza-mega", types: ["Dragon", "Flying"], category: "legendary" },
    { name: "Mega Staraptor", dex: 398, slug: "staraptor-mega", types: ["Fighting", "Flying"], category: "normal" },
    { name: "Mega Lopunny", dex: 428, slug: "lopunny-mega", types: ["Normal", "Fighting"], category: "normal" },
    { name: "Mega Garchomp", dex: 445, slug: "garchomp-mega", types: ["Dragon", "Ground"], category: "pseudo" },
    { name: "Mega Lucario", dex: 448, slug: "lucario-mega", types: ["Fighting", "Steel"], category: "normal" },
    { name: "Mega Abomasnow", dex: 460, slug: "abomasnow-mega", types: ["Grass", "Ice"], category: "normal" },
    { name: "Mega Gallade", dex: 475, slug: "gallade-mega", types: ["Psychic", "Fighting"], category: "normal" },
    { name: "Mega Audino", dex: 531, slug: "audino-mega", types: ["Normal", "Fairy"], category: "normal" },
    { name: "Mega Chesnaught", dex: 652, slug: "chesnaught-mega", types: ["Grass", "Fighting"], category: "normal" },
    { name: "Mega Delphox", dex: 655, slug: "delphox-mega", types: ["Fire", "Psychic"], category: "normal" },
    { name: "Mega Greninja", dex: 658, slug: "greninja-mega", types: ["Water", "Dark"], category: "normal" },
    { name: "Mega Malamar", dex: 687, slug: "malamar-mega", types: ["Dark", "Psychic"], category: "normal" },
    { name: "Mega Diancie", dex: 719, slug: "diancie-mega", types: ["Rock", "Fairy"], category: "mythical" },
    { name: "Mega Falinks", dex: 870, slug: "falinks-mega", types: ["Fighting"], category: "normal" }

];

/* ======================================================
   DADOS — Aba 2: Safari Urbano (City Safari)
   Somente os 29 Pokémon considerados.
   Eeveelutions e Pokémon de ovos foram desconsiderados.
   ====================================================== */

const SAFARI_LIST = [

    /*
     * O slug do traje segue a data de estreia na dittobase
     * ("may-2023"), e não um nome descritivo como "explorer-hat".
     */
    { name: "Eevee (Chapéu de Explorador)", dex: 133, slug: "eevee-may-2023", types: ["Normal"], category: "research" },

    { name: "Jigglypuff", dex: 39, slug: "jigglypuff", types: ["Normal", "Fairy"], category: "wild" },
    { name: "Abra", dex: 63, slug: "abra", types: ["Psychic"], category: "wild" },
    { name: "Slowpoke", dex: 79, slug: "slowpoke", types: ["Water", "Psychic"], category: "wild" },
    { name: "Totodile", dex: 158, slug: "totodile", types: ["Water"], category: "wild" },
    { name: "Mareep", dex: 179, slug: "mareep", types: ["Electric"], category: "wild" },
    { name: "Marill", dex: 183, slug: "marill", types: ["Water", "Fairy"], category: "wild" },
    { name: "Hoppip", dex: 187, slug: "hoppip", types: ["Grass", "Flying"], category: "wild" },

    { name: "Unown B", dex: 201, slug: "unown-b", types: ["Psychic"], category: "unown" },
    { name: "Unown L", dex: 201, slug: "unown-l", types: ["Psychic"], category: "unown" },
    { name: "Unown M", dex: 201, slug: "unown-m", types: ["Psychic"], category: "unown" },
    { name: "Unown R", dex: 201, slug: "unown-r", types: ["Psychic"], category: "unown" },

    { name: "Stantler", dex: 234, slug: "stantler", types: ["Normal"], category: "wild" },
    { name: "Miltank", dex: 241, slug: "miltank", types: ["Normal"], category: "wild" },
    { name: "Wingull", dex: 278, slug: "wingull", types: ["Water", "Flying"], category: "wild" },
    { name: "Baltoy", dex: 343, slug: "baltoy", types: ["Ground", "Psychic"], category: "wild" },
    { name: "Buizel", dex: 418, slug: "buizel", types: ["Water"], category: "wild" },
    { name: "Lillipup", dex: 506, slug: "lillipup", types: ["Normal"], category: "wild" },
    { name: "Petilil", dex: 548, slug: "petilil", types: ["Grass"], category: "wild" },
    { name: "Yamask", dex: 562, slug: "yamask", types: ["Ghost"], category: "wild" },
    { name: "Gothita", dex: 574, slug: "gothita", types: ["Psychic"], category: "wild" },
    { name: "Flabébé (Laranja)", dex: 669, slug: "flabebe-orange", types: ["Fairy"], category: "wild" },
    { name: "Binacle", dex: 688, slug: "binacle", types: ["Rock", "Water"], category: "wild" },
    { name: "Clauncher", dex: 692, slug: "clauncher", types: ["Water"], category: "wild" },
    { name: "Hawlucha", dex: 701, slug: "hawlucha", types: ["Fighting", "Flying"], category: "wild" },
    { name: "Mudbray", dex: 749, slug: "mudbray", types: ["Ground"], category: "wild" },
    { name: "Oranguru", dex: 765, slug: "oranguru", types: ["Normal", "Psychic"], category: "wild" },
    { name: "Komala", dex: 775, slug: "komala", types: ["Normal"], category: "wild" },
    { name: "Flamigo", dex: 973, slug: "flamigo", types: ["Flying", "Fighting"], category: "wild" }

];

/* ======================================================
   DADOS — Aba 3: Shundos dos Iniciais
   Shundo = Shiny + IV 100%.
   Todas as 9 regiões com iniciais lançados em Pokémon GO,
   nas 3 formas de cada linha, em ordem de Pokédex.
   Hisui fica de fora: são regionais de outras regiões.
   ====================================================== */

const STARTERS_LIST = [

    /* --- Kanto --- */
    { name: "Bulbasaur", dex: 1, slug: "bulbasaur", types: ["Grass", "Poison"], category: "stage1", region: "kanto" },
    { name: "Ivysaur", dex: 2, slug: "ivysaur", types: ["Grass", "Poison"], category: "stage2", region: "kanto" },
    { name: "Venusaur", dex: 3, slug: "venusaur", types: ["Grass", "Poison"], category: "stage3", region: "kanto" },
    { name: "Charmander", dex: 4, slug: "charmander", types: ["Fire"], category: "stage1", region: "kanto" },
    { name: "Charmeleon", dex: 5, slug: "charmeleon", types: ["Fire"], category: "stage2", region: "kanto" },
    { name: "Charizard", dex: 6, slug: "charizard", types: ["Fire", "Flying"], category: "stage3", region: "kanto" },
    { name: "Squirtle", dex: 7, slug: "squirtle", types: ["Water"], category: "stage1", region: "kanto" },
    { name: "Wartortle", dex: 8, slug: "wartortle", types: ["Water"], category: "stage2", region: "kanto" },
    { name: "Blastoise", dex: 9, slug: "blastoise", types: ["Water"], category: "stage3", region: "kanto" },

    /* --- Johto --- */
    { name: "Chikorita", dex: 152, slug: "chikorita", types: ["Grass"], category: "stage1", region: "johto" },
    { name: "Bayleef", dex: 153, slug: "bayleef", types: ["Grass"], category: "stage2", region: "johto" },
    { name: "Meganium", dex: 154, slug: "meganium", types: ["Grass"], category: "stage3", region: "johto" },
    { name: "Cyndaquil", dex: 155, slug: "cyndaquil", types: ["Fire"], category: "stage1", region: "johto" },
    { name: "Quilava", dex: 156, slug: "quilava", types: ["Fire"], category: "stage2", region: "johto" },
    { name: "Typhlosion", dex: 157, slug: "typhlosion", types: ["Fire"], category: "stage3", region: "johto" },
    { name: "Totodile", dex: 158, slug: "totodile", types: ["Water"], category: "stage1", region: "johto" },
    { name: "Croconaw", dex: 159, slug: "croconaw", types: ["Water"], category: "stage2", region: "johto" },
    { name: "Feraligatr", dex: 160, slug: "feraligatr", types: ["Water"], category: "stage3", region: "johto" },

    /* --- Hoenn --- */
    { name: "Treecko", dex: 252, slug: "treecko", types: ["Grass"], category: "stage1", region: "hoenn" },
    { name: "Grovyle", dex: 253, slug: "grovyle", types: ["Grass"], category: "stage2", region: "hoenn" },
    { name: "Sceptile", dex: 254, slug: "sceptile", types: ["Grass"], category: "stage3", region: "hoenn" },
    { name: "Torchic", dex: 255, slug: "torchic", types: ["Fire"], category: "stage1", region: "hoenn" },
    { name: "Combusken", dex: 256, slug: "combusken", types: ["Fire", "Fighting"], category: "stage2", region: "hoenn" },
    { name: "Blaziken", dex: 257, slug: "blaziken", types: ["Fire", "Fighting"], category: "stage3", region: "hoenn" },
    { name: "Mudkip", dex: 258, slug: "mudkip", types: ["Water"], category: "stage1", region: "hoenn" },
    { name: "Marshtomp", dex: 259, slug: "marshtomp", types: ["Water", "Ground"], category: "stage2", region: "hoenn" },
    { name: "Swampert", dex: 260, slug: "swampert", types: ["Water", "Ground"], category: "stage3", region: "hoenn" },

    /* --- Sinnoh --- */
    { name: "Turtwig", dex: 387, slug: "turtwig", types: ["Grass"], category: "stage1", region: "sinnoh" },
    { name: "Grotle", dex: 388, slug: "grotle", types: ["Grass"], category: "stage2", region: "sinnoh" },
    { name: "Torterra", dex: 389, slug: "torterra", types: ["Grass", "Ground"], category: "stage3", region: "sinnoh" },
    { name: "Chimchar", dex: 390, slug: "chimchar", types: ["Fire"], category: "stage1", region: "sinnoh" },
    { name: "Monferno", dex: 391, slug: "monferno", types: ["Fire", "Fighting"], category: "stage2", region: "sinnoh" },
    { name: "Infernape", dex: 392, slug: "infernape", types: ["Fire", "Fighting"], category: "stage3", region: "sinnoh" },
    { name: "Piplup", dex: 393, slug: "piplup", types: ["Water"], category: "stage1", region: "sinnoh" },
    { name: "Prinplup", dex: 394, slug: "prinplup", types: ["Water"], category: "stage2", region: "sinnoh" },
    { name: "Empoleon", dex: 395, slug: "empoleon", types: ["Water", "Steel"], category: "stage3", region: "sinnoh" },

    /* --- Unova --- */
    { name: "Snivy", dex: 495, slug: "snivy", types: ["Grass"], category: "stage1", region: "unova" },
    { name: "Servine", dex: 496, slug: "servine", types: ["Grass"], category: "stage2", region: "unova" },
    { name: "Serperior", dex: 497, slug: "serperior", types: ["Grass"], category: "stage3", region: "unova" },
    { name: "Tepig", dex: 498, slug: "tepig", types: ["Fire"], category: "stage1", region: "unova" },
    { name: "Pignite", dex: 499, slug: "pignite", types: ["Fire", "Fighting"], category: "stage2", region: "unova" },
    { name: "Emboar", dex: 500, slug: "emboar", types: ["Fire", "Fighting"], category: "stage3", region: "unova" },
    { name: "Oshawott", dex: 501, slug: "oshawott", types: ["Water"], category: "stage1", region: "unova" },
    { name: "Dewott", dex: 502, slug: "dewott", types: ["Water"], category: "stage2", region: "unova" },
    { name: "Samurott", dex: 503, slug: "samurott", types: ["Water"], category: "stage3", region: "unova" },

    /* --- Kalos --- */
    { name: "Chespin", dex: 650, slug: "chespin", types: ["Grass"], category: "stage1", region: "kalos" },
    { name: "Quilladin", dex: 651, slug: "quilladin", types: ["Grass"], category: "stage2", region: "kalos" },
    { name: "Chesnaught", dex: 652, slug: "chesnaught", types: ["Grass", "Fighting"], category: "stage3", region: "kalos" },
    { name: "Fennekin", dex: 653, slug: "fennekin", types: ["Fire"], category: "stage1", region: "kalos" },
    { name: "Braixen", dex: 654, slug: "braixen", types: ["Fire"], category: "stage2", region: "kalos" },
    { name: "Delphox", dex: 655, slug: "delphox", types: ["Fire", "Psychic"], category: "stage3", region: "kalos" },
    { name: "Froakie", dex: 656, slug: "froakie", types: ["Water"], category: "stage1", region: "kalos" },
    { name: "Frogadier", dex: 657, slug: "frogadier", types: ["Water"], category: "stage2", region: "kalos" },
    { name: "Greninja", dex: 658, slug: "greninja", types: ["Water", "Dark"], category: "stage3", region: "kalos" },

    /* --- Alola --- */
    { name: "Rowlet", dex: 722, slug: "rowlet", types: ["Grass", "Flying"], category: "stage1", region: "alola" },
    { name: "Dartrix", dex: 723, slug: "dartrix", types: ["Grass", "Flying"], category: "stage2", region: "alola" },
    { name: "Decidueye", dex: 724, slug: "decidueye", types: ["Grass", "Ghost"], category: "stage3", region: "alola" },
    { name: "Litten", dex: 725, slug: "litten", types: ["Fire"], category: "stage1", region: "alola" },
    { name: "Torracat", dex: 726, slug: "torracat", types: ["Fire"], category: "stage2", region: "alola" },
    { name: "Incineroar", dex: 727, slug: "incineroar", types: ["Fire", "Dark"], category: "stage3", region: "alola" },
    { name: "Popplio", dex: 728, slug: "popplio", types: ["Water"], category: "stage1", region: "alola" },
    { name: "Brionne", dex: 729, slug: "brionne", types: ["Water"], category: "stage2", region: "alola" },
    { name: "Primarina", dex: 730, slug: "primarina", types: ["Water", "Fairy"], category: "stage3", region: "alola" },

    /* --- Galar --- */
    { name: "Grookey", dex: 810, slug: "grookey", types: ["Grass"], category: "stage1", region: "galar" },
    { name: "Thwackey", dex: 811, slug: "thwackey", types: ["Grass"], category: "stage2", region: "galar" },
    { name: "Rillaboom", dex: 812, slug: "rillaboom", types: ["Grass"], category: "stage3", region: "galar" },
    { name: "Scorbunny", dex: 813, slug: "scorbunny", types: ["Fire"], category: "stage1", region: "galar" },
    { name: "Raboot", dex: 814, slug: "raboot", types: ["Fire"], category: "stage2", region: "galar" },
    { name: "Cinderace", dex: 815, slug: "cinderace", types: ["Fire"], category: "stage3", region: "galar" },
    { name: "Sobble", dex: 816, slug: "sobble", types: ["Water"], category: "stage1", region: "galar" },
    { name: "Drizzile", dex: 817, slug: "drizzile", types: ["Water"], category: "stage2", region: "galar" },
    { name: "Inteleon", dex: 818, slug: "inteleon", types: ["Water"], category: "stage3", region: "galar" },

    /* --- Paldea --- */
    { name: "Sprigatito", dex: 906, slug: "sprigatito", types: ["Grass"], category: "stage1", region: "paldea" },
    { name: "Floragato", dex: 907, slug: "floragato", types: ["Grass"], category: "stage2", region: "paldea" },
    { name: "Meowscarada", dex: 908, slug: "meowscarada", types: ["Grass", "Dark"], category: "stage3", region: "paldea" },
    { name: "Fuecoco", dex: 909, slug: "fuecoco", types: ["Fire"], category: "stage1", region: "paldea" },
    { name: "Crocalor", dex: 910, slug: "crocalor", types: ["Fire"], category: "stage2", region: "paldea" },
    { name: "Skeledirge", dex: 911, slug: "skeledirge", types: ["Fire", "Ghost"], category: "stage3", region: "paldea" },
    { name: "Quaxly", dex: 912, slug: "quaxly", types: ["Water"], category: "stage1", region: "paldea" },
    { name: "Quaxwell", dex: 913, slug: "quaxwell", types: ["Water"], category: "stage2", region: "paldea" },
    { name: "Quaquaval", dex: 914, slug: "quaquaval", types: ["Water", "Fighting"], category: "stage3", region: "paldea" }

];

/* ======================================================
   Configuração das abas
   ====================================================== */

const TABS = {

    mega: {
        id: "mega",
        list: MEGA_LIST,
        storageKey: "megaDexProgress_v1",
        pageTitle: "Mega Dex",
        pageSubtitle:
            "Marque cada Mega Evolução que você já possui em Pokémon GO. " +
            "Seu progresso fica salvo neste navegador.",
        exportTitle: "Mega Dex",
        exportSubtitle: "Meu progresso de Mega Evoluções",
        exportFilePrefix: "mega-dex",
        unitLabel: "capturadas",
        searchPlaceholder: "Buscar por nome ou número...",
        hasWaitingState: false,
        useShinyImages: false,
        categoryTitle: "Categoria",
        categoryLabels: {
            normal: "Normal",
            pseudo: "Pseudo-lendário",
            legendary: "Lendário",
            mythical: "Mítico"
        },
        statusLabels: {
            all: "Todas",
            owned: "Tenho",
            missing: "Faltam"
        },
        emptyMessage: "Nenhuma Mega Evolução encontrada com esses filtros.",
        allLabel: "Todos os Pokémon",
        footerNote:
            "Lista de Mega Evoluções e Reversões Primais disponíveis (e anunciadas) em Pokémon GO.",
        footerSource: "https://www.dittobase.com/pokemon-go/best-attackers/mega"
    },

    safari: {
        id: "safari",
        list: SAFARI_LIST,
        storageKey: "citySafariMunich2026_v1",
        pageTitle: "Safari Urbano",
        pageSubtitle:
            "Tracker de coleção do evento Safari Urbano, realizado nos dias 26 e 27 de setembro " +
            "em Rio de Janeiro, Lisboa, Brisbane, Marseille e Munique. " +
            "Marque cada Pokémon que você já capturou durante o evento.",
        exportTitle: "Safari Urbano",
        exportSubtitle: "Safari Urbano · 26 e 27 de setembro · Rio de Janeiro, Lisboa, Brisbane, Marseille e Munique",
        exportFilePrefix: "safari-urbano",
        unitLabel: "capturados",
        searchPlaceholder: "Buscar Pokémon do evento...",
        hasWaitingState: false,
        useShinyImages: false,
        categoryTitle: "Como aparece",
        categoryLabels: {
            wild: "Selvagem",
            research: "Pesquisa Especial",
            unown: "Unown"
        },
        statusLabels: {
            all: "Todos",
            owned: "Capturei",
            missing: "Faltam"
        },
        emptyMessage: "Nenhum Pokémon do evento encontrado com esses filtros.",
        allLabel: "Todos do evento",
        footerNote:
            "Pokémon selvagens e de Pesquisa Especial do evento Safari Urbano. " +
            "Eeveelutions e Pokémon de ovos não entram nesta contagem.",
        footerSource:
            "https://www.dittobase.com/pokemon-go/pokedex"
    },

    starters: {
        id: "starters",
        list: STARTERS_LIST,
        storageKey: "shundoStarters_v1",
        pageTitle: "Shundos Iniciais",
        pageSubtitle:
            "Coleção de Shundos (Shiny + IV 100%) dos iniciais de todas as regiões, " +
            "nas 3 formas. Um clique marca o que você já tem; dois cliques marcam " +
            "em amarelo o que você tem mas está guardando para evoluir num evento.",
        exportTitle: "Shundos Iniciais",
        exportSubtitle: "Shiny + IV 100% · Iniciais de todas as regiões",
        exportFilePrefix: "shundos-iniciais",
        unitLabel: "shundos",
        searchPlaceholder: "Buscar inicial, região ou tipo...",
        hasWaitingState: true,
        useShinyImages: true,
        categoryTitle: "Estágio",
        categoryLabels: {
            stage1: "1º estágio",
            stage2: "2º estágio",
            stage3: "3º estágio"
        },
        statusLabels: {
            all: "Todos",
            owned: "Tenho",
            waiting: "Aguardando evento",
            caught: "Tenho + aguardando",
            missing: "Faltam"
        },
        statusOrder: ["all", "owned", "waiting", "caught", "missing"],
        regionTitle: "Região",
        regionLabels: {
            kanto: "Kanto",
            johto: "Johto",
            hoenn: "Hoenn",
            sinnoh: "Sinnoh",
            unova: "Unova",
            kalos: "Kalos",
            alola: "Alola",
            galar: "Galar",
            paldea: "Paldea"
        },
        emptyMessage: "Nenhum inicial encontrado com esses filtros.",
        allLabel: "Todos os iniciais",
        footerNote:
            "Iniciais de Kanto a Paldea nas 3 formas, com as artes shiny. " +
            "Hisui fica de fora: suas linhas são variantes regionais de outras regiões.",
        footerSource: "https://www.dittobase.com/pokemon-go/pokedex"
    }

};

/* ======================================================
   Constantes compartilhadas
   ====================================================== */

const TYPE_LABELS = {
    Normal: "Normal",
    Fire: "Fogo",
    Water: "Água",
    Electric: "Elétrico",
    Grass: "Grama",
    Ice: "Gelo",
    Fighting: "Lutador",
    Poison: "Venenoso",
    Ground: "Terrestre",
    Flying: "Voador",
    Psychic: "Psíquico",
    Bug: "Inseto",
    Rock: "Pedra",
    Ghost: "Fantasma",
    Dragon: "Dragão",
    Dark: "Sombrio",
    Steel: "Aço",
    Fairy: "Fada"
};

const TYPE_COLORS = {
    Normal: "#a8a77a",
    Fire: "#ee8130",
    Water: "#6390f0",
    Electric: "#f7d02c",
    Grass: "#7ac74c",
    Ice: "#96d9d6",
    Fighting: "#c22e28",
    Poison: "#a33ea1",
    Ground: "#e2bf65",
    Flying: "#a98ff3",
    Psychic: "#f95587",
    Bug: "#a6b91a",
    Rock: "#b6a136",
    Ghost: "#735797",
    Dragon: "#6f35fc",
    Dark: "#705746",
    Steel: "#b7b7ce",
    Fairy: "#d685ad"
};

const TYPE_ORDER = [
    "Normal", "Fire", "Water", "Electric", "Grass", "Ice",
    "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug",
    "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
];

/* Marcações possíveis de um Pokémon */
const MARK_NONE = "none";
const MARK_OWNED = "owned";
const MARK_WAITING = "waiting";

/* ======================================================
   Estado
   ====================================================== */

let currentTabId = "mega";

const state = {};

Object.keys(TABS).forEach(tabId => {

    const cfg = TABS[tabId];

    let stored = {};

    try {
        stored = JSON.parse(localStorage.getItem(cfg.storageKey)) || {};
    } catch (e) {
        stored = {};
    }

    /*
     * Normaliza para o formato de marcação em texto.
     * Backups antigos guardavam "true", que equivale a "owned".
     */
    const marks = {};

    Object.keys(stored).forEach(slug => {

        const value = stored[slug];

        if (value === true || value === MARK_OWNED) {
            marks[slug] = MARK_OWNED;
        } else if (value === MARK_WAITING) {
            marks[slug] = MARK_WAITING;
        }

    });

    state[tabId] = {
        marks: marks,
        search: "",
        statusFilter: "all",
        selectedCategories: new Set(),
        selectedRegions: new Set(),
        selectedTypes: new Set()
    };

});

/* Cache de imagens: chave "tabId:slug" -> URL que funcionou. */
const imageCache = {};

/* ======================================================
   Elementos
   ====================================================== */

const grid = document.getElementById("grid");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const progressNum = document.getElementById("progressNum");
const progressBar = document.getElementById("progressBar");
const progressWaitBar = document.getElementById("progressWaitBar");
const progressLabel = document.getElementById("progressLabel");

const tabs = document.getElementById("tabs");
const legend = document.getElementById("legend");

const searchInput = document.getElementById("searchInput");

const filterToggle = document.getElementById("filterToggle");
const filterPanelWrap = document.getElementById("filterPanelWrap");
const filterBadge = document.getElementById("filterBadge");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const activeSummary = document.getElementById("activeSummary");

const statusFilterOptions = document.getElementById("statusFilterOptions");
const categoryFilterSection = document.getElementById("categoryFilterSection");
const categoryFilterTitle = document.getElementById("categoryFilterTitle");
const categoryFilterOptions = document.getElementById("categoryFilterOptions");
const regionFilterSection = document.getElementById("regionFilterSection");
const regionFilterTitle = document.getElementById("regionFilterTitle");
const regionFilterOptions = document.getElementById("regionFilterOptions");
const typeFilterOptions = document.getElementById("typeFilterOptions");

const exportToggle = document.getElementById("exportToggle");
const exportDropdown = document.getElementById("exportDropdown");
const exportPngBtn = document.getElementById("exportPngBtn");
const exportSvgBtn = document.getElementById("exportSvgBtn");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const importJsonBtn = document.getElementById("importJsonBtn");
const importFile = document.getElementById("importFile");

const footerNote = document.getElementById("footerNote");
const footerSource = document.getElementById("footerSource");

const toast = document.getElementById("toast");
const exportStage = document.getElementById("exportStage");

/* ======================================================
   Helpers
   ====================================================== */

function config() {
    return TABS[currentTabId];
}

function st() {
    return state[currentTabId];
}

function list() {
    return config().list;
}

/* A chave precisa do estágio: Totodile aparece em duas abas. */
function keyOf(p) {
    return p.slug;
}

function markOf(p, tabId) {

    const target = tabId || currentTabId;
    const value = state[target].marks[keyOf(p)];

    if (value === MARK_OWNED) {
        return MARK_OWNED;
    }

    if (value === MARK_WAITING) {
        return MARK_WAITING;
    }

    return MARK_NONE;
}

/* "Tenho de alguma forma" = verde ou amarelo. */
function isCaught(p, tabId) {
    return markOf(p, tabId) !== MARK_NONE;
}

function setMark(p, mark) {

    if (mark === MARK_NONE) {
        delete st().marks[keyOf(p)];
    } else {
        st().marks[keyOf(p)] = mark;
    }

    persist();
}

function persist() {
    try {
        localStorage.setItem(
            config().storageKey,
            JSON.stringify(st().marks)
        );
    } catch (e) {
        showToast("Não foi possível salvar o progresso neste navegador.");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

function statusOrder() {
    return config().statusOrder || ["all", "owned", "missing"];
}

/* ======================================================
   Imagens
   ====================================================== */

/*
 * Devolve a lista de URLs candidatas, em ordem de preferência.
 * Nas abas shiny tentamos primeiro a arte shiny e caímos para a
 * normal caso ela não exista no CDN.
 */
function imageCandidates(p) {

    const base = "https://assets.dittobase.com/go/";
    const id = p.dex + "-" + p.slug;

    const urls = [];

    if (config().useShinyImages) {
        urls.push(base + "pokemon/" + id + "-shiny.png");
    }

    urls.push(base + "pokemon/" + id + ".png");
    urls.push(base + "pokemon-placeholder/" + id + ".png");

    return urls;
}

/*
 * A dittobase serve as imagens SEM o cabeçalho CORS, o que impede o
 * html2canvas de desenhá-las. Este proxy devolve a mesma imagem com
 * CORS liberado e é usado apenas nas exportações.
 */
function proxied(url) {

    const clean = url.replace(/^https?:\/\//, "");

    return "https://images.weserv.nl/?url=" + encodeURIComponent(clean);
}

function attachImageFallback(img, p) {

    const urls = imageCandidates(p);
    const cacheKey = currentTabId + ":" + p.slug;

    /* Já sabemos qual URL funciona: usa direto, sem piscar. */
    if (imageCache[cacheKey]) {
        img.src = imageCache[cacheKey];
        return;
    }

    let index = 0;

    img.addEventListener("load", function () {
        imageCache[cacheKey] = this.src;
    });

    img.addEventListener("error", function () {

        index += 1;

        if (index < urls.length) {
            this.src = urls[index];
        } else {
            this.style.opacity = "0.12";
        }

    });

    img.src = urls[0];
}

function loadImageAsDataURL(url) {

    return new Promise(resolve => {

        const img = new Image();

        img.crossOrigin = "anonymous";

        img.onload = function () {

            try {

                const canvas = document.createElement("canvas");

                canvas.width = img.naturalWidth || 160;
                canvas.height = img.naturalHeight || 160;

                canvas.getContext("2d").drawImage(img, 0, 0);

                resolve(canvas.toDataURL("image/png"));

            } catch (e) {
                resolve(null);
            }

        };

        img.onerror = function () {
            resolve(null);
        };

        img.src = proxied(url);

    });

}

/* Percorre as URLs candidatas até uma virar data URL. */
async function resolvePokemonDataURL(p) {

    const urls = imageCandidates(p);

    for (const url of urls) {

        const data = await loadImageAsDataURL(url);

        if (data) {
            return data;
        }

    }

    return null;
}

/* ======================================================
   Progresso
   ====================================================== */

function updateProgress() {

    const total = list().length;

    const ownedCount = list().filter(
        p => markOf(p) === MARK_OWNED
    ).length;

    const waitingCount = list().filter(
        p => markOf(p) === MARK_WAITING
    ).length;

    const caught = ownedCount + waitingCount;

    const pct = total > 0 ? Math.round((caught / total) * 100) : 0;

    progressNum.innerHTML =
        caught +
        '<span class="total">/ ' + total + ' ' + config().unitLabel + '</span>';

    progressBar.style.width =
        (total > 0 ? (ownedCount / total) * 100 : 0) + "%";

    progressWaitBar.style.width =
        (total > 0 ? (waitingCount / total) * 100 : 0) + "%";

    if (config().hasWaitingState && waitingCount > 0) {
        progressLabel.textContent =
            pct + "% completo · " + waitingCount + " aguardando evento";
    } else {
        progressLabel.textContent = pct + "% completo";
    }

    updateTabCounts();
}

function updateTabCounts() {

    document.querySelectorAll("[data-count]").forEach(el => {

        const tabId = el.dataset.count;
        const cfg = TABS[tabId];

        const caught = cfg.list.filter(p => isCaught(p, tabId)).length;

        el.textContent = caught + "/" + cfg.list.length;

    });

}

/* ======================================================
   Filtros
   ====================================================== */

function matchesFilters(p) {

    const s = st();
    const mark = markOf(p);

    if (s.statusFilter === "owned" && mark !== MARK_OWNED) {
        return false;
    }

    if (s.statusFilter === "waiting" && mark !== MARK_WAITING) {
        return false;
    }

    if (s.statusFilter === "caught" && mark === MARK_NONE) {
        return false;
    }

    if (s.statusFilter === "missing" && mark !== MARK_NONE) {
        return false;
    }

    if (
        s.selectedCategories.size > 0 &&
        !s.selectedCategories.has(p.category)
    ) {
        return false;
    }

    if (
        s.selectedRegions.size > 0 &&
        !s.selectedRegions.has(p.region)
    ) {
        return false;
    }

    if (
        s.selectedTypes.size > 0 &&
        !p.types.some(type => s.selectedTypes.has(type))
    ) {
        return false;
    }

    if (s.search) {

        const q = s.search.toLowerCase();

        const inName = p.name.toLowerCase().includes(q);
        const inDex = String(p.dex).includes(q);

        const inTypes = p.types.some(
            type => TYPE_LABELS[type].toLowerCase().includes(q)
        );

        const categoryLabel = config().categoryLabels[p.category] || "";
        const inCategory = categoryLabel.toLowerCase().includes(q);

        const regionLabel =
            p.region && config().regionLabels
                ? config().regionLabels[p.region] || ""
                : "";

        const inRegion = regionLabel.toLowerCase().includes(q);

        if (!inName && !inDex && !inTypes && !inCategory && !inRegion) {
            return false;
        }
    }

    return true;
}

function buildChip(className, labelText, checked, type, onChange, colorVar) {

    const label = document.createElement("label");

    label.className = "filter-chip " + className + (checked ? " active" : "");

    if (colorVar) {
        label.style.setProperty("--type-color", colorVar);
    }

    const input = document.createElement("input");

    input.type = type;
    input.checked = checked;

    if (type === "radio") {
        input.name = "statusFilter";
    }

    label.appendChild(input);

    if (colorVar) {
        const dot = document.createElement("span");
        dot.className = "type-dot";
        label.appendChild(dot);
    }

    const text = document.createElement("span");
    text.textContent = labelText;
    label.appendChild(text);

    input.addEventListener("change", () => onChange(input));

    return label;
}

function renderStatusFilters() {

    const labels = config().statusLabels;

    statusFilterOptions.innerHTML = "";

    statusOrder().forEach(value => {

        const chip = buildChip(
            "status-chip",
            labels[value],
            st().statusFilter === value,
            "radio",
            () => {
                st().statusFilter = value;
                updateFilterChips();
                render();
            }
        );

        statusFilterOptions.appendChild(chip);

    });

}

function renderCategoryFilters() {

    const labels = config().categoryLabels;

    categoryFilterTitle.textContent = config().categoryTitle;
    categoryFilterOptions.innerHTML = "";

    const present = new Set();
    list().forEach(p => present.add(p.category));

    Object.keys(labels)
        .filter(key => present.has(key))
        .forEach(key => {

            const chip = buildChip(
                "category-chip",
                labels[key],
                st().selectedCategories.has(key),
                "checkbox",
                input => {

                    if (input.checked) {
                        st().selectedCategories.add(key);
                    } else {
                        st().selectedCategories.delete(key);
                    }

                    updateFilterChips();
                    render();
                }
            );

            categoryFilterOptions.appendChild(chip);

        });

}

function renderRegionFilters() {

    const labels = config().regionLabels;

    if (!labels) {
        regionFilterSection.classList.add("hidden");
        regionFilterOptions.innerHTML = "";
        return;
    }

    regionFilterSection.classList.remove("hidden");
    regionFilterTitle.textContent = config().regionTitle || "Região";
    regionFilterOptions.innerHTML = "";

    const present = new Set();
    list().forEach(p => present.add(p.region));

    Object.keys(labels)
        .filter(key => present.has(key))
        .forEach(key => {

            const chip = buildChip(
                "region-chip",
                labels[key],
                st().selectedRegions.has(key),
                "checkbox",
                input => {

                    if (input.checked) {
                        st().selectedRegions.add(key);
                    } else {
                        st().selectedRegions.delete(key);
                    }

                    updateFilterChips();
                    render();
                }
            );

            regionFilterOptions.appendChild(chip);

        });

}

function renderTypeFilters() {

    typeFilterOptions.innerHTML = "";

    const present = new Set();
    list().forEach(p => p.types.forEach(type => present.add(type)));

    TYPE_ORDER
        .filter(type => present.has(type))
        .forEach(type => {

            const chip = buildChip(
                "type-chip",
                TYPE_LABELS[type],
                st().selectedTypes.has(type),
                "checkbox",
                input => {

                    if (input.checked) {
                        st().selectedTypes.add(type);
                    } else {
                        st().selectedTypes.delete(type);
                    }

                    updateFilterChips();
                    render();
                },
                TYPE_COLORS[type]
            );

            typeFilterOptions.appendChild(chip);

        });

}

function updateFilterChips() {

    document
        .querySelectorAll(
            ".status-chip, .category-chip, .region-chip, .type-chip"
        )
        .forEach(chip => {
            chip.classList.toggle("active", chip.querySelector("input").checked);
        });

    const s = st();

    const totalActive =
        (s.statusFilter !== "all" ? 1 : 0) +
        s.selectedCategories.size +
        s.selectedRegions.size +
        s.selectedTypes.size;

    filterBadge.textContent = totalActive;

    updateActiveSummary();
}

function activeFilterLabels() {

    const s = st();
    const active = [];

    if (s.statusFilter !== "all") {
        active.push(config().statusLabels[s.statusFilter]);
    }

    s.selectedRegions.forEach(region => {
        active.push(config().regionLabels[region]);
    });

    s.selectedCategories.forEach(category => {
        active.push(config().categoryLabels[category]);
    });

    s.selectedTypes.forEach(type => {
        active.push(TYPE_LABELS[type]);
    });

    return active;
}

function updateActiveSummary() {

    const active = activeFilterLabels();

    activeSummary.innerHTML =
        "<strong>Filtros ativos:</strong> " +
        (active.length === 0 ? "nenhum" : active.join(" · "));
}

function clearFilters() {

    const s = st();

    s.statusFilter = "all";
    s.selectedCategories.clear();
    s.selectedRegions.clear();
    s.selectedTypes.clear();

    renderStatusFilters();
    renderRegionFilters();
    renderCategoryFilters();
    renderTypeFilters();

    updateFilterChips();
    render();
}

/* ======================================================
   Render
   ====================================================== */

function refreshCardMark(card, p) {

    const mark = markOf(p);

    card.classList.toggle("owned", mark === MARK_OWNED);
    card.classList.toggle("waiting", mark === MARK_WAITING);

    card.setAttribute(
        "aria-pressed",
        mark === MARK_NONE ? "false" : "true"
    );

    card.setAttribute(
        "aria-label",
        p.name + " — " + (
            mark === MARK_OWNED ? "já tenho" :
            mark === MARK_WAITING ? "tenho, aguardando evento" :
            "não tenho"
        )
    );

}

function cardMetaText(p) {

    const parts = [];

    if (p.region && config().regionLabels) {
        parts.push(config().regionLabels[p.region]);
    }

    const categoryLabel = config().categoryLabels[p.category];

    if (categoryLabel) {
        parts.push(categoryLabel);
    }

    return parts.join(" · ");
}

function render() {

    grid.innerHTML = "";

    const visible = list().filter(matchesFilters);

    if (visible.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-state";
        empty.textContent = config().emptyMessage;

        grid.appendChild(empty);

        updateProgress();
        return;
    }

    visible.forEach(p => {

        const card = document.createElement("div");

        card.className = "card";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");

        const typesHtml = p.types.map(type => {

            const color = TYPE_COLORS[type];

            return (
                '<span class="type-badge" style="background:' + color + '22;' +
                'color:' + color + ';border-color:' + color + '55;">' +
                TYPE_LABELS[type] +
                '</span>'
            );

        }).join("");

        card.innerHTML =

            '<div class="dex">#' + String(p.dex).padStart(3, "0") + '</div>' +

            '<div class="check">' +

                '<svg class="icon-check" viewBox="0 0 24 24" fill="none" ' +
                    'stroke="#0e0a1a" stroke-width="3" ' +
                    'stroke-linecap="round" stroke-linejoin="round">' +
                    '<polyline points="20 6 9 17 4 12"></polyline>' +
                '</svg>' +

                '<svg class="icon-wait" viewBox="0 0 24 24" fill="none" ' +
                    'stroke="#0e0a1a" stroke-width="2.6" ' +
                    'stroke-linecap="round" stroke-linejoin="round">' +
                    '<circle cx="12" cy="12" r="9"></circle>' +
                    '<polyline points="12 7 12 12 16 14"></polyline>' +
                '</svg>' +

            '</div>' +

            '<img alt="' + p.name + '" loading="lazy">' +

            '<div class="name">' + p.name + '</div>' +

            '<div class="type-row">' + typesHtml + '</div>' +

            '<div class="category-badge">' + cardMetaText(p) + '</div>';

        attachImageFallback(card.querySelector("img"), p);

        refreshCardMark(card, p);

        function applyMark(mark) {

            setMark(p, mark);
            refreshCardMark(card, p);
            updateProgress();

            /* Com filtro de status ativo o card pode sair da lista. */
            if (st().statusFilter !== "all") {
                render();
            }

        }

        /* 1 clique: alterna "tenho" (verde) */
        function toggleOwned() {
            applyMark(
                markOf(p) === MARK_OWNED ? MARK_NONE : MARK_OWNED
            );
        }

        /* 2 cliques: alterna "aguardando evento" (amarelo) */
        function toggleWaiting() {
            applyMark(
                markOf(p) === MARK_WAITING ? MARK_NONE : MARK_WAITING
            );
        }

        if (config().hasWaitingState) {

            /*
             * Distingue 1 de 2 cliques: o primeiro clique agenda a ação
             * e o segundo (se vier dentro da janela) a cancela, deixando
             * o dblclick tratar. Sem isso, o duplo clique executaria
             * também a ação de clique simples.
             */
            let clickTimer = null;

            card.addEventListener("click", () => {

                if (clickTimer) {
                    return;
                }

                clickTimer = setTimeout(() => {
                    clickTimer = null;
                    toggleOwned();
                }, 230);

            });

            card.addEventListener("dblclick", () => {

                clearTimeout(clickTimer);
                clickTimer = null;

                toggleWaiting();

            });

        } else {

            card.addEventListener("click", toggleOwned);

        }

        card.addEventListener("keydown", e => {

            if (e.key === "Enter" || e.key === " ") {

                e.preventDefault();

                if (e.shiftKey && config().hasWaitingState) {
                    toggleWaiting();
                } else {
                    toggleOwned();
                }

            }

        });

        grid.appendChild(card);

    });

    updateProgress();
}

/* ======================================================
   Troca de aba
   ====================================================== */

function applyTabChrome() {

    const c = config();

    pageTitle.textContent = c.pageTitle;
    pageSubtitle.textContent = c.pageSubtitle;

    searchInput.placeholder = c.searchPlaceholder;
    searchInput.value = st().search;

    footerNote.textContent = c.footerNote;
    footerSource.href = c.footerSource;

    legend.classList.toggle("hidden", !c.hasWaitingState);

    document.title = c.pageTitle + " — Pokémon GO";
}

function refreshTabUI() {

    applyTabChrome();

    renderStatusFilters();
    renderRegionFilters();
    renderCategoryFilters();
    renderTypeFilters();
    updateFilterChips();

    render();
}

function switchTab(tabId) {

    if (!TABS[tabId] || tabId === currentTabId) {
        return;
    }

    currentTabId = tabId;

    document.querySelectorAll(".tab-btn").forEach(btn => {

        const isActive = btn.dataset.tab === tabId;

        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");

    });

    refreshTabUI();
}

/* ======================================================
   Exportação: itens e contadores
   ====================================================== */

function makeExportItems() {
    return list().filter(matchesFilters);
}

function exportCounters(items) {

    const s = st();

    const anyFilterActive =
        s.statusFilter !== "all" ||
        s.selectedCategories.size > 0 ||
        s.selectedRegions.size > 0 ||
        s.selectedTypes.size > 0 ||
        s.search !== "";

    const caughtInView = items.filter(p => isCaught(p)).length;
    const totalCaught = list().filter(p => isCaught(p)).length;

    const count = anyFilterActive ? caughtInView : totalCaught;
    const denom = anyFilterActive ? items.length : list().length;

    const pct = denom > 0 ? Math.round((count / denom) * 100) : 0;

    const ownedInView = items.filter(
        p => markOf(p) === MARK_OWNED
    ).length;

    const waitingInView = items.filter(
        p => markOf(p) === MARK_WAITING
    ).length;

    return { count, denom, pct, ownedInView, waitingInView };
}

function exportFilterText() {

    const active = activeFilterLabels();

    return active.length > 0
        ? active.join(" · ")
        : config().allLabel;
}

function exportFileName(extension) {

    return (
        config().exportFilePrefix +
        "-" +
        new Date().toISOString().slice(0, 10) +
        "." +
        extension
    );

}

/* ======================================================
   Exportação PNG
   ====================================================== */

async function prepareExport() {

    const items = makeExportItems();

    if (items.length === 0) {
        showToast("Não há Pokémon para exportar com os filtros atuais.");
        return null;
    }

    exportStage.innerHTML = "";

    const exportCard = document.createElement("div");
    exportCard.className = "export-card";

    const counters = exportCounters(items);
    const filterText = exportFilterText();

    let pills =
        '<span class="export-pill">Visualização: ' +
        items.length + ' Pokémon</span>';

    if (config().hasWaitingState) {

        pills +=
            '<span class="export-pill owned-pill">' +
            '<span class="dot"></span>' +
            counters.ownedInView + ' já tenho</span>' +
            '<span class="export-pill wait-pill">' +
            '<span class="dot"></span>' +
            counters.waitingInView + ' aguardando evento</span>';

    }

    pills +=
        '<span class="export-pill">Gerado em ' +
        new Date().toLocaleDateString("pt-BR") + '</span>';

    exportCard.innerHTML =

        '<div class="export-head">' +
            '<div>' +
                '<h1 class="export-title">' + config().exportTitle + '</h1>' +
                '<div class="export-subtitle">' +
                    config().exportSubtitle +
                '</div>' +
            '</div>' +
            '<div class="export-stat">' +
                '<div class="big">' +
                    counters.count + ' / ' + counters.denom +
                '</div>' +
                '<div class="small">' +
                    counters.pct + '% completo · ' + filterText +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="export-info">' + pills + '</div>' +

        '<div class="export-grid"></div>' +

        '<div class="export-footer">' +
            '<div>' + config().exportTitle + ' · Progresso pessoal</div>' +
            '<div class="export-watermark">' +
                'X: @Jopdot · Insta: @coutinho_.davi · GitHub: DaviCoutinho-19' +
            '</div>' +
        '</div>';

    const exportGrid = exportCard.querySelector(".export-grid");

    /*
     * Pré-carrega todas as imagens como data URL para que o
     * html2canvas não precise buscar nada na rede (nem lidar com CORS).
     */
    const dataUrls = await Promise.all(
        items.map(p => resolvePokemonDataURL(p))
    );

    items.forEach((p, index) => {

        const mark = markOf(p);

        const item = document.createElement("div");

        item.className =
            "export-pokemon" +
            (mark === MARK_OWNED ? " owned" : "") +
            (mark === MARK_WAITING ? " waiting" : "");

        const typeText = p.types
            .map(type => TYPE_LABELS[type])
            .join(" / ");

        const dataUrl = dataUrls[index];

        const imgHtml = dataUrl
            ? '<img alt="' + p.name + '" src="' + dataUrl + '">'
            : '<div style="width:80px;height:80px;margin:4px auto 5px;"></div>';

        /* SVG em vez de glifo: renderiza igual em qualquer sistema. */
        const markHtml =
            mark === MARK_OWNED
                ? '<svg width="13" height="13" viewBox="0 0 24 24" ' +
                  'fill="none" stroke="#4fe0c4" stroke-width="3.4" ' +
                  'stroke-linecap="round" stroke-linejoin="round">' +
                  '<polyline points="20 6 9 17 4 12"></polyline></svg>'
                : mark === MARK_WAITING
                    ? '<svg width="13" height="13" viewBox="0 0 24 24" ' +
                      'fill="none" stroke="#ffc65c" stroke-width="2.6" ' +
                      'stroke-linecap="round" stroke-linejoin="round">' +
                      '<circle cx="12" cy="12" r="9"></circle>' +
                      '<polyline points="12 7 12 12 16 14"></polyline></svg>'
                    : '';

        item.innerHTML =

            '<div class="export-dex">' +
                '<span>#' + String(p.dex).padStart(3, "0") + '</span>' +
                markHtml +
            '</div>' +

            imgHtml +

            '<div class="p-name">' + p.name + '</div>' +
            '<div class="p-types">' + typeText + '</div>' +
            '<div class="p-category">' + cardMetaText(p) + '</div>';

        exportGrid.appendChild(item);

    });

    exportStage.appendChild(exportCard);

    return exportCard;
}

async function exportPNG() {

    showToast("Preparando a imagem...");

    const exportCard = await prepareExport();

    if (!exportCard) {
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 200));

    try {

        const canvas = await html2canvas(exportCard, {
            backgroundColor: "#0e0a1a",
            scale: 2,
            useCORS: true,
            allowTaint: false,
            logging: false
        });

        const link = document.createElement("a");

        link.download = exportFileName("png");
        link.href = canvas.toDataURL("image/png");
        link.click();

        showToast("PNG exportado com sucesso.");

    } catch (e) {

        console.error(e);

        showToast(
            "O PNG não pôde ser gerado. Use o SVG, que mantém o visual e as imagens."
        );

    } finally {
        exportStage.innerHTML = "";
    }

}

/* ======================================================
   Exportação SVG
   ====================================================== */

function escapeXml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

}

async function exportSVG() {

    const items = makeExportItems();

    if (items.length === 0) {
        showToast("Não há Pokémon para exportar com os filtros atuais.");
        return;
    }

    showToast("Preparando o SVG...");

    const dataUrls = await Promise.all(
        items.map(p => resolvePokemonDataURL(p))
    );

    const width = 1400;
    const cardWidth = 205;
    const cardHeight = 240;
    const gap = 16;
    const columns = 6;

    const rows = Math.ceil(items.length / columns);

    const top = 220;
    const footer = 100;

    const height = top + rows * (cardHeight + gap) + footer;

    const counters = exportCounters(items);
    const filterText = exportFilterText();

    let svg = "";

    svg +=
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'width="' + width + '" height="' + height + '" ' +
        'viewBox="0 0 ' + width + ' ' + height + '">';

    svg +=
        '<defs>' +
            '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
                '<stop offset="0%" stop-color="#241444"/>' +
                '<stop offset="55%" stop-color="#0e0a1a"/>' +
                '<stop offset="100%" stop-color="#120a20"/>' +
            '</linearGradient>' +
            '<linearGradient id="title" x1="0" y1="0" x2="1" y2="0">' +
                '<stop offset="10%" stop-color="#e7d9ff"/>' +
                '<stop offset="60%" stop-color="#b06bff"/>' +
                '<stop offset="100%" stop-color="#ffc65c"/>' +
            '</linearGradient>' +
        '</defs>';

    svg += '<rect width="100%" height="100%" fill="url(#bg)"/>';

    svg +=
        '<text x="60" y="82" fill="url(#title)" ' +
        'font-family="Rajdhani, Arial, sans-serif" ' +
        'font-size="64" font-weight="700">' +
        escapeXml(config().exportTitle) + '</text>';

    svg +=
        '<text x="60" y="118" fill="#9c8fc0" ' +
        'font-family="Inter, Arial, sans-serif" font-size="20">' +
        escapeXml(config().exportSubtitle) + '</text>';

    svg +=
        '<text x="1335" y="87" fill="#f2eefc" text-anchor="end" ' +
        'font-family="Rajdhani, Arial, sans-serif" font-size="40" font-weight="700">' +
        counters.count + ' / ' + counters.denom + '</text>';

    svg +=
        '<text x="1335" y="118" fill="#9c8fc0" text-anchor="end" ' +
        'font-family="Inter, Arial, sans-serif" font-size="16">' +
        counters.pct + '% completo · ' + escapeXml(filterText) + '</text>';

    /* Legenda das cores, quando a aba usa o estado amarelo. */
    if (config().hasWaitingState) {

        svg +=
            '<circle cx="66" cy="146" r="6" fill="#4fe0c4"/>' +
            '<text x="80" y="151" fill="#9ff0e0" ' +
            'font-family="Inter, Arial, sans-serif" font-size="13">' +
            counters.ownedInView + ' já tenho</text>';

        svg +=
            '<circle cx="216" cy="146" r="6" fill="#ffc65c"/>' +
            '<text x="230" y="151" fill="#ffdf9e" ' +
            'font-family="Inter, Arial, sans-serif" font-size="13">' +
            counters.waitingInView + ' aguardando evento</text>';

    }

    svg +=
        '<line x1="60" y1="175" x2="1340" y2="175" ' +
        'stroke="#3a2d52" stroke-width="1"/>';

    items.forEach((p, index) => {

        const col = index % columns;
        const row = Math.floor(index / columns);

        const x = 60 + col * (cardWidth + gap);
        const y = top + row * (cardHeight + gap);

        const mark = markOf(p);

        const border =
            mark === MARK_OWNED ? "#4fe0c4" :
            mark === MARK_WAITING ? "#ffc65c" :
            "#453565";

        svg +=
            '<rect x="' + x + '" y="' + y +
            '" width="' + cardWidth + '" height="' + cardHeight +
            '" rx="16" fill="#1d1633" stroke="' + border +
            '" stroke-opacity="' +
            (mark === MARK_NONE ? "0.85" : "0.7") + '"/>';

        svg +=
            '<text x="' + (x + 15) + '" y="' + (y + 25) +
            '" fill="#6a5d8f" font-family="Rajdhani, Arial, sans-serif" ' +
            'font-size="14">#' + String(p.dex).padStart(3, "0") + '</text>';

        const dataUrl = dataUrls[index];

        if (dataUrl) {
            svg +=
                '<image href="' + dataUrl + '" xlink:href="' + dataUrl +
                '" x="' + (x + 62) + '" y="' + (y + 35) +
                '" width="80" height="80" ' +
                'preserveAspectRatio="xMidYMid meet"/>';
        }

        svg +=
            '<text x="' + (x + cardWidth / 2) + '" y="' + (y + 142) +
            '" fill="#d5cae8" text-anchor="middle" ' +
            'font-family="Rajdhani, Arial, sans-serif" ' +
            'font-size="16" font-weight="600">' +
            escapeXml(p.name) + '</text>';

        svg +=
            '<text x="' + (x + cardWidth / 2) + '" y="' + (y + 166) +
            '" fill="#9c8fc0" text-anchor="middle" ' +
            'font-family="Inter, Arial, sans-serif" font-size="11">' +
            escapeXml(p.types.map(t => TYPE_LABELS[t]).join(" / ")) +
            '</text>';

        svg +=
            '<text x="' + (x + cardWidth / 2) + '" y="' + (y + 187) +
            '" fill="#6a5d8f" text-anchor="middle" ' +
            'font-family="Inter, Arial, sans-serif" font-size="10">' +
            escapeXml(cardMetaText(p)) + '</text>';

        if (mark === MARK_OWNED) {

            svg +=
                '<circle cx="' + (x + cardWidth - 21) + '" cy="' + (y + 21) +
                '" r="9" fill="#4fe0c4"/>';

            svg +=
                '<path d="M' + (x + cardWidth - 26) + ' ' + (y + 21) +
                ' l3 3 l6 -7" fill="none" stroke="#0e0a1a" ' +
                'stroke-width="2.3" stroke-linecap="round" ' +
                'stroke-linejoin="round"/>';

        } else if (mark === MARK_WAITING) {

            svg +=
                '<circle cx="' + (x + cardWidth - 21) + '" cy="' + (y + 21) +
                '" r="9" fill="#ffc65c"/>';

            /* Ponteiros de relógio, indicando "aguardando". */
            svg +=
                '<path d="M' + (x + cardWidth - 21) + ' ' + (y + 16) +
                ' L' + (x + cardWidth - 21) + ' ' + (y + 21) +
                ' L' + (x + cardWidth - 17.5) + ' ' + (y + 23) +
                '" fill="none" stroke="#0e0a1a" stroke-width="2.1" ' +
                'stroke-linecap="round" stroke-linejoin="round"/>';

        }

    });

    const footerY = height - 55;

    svg +=
        '<line x1="60" y1="' + (height - 82) + '" x2="1340" y2="' +
        (height - 82) + '" stroke="#3a2d52" stroke-width="1"/>';

    svg +=
        '<text x="60" y="' + footerY + '" fill="#6a5d8f" ' +
        'font-family="Inter, Arial, sans-serif" font-size="13">' +
        escapeXml(config().exportTitle) + ' · Progresso pessoal</text>';

    svg +=
        '<text x="1340" y="' + footerY + '" fill="#9c8fc0" ' +
        'text-anchor="end" font-family="Inter, Arial, sans-serif" ' +
        'font-size="13">' +
        'X: @Jopdot · Insta: @coutinho_.davi · GitHub: DaviCoutinho-19' +
        '</text>';

    svg += '</svg>';

    const blob = new Blob([svg], {
        type: "image/svg+xml;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.download = exportFileName("svg");
    link.href = url;
    link.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    showToast("SVG exportado com sucesso.");
}

/* ======================================================
   Backup JSON (todas as abas)
   ====================================================== */

function exportJSON() {

    const data = { exportedAt: new Date().toISOString() };

    Object.keys(TABS).forEach(tabId => {
        data[TABS[tabId].storageKey] = state[tabId].marks;
    });

    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "pokemon-go-progresso.json";
    link.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    showToast("Progresso de todas as abas exportado.");
}

function importJSONFile(file) {

    const reader = new FileReader();

    reader.onload = () => {

        try {

            const data = JSON.parse(reader.result);

            let found = 0;

            Object.keys(TABS).forEach(tabId => {

                const cfg = TABS[tabId];
                const imported = data[cfg.storageKey] || (tabId === "mega" ? (data.owned || (cfg.list.some(p => Object.prototype.hasOwnProperty.call(data, p.slug)) ? data : null)) : null);

                if (
                    !imported ||
                    typeof imported !== "object" ||
                    Array.isArray(imported)
                ) {
                    return;
                }

                const clean = {};

                cfg.list.forEach(p => {

                    const value = imported[p.slug];

                    if (value === true || value === MARK_OWNED) {
                        clean[p.slug] = MARK_OWNED;
                    } else if (value === MARK_WAITING) {
                        clean[p.slug] = MARK_WAITING;
                    }

                });

                state[tabId].marks = clean;

                try {
                    localStorage.setItem(
                        cfg.storageKey,
                        JSON.stringify(clean)
                    );
                } catch (e) {
                    /* ignora falha de storage */
                }

                found += 1;

            });

            if (found === 0) {
                throw new Error("Nenhum progresso reconhecido");
            }

            render();

            showToast("Progresso importado com sucesso.");

        } catch (e) {
            showToast("O arquivo selecionado não é um backup válido.");
        }

    };

    reader.readAsText(file, "UTF-8");
}

/* ======================================================
   Eventos
   ====================================================== */

tabs.addEventListener("click", event => {

    const btn = event.target.closest(".tab-btn");

    if (btn) {
        switchTab(btn.dataset.tab);
    }

});

filterToggle.addEventListener("click", () => {

    const open = filterPanelWrap.classList.toggle("open");

    filterToggle.classList.toggle("open", open);

});

clearFiltersBtn.addEventListener("click", clearFilters);

searchInput.addEventListener("input", event => {

    st().search = event.target.value.trim();

    render();

});

document.getElementById("resetBtn").addEventListener("click", () => {

    if (
        confirm(
            'Apagar todo o progresso marcado da aba "' +
            config().pageTitle + '"?'
        )
    ) {

        st().marks = {};

        persist();
        render();

        showToast("Progresso desta aba apagado.");

    }

});

exportToggle.addEventListener("click", event => {

    event.stopPropagation();

    const open = exportDropdown.classList.toggle("open");

    exportToggle.classList.toggle("open", open);

});

document.addEventListener("click", event => {

    if (
        !exportDropdown.contains(event.target) &&
        !exportToggle.contains(event.target)
    ) {
        exportDropdown.classList.remove("open");
        exportToggle.classList.remove("open");
    }

});

function closeExportMenu() {
    exportDropdown.classList.remove("open");
    exportToggle.classList.remove("open");
}

exportPngBtn.addEventListener("click", async () => {
    closeExportMenu();
    await exportPNG();
});

exportSvgBtn.addEventListener("click", async () => {
    closeExportMenu();
    await exportSVG();
});

exportJsonBtn.addEventListener("click", () => {
    closeExportMenu();
    exportJSON();
});

importJsonBtn.addEventListener("click", () => {
    importFile.click();
});

importFile.addEventListener("change", () => {

    const file = importFile.files[0];

    if (file) {
        importJSONFile(file);
    }

    importFile.value = "";

});

/* ======================================================
   Inicialização
   ====================================================== */

refreshTabUI();

