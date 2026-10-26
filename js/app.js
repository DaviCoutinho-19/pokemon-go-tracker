

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


const REGIONAL_DEX = [{"dex":1,"slug":"bulbasaur","name":"Bulbasaur","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1-bulbasaur-shiny.png"},{"dex":2,"slug":"ivysaur","name":"Ivysaur","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/2-ivysaur-shiny.png"},{"dex":3,"slug":"venusaur","name":"Venusaur","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/3-venusaur-shiny.png"},{"dex":4,"slug":"charmander","name":"Charmander","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/4-charmander-shiny.png"},{"dex":5,"slug":"charmeleon","name":"Charmeleon","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/5-charmeleon-shiny.png"},{"dex":6,"slug":"charizard","name":"Charizard","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/6-charizard-shiny.png"},{"dex":7,"slug":"squirtle","name":"Squirtle","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/7-squirtle-shiny.png"},{"dex":8,"slug":"wartortle","name":"Wartortle","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/8-wartortle-shiny.png"},{"dex":9,"slug":"blastoise","name":"Blastoise","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/9-blastoise-shiny.png"},{"dex":10,"slug":"caterpie","name":"Caterpie","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/10-caterpie-shiny.png"},{"dex":11,"slug":"metapod","name":"Metapod","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/11-metapod-shiny.png"},{"dex":12,"slug":"butterfree","name":"Butterfree","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/12-butterfree-shiny.png"},{"dex":13,"slug":"weedle","name":"Weedle","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/13-weedle-shiny.png"},{"dex":14,"slug":"kakuna","name":"Kakuna","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/14-kakuna-shiny.png"},{"dex":15,"slug":"beedrill","name":"Beedrill","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/15-beedrill-shiny.png"},{"dex":16,"slug":"pidgey","name":"Pidgey","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/16-pidgey-shiny.png"},{"dex":17,"slug":"pidgeotto","name":"Pidgeotto","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/17-pidgeotto-shiny.png"},{"dex":18,"slug":"pidgeot","name":"Pidgeot","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/18-pidgeot-shiny.png"},{"dex":19,"slug":"rattata","name":"Rattata","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/19-rattata-shiny.png"},{"dex":20,"slug":"raticate","name":"Raticate","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/20-raticate-shiny.png"},{"dex":21,"slug":"spearow","name":"Spearow","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/21-spearow-shiny.png"},{"dex":22,"slug":"fearow","name":"Fearow","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/22-fearow-shiny.png"},{"dex":23,"slug":"ekans","name":"Ekans","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/23-ekans-shiny.png"},{"dex":24,"slug":"arbok","name":"Arbok","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/24-arbok-shiny.png"},{"dex":25,"slug":"pikachu","name":"Pikachu","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/25-pikachu-shiny.png"},{"dex":26,"slug":"raichu","name":"Raichu","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/26-raichu-shiny.png"},{"dex":27,"slug":"sandshrew","name":"Sandshrew","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/27-sandshrew-shiny.png"},{"dex":28,"slug":"sandslash","name":"Sandslash","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/28-sandslash-shiny.png"},{"dex":29,"slug":"nidoran-f","name":"Nidoran♀","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/29-nidoran-f-shiny.png"},{"dex":30,"slug":"nidorina","name":"Nidorina","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/30-nidorina-shiny.png"},{"dex":31,"slug":"nidoqueen","name":"Nidoqueen","types":["Poison","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/31-nidoqueen-shiny.png"},{"dex":32,"slug":"nidoran-m","name":"Nidoran♂","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/32-nidoran-m-shiny.png"},{"dex":33,"slug":"nidorino","name":"Nidorino","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/33-nidorino-shiny.png"},{"dex":34,"slug":"nidoking","name":"Nidoking","types":["Poison","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/34-nidoking-shiny.png"},{"dex":35,"slug":"clefairy","name":"Clefairy","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/35-clefairy-shiny.png"},{"dex":36,"slug":"clefable","name":"Clefable","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/36-clefable-shiny.png"},{"dex":37,"slug":"vulpix","name":"Vulpix","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/37-vulpix-shiny.png"},{"dex":38,"slug":"ninetales","name":"Ninetales","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/38-ninetales-shiny.png"},{"dex":39,"slug":"jigglypuff","name":"Jigglypuff","types":["Normal","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/39-jigglypuff-shiny.png"},{"dex":40,"slug":"wigglytuff","name":"Wigglytuff","types":["Normal","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/40-wigglytuff-shiny.png"},{"dex":41,"slug":"zubat","name":"Zubat","types":["Poison","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/41-zubat-shiny.png"},{"dex":42,"slug":"golbat","name":"Golbat","types":["Poison","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/42-golbat-shiny.png"},{"dex":43,"slug":"oddish","name":"Oddish","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/43-oddish-shiny.png"},{"dex":44,"slug":"gloom","name":"Gloom","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/44-gloom-shiny.png"},{"dex":45,"slug":"vileplume","name":"Vileplume","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/45-vileplume-shiny.png"},{"dex":46,"slug":"paras","name":"Paras","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/46-paras-shiny.png"},{"dex":47,"slug":"parasect","name":"Parasect","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/47-parasect-shiny.png"},{"dex":48,"slug":"venonat","name":"Venonat","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/48-venonat-shiny.png"},{"dex":49,"slug":"venomoth","name":"Venomoth","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/49-venomoth-shiny.png"},{"dex":50,"slug":"diglett","name":"Diglett","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/50-diglett-shiny.png"},{"dex":51,"slug":"dugtrio","name":"Dugtrio","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/51-dugtrio-shiny.png"},{"dex":52,"slug":"meowth","name":"Meowth","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/52-meowth-shiny.png"},{"dex":53,"slug":"persian","name":"Persian","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/53-persian-shiny.png"},{"dex":54,"slug":"psyduck","name":"Psyduck","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/54-psyduck-shiny.png"},{"dex":55,"slug":"golduck","name":"Golduck","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/55-golduck-shiny.png"},{"dex":56,"slug":"mankey","name":"Mankey","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/56-mankey-shiny.png"},{"dex":57,"slug":"primeape","name":"Primeape","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/57-primeape-shiny.png"},{"dex":58,"slug":"growlithe","name":"Growlithe","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/58-growlithe-shiny.png"},{"dex":59,"slug":"arcanine","name":"Arcanine","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/59-arcanine-shiny.png"},{"dex":60,"slug":"poliwag","name":"Poliwag","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/60-poliwag-shiny.png"},{"dex":61,"slug":"poliwhirl","name":"Poliwhirl","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/61-poliwhirl-shiny.png"},{"dex":62,"slug":"poliwrath","name":"Poliwrath","types":["Water","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/62-poliwrath-shiny.png"},{"dex":63,"slug":"abra","name":"Abra","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/63-abra-shiny.png"},{"dex":64,"slug":"kadabra","name":"Kadabra","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/64-kadabra-shiny.png"},{"dex":65,"slug":"alakazam","name":"Alakazam","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/65-alakazam-shiny.png"},{"dex":66,"slug":"machop","name":"Machop","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/66-machop-shiny.png"},{"dex":67,"slug":"machoke","name":"Machoke","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/67-machoke-shiny.png"},{"dex":68,"slug":"machamp","name":"Machamp","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/68-machamp-shiny.png"},{"dex":69,"slug":"bellsprout","name":"Bellsprout","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/69-bellsprout-shiny.png"},{"dex":70,"slug":"weepinbell","name":"Weepinbell","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/70-weepinbell-shiny.png"},{"dex":71,"slug":"victreebel","name":"Victreebel","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/71-victreebel-shiny.png"},{"dex":72,"slug":"tentacool","name":"Tentacool","types":["Water","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/72-tentacool-shiny.png"},{"dex":73,"slug":"tentacruel","name":"Tentacruel","types":["Water","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/73-tentacruel-shiny.png"},{"dex":74,"slug":"geodude","name":"Geodude","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/74-geodude-shiny.png"},{"dex":75,"slug":"graveler","name":"Graveler","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/75-graveler-shiny.png"},{"dex":76,"slug":"golem","name":"Golem","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/76-golem-shiny.png"},{"dex":77,"slug":"ponyta","name":"Ponyta","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/77-ponyta-shiny.png"},{"dex":78,"slug":"rapidash","name":"Rapidash","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/78-rapidash-shiny.png"},{"dex":79,"slug":"slowpoke","name":"Slowpoke","types":["Water","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/79-slowpoke-shiny.png"},{"dex":80,"slug":"slowbro","name":"Slowbro","types":["Water","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/80-slowbro-shiny.png"},{"dex":81,"slug":"magnemite","name":"Magnemite","types":["Electric","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/81-magnemite-shiny.png"},{"dex":82,"slug":"magneton","name":"Magneton","types":["Electric","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/82-magneton-shiny.png"},{"dex":83,"slug":"farfetchd","name":"Farfetch’d","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/83-farfetchd-shiny.png"},{"dex":84,"slug":"doduo","name":"Doduo","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/84-doduo-shiny.png"},{"dex":85,"slug":"dodrio","name":"Dodrio","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/85-dodrio-shiny.png"},{"dex":86,"slug":"seel","name":"Seel","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/86-seel-shiny.png"},{"dex":87,"slug":"dewgong","name":"Dewgong","types":["Water","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/87-dewgong-shiny.png"},{"dex":88,"slug":"grimer","name":"Grimer","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/88-grimer-shiny.png"},{"dex":89,"slug":"muk","name":"Muk","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/89-muk-shiny.png"},{"dex":90,"slug":"shellder","name":"Shellder","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/90-shellder-shiny.png"},{"dex":91,"slug":"cloyster","name":"Cloyster","types":["Water","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/91-cloyster-shiny.png"},{"dex":92,"slug":"gastly","name":"Gastly","types":["Ghost","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/92-gastly-shiny.png"},{"dex":93,"slug":"haunter","name":"Haunter","types":["Ghost","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/93-haunter-shiny.png"},{"dex":94,"slug":"gengar","name":"Gengar","types":["Ghost","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/94-gengar-shiny.png"},{"dex":95,"slug":"onix","name":"Onix","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/95-onix-shiny.png"},{"dex":96,"slug":"drowzee","name":"Drowzee","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/96-drowzee-shiny.png"},{"dex":97,"slug":"hypno","name":"Hypno","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/97-hypno-shiny.png"},{"dex":98,"slug":"krabby","name":"Krabby","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/98-krabby-shiny.png"},{"dex":99,"slug":"kingler","name":"Kingler","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/99-kingler-shiny.png"},{"dex":100,"slug":"voltorb","name":"Voltorb","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/100-voltorb-shiny.png"},{"dex":101,"slug":"electrode","name":"Electrode","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/101-electrode-shiny.png"},{"dex":102,"slug":"exeggcute","name":"Exeggcute","types":["Grass","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/102-exeggcute-shiny.png"},{"dex":103,"slug":"exeggutor","name":"Exeggutor","types":["Grass","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/103-exeggutor-shiny.png"},{"dex":104,"slug":"cubone","name":"Cubone","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/104-cubone-shiny.png"},{"dex":105,"slug":"marowak","name":"Marowak","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/105-marowak-shiny.png"},{"dex":106,"slug":"hitmonlee","name":"Hitmonlee","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/106-hitmonlee-shiny.png"},{"dex":107,"slug":"hitmonchan","name":"Hitmonchan","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/107-hitmonchan-shiny.png"},{"dex":108,"slug":"lickitung","name":"Lickitung","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/108-lickitung-shiny.png"},{"dex":109,"slug":"koffing","name":"Koffing","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/109-koffing-shiny.png"},{"dex":110,"slug":"weezing","name":"Weezing","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/110-weezing-shiny.png"},{"dex":111,"slug":"rhyhorn","name":"Rhyhorn","types":["Ground","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/111-rhyhorn-shiny.png"},{"dex":112,"slug":"rhydon","name":"Rhydon","types":["Ground","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/112-rhydon-shiny.png"},{"dex":113,"slug":"chansey","name":"Chansey","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/113-chansey-shiny.png"},{"dex":114,"slug":"tangela","name":"Tangela","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/114-tangela-shiny.png"},{"dex":115,"slug":"kangaskhan","name":"Kangaskhan","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/115-kangaskhan-shiny.png"},{"dex":116,"slug":"horsea","name":"Horsea","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/116-horsea-shiny.png"},{"dex":117,"slug":"seadra","name":"Seadra","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/117-seadra-shiny.png"},{"dex":118,"slug":"goldeen","name":"Goldeen","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/118-goldeen-shiny.png"},{"dex":119,"slug":"seaking","name":"Seaking","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/119-seaking-shiny.png"},{"dex":120,"slug":"staryu","name":"Staryu","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/120-staryu-shiny.png"},{"dex":121,"slug":"starmie","name":"Starmie","types":["Water","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/121-starmie-shiny.png"},{"dex":122,"slug":"mr-mime","name":"Mr. Mime","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/122-mr-mime-shiny.png"},{"dex":123,"slug":"scyther","name":"Scyther","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/123-scyther-shiny.png"},{"dex":124,"slug":"jynx","name":"Jynx","types":["Ice","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/124-jynx-shiny.png"},{"dex":125,"slug":"electabuzz","name":"Electabuzz","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/125-electabuzz-shiny.png"},{"dex":126,"slug":"magmar","name":"Magmar","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/126-magmar-shiny.png"},{"dex":127,"slug":"pinsir","name":"Pinsir","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/127-pinsir-shiny.png"},{"dex":128,"slug":"tauros","name":"Tauros","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/128-tauros-shiny.png"},{"dex":129,"slug":"magikarp","name":"Magikarp","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/129-magikarp-shiny.png"},{"dex":130,"slug":"gyarados","name":"Gyarados","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/130-gyarados-shiny.png"},{"dex":131,"slug":"lapras","name":"Lapras","types":["Water","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/131-lapras-shiny.png"},{"dex":132,"slug":"ditto","name":"Ditto","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/132-ditto-shiny.png"},{"dex":133,"slug":"eevee","name":"Eevee","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/133-eevee-shiny.png"},{"dex":134,"slug":"vaporeon","name":"Vaporeon","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/134-vaporeon-shiny.png"},{"dex":135,"slug":"jolteon","name":"Jolteon","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/135-jolteon-shiny.png"},{"dex":136,"slug":"flareon","name":"Flareon","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/136-flareon-shiny.png"},{"dex":137,"slug":"porygon","name":"Porygon","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/137-porygon-shiny.png"},{"dex":138,"slug":"omanyte","name":"Omanyte","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/138-omanyte-shiny.png"},{"dex":139,"slug":"omastar","name":"Omastar","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/139-omastar-shiny.png"},{"dex":140,"slug":"kabuto","name":"Kabuto","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/140-kabuto-shiny.png"},{"dex":141,"slug":"kabutops","name":"Kabutops","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/141-kabutops-shiny.png"},{"dex":142,"slug":"aerodactyl","name":"Aerodactyl","types":["Rock","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/142-aerodactyl-shiny.png"},{"dex":143,"slug":"snorlax","name":"Snorlax","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/143-snorlax-shiny.png"},{"dex":144,"slug":"articuno","name":"Articuno","types":["Ice","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/144-articuno-shiny.png"},{"dex":145,"slug":"zapdos","name":"Zapdos","types":["Electric","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/145-zapdos-shiny.png"},{"dex":146,"slug":"moltres","name":"Moltres","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/146-moltres-shiny.png"},{"dex":147,"slug":"dratini","name":"Dratini","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/147-dratini-shiny.png"},{"dex":148,"slug":"dragonair","name":"Dragonair","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/148-dragonair-shiny.png"},{"dex":149,"slug":"dragonite","name":"Dragonite","types":["Dragon","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/149-dragonite-shiny.png"},{"dex":150,"slug":"mewtwo","name":"Mewtwo","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/150-mewtwo-shiny.png"},{"dex":151,"slug":"mew","name":"Mew","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/151-mew-shiny.png"},{"dex":152,"slug":"chikorita","name":"Chikorita","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/152-chikorita-shiny.png"},{"dex":153,"slug":"bayleef","name":"Bayleef","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/153-bayleef-shiny.png"},{"dex":154,"slug":"meganium","name":"Meganium","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/154-meganium-shiny.png"},{"dex":155,"slug":"cyndaquil","name":"Cyndaquil","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/155-cyndaquil-shiny.png"},{"dex":156,"slug":"quilava","name":"Quilava","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/156-quilava-shiny.png"},{"dex":157,"slug":"typhlosion","name":"Typhlosion","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/157-typhlosion-shiny.png"},{"dex":158,"slug":"totodile","name":"Totodile","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/158-totodile-shiny.png"},{"dex":159,"slug":"croconaw","name":"Croconaw","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/159-croconaw-shiny.png"},{"dex":160,"slug":"feraligatr","name":"Feraligatr","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/160-feraligatr-shiny.png"},{"dex":161,"slug":"sentret","name":"Sentret","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/161-sentret-shiny.png"},{"dex":162,"slug":"furret","name":"Furret","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/162-furret-shiny.png"},{"dex":163,"slug":"hoothoot","name":"Hoothoot","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/163-hoothoot-shiny.png"},{"dex":164,"slug":"noctowl","name":"Noctowl","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/164-noctowl-shiny.png"},{"dex":165,"slug":"ledyba","name":"Ledyba","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/165-ledyba-shiny.png"},{"dex":166,"slug":"ledian","name":"Ledian","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/166-ledian-shiny.png"},{"dex":167,"slug":"spinarak","name":"Spinarak","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/167-spinarak-shiny.png"},{"dex":168,"slug":"ariados","name":"Ariados","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/168-ariados-shiny.png"},{"dex":169,"slug":"crobat","name":"Crobat","types":["Poison","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/169-crobat-shiny.png"},{"dex":170,"slug":"chinchou","name":"Chinchou","types":["Water","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/170-chinchou-shiny.png"},{"dex":171,"slug":"lanturn","name":"Lanturn","types":["Water","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/171-lanturn-shiny.png"},{"dex":172,"slug":"pichu","name":"Pichu","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/172-pichu-shiny.png"},{"dex":173,"slug":"cleffa","name":"Cleffa","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/173-cleffa-shiny.png"},{"dex":174,"slug":"igglybuff","name":"Igglybuff","types":["Normal","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/174-igglybuff-shiny.png"},{"dex":175,"slug":"togepi","name":"Togepi","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/175-togepi-shiny.png"},{"dex":176,"slug":"togetic","name":"Togetic","types":["Fairy","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/176-togetic-shiny.png"},{"dex":177,"slug":"natu","name":"Natu","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/177-natu-shiny.png"},{"dex":178,"slug":"xatu","name":"Xatu","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/178-xatu-shiny.png"},{"dex":179,"slug":"mareep","name":"Mareep","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/179-mareep-shiny.png"},{"dex":180,"slug":"flaaffy","name":"Flaaffy","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/180-flaaffy-shiny.png"},{"dex":181,"slug":"ampharos","name":"Ampharos","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/181-ampharos-shiny.png"},{"dex":182,"slug":"bellossom","name":"Bellossom","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/182-bellossom-shiny.png"},{"dex":183,"slug":"marill","name":"Marill","types":["Water","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/183-marill-shiny.png"},{"dex":184,"slug":"azumarill","name":"Azumarill","types":["Water","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/184-azumarill-shiny.png"},{"dex":185,"slug":"sudowoodo","name":"Sudowoodo","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/185-sudowoodo-shiny.png"},{"dex":186,"slug":"politoed","name":"Politoed","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/186-politoed-shiny.png"},{"dex":187,"slug":"hoppip","name":"Hoppip","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/187-hoppip-shiny.png"},{"dex":188,"slug":"skiploom","name":"Skiploom","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/188-skiploom-shiny.png"},{"dex":189,"slug":"jumpluff","name":"Jumpluff","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/189-jumpluff-shiny.png"},{"dex":190,"slug":"aipom","name":"Aipom","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/190-aipom-shiny.png"},{"dex":191,"slug":"sunkern","name":"Sunkern","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/191-sunkern-shiny.png"},{"dex":192,"slug":"sunflora","name":"Sunflora","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/192-sunflora-shiny.png"},{"dex":193,"slug":"yanma","name":"Yanma","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/193-yanma-shiny.png"},{"dex":194,"slug":"wooper","name":"Wooper","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/194-wooper-shiny.png"},{"dex":195,"slug":"quagsire","name":"Quagsire","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/195-quagsire-shiny.png"},{"dex":196,"slug":"espeon","name":"Espeon","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/196-espeon-shiny.png"},{"dex":197,"slug":"umbreon","name":"Umbreon","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/197-umbreon-shiny.png"},{"dex":198,"slug":"murkrow","name":"Murkrow","types":["Dark","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/198-murkrow-shiny.png"},{"dex":199,"slug":"slowking","name":"Slowking","types":["Water","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/199-slowking-shiny.png"},{"dex":200,"slug":"misdreavus","name":"Misdreavus","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/200-misdreavus-shiny.png"},{"dex":201,"slug":"unown-a","name":"Unown A","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/201-unown-a-shiny.png"},{"dex":202,"slug":"wobbuffet","name":"Wobbuffet","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/202-wobbuffet-shiny.png"},{"dex":203,"slug":"girafarig","name":"Girafarig","types":["Normal","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/203-girafarig-shiny.png"},{"dex":204,"slug":"pineco","name":"Pineco","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/204-pineco-shiny.png"},{"dex":205,"slug":"forretress","name":"Forretress","types":["Bug","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/205-forretress-shiny.png"},{"dex":206,"slug":"dunsparce","name":"Dunsparce","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/206-dunsparce-shiny.png"},{"dex":207,"slug":"gligar","name":"Gligar","types":["Ground","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/207-gligar-shiny.png"},{"dex":208,"slug":"steelix","name":"Steelix","types":["Steel","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/208-steelix-shiny.png"},{"dex":209,"slug":"snubbull","name":"Snubbull","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/209-snubbull-shiny.png"},{"dex":210,"slug":"granbull","name":"Granbull","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/210-granbull-shiny.png"},{"dex":211,"slug":"qwilfish","name":"Qwilfish","types":["Water","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/211-qwilfish-shiny.png"},{"dex":212,"slug":"scizor","name":"Scizor","types":["Bug","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/212-scizor-shiny.png"},{"dex":213,"slug":"shuckle","name":"Shuckle","types":["Bug","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/213-shuckle-shiny.png"},{"dex":214,"slug":"heracross","name":"Heracross","types":["Bug","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/214-heracross-shiny.png"},{"dex":215,"slug":"sneasel","name":"Sneasel","types":["Dark","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/215-sneasel-shiny.png"},{"dex":216,"slug":"teddiursa","name":"Teddiursa","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/216-teddiursa-shiny.png"},{"dex":217,"slug":"ursaring","name":"Ursaring","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/217-ursaring-shiny.png"},{"dex":218,"slug":"slugma","name":"Slugma","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/218-slugma-shiny.png"},{"dex":219,"slug":"magcargo","name":"Magcargo","types":["Fire","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/219-magcargo-shiny.png"},{"dex":220,"slug":"swinub","name":"Swinub","types":["Ice","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/220-swinub-shiny.png"},{"dex":221,"slug":"piloswine","name":"Piloswine","types":["Ice","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/221-piloswine-shiny.png"},{"dex":222,"slug":"corsola","name":"Corsola","types":["Water","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/222-corsola-shiny.png"},{"dex":223,"slug":"remoraid","name":"Remoraid","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/223-remoraid-shiny.png"},{"dex":224,"slug":"octillery","name":"Octillery","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/224-octillery-shiny.png"},{"dex":225,"slug":"delibird","name":"Delibird","types":["Ice","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/225-delibird-shiny.png"},{"dex":226,"slug":"mantine","name":"Mantine","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/226-mantine-shiny.png"},{"dex":227,"slug":"skarmory","name":"Skarmory","types":["Steel","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/227-skarmory-shiny.png"},{"dex":228,"slug":"houndour","name":"Houndour","types":["Dark","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/228-houndour-shiny.png"},{"dex":229,"slug":"houndoom","name":"Houndoom","types":["Dark","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/229-houndoom-shiny.png"},{"dex":230,"slug":"kingdra","name":"Kingdra","types":["Water","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/230-kingdra-shiny.png"},{"dex":231,"slug":"phanpy","name":"Phanpy","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/231-phanpy-shiny.png"},{"dex":232,"slug":"donphan","name":"Donphan","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/232-donphan-shiny.png"},{"dex":233,"slug":"porygon2","name":"Porygon2","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/233-porygon2-shiny.png"},{"dex":234,"slug":"stantler","name":"Stantler","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/234-stantler-shiny.png"},{"dex":235,"slug":"smeargle","name":"Smeargle","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/235-smeargle-shiny.png"},{"dex":236,"slug":"tyrogue","name":"Tyrogue","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/236-tyrogue-shiny.png"},{"dex":237,"slug":"hitmontop","name":"Hitmontop","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/237-hitmontop-shiny.png"},{"dex":238,"slug":"smoochum","name":"Smoochum","types":["Ice","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/238-smoochum-shiny.png"},{"dex":239,"slug":"elekid","name":"Elekid","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/239-elekid-shiny.png"},{"dex":240,"slug":"magby","name":"Magby","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/240-magby-shiny.png"},{"dex":241,"slug":"miltank","name":"Miltank","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/241-miltank-shiny.png"},{"dex":242,"slug":"blissey","name":"Blissey","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/242-blissey-shiny.png"},{"dex":243,"slug":"raikou","name":"Raikou","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/243-raikou-shiny.png"},{"dex":244,"slug":"entei","name":"Entei","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/244-entei-shiny.png"},{"dex":245,"slug":"suicune","name":"Suicune","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/245-suicune-shiny.png"},{"dex":246,"slug":"larvitar","name":"Larvitar","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/246-larvitar-shiny.png"},{"dex":247,"slug":"pupitar","name":"Pupitar","types":["Rock","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/247-pupitar-shiny.png"},{"dex":248,"slug":"tyranitar","name":"Tyranitar","types":["Rock","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/248-tyranitar-shiny.png"},{"dex":249,"slug":"lugia","name":"Lugia","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/249-lugia-shiny.png"},{"dex":250,"slug":"ho-oh","name":"Ho-Oh","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/250-ho-oh-shiny.png"},{"dex":251,"slug":"celebi","name":"Celebi","types":["Psychic","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/251-celebi-shiny.png"},{"dex":252,"slug":"treecko","name":"Treecko","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/252-treecko-shiny.png"},{"dex":253,"slug":"grovyle","name":"Grovyle","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/253-grovyle-shiny.png"},{"dex":254,"slug":"sceptile","name":"Sceptile","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/254-sceptile-shiny.png"},{"dex":255,"slug":"torchic","name":"Torchic","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/255-torchic-shiny.png"},{"dex":256,"slug":"combusken","name":"Combusken","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/256-combusken-shiny.png"},{"dex":257,"slug":"blaziken","name":"Blaziken","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/257-blaziken-shiny.png"},{"dex":258,"slug":"mudkip","name":"Mudkip","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/258-mudkip-shiny.png"},{"dex":259,"slug":"marshtomp","name":"Marshtomp","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/259-marshtomp-shiny.png"},{"dex":260,"slug":"swampert","name":"Swampert","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/260-swampert-shiny.png"},{"dex":261,"slug":"poochyena","name":"Poochyena","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/261-poochyena-shiny.png"},{"dex":262,"slug":"mightyena","name":"Mightyena","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/262-mightyena-shiny.png"},{"dex":263,"slug":"zigzagoon","name":"Zigzagoon","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/263-zigzagoon-shiny.png"},{"dex":264,"slug":"linoone","name":"Linoone","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/264-linoone-shiny.png"},{"dex":265,"slug":"wurmple","name":"Wurmple","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/265-wurmple-shiny.png"},{"dex":266,"slug":"silcoon","name":"Silcoon","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/266-silcoon-shiny.png"},{"dex":267,"slug":"beautifly","name":"Beautifly","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/267-beautifly-shiny.png"},{"dex":268,"slug":"cascoon","name":"Cascoon","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/268-cascoon-shiny.png"},{"dex":269,"slug":"dustox","name":"Dustox","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/269-dustox-shiny.png"},{"dex":270,"slug":"lotad","name":"Lotad","types":["Water","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/270-lotad-shiny.png"},{"dex":271,"slug":"lombre","name":"Lombre","types":["Water","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/271-lombre-shiny.png"},{"dex":272,"slug":"ludicolo","name":"Ludicolo","types":["Water","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/272-ludicolo-shiny.png"},{"dex":273,"slug":"seedot","name":"Seedot","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/273-seedot-shiny.png"},{"dex":274,"slug":"nuzleaf","name":"Nuzleaf","types":["Grass","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/274-nuzleaf-shiny.png"},{"dex":275,"slug":"shiftry","name":"Shiftry","types":["Grass","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/275-shiftry-shiny.png"},{"dex":276,"slug":"taillow","name":"Taillow","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/276-taillow-shiny.png"},{"dex":277,"slug":"swellow","name":"Swellow","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/277-swellow-shiny.png"},{"dex":278,"slug":"wingull","name":"Wingull","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/278-wingull-shiny.png"},{"dex":279,"slug":"pelipper","name":"Pelipper","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/279-pelipper-shiny.png"},{"dex":280,"slug":"ralts","name":"Ralts","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/280-ralts-shiny.png"},{"dex":281,"slug":"kirlia","name":"Kirlia","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/281-kirlia-shiny.png"},{"dex":282,"slug":"gardevoir","name":"Gardevoir","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/282-gardevoir-shiny.png"},{"dex":283,"slug":"surskit","name":"Surskit","types":["Bug","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/283-surskit-shiny.png"},{"dex":284,"slug":"masquerain","name":"Masquerain","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/284-masquerain-shiny.png"},{"dex":285,"slug":"shroomish","name":"Shroomish","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/285-shroomish-shiny.png"},{"dex":286,"slug":"breloom","name":"Breloom","types":["Grass","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/286-breloom-shiny.png"},{"dex":287,"slug":"slakoth","name":"Slakoth","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/287-slakoth-shiny.png"},{"dex":288,"slug":"vigoroth","name":"Vigoroth","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/288-vigoroth-shiny.png"},{"dex":289,"slug":"slaking","name":"Slaking","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/289-slaking-shiny.png"},{"dex":290,"slug":"nincada","name":"Nincada","types":["Bug","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/290-nincada-shiny.png"},{"dex":291,"slug":"ninjask","name":"Ninjask","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/291-ninjask-shiny.png"},{"dex":292,"slug":"shedinja","name":"Shedinja","types":["Bug","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/292-shedinja-shiny.png"},{"dex":293,"slug":"whismur","name":"Whismur","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/293-whismur-shiny.png"},{"dex":294,"slug":"loudred","name":"Loudred","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/294-loudred-shiny.png"},{"dex":295,"slug":"exploud","name":"Exploud","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/295-exploud-shiny.png"},{"dex":296,"slug":"makuhita","name":"Makuhita","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/296-makuhita-shiny.png"},{"dex":297,"slug":"hariyama","name":"Hariyama","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/297-hariyama-shiny.png"},{"dex":298,"slug":"azurill","name":"Azurill","types":["Normal","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/298-azurill-shiny.png"},{"dex":299,"slug":"nosepass","name":"Nosepass","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/299-nosepass-shiny.png"},{"dex":300,"slug":"skitty","name":"Skitty","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/300-skitty-shiny.png"},{"dex":301,"slug":"delcatty","name":"Delcatty","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/301-delcatty-shiny.png"},{"dex":302,"slug":"sableye","name":"Sableye","types":["Dark","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/302-sableye-shiny.png"},{"dex":303,"slug":"mawile","name":"Mawile","types":["Steel","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/303-mawile-shiny.png"},{"dex":304,"slug":"aron","name":"Aron","types":["Steel","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/304-aron-shiny.png"},{"dex":305,"slug":"lairon","name":"Lairon","types":["Steel","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/305-lairon-shiny.png"},{"dex":306,"slug":"aggron","name":"Aggron","types":["Steel","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/306-aggron-shiny.png"},{"dex":307,"slug":"meditite","name":"Meditite","types":["Fighting","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/307-meditite-shiny.png"},{"dex":308,"slug":"medicham","name":"Medicham","types":["Fighting","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/308-medicham-shiny.png"},{"dex":309,"slug":"electrike","name":"Electrike","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/309-electrike-shiny.png"},{"dex":310,"slug":"manectric","name":"Manectric","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/310-manectric-shiny.png"},{"dex":311,"slug":"plusle","name":"Plusle","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/311-plusle-shiny.png"},{"dex":312,"slug":"minun","name":"Minun","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/312-minun-shiny.png"},{"dex":313,"slug":"volbeat","name":"Volbeat","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/313-volbeat-shiny.png"},{"dex":314,"slug":"illumise","name":"Illumise","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/314-illumise-shiny.png"},{"dex":315,"slug":"roselia","name":"Roselia","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/315-roselia-shiny.png"},{"dex":316,"slug":"gulpin","name":"Gulpin","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/316-gulpin-shiny.png"},{"dex":317,"slug":"swalot","name":"Swalot","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/317-swalot-shiny.png"},{"dex":318,"slug":"carvanha","name":"Carvanha","types":["Water","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/318-carvanha-shiny.png"},{"dex":319,"slug":"sharpedo","name":"Sharpedo","types":["Water","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/319-sharpedo-shiny.png"},{"dex":320,"slug":"wailmer","name":"Wailmer","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/320-wailmer-shiny.png"},{"dex":321,"slug":"wailord","name":"Wailord","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/321-wailord-shiny.png"},{"dex":322,"slug":"numel","name":"Numel","types":["Fire","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/322-numel-shiny.png"},{"dex":323,"slug":"camerupt","name":"Camerupt","types":["Fire","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/323-camerupt-shiny.png"},{"dex":324,"slug":"torkoal","name":"Torkoal","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/324-torkoal-shiny.png"},{"dex":325,"slug":"spoink","name":"Spoink","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/325-spoink-shiny.png"},{"dex":326,"slug":"grumpig","name":"Grumpig","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/326-grumpig-shiny.png"},{"dex":327,"slug":"spinda","name":"Spinda","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/327-spinda-shiny.png"},{"dex":328,"slug":"trapinch","name":"Trapinch","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/328-trapinch-shiny.png"},{"dex":329,"slug":"vibrava","name":"Vibrava","types":["Ground","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/329-vibrava-shiny.png"},{"dex":330,"slug":"flygon","name":"Flygon","types":["Ground","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/330-flygon-shiny.png"},{"dex":331,"slug":"cacnea","name":"Cacnea","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/331-cacnea-shiny.png"},{"dex":332,"slug":"cacturne","name":"Cacturne","types":["Grass","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/332-cacturne-shiny.png"},{"dex":333,"slug":"swablu","name":"Swablu","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/333-swablu-shiny.png"},{"dex":334,"slug":"altaria","name":"Altaria","types":["Dragon","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/334-altaria-shiny.png"},{"dex":335,"slug":"zangoose","name":"Zangoose","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/335-zangoose-shiny.png"},{"dex":336,"slug":"seviper","name":"Seviper","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/336-seviper-shiny.png"},{"dex":337,"slug":"lunatone","name":"Lunatone","types":["Rock","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/337-lunatone-shiny.png"},{"dex":338,"slug":"solrock","name":"Solrock","types":["Rock","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/338-solrock-shiny.png"},{"dex":339,"slug":"barboach","name":"Barboach","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/339-barboach-shiny.png"},{"dex":340,"slug":"whiscash","name":"Whiscash","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/340-whiscash-shiny.png"},{"dex":341,"slug":"corphish","name":"Corphish","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/341-corphish-shiny.png"},{"dex":342,"slug":"crawdaunt","name":"Crawdaunt","types":["Water","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/342-crawdaunt-shiny.png"},{"dex":343,"slug":"baltoy","name":"Baltoy","types":["Ground","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/343-baltoy-shiny.png"},{"dex":344,"slug":"claydol","name":"Claydol","types":["Ground","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/344-claydol-shiny.png"},{"dex":345,"slug":"lileep","name":"Lileep","types":["Rock","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/345-lileep-shiny.png"},{"dex":346,"slug":"cradily","name":"Cradily","types":["Rock","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/346-cradily-shiny.png"},{"dex":347,"slug":"anorith","name":"Anorith","types":["Rock","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/347-anorith-shiny.png"},{"dex":348,"slug":"armaldo","name":"Armaldo","types":["Rock","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/348-armaldo-shiny.png"},{"dex":349,"slug":"feebas","name":"Feebas","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/349-feebas-shiny.png"},{"dex":350,"slug":"milotic","name":"Milotic","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/350-milotic-shiny.png"},{"dex":351,"slug":"castform","name":"Castform","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/351-castform-shiny.png"},{"dex":352,"slug":"kecleon","name":"Kecleon","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/352-kecleon-shiny.png"},{"dex":353,"slug":"shuppet","name":"Shuppet","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/353-shuppet-shiny.png"},{"dex":354,"slug":"banette","name":"Banette","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/354-banette-shiny.png"},{"dex":355,"slug":"duskull","name":"Duskull","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/355-duskull-shiny.png"},{"dex":356,"slug":"dusclops","name":"Dusclops","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/356-dusclops-shiny.png"},{"dex":357,"slug":"tropius","name":"Tropius","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/357-tropius-shiny.png"},{"dex":358,"slug":"chimecho","name":"Chimecho","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/358-chimecho-shiny.png"},{"dex":359,"slug":"absol","name":"Absol","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/359-absol-shiny.png"},{"dex":360,"slug":"wynaut","name":"Wynaut","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/360-wynaut-shiny.png"},{"dex":361,"slug":"snorunt","name":"Snorunt","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/361-snorunt-shiny.png"},{"dex":362,"slug":"glalie","name":"Glalie","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/362-glalie-shiny.png"},{"dex":363,"slug":"spheal","name":"Spheal","types":["Ice","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/363-spheal-shiny.png"},{"dex":364,"slug":"sealeo","name":"Sealeo","types":["Ice","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/364-sealeo-shiny.png"},{"dex":365,"slug":"walrein","name":"Walrein","types":["Ice","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/365-walrein-shiny.png"},{"dex":366,"slug":"clamperl","name":"Clamperl","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/366-clamperl-shiny.png"},{"dex":367,"slug":"huntail","name":"Huntail","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/367-huntail-shiny.png"},{"dex":368,"slug":"gorebyss","name":"Gorebyss","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/368-gorebyss-shiny.png"},{"dex":369,"slug":"relicanth","name":"Relicanth","types":["Water","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/369-relicanth-shiny.png"},{"dex":370,"slug":"luvdisc","name":"Luvdisc","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/370-luvdisc-shiny.png"},{"dex":371,"slug":"bagon","name":"Bagon","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/371-bagon-shiny.png"},{"dex":372,"slug":"shelgon","name":"Shelgon","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/372-shelgon-shiny.png"},{"dex":373,"slug":"salamence","name":"Salamence","types":["Dragon","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/373-salamence-shiny.png"},{"dex":374,"slug":"beldum","name":"Beldum","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/374-beldum-shiny.png"},{"dex":375,"slug":"metang","name":"Metang","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/375-metang-shiny.png"},{"dex":376,"slug":"metagross","name":"Metagross","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/376-metagross-shiny.png"},{"dex":377,"slug":"regirock","name":"Regirock","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/377-regirock-shiny.png"},{"dex":378,"slug":"regice","name":"Regice","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/378-regice-shiny.png"},{"dex":379,"slug":"registeel","name":"Registeel","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/379-registeel-shiny.png"},{"dex":380,"slug":"latias","name":"Latias","types":["Dragon","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/380-latias-shiny.png"},{"dex":381,"slug":"latios","name":"Latios","types":["Dragon","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/381-latios-shiny.png"},{"dex":382,"slug":"kyogre","name":"Kyogre","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/382-kyogre-shiny.png"},{"dex":383,"slug":"groudon","name":"Groudon","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/383-groudon-shiny.png"},{"dex":384,"slug":"rayquaza","name":"Rayquaza","types":["Dragon","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/384-rayquaza-shiny.png"},{"dex":385,"slug":"jirachi","name":"Jirachi","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/385-jirachi-shiny.png"},{"dex":386,"slug":"deoxys","name":"Deoxys Normal","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/386-deoxys-shiny.png"},{"dex":387,"slug":"turtwig","name":"Turtwig","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/387-turtwig-shiny.png"},{"dex":388,"slug":"grotle","name":"Grotle","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/388-grotle-shiny.png"},{"dex":389,"slug":"torterra","name":"Torterra","types":["Grass","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/389-torterra-shiny.png"},{"dex":390,"slug":"chimchar","name":"Chimchar","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/390-chimchar-shiny.png"},{"dex":391,"slug":"monferno","name":"Monferno","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/391-monferno-shiny.png"},{"dex":392,"slug":"infernape","name":"Infernape","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/392-infernape-shiny.png"},{"dex":393,"slug":"piplup","name":"Piplup","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/393-piplup-shiny.png"},{"dex":394,"slug":"prinplup","name":"Prinplup","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/394-prinplup-shiny.png"},{"dex":395,"slug":"empoleon","name":"Empoleon","types":["Water","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/395-empoleon-shiny.png"},{"dex":396,"slug":"starly","name":"Starly","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/396-starly-shiny.png"},{"dex":397,"slug":"staravia","name":"Staravia","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/397-staravia-shiny.png"},{"dex":398,"slug":"staraptor","name":"Staraptor","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/398-staraptor-shiny.png"},{"dex":399,"slug":"bidoof","name":"Bidoof","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/399-bidoof-shiny.png"},{"dex":400,"slug":"bibarel","name":"Bibarel","types":["Normal","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/400-bibarel-shiny.png"},{"dex":401,"slug":"kricketot","name":"Kricketot","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/401-kricketot-shiny.png"},{"dex":402,"slug":"kricketune","name":"Kricketune","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/402-kricketune-shiny.png"},{"dex":403,"slug":"shinx","name":"Shinx","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/403-shinx-shiny.png"},{"dex":404,"slug":"luxio","name":"Luxio","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/404-luxio-shiny.png"},{"dex":405,"slug":"luxray","name":"Luxray","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/405-luxray-shiny.png"},{"dex":406,"slug":"budew","name":"Budew","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/406-budew-shiny.png"},{"dex":407,"slug":"roserade","name":"Roserade","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/407-roserade-shiny.png"},{"dex":408,"slug":"cranidos","name":"Cranidos","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/408-cranidos-shiny.png"},{"dex":409,"slug":"rampardos","name":"Rampardos","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/409-rampardos-shiny.png"},{"dex":410,"slug":"shieldon","name":"Shieldon","types":["Rock","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/410-shieldon-shiny.png"},{"dex":411,"slug":"bastiodon","name":"Bastiodon","types":["Rock","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/411-bastiodon-shiny.png"},{"dex":412,"slug":"burmy-plant","name":"Burmy Plant","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/412-burmy-plant-shiny.png"},{"dex":413,"slug":"wormadam-plant","name":"Wormadam Plant","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/413-wormadam-plant-shiny.png"},{"dex":414,"slug":"mothim","name":"Mothim","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/414-mothim-shiny.png"},{"dex":415,"slug":"combee","name":"Combee","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/415-combee-shiny.png"},{"dex":416,"slug":"vespiquen","name":"Vespiquen","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/416-vespiquen-shiny.png"},{"dex":417,"slug":"pachirisu","name":"Pachirisu","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/417-pachirisu-shiny.png"},{"dex":418,"slug":"buizel","name":"Buizel","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/418-buizel-shiny.png"},{"dex":419,"slug":"floatzel","name":"Floatzel","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/419-floatzel-shiny.png"},{"dex":420,"slug":"cherubi","name":"Cherubi","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/420-cherubi-shiny.png"},{"dex":421,"slug":"cherrim-overcast","name":"Cherrim Overcast","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/421-cherrim-overcast-shiny.png"},{"dex":422,"slug":"shellos-west-sea","name":"Shellos West Sea","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/422-shellos-west-sea-shiny.png"},{"dex":423,"slug":"gastrodon-west-sea","name":"Gastrodon West Sea","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/423-gastrodon-west-sea-shiny.png"},{"dex":424,"slug":"ambipom","name":"Ambipom","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/424-ambipom-shiny.png"},{"dex":425,"slug":"drifloon","name":"Drifloon","types":["Ghost","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/425-drifloon-shiny.png"},{"dex":426,"slug":"drifblim","name":"Drifblim","types":["Ghost","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/426-drifblim-shiny.png"},{"dex":427,"slug":"buneary","name":"Buneary","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/427-buneary-shiny.png"},{"dex":428,"slug":"lopunny","name":"Lopunny","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/428-lopunny-shiny.png"},{"dex":429,"slug":"mismagius","name":"Mismagius","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/429-mismagius-shiny.png"},{"dex":430,"slug":"honchkrow","name":"Honchkrow","types":["Dark","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/430-honchkrow-shiny.png"},{"dex":431,"slug":"glameow","name":"Glameow","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/431-glameow-shiny.png"},{"dex":432,"slug":"purugly","name":"Purugly","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/432-purugly-shiny.png"},{"dex":433,"slug":"chingling","name":"Chingling","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/433-chingling-shiny.png"},{"dex":434,"slug":"stunky","name":"Stunky","types":["Poison","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/434-stunky-shiny.png"},{"dex":435,"slug":"skuntank","name":"Skuntank","types":["Poison","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/435-skuntank-shiny.png"},{"dex":436,"slug":"bronzor","name":"Bronzor","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/436-bronzor-shiny.png"},{"dex":437,"slug":"bronzong","name":"Bronzong","types":["Steel","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/437-bronzong-shiny.png"},{"dex":438,"slug":"bonsly","name":"Bonsly","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/438-bonsly-shiny.png"},{"dex":439,"slug":"mime-jr","name":"Mime Jr.","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/439-mime-jr-shiny.png"},{"dex":440,"slug":"happiny","name":"Happiny","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/440-happiny-shiny.png"},{"dex":441,"slug":"chatot","name":"Chatot","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/441-chatot-shiny.png"},{"dex":442,"slug":"spiritomb","name":"Spiritomb","types":["Ghost","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/442-spiritomb-shiny.png"},{"dex":443,"slug":"gible","name":"Gible","types":["Dragon","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/443-gible-shiny.png"},{"dex":444,"slug":"gabite","name":"Gabite","types":["Dragon","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/444-gabite-shiny.png"},{"dex":445,"slug":"garchomp","name":"Garchomp","types":["Dragon","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/445-garchomp-shiny.png"},{"dex":446,"slug":"munchlax","name":"Munchlax","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/446-munchlax-shiny.png"},{"dex":447,"slug":"riolu","name":"Riolu","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/447-riolu-shiny.png"},{"dex":448,"slug":"lucario","name":"Lucario","types":["Fighting","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/448-lucario-shiny.png"},{"dex":449,"slug":"hippopotas","name":"Hippopotas","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/449-hippopotas-shiny.png"},{"dex":450,"slug":"hippowdon","name":"Hippowdon","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/450-hippowdon-shiny.png"},{"dex":451,"slug":"skorupi","name":"Skorupi","types":["Poison","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/451-skorupi-shiny.png"},{"dex":452,"slug":"drapion","name":"Drapion","types":["Poison","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/452-drapion-shiny.png"},{"dex":453,"slug":"croagunk","name":"Croagunk","types":["Poison","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/453-croagunk-shiny.png"},{"dex":454,"slug":"toxicroak","name":"Toxicroak","types":["Poison","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/454-toxicroak-shiny.png"},{"dex":455,"slug":"carnivine","name":"Carnivine","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/455-carnivine-shiny.png"},{"dex":456,"slug":"finneon","name":"Finneon","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/456-finneon-shiny.png"},{"dex":457,"slug":"lumineon","name":"Lumineon","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/457-lumineon-shiny.png"},{"dex":458,"slug":"mantyke","name":"Mantyke","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/458-mantyke-shiny.png"},{"dex":459,"slug":"snover","name":"Snover","types":["Grass","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/459-snover-shiny.png"},{"dex":460,"slug":"abomasnow","name":"Abomasnow","types":["Grass","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/460-abomasnow-shiny.png"},{"dex":461,"slug":"weavile","name":"Weavile","types":["Dark","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/461-weavile-shiny.png"},{"dex":462,"slug":"magnezone","name":"Magnezone","types":["Electric","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/462-magnezone-shiny.png"},{"dex":463,"slug":"lickilicky","name":"Lickilicky","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/463-lickilicky-shiny.png"},{"dex":464,"slug":"rhyperior","name":"Rhyperior","types":["Ground","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/464-rhyperior-shiny.png"},{"dex":465,"slug":"tangrowth","name":"Tangrowth","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/465-tangrowth-shiny.png"},{"dex":466,"slug":"electivire","name":"Electivire","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/466-electivire-shiny.png"},{"dex":467,"slug":"magmortar","name":"Magmortar","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/467-magmortar-shiny.png"},{"dex":468,"slug":"togekiss","name":"Togekiss","types":["Fairy","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/468-togekiss-shiny.png"},{"dex":469,"slug":"yanmega","name":"Yanmega","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/469-yanmega-shiny.png"},{"dex":470,"slug":"leafeon","name":"Leafeon","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/470-leafeon-shiny.png"},{"dex":471,"slug":"glaceon","name":"Glaceon","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/471-glaceon-shiny.png"},{"dex":472,"slug":"gliscor","name":"Gliscor","types":["Ground","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/472-gliscor-shiny.png"},{"dex":473,"slug":"mamoswine","name":"Mamoswine","types":["Ice","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/473-mamoswine-shiny.png"},{"dex":474,"slug":"porygon-z","name":"Porygon-Z","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/474-porygon-z-shiny.png"},{"dex":475,"slug":"gallade","name":"Gallade","types":["Psychic","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/475-gallade-shiny.png"},{"dex":476,"slug":"probopass","name":"Probopass","types":["Rock","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/476-probopass-shiny.png"},{"dex":477,"slug":"dusknoir","name":"Dusknoir","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/477-dusknoir-shiny.png"},{"dex":478,"slug":"froslass","name":"Froslass","types":["Ice","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/478-froslass-shiny.png"},{"dex":479,"slug":"rotom","name":"Rotom","types":["Electric","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/479-rotom-shiny.png"},{"dex":480,"slug":"uxie","name":"Uxie","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/480-uxie-shiny.png"},{"dex":481,"slug":"mesprit","name":"Mesprit","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/481-mesprit-shiny.png"},{"dex":482,"slug":"azelf","name":"Azelf","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/482-azelf-shiny.png"},{"dex":483,"slug":"dialga","name":"Dialga","types":["Steel","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/483-dialga-shiny.png"},{"dex":484,"slug":"palkia","name":"Palkia","types":["Water","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/484-palkia-shiny.png"},{"dex":485,"slug":"heatran","name":"Heatran","types":["Fire","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/485-heatran-shiny.png"},{"dex":486,"slug":"regigigas","name":"Regigigas","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/486-regigigas-shiny.png"},{"dex":487,"slug":"giratina-altered","name":"Giratina Altered","types":["Ghost","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/487-giratina-altered-shiny.png"},{"dex":488,"slug":"cresselia","name":"Cresselia","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/488-cresselia-shiny.png"},{"dex":489,"slug":"phione","name":"Phione","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/489-phione-shiny.png"},{"dex":490,"slug":"manaphy","name":"Manaphy","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/490-manaphy-shiny.png"},{"dex":491,"slug":"darkrai","name":"Darkrai","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/491-darkrai-shiny.png"},{"dex":492,"slug":"shaymin","name":"Shaymin","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/492-shaymin-shiny.png"},{"dex":493,"slug":"arceus","name":"Arceus","types":["Normal"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/493-arceus-shiny.png"},{"dex":494,"slug":"victini","name":"Victini","types":["Psychic","Fire"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/494-victini-shiny.png"},{"dex":495,"slug":"snivy","name":"Snivy","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/495-snivy-shiny.png"},{"dex":496,"slug":"servine","name":"Servine","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/496-servine-shiny.png"},{"dex":497,"slug":"serperior","name":"Serperior","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/497-serperior-shiny.png"},{"dex":498,"slug":"tepig","name":"Tepig","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/498-tepig-shiny.png"},{"dex":499,"slug":"pignite","name":"Pignite","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/499-pignite-shiny.png"},{"dex":500,"slug":"emboar","name":"Emboar","types":["Fire","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/500-emboar-shiny.png"},{"dex":501,"slug":"oshawott","name":"Oshawott","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/501-oshawott-shiny.png"},{"dex":502,"slug":"dewott","name":"Dewott","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/502-dewott-shiny.png"},{"dex":503,"slug":"samurott","name":"Samurott","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/503-samurott-shiny.png"},{"dex":504,"slug":"patrat","name":"Patrat","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/504-patrat-shiny.png"},{"dex":505,"slug":"watchog","name":"Watchog","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/505-watchog-shiny.png"},{"dex":506,"slug":"lillipup","name":"Lillipup","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/506-lillipup-shiny.png"},{"dex":507,"slug":"herdier","name":"Herdier","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/507-herdier-shiny.png"},{"dex":508,"slug":"stoutland","name":"Stoutland","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/508-stoutland-shiny.png"},{"dex":509,"slug":"purrloin","name":"Purrloin","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/509-purrloin-shiny.png"},{"dex":510,"slug":"liepard","name":"Liepard","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/510-liepard-shiny.png"},{"dex":511,"slug":"pansage","name":"Pansage","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/511-pansage-shiny.png"},{"dex":512,"slug":"simisage","name":"Simisage","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/512-simisage-shiny.png"},{"dex":513,"slug":"pansear","name":"Pansear","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/513-pansear-shiny.png"},{"dex":514,"slug":"simisear","name":"Simisear","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/514-simisear-shiny.png"},{"dex":515,"slug":"panpour","name":"Panpour","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/515-panpour-shiny.png"},{"dex":516,"slug":"simipour","name":"Simipour","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/516-simipour-shiny.png"},{"dex":517,"slug":"munna","name":"Munna","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/517-munna-shiny.png"},{"dex":518,"slug":"musharna","name":"Musharna","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/518-musharna-shiny.png"},{"dex":519,"slug":"pidove","name":"Pidove","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/519-pidove-shiny.png"},{"dex":520,"slug":"tranquill","name":"Tranquill","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/520-tranquill-shiny.png"},{"dex":521,"slug":"unfezant","name":"Unfezant","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/521-unfezant-shiny.png"},{"dex":522,"slug":"blitzle","name":"Blitzle","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/522-blitzle-shiny.png"},{"dex":523,"slug":"zebstrika","name":"Zebstrika","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/523-zebstrika-shiny.png"},{"dex":524,"slug":"roggenrola","name":"Roggenrola","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/524-roggenrola-shiny.png"},{"dex":525,"slug":"boldore","name":"Boldore","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/525-boldore-shiny.png"},{"dex":526,"slug":"gigalith","name":"Gigalith","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/526-gigalith-shiny.png"},{"dex":527,"slug":"woobat","name":"Woobat","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/527-woobat-shiny.png"},{"dex":528,"slug":"swoobat","name":"Swoobat","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/528-swoobat-shiny.png"},{"dex":529,"slug":"drilbur","name":"Drilbur","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/529-drilbur-shiny.png"},{"dex":530,"slug":"excadrill","name":"Excadrill","types":["Ground","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/530-excadrill-shiny.png"},{"dex":531,"slug":"audino","name":"Audino","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/531-audino-shiny.png"},{"dex":532,"slug":"timburr","name":"Timburr","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/532-timburr-shiny.png"},{"dex":533,"slug":"gurdurr","name":"Gurdurr","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/533-gurdurr-shiny.png"},{"dex":534,"slug":"conkeldurr","name":"Conkeldurr","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/534-conkeldurr-shiny.png"},{"dex":535,"slug":"tympole","name":"Tympole","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/535-tympole-shiny.png"},{"dex":536,"slug":"palpitoad","name":"Palpitoad","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/536-palpitoad-shiny.png"},{"dex":537,"slug":"seismitoad","name":"Seismitoad","types":["Water","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/537-seismitoad-shiny.png"},{"dex":538,"slug":"throh","name":"Throh","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/538-throh-shiny.png"},{"dex":539,"slug":"sawk","name":"Sawk","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/539-sawk-shiny.png"},{"dex":540,"slug":"sewaddle","name":"Sewaddle","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/540-sewaddle-shiny.png"},{"dex":541,"slug":"swadloon","name":"Swadloon","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/541-swadloon-shiny.png"},{"dex":542,"slug":"leavanny","name":"Leavanny","types":["Bug","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/542-leavanny-shiny.png"},{"dex":543,"slug":"venipede","name":"Venipede","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/543-venipede-shiny.png"},{"dex":544,"slug":"whirlipede","name":"Whirlipede","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/544-whirlipede-shiny.png"},{"dex":545,"slug":"scolipede","name":"Scolipede","types":["Bug","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/545-scolipede-shiny.png"},{"dex":546,"slug":"cottonee","name":"Cottonee","types":["Grass","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/546-cottonee-shiny.png"},{"dex":547,"slug":"whimsicott","name":"Whimsicott","types":["Grass","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/547-whimsicott-shiny.png"},{"dex":548,"slug":"petilil","name":"Petilil","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/548-petilil-shiny.png"},{"dex":549,"slug":"lilligant","name":"Lilligant","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/549-lilligant-shiny.png"},{"dex":550,"slug":"basculin-red-striped","name":"Basculin Red Striped","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/550-basculin-red-striped-shiny.png"},{"dex":551,"slug":"sandile","name":"Sandile","types":["Ground","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/551-sandile-shiny.png"},{"dex":552,"slug":"krokorok","name":"Krokorok","types":["Ground","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/552-krokorok-shiny.png"},{"dex":553,"slug":"krookodile","name":"Krookodile","types":["Ground","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/553-krookodile-shiny.png"},{"dex":554,"slug":"darumaka","name":"Darumaka","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/554-darumaka-shiny.png"},{"dex":555,"slug":"darmanitan-standard","name":"Darmanitan Standard","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/555-darmanitan-standard-shiny.png"},{"dex":556,"slug":"maractus","name":"Maractus","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/556-maractus-shiny.png"},{"dex":557,"slug":"dwebble","name":"Dwebble","types":["Bug","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/557-dwebble-shiny.png"},{"dex":558,"slug":"crustle","name":"Crustle","types":["Bug","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/558-crustle-shiny.png"},{"dex":559,"slug":"scraggy","name":"Scraggy","types":["Dark","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/559-scraggy-shiny.png"},{"dex":560,"slug":"scrafty","name":"Scrafty","types":["Dark","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/560-scrafty-shiny.png"},{"dex":561,"slug":"sigilyph","name":"Sigilyph","types":["Psychic","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/561-sigilyph-shiny.png"},{"dex":562,"slug":"yamask","name":"Yamask","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/562-yamask-shiny.png"},{"dex":563,"slug":"cofagrigus","name":"Cofagrigus","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/563-cofagrigus-shiny.png"},{"dex":564,"slug":"tirtouga","name":"Tirtouga","types":["Water","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/564-tirtouga-shiny.png"},{"dex":565,"slug":"carracosta","name":"Carracosta","types":["Water","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/565-carracosta-shiny.png"},{"dex":566,"slug":"archen","name":"Archen","types":["Rock","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/566-archen-shiny.png"},{"dex":567,"slug":"archeops","name":"Archeops","types":["Rock","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/567-archeops-shiny.png"},{"dex":568,"slug":"trubbish","name":"Trubbish","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/568-trubbish-shiny.png"},{"dex":569,"slug":"garbodor","name":"Garbodor","types":["Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/569-garbodor-shiny.png"},{"dex":570,"slug":"zorua","name":"Zorua","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/570-zorua-shiny.png"},{"dex":571,"slug":"zoroark","name":"Zoroark","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/571-zoroark-shiny.png"},{"dex":572,"slug":"minccino","name":"Minccino","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/572-minccino-shiny.png"},{"dex":573,"slug":"cinccino","name":"Cinccino","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/573-cinccino-shiny.png"},{"dex":574,"slug":"gothita","name":"Gothita","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/574-gothita-shiny.png"},{"dex":575,"slug":"gothorita","name":"Gothorita","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/575-gothorita-shiny.png"},{"dex":576,"slug":"gothitelle","name":"Gothitelle","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/576-gothitelle-shiny.png"},{"dex":577,"slug":"solosis","name":"Solosis","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/577-solosis-shiny.png"},{"dex":578,"slug":"duosion","name":"Duosion","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/578-duosion-shiny.png"},{"dex":579,"slug":"reuniclus","name":"Reuniclus","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/579-reuniclus-shiny.png"},{"dex":580,"slug":"ducklett","name":"Ducklett","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/580-ducklett-shiny.png"},{"dex":581,"slug":"swanna","name":"Swanna","types":["Water","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/581-swanna-shiny.png"},{"dex":582,"slug":"vanillite","name":"Vanillite","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/582-vanillite-shiny.png"},{"dex":583,"slug":"vanillish","name":"Vanillish","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/583-vanillish-shiny.png"},{"dex":584,"slug":"vanilluxe","name":"Vanilluxe","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/584-vanilluxe-shiny.png"},{"dex":585,"slug":"deerling-spring","name":"Deerling Spring","types":["Normal","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/585-deerling-spring-shiny.png"},{"dex":586,"slug":"sawsbuck-spring","name":"Sawsbuck Spring","types":["Normal","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/586-sawsbuck-spring-shiny.png"},{"dex":587,"slug":"emolga","name":"Emolga","types":["Electric","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/587-emolga-shiny.png"},{"dex":588,"slug":"karrablast","name":"Karrablast","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/588-karrablast-shiny.png"},{"dex":589,"slug":"escavalier","name":"Escavalier","types":["Bug","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/589-escavalier-shiny.png"},{"dex":590,"slug":"foongus","name":"Foongus","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/590-foongus-shiny.png"},{"dex":591,"slug":"amoonguss","name":"Amoonguss","types":["Grass","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/591-amoonguss-shiny.png"},{"dex":592,"slug":"frillish","name":"Frillish","types":["Water","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/592-frillish-shiny.png"},{"dex":593,"slug":"jellicent","name":"Jellicent","types":["Water","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/593-jellicent-shiny.png"},{"dex":594,"slug":"alomomola","name":"Alomomola","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/594-alomomola-shiny.png"},{"dex":595,"slug":"joltik","name":"Joltik","types":["Bug","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/595-joltik-shiny.png"},{"dex":596,"slug":"galvantula","name":"Galvantula","types":["Bug","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/596-galvantula-shiny.png"},{"dex":597,"slug":"ferroseed","name":"Ferroseed","types":["Grass","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/597-ferroseed-shiny.png"},{"dex":598,"slug":"ferrothorn","name":"Ferrothorn","types":["Grass","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/598-ferrothorn-shiny.png"},{"dex":599,"slug":"klink","name":"Klink","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/599-klink-shiny.png"},{"dex":600,"slug":"klang","name":"Klang","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/600-klang-shiny.png"},{"dex":601,"slug":"klinklang","name":"Klinklang","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/601-klinklang-shiny.png"},{"dex":602,"slug":"tynamo","name":"Tynamo","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/602-tynamo-shiny.png"},{"dex":603,"slug":"eelektrik","name":"Eelektrik","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/603-eelektrik-shiny.png"},{"dex":604,"slug":"eelektross","name":"Eelektross","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/604-eelektross-shiny.png"},{"dex":605,"slug":"elgyem","name":"Elgyem","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/605-elgyem-shiny.png"},{"dex":606,"slug":"beheeyem","name":"Beheeyem","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/606-beheeyem-shiny.png"},{"dex":607,"slug":"litwick","name":"Litwick","types":["Ghost","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/607-litwick-shiny.png"},{"dex":608,"slug":"lampent","name":"Lampent","types":["Ghost","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/608-lampent-shiny.png"},{"dex":609,"slug":"chandelure","name":"Chandelure","types":["Ghost","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/609-chandelure-shiny.png"},{"dex":610,"slug":"axew","name":"Axew","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/610-axew-shiny.png"},{"dex":611,"slug":"fraxure","name":"Fraxure","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/611-fraxure-shiny.png"},{"dex":612,"slug":"haxorus","name":"Haxorus","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/612-haxorus-shiny.png"},{"dex":613,"slug":"cubchoo","name":"Cubchoo","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/613-cubchoo-shiny.png"},{"dex":614,"slug":"beartic","name":"Beartic","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/614-beartic-shiny.png"},{"dex":615,"slug":"cryogonal","name":"Cryogonal","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/615-cryogonal-shiny.png"},{"dex":616,"slug":"shelmet","name":"Shelmet","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/616-shelmet-shiny.png"},{"dex":617,"slug":"accelgor","name":"Accelgor","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/617-accelgor-shiny.png"},{"dex":618,"slug":"stunfisk","name":"Stunfisk","types":["Ground","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/618-stunfisk-shiny.png"},{"dex":619,"slug":"mienfoo","name":"Mienfoo","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/619-mienfoo-shiny.png"},{"dex":620,"slug":"mienshao","name":"Mienshao","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/620-mienshao-shiny.png"},{"dex":621,"slug":"druddigon","name":"Druddigon","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/621-druddigon-shiny.png"},{"dex":622,"slug":"golett","name":"Golett","types":["Ground","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/622-golett-shiny.png"},{"dex":623,"slug":"golurk","name":"Golurk","types":["Ground","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/623-golurk-shiny.png"},{"dex":624,"slug":"pawniard","name":"Pawniard","types":["Dark","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/624-pawniard-shiny.png"},{"dex":625,"slug":"bisharp","name":"Bisharp","types":["Dark","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/625-bisharp-shiny.png"},{"dex":626,"slug":"bouffalant","name":"Bouffalant","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/626-bouffalant-shiny.png"},{"dex":627,"slug":"rufflet","name":"Rufflet","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/627-rufflet-shiny.png"},{"dex":628,"slug":"braviary","name":"Braviary","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/628-braviary-shiny.png"},{"dex":629,"slug":"vullaby","name":"Vullaby","types":["Dark","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/629-vullaby-shiny.png"},{"dex":630,"slug":"mandibuzz","name":"Mandibuzz","types":["Dark","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/630-mandibuzz-shiny.png"},{"dex":631,"slug":"heatmor","name":"Heatmor","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/631-heatmor-shiny.png"},{"dex":632,"slug":"durant","name":"Durant","types":["Bug","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/632-durant-shiny.png"},{"dex":633,"slug":"deino","name":"Deino","types":["Dark","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/633-deino-shiny.png"},{"dex":634,"slug":"zweilous","name":"Zweilous","types":["Dark","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/634-zweilous-shiny.png"},{"dex":635,"slug":"hydreigon","name":"Hydreigon","types":["Dark","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/635-hydreigon-shiny.png"},{"dex":636,"slug":"larvesta","name":"Larvesta","types":["Bug","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/636-larvesta-shiny.png"},{"dex":637,"slug":"volcarona","name":"Volcarona","types":["Bug","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/637-volcarona-shiny.png"},{"dex":638,"slug":"cobalion","name":"Cobalion","types":["Steel","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/638-cobalion-shiny.png"},{"dex":639,"slug":"terrakion","name":"Terrakion","types":["Rock","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/639-terrakion-shiny.png"},{"dex":640,"slug":"virizion","name":"Virizion","types":["Grass","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/640-virizion-shiny.png"},{"dex":641,"slug":"tornadus-incarnate","name":"Tornadus Incarnate","types":["Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/641-tornadus-incarnate-shiny.png"},{"dex":642,"slug":"thundurus-incarnate","name":"Thundurus Incarnate","types":["Electric","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/642-thundurus-incarnate-shiny.png"},{"dex":643,"slug":"reshiram","name":"Reshiram","types":["Dragon","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/643-reshiram-shiny.png"},{"dex":644,"slug":"zekrom","name":"Zekrom","types":["Dragon","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/644-zekrom-shiny.png"},{"dex":645,"slug":"landorus-incarnate","name":"Landorus Incarnate","types":["Ground","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/645-landorus-incarnate-shiny.png"},{"dex":646,"slug":"kyurem","name":"Kyurem","types":["Dragon","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/646-kyurem-shiny.png"},{"dex":647,"slug":"keldeo-ordinary","name":"Keldeo Ordinary","types":["Water","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/647-keldeo-ordinary-shiny.png"},{"dex":648,"slug":"meloetta","name":"Meloetta","types":["Normal","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/648-meloetta-shiny.png"},{"dex":649,"slug":"genesect-normal","name":"Genesect Normal","types":["Bug","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/649-genesect-normal-shiny.png"},{"dex":650,"slug":"chespin","name":"Chespin","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/650-chespin-shiny.png"},{"dex":651,"slug":"quilladin","name":"Quilladin","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/651-quilladin-shiny.png"},{"dex":652,"slug":"chesnaught","name":"Chesnaught","types":["Grass","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/652-chesnaught-shiny.png"},{"dex":653,"slug":"fennekin","name":"Fennekin","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/653-fennekin-shiny.png"},{"dex":654,"slug":"braixen","name":"Braixen","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/654-braixen-shiny.png"},{"dex":655,"slug":"delphox","name":"Delphox","types":["Fire","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/655-delphox-shiny.png"},{"dex":656,"slug":"froakie","name":"Froakie","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/656-froakie-shiny.png"},{"dex":657,"slug":"frogadier","name":"Frogadier","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/657-frogadier-shiny.png"},{"dex":658,"slug":"greninja","name":"Greninja","types":["Water","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/658-greninja-shiny.png"},{"dex":659,"slug":"bunnelby","name":"Bunnelby","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/659-bunnelby-shiny.png"},{"dex":660,"slug":"diggersby","name":"Diggersby","types":["Normal","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/660-diggersby-shiny.png"},{"dex":661,"slug":"fletchling","name":"Fletchling","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/661-fletchling-shiny.png"},{"dex":662,"slug":"fletchinder","name":"Fletchinder","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/662-fletchinder-shiny.png"},{"dex":663,"slug":"talonflame","name":"Talonflame","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/663-talonflame-shiny.png"},{"dex":664,"slug":"scatterbug","name":"Scatterbug","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/664-scatterbug-shiny.png"},{"dex":665,"slug":"spewpa","name":"Spewpa","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/665-spewpa-shiny.png"},{"dex":666,"slug":"vivillon-meadow","name":"Vivillon Meadow","types":["Bug","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/666-vivillon-meadow-shiny.png"},{"dex":667,"slug":"litleo","name":"Litleo","types":["Fire","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/667-litleo-shiny.png"},{"dex":668,"slug":"pyroar","name":"Pyroar","types":["Fire","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/668-pyroar-shiny.png"},{"dex":669,"slug":"flabebe-red","name":"Flabébé Red","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/669-flabebe-red-shiny.png"},{"dex":670,"slug":"floette-red","name":"Floette Red","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/670-floette-red-shiny.png"},{"dex":671,"slug":"florges-red","name":"Florges Red","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/671-florges-red-shiny.png"},{"dex":672,"slug":"skiddo","name":"Skiddo","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/672-skiddo-shiny.png"},{"dex":673,"slug":"gogoat","name":"Gogoat","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/673-gogoat-shiny.png"},{"dex":674,"slug":"pancham","name":"Pancham","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/674-pancham-shiny.png"},{"dex":675,"slug":"pangoro","name":"Pangoro","types":["Fighting","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/675-pangoro-shiny.png"},{"dex":676,"slug":"furfrou-natural","name":"Furfrou Natural","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/676-furfrou-natural-shiny.png"},{"dex":677,"slug":"espurr","name":"Espurr","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/677-espurr-shiny.png"},{"dex":678,"slug":"meowstic","name":"Meowstic","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/678-meowstic-shiny.png"},{"dex":679,"slug":"honedge","name":"Honedge","types":["Steel","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/679-honedge-shiny.png"},{"dex":680,"slug":"doublade","name":"Doublade","types":["Steel","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/680-doublade-shiny.png"},{"dex":681,"slug":"aegislash-shield","name":"Aegislash Shield","types":["Steel","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/681-aegislash-shield-shiny.png"},{"dex":682,"slug":"spritzee","name":"Spritzee","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/682-spritzee-shiny.png"},{"dex":683,"slug":"aromatisse","name":"Aromatisse","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/683-aromatisse-shiny.png"},{"dex":684,"slug":"swirlix","name":"Swirlix","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/684-swirlix-shiny.png"},{"dex":685,"slug":"slurpuff","name":"Slurpuff","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/685-slurpuff-shiny.png"},{"dex":686,"slug":"inkay","name":"Inkay","types":["Dark","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/686-inkay-shiny.png"},{"dex":687,"slug":"malamar","name":"Malamar","types":["Dark","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/687-malamar-shiny.png"},{"dex":688,"slug":"binacle","name":"Binacle","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/688-binacle-shiny.png"},{"dex":689,"slug":"barbaracle","name":"Barbaracle","types":["Rock","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/689-barbaracle-shiny.png"},{"dex":690,"slug":"skrelp","name":"Skrelp","types":["Poison","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/690-skrelp-shiny.png"},{"dex":691,"slug":"dragalge","name":"Dragalge","types":["Poison","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/691-dragalge-shiny.png"},{"dex":692,"slug":"clauncher","name":"Clauncher","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/692-clauncher-shiny.png"},{"dex":693,"slug":"clawitzer","name":"Clawitzer","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/693-clawitzer-shiny.png"},{"dex":694,"slug":"helioptile","name":"Helioptile","types":["Electric","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/694-helioptile-shiny.png"},{"dex":695,"slug":"heliolisk","name":"Heliolisk","types":["Electric","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/695-heliolisk-shiny.png"},{"dex":696,"slug":"tyrunt","name":"Tyrunt","types":["Rock","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/696-tyrunt-shiny.png"},{"dex":697,"slug":"tyrantrum","name":"Tyrantrum","types":["Rock","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/697-tyrantrum-shiny.png"},{"dex":698,"slug":"amaura","name":"Amaura","types":["Rock","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/698-amaura-shiny.png"},{"dex":699,"slug":"aurorus","name":"Aurorus","types":["Rock","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/699-aurorus-shiny.png"},{"dex":700,"slug":"sylveon","name":"Sylveon","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/700-sylveon-shiny.png"},{"dex":701,"slug":"hawlucha","name":"Hawlucha","types":["Fighting","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/701-hawlucha-shiny.png"},{"dex":702,"slug":"dedenne","name":"Dedenne","types":["Electric","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/702-dedenne-shiny.png"},{"dex":703,"slug":"carbink","name":"Carbink","types":["Rock","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/703-carbink-shiny.png"},{"dex":704,"slug":"goomy","name":"Goomy","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/704-goomy-shiny.png"},{"dex":705,"slug":"sliggoo","name":"Sliggoo","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/705-sliggoo-shiny.png"},{"dex":706,"slug":"goodra","name":"Goodra","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/706-goodra-shiny.png"},{"dex":707,"slug":"klefki","name":"Klefki","types":["Steel","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/707-klefki-shiny.png"},{"dex":708,"slug":"phantump","name":"Phantump","types":["Ghost","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/708-phantump-shiny.png"},{"dex":709,"slug":"trevenant","name":"Trevenant","types":["Ghost","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/709-trevenant-shiny.png"},{"dex":710,"slug":"pumpkaboo","name":"Pumpkaboo","types":["Ghost","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/710-pumpkaboo-shiny.png"},{"dex":711,"slug":"gourgeist","name":"Gourgeist","types":["Ghost","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/711-gourgeist-shiny.png"},{"dex":712,"slug":"bergmite","name":"Bergmite","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/712-bergmite-shiny.png"},{"dex":713,"slug":"avalugg","name":"Avalugg","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/713-avalugg-shiny.png"},{"dex":714,"slug":"noibat","name":"Noibat","types":["Flying","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/714-noibat-shiny.png"},{"dex":715,"slug":"noivern","name":"Noivern","types":["Flying","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/715-noivern-shiny.png"},{"dex":716,"slug":"xerneas","name":"Xerneas","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/716-xerneas-shiny.png"},{"dex":717,"slug":"yveltal","name":"Yveltal","types":["Dark","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/717-yveltal-shiny.png"},{"dex":718,"slug":"zygarde-fifty-percent","name":"Zygarde Fifty Percent","types":["Dragon","Ground"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/718-zygarde-fifty-percent-shiny.png"},{"dex":719,"slug":"diancie","name":"Diancie","types":["Rock","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/719-diancie-shiny.png"},{"dex":720,"slug":"hoopa-confined","name":"Hoopa Confined","types":["Psychic","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":null},{"dex":721,"slug":"volcanion","name":"Volcanion","types":["Fire","Water"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/721-volcanion-shiny.png"},{"dex":722,"slug":"rowlet","name":"Rowlet","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/722-rowlet-shiny.png"},{"dex":723,"slug":"dartrix","name":"Dartrix","types":["Grass","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/723-dartrix-shiny.png"},{"dex":724,"slug":"decidueye","name":"Decidueye","types":["Grass","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/724-decidueye-shiny.png"},{"dex":725,"slug":"litten","name":"Litten","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/725-litten-shiny.png"},{"dex":726,"slug":"torracat","name":"Torracat","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/726-torracat-shiny.png"},{"dex":727,"slug":"incineroar","name":"Incineroar","types":["Fire","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/727-incineroar-shiny.png"},{"dex":728,"slug":"popplio","name":"Popplio","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/728-popplio-shiny.png"},{"dex":729,"slug":"brionne","name":"Brionne","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/729-brionne-shiny.png"},{"dex":730,"slug":"primarina","name":"Primarina","types":["Water","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/730-primarina-shiny.png"},{"dex":731,"slug":"pikipek","name":"Pikipek","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/731-pikipek-shiny.png"},{"dex":732,"slug":"trumbeak","name":"Trumbeak","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/732-trumbeak-shiny.png"},{"dex":733,"slug":"toucannon","name":"Toucannon","types":["Normal","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/733-toucannon-shiny.png"},{"dex":734,"slug":"yungoos","name":"Yungoos","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/734-yungoos-shiny.png"},{"dex":735,"slug":"gumshoos","name":"Gumshoos","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/735-gumshoos-shiny.png"},{"dex":736,"slug":"grubbin","name":"Grubbin","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/736-grubbin-shiny.png"},{"dex":737,"slug":"charjabug","name":"Charjabug","types":["Bug","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/737-charjabug-shiny.png"},{"dex":738,"slug":"vikavolt","name":"Vikavolt","types":["Bug","Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/738-vikavolt-shiny.png"},{"dex":739,"slug":"crabrawler","name":"Crabrawler","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/739-crabrawler-shiny.png"},{"dex":740,"slug":"crabominable","name":"Crabominable","types":["Fighting","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/740-crabominable-shiny.png"},{"dex":741,"slug":"oricorio-baile","name":"Oricorio Baile","types":["Fire","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/741-oricorio-baile-shiny.png"},{"dex":742,"slug":"cutiefly","name":"Cutiefly","types":["Bug","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/742-cutiefly-shiny.png"},{"dex":743,"slug":"ribombee","name":"Ribombee","types":["Bug","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/743-ribombee-shiny.png"},{"dex":744,"slug":"rockruff","name":"Rockruff","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/744-rockruff-shiny.png"},{"dex":745,"slug":"lycanroc-midday","name":"Lycanroc Midday","types":["Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/745-lycanroc-midday-shiny.png"},{"dex":746,"slug":"wishiwashi-solo","name":"Wishiwashi Solo","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/746-wishiwashi-solo-shiny.png"},{"dex":747,"slug":"mareanie","name":"Mareanie","types":["Poison","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/747-mareanie-shiny.png"},{"dex":748,"slug":"toxapex","name":"Toxapex","types":["Poison","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/748-toxapex-shiny.png"},{"dex":749,"slug":"mudbray","name":"Mudbray","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/749-mudbray-shiny.png"},{"dex":750,"slug":"mudsdale","name":"Mudsdale","types":["Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/750-mudsdale-shiny.png"},{"dex":751,"slug":"dewpider","name":"Dewpider","types":["Water","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/751-dewpider-shiny.png"},{"dex":752,"slug":"araquanid","name":"Araquanid","types":["Water","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/752-araquanid-shiny.png"},{"dex":753,"slug":"fomantis","name":"Fomantis","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/753-fomantis-shiny.png"},{"dex":754,"slug":"lurantis","name":"Lurantis","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/754-lurantis-shiny.png"},{"dex":755,"slug":"morelull","name":"Morelull","types":["Grass","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/755-morelull-shiny.png"},{"dex":756,"slug":"shiinotic","name":"Shiinotic","types":["Grass","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/756-shiinotic-shiny.png"},{"dex":757,"slug":"salandit","name":"Salandit","types":["Poison","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/757-salandit-shiny.png"},{"dex":758,"slug":"salazzle","name":"Salazzle","types":["Poison","Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/758-salazzle-shiny.png"},{"dex":759,"slug":"stufful","name":"Stufful","types":["Normal","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/759-stufful-shiny.png"},{"dex":760,"slug":"bewear","name":"Bewear","types":["Normal","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/760-bewear-shiny.png"},{"dex":761,"slug":"bounsweet","name":"Bounsweet","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/761-bounsweet-shiny.png"},{"dex":762,"slug":"steenee","name":"Steenee","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/762-steenee-shiny.png"},{"dex":763,"slug":"tsareena","name":"Tsareena","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/763-tsareena-shiny.png"},{"dex":764,"slug":"comfey","name":"Comfey","types":["Fairy"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/764-comfey-shiny.png"},{"dex":765,"slug":"oranguru","name":"Oranguru","types":["Normal","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/765-oranguru-shiny.png"},{"dex":766,"slug":"passimian","name":"Passimian","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/766-passimian-shiny.png"},{"dex":767,"slug":"wimpod","name":"Wimpod","types":["Bug","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/767-wimpod-shiny.png"},{"dex":768,"slug":"golisopod","name":"Golisopod","types":["Bug","Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/768-golisopod-shiny.png"},{"dex":769,"slug":"sandygast","name":"Sandygast","types":["Ghost","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/769-sandygast-shiny.png"},{"dex":770,"slug":"palossand","name":"Palossand","types":["Ghost","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/770-palossand-shiny.png"},{"dex":771,"slug":"pyukumuku","name":"Pyukumuku","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/771-pyukumuku-shiny.png"},{"dex":772,"slug":"type-null","name":"Type: Null","types":["Normal"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/772-type-null-shiny.png"},{"dex":773,"slug":"silvally","name":"Silvally","types":["Normal"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/773-silvally-shiny.png"},{"dex":774,"slug":"minior","name":"Minior","types":["Rock","Flying"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/774-minior-shiny.png"},{"dex":775,"slug":"komala","name":"Komala","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/775-komala-shiny.png"},{"dex":776,"slug":"turtonator","name":"Turtonator","types":["Fire","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/776-turtonator-shiny.png"},{"dex":777,"slug":"togedemaru","name":"Togedemaru","types":["Electric","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/777-togedemaru-shiny.png"},{"dex":778,"slug":"mimikyu","name":"Mimikyu","types":["Ghost","Fairy"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/778-mimikyu-shiny.png"},{"dex":779,"slug":"bruxish","name":"Bruxish","types":["Water","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/779-bruxish-shiny.png"},{"dex":780,"slug":"drampa","name":"Drampa","types":["Normal","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/780-drampa-shiny.png"},{"dex":781,"slug":"dhelmise","name":"Dhelmise","types":["Ghost","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/781-dhelmise-shiny.png"},{"dex":782,"slug":"jangmo-o","name":"Jangmo-o","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/782-jangmo-o-shiny.png"},{"dex":783,"slug":"hakamo-o","name":"Hakamo-o","types":["Dragon","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/783-hakamo-o-shiny.png"},{"dex":784,"slug":"kommo-o","name":"Kommo-o","types":["Dragon","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/784-kommo-o-shiny.png"},{"dex":785,"slug":"tapu-koko","name":"Tapu Koko","types":["Electric","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/785-tapu-koko-shiny.png"},{"dex":786,"slug":"tapu-lele","name":"Tapu Lele","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/786-tapu-lele-shiny.png"},{"dex":787,"slug":"tapu-bulu","name":"Tapu Bulu","types":["Grass","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/787-tapu-bulu-shiny.png"},{"dex":788,"slug":"tapu-fini","name":"Tapu Fini","types":["Water","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/788-tapu-fini-shiny.png"},{"dex":789,"slug":"cosmog","name":"Cosmog","types":["Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/789-cosmog-shiny.png"},{"dex":790,"slug":"cosmoem","name":"Cosmoem","types":["Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/790-cosmoem-shiny.png"},{"dex":791,"slug":"solgaleo","name":"Solgaleo","types":["Psychic","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/791-solgaleo-shiny.png"},{"dex":792,"slug":"lunala","name":"Lunala","types":["Psychic","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/792-lunala-shiny.png"},{"dex":793,"slug":"nihilego","name":"Nihilego","types":["Rock","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/793-nihilego-shiny.png"},{"dex":794,"slug":"buzzwole","name":"Buzzwole","types":["Bug","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/794-buzzwole-shiny.png"},{"dex":795,"slug":"pheromosa","name":"Pheromosa","types":["Bug","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/795-pheromosa-shiny.png"},{"dex":796,"slug":"xurkitree","name":"Xurkitree","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/796-xurkitree-shiny.png"},{"dex":797,"slug":"celesteela","name":"Celesteela","types":["Steel","Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/797-celesteela-shiny.png"},{"dex":798,"slug":"kartana","name":"Kartana","types":["Grass","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/798-kartana-shiny.png"},{"dex":799,"slug":"guzzlord","name":"Guzzlord","types":["Dark","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/799-guzzlord-shiny.png"},{"dex":800,"slug":"necrozma","name":"Necrozma","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/800-necrozma-shiny.png"},{"dex":801,"slug":"magearna","name":"Magearna","types":["Steel","Fairy"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/801-magearna-shiny.png"},{"dex":802,"slug":"marshadow","name":"Marshadow","types":["Fighting","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/802-marshadow-shiny.png"},{"dex":803,"slug":"poipole","name":"Poipole","types":["Poison"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/803-poipole-shiny.png"},{"dex":804,"slug":"naganadel","name":"Naganadel","types":["Poison","Dragon"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/804-naganadel-shiny.png"},{"dex":805,"slug":"stakataka","name":"Stakataka","types":["Rock","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/805-stakataka-shiny.png"},{"dex":806,"slug":"blacephalon","name":"Blacephalon","types":["Fire","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/806-blacephalon-shiny.png"},{"dex":807,"slug":"zeraora","name":"Zeraora","types":["Electric"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/807-zeraora-shiny.png"},{"dex":808,"slug":"meltan","name":"Meltan","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/808-meltan-shiny.png"},{"dex":809,"slug":"melmetal","name":"Melmetal","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/809-melmetal-shiny.png"},{"dex":810,"slug":"grookey","name":"Grookey","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/810-grookey-shiny.png"},{"dex":811,"slug":"thwackey","name":"Thwackey","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/811-thwackey-shiny.png"},{"dex":812,"slug":"rillaboom","name":"Rillaboom","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/812-rillaboom-shiny.png"},{"dex":813,"slug":"scorbunny","name":"Scorbunny","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/813-scorbunny-shiny.png"},{"dex":814,"slug":"raboot","name":"Raboot","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/814-raboot-shiny.png"},{"dex":815,"slug":"cinderace","name":"Cinderace","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/815-cinderace-shiny.png"},{"dex":816,"slug":"sobble","name":"Sobble","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/816-sobble-shiny.png"},{"dex":817,"slug":"drizzile","name":"Drizzile","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/817-drizzile-shiny.png"},{"dex":818,"slug":"inteleon","name":"Inteleon","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/818-inteleon-shiny.png"},{"dex":819,"slug":"skwovet","name":"Skwovet","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/819-skwovet-shiny.png"},{"dex":820,"slug":"greedent","name":"Greedent","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/820-greedent-shiny.png"},{"dex":821,"slug":"rookidee","name":"Rookidee","types":["Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/821-rookidee-shiny.png"},{"dex":822,"slug":"corvisquire","name":"Corvisquire","types":["Flying"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/822-corvisquire-shiny.png"},{"dex":823,"slug":"corviknight","name":"Corviknight","types":["Flying","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/823-corviknight-shiny.png"},{"dex":824,"slug":"blipbug","name":"Blipbug","types":["Bug"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/824-blipbug-shiny.png"},{"dex":825,"slug":"dottler","name":"Dottler","types":["Bug","Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/825-dottler-shiny.png"},{"dex":826,"slug":"orbeetle","name":"Orbeetle","types":["Bug","Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/826-orbeetle-shiny.png"},{"dex":827,"slug":"nickit","name":"Nickit","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/827-nickit-shiny.png"},{"dex":828,"slug":"thievul","name":"Thievul","types":["Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/828-thievul-shiny.png"},{"dex":829,"slug":"gossifleur","name":"Gossifleur","types":["Grass"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/829-gossifleur-shiny.png"},{"dex":830,"slug":"eldegoss","name":"Eldegoss","types":["Grass"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/830-eldegoss-shiny.png"},{"dex":831,"slug":"wooloo","name":"Wooloo","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/831-wooloo-shiny.png"},{"dex":832,"slug":"dubwool","name":"Dubwool","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/832-dubwool-shiny.png"},{"dex":833,"slug":"chewtle","name":"Chewtle","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/833-chewtle-shiny.png"},{"dex":834,"slug":"drednaw","name":"Drednaw","types":["Water","Rock"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/834-drednaw-shiny.png"},{"dex":835,"slug":"yamper","name":"Yamper","types":["Electric"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/835-yamper-shiny.png"},{"dex":836,"slug":"boltund","name":"Boltund","types":["Electric"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/836-boltund-shiny.png"},{"dex":837,"slug":"rolycoly","name":"Rolycoly","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/837-rolycoly-shiny.png"},{"dex":838,"slug":"carkol","name":"Carkol","types":["Rock","Fire"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/838-carkol-shiny.png"},{"dex":839,"slug":"coalossal","name":"Coalossal","types":["Rock","Fire"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/839-coalossal-shiny.png"},{"dex":840,"slug":"applin","name":"Applin","types":["Grass","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/840-applin-shiny.png"},{"dex":841,"slug":"flapple","name":"Flapple","types":["Grass","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/841-flapple-shiny.png"},{"dex":842,"slug":"appletun","name":"Appletun","types":["Grass","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/842-appletun-shiny.png"},{"dex":843,"slug":"silicobra","name":"Silicobra","types":["Ground"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/843-silicobra-shiny.png"},{"dex":844,"slug":"sandaconda","name":"Sandaconda","types":["Ground"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/844-sandaconda-shiny.png"},{"dex":845,"slug":"cramorant","name":"Cramorant","types":["Flying","Water"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/845-cramorant-shiny.png"},{"dex":846,"slug":"arrokuda","name":"Arrokuda","types":["Water"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/846-arrokuda-shiny.png"},{"dex":847,"slug":"barraskewda","name":"Barraskewda","types":["Water"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/847-barraskewda-shiny.png"},{"dex":848,"slug":"toxel","name":"Toxel","types":["Electric","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/848-toxel-shiny.png"},{"dex":849,"slug":"toxtricity-amped","name":"Toxtricity Amped","types":["Electric","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/849-toxtricity-amped-shiny.png"},{"dex":850,"slug":"sizzlipede","name":"Sizzlipede","types":["Fire","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/850-sizzlipede-shiny.png"},{"dex":851,"slug":"centiskorch","name":"Centiskorch","types":["Fire","Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/851-centiskorch-shiny.png"},{"dex":852,"slug":"clobbopus","name":"Clobbopus","types":["Fighting"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/852-clobbopus-shiny.png"},{"dex":853,"slug":"grapploct","name":"Grapploct","types":["Fighting"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/853-grapploct-shiny.png"},{"dex":854,"slug":"sinistea","name":"Sinistea","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/854-sinistea-shiny.png"},{"dex":855,"slug":"polteageist-phony","name":"Polteageist Phony","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/855-polteageist-phony-shiny.png"},{"dex":856,"slug":"hatenna","name":"Hatenna","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/856-hatenna-shiny.png"},{"dex":857,"slug":"hattrem","name":"Hattrem","types":["Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/857-hattrem-shiny.png"},{"dex":858,"slug":"hatterene","name":"Hatterene","types":["Psychic","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/858-hatterene-shiny.png"},{"dex":859,"slug":"impidimp","name":"Impidimp","types":["Dark","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/859-impidimp-shiny.png"},{"dex":860,"slug":"morgrem","name":"Morgrem","types":["Dark","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/860-morgrem-shiny.png"},{"dex":861,"slug":"grimmsnarl","name":"Grimmsnarl","types":["Dark","Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/861-grimmsnarl-shiny.png"},{"dex":862,"slug":"obstagoon","name":"Obstagoon","types":["Dark","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/862-obstagoon-shiny.png"},{"dex":863,"slug":"perrserker","name":"Perrserker","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/863-perrserker-shiny.png"},{"dex":864,"slug":"cursola","name":"Cursola","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/864-cursola-shiny.png"},{"dex":865,"slug":"sirfetchd","name":"Sirfetch’d","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/865-sirfetchd-shiny.png"},{"dex":866,"slug":"mr-rime","name":"Mr. Rime","types":["Ice","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/866-mr-rime-shiny.png"},{"dex":867,"slug":"runerigus","name":"Runerigus","types":["Ground","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/867-runerigus-shiny.png"},{"dex":868,"slug":"milcery","name":"Milcery","types":["Fairy"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/868-milcery-shiny.png"},{"dex":869,"slug":"alcremie","name":"Alcremie","types":["Fairy"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/869-alcremie-shiny.png"},{"dex":870,"slug":"falinks","name":"Falinks","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/870-falinks-shiny.png"},{"dex":871,"slug":"pincurchin","name":"Pincurchin","types":["Electric"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/871-pincurchin-shiny.png"},{"dex":872,"slug":"snom","name":"Snom","types":["Ice","Bug"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/872-snom-shiny.png"},{"dex":873,"slug":"frosmoth","name":"Frosmoth","types":["Ice","Bug"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/873-frosmoth-shiny.png"},{"dex":874,"slug":"stonjourner","name":"Stonjourner","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/874-stonjourner-shiny.png"},{"dex":875,"slug":"eiscue","name":"Eiscue","types":["Ice"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/875-eiscue-shiny.png"},{"dex":876,"slug":"indeedee","name":"Indeedee","types":["Psychic","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/876-indeedee-shiny.png"},{"dex":877,"slug":"morpeko","name":"Morpeko","types":["Electric","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/877-morpeko-shiny.png"},{"dex":878,"slug":"cufant","name":"Cufant","types":["Steel"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/878-cufant-shiny.png"},{"dex":879,"slug":"copperajah","name":"Copperajah","types":["Steel"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/879-copperajah-shiny.png"},{"dex":880,"slug":"dracozolt","name":"Dracozolt","types":["Electric","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/880-dracozolt-shiny.png"},{"dex":881,"slug":"arctozolt","name":"Arctozolt","types":["Electric","Ice"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/881-arctozolt-shiny.png"},{"dex":882,"slug":"dracovish","name":"Dracovish","types":["Water","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/882-dracovish-shiny.png"},{"dex":883,"slug":"arctovish","name":"Arctovish","types":["Water","Ice"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/883-arctovish-shiny.png"},{"dex":884,"slug":"duraludon","name":"Duraludon","types":["Steel","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/884-duraludon-shiny.png"},{"dex":885,"slug":"dreepy","name":"Dreepy","types":["Dragon","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/885-dreepy-shiny.png"},{"dex":886,"slug":"drakloak","name":"Drakloak","types":["Dragon","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/886-drakloak-shiny.png"},{"dex":887,"slug":"dragapult","name":"Dragapult","types":["Dragon","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/887-dragapult-shiny.png"},{"dex":888,"slug":"zacian","name":"Zacian (Hero of Many Battles)","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/888-zacian-shiny.png"},{"dex":889,"slug":"zamazenta","name":"Zamazenta (Hero of Many Battles)","types":["Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/889-zamazenta-shiny.png"},{"dex":890,"slug":"eternatus","name":"Eternatus","types":["Poison","Dragon"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/890-eternatus-shiny.png"},{"dex":891,"slug":"kubfu","name":"Kubfu","types":["Fighting"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/891-kubfu-shiny.png"},{"dex":892,"slug":"urshifu-single-strike","name":"Urshifu Single Strike","types":["Fighting","Dark"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/892-urshifu-single-strike-shiny.png"},{"dex":893,"slug":"zarude","name":"Zarude","types":["Dark","Grass"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/893-zarude-shiny.png"},{"dex":894,"slug":"regieleki","name":"Regieleki","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/894-regieleki-shiny.png"},{"dex":895,"slug":"regidrago","name":"Regidrago","types":["Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/895-regidrago-shiny.png"},{"dex":896,"slug":"glastrier","name":"Glastrier","types":["Ice"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/896-glastrier-shiny.png"},{"dex":897,"slug":"spectrier","name":"Spectrier","types":["Ghost"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/897-spectrier-shiny.png"},{"dex":898,"slug":"calyrex","name":"Calyrex","types":["Psychic","Grass"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/898-calyrex-shiny.png"},{"dex":899,"slug":"wyrdeer","name":"Wyrdeer","types":["Normal","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/899-wyrdeer-shiny.png"},{"dex":900,"slug":"kleavor","name":"Kleavor","types":["Bug","Rock"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/900-kleavor-shiny.png"},{"dex":901,"slug":"ursaluna","name":"Ursaluna","types":["Ground","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/901-ursaluna-shiny.png"},{"dex":902,"slug":"basculegion","name":"Basculegion","types":["Water","Ghost"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/902-basculegion-shiny.png"},{"dex":903,"slug":"sneasler","name":"Sneasler","types":["Fighting","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/903-sneasler-shiny.png"},{"dex":904,"slug":"overqwil","name":"Overqwil","types":["Dark","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/904-overqwil-shiny.png"},{"dex":905,"slug":"enamorus-incarnate","name":"Enamorus Incarnate","types":["Fairy","Flying"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/905-enamorus-incarnate-shiny.png"},{"dex":906,"slug":"sprigatito","name":"Sprigatito","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/906-sprigatito-shiny.png"},{"dex":907,"slug":"floragato","name":"Floragato","types":["Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/907-floragato-shiny.png"},{"dex":908,"slug":"meowscarada","name":"Meowscarada","types":["Grass","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/908-meowscarada-shiny.png"},{"dex":909,"slug":"fuecoco","name":"Fuecoco","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/909-fuecoco-shiny.png"},{"dex":910,"slug":"crocalor","name":"Crocalor","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/910-crocalor-shiny.png"},{"dex":911,"slug":"skeledirge","name":"Skeledirge","types":["Fire","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/911-skeledirge-shiny.png"},{"dex":912,"slug":"quaxly","name":"Quaxly","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/912-quaxly-shiny.png"},{"dex":913,"slug":"quaxwell","name":"Quaxwell","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/913-quaxwell-shiny.png"},{"dex":914,"slug":"quaquaval","name":"Quaquaval","types":["Water","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/914-quaquaval-shiny.png"},{"dex":915,"slug":"lechonk","name":"Lechonk","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/915-lechonk-shiny.png"},{"dex":916,"slug":"oinkologne","name":"Oinkologne","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/916-oinkologne-shiny.png"},{"dex":917,"slug":"tarountula","name":"Tarountula","types":["Bug"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/917-tarountula-shiny.png"},{"dex":918,"slug":"spidops","name":"Spidops","types":["Bug"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/918-spidops-shiny.png"},{"dex":919,"slug":"nymble","name":"Nymble","types":["Bug"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/919-nymble-shiny.png"},{"dex":920,"slug":"lokix","name":"Lokix","types":["Bug","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/920-lokix-shiny.png"},{"dex":921,"slug":"pawmi","name":"Pawmi","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/921-pawmi-shiny.png"},{"dex":922,"slug":"pawmo","name":"Pawmo","types":["Electric","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/922-pawmo-shiny.png"},{"dex":923,"slug":"pawmot","name":"Pawmot","types":["Electric","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/923-pawmot-shiny.png"},{"dex":924,"slug":"tandemaus","name":"Tandemaus","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/924-tandemaus-shiny.png"},{"dex":925,"slug":"maushold-family-of-four","name":"Maushold Family Of Four","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/925-maushold-family-of-four-shiny.png"},{"dex":926,"slug":"fidough","name":"Fidough","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/926-fidough-shiny.png"},{"dex":927,"slug":"dachsbun","name":"Dachsbun","types":["Fairy"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/927-dachsbun-shiny.png"},{"dex":928,"slug":"smoliv","name":"Smoliv","types":["Grass","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/928-smoliv-shiny.png"},{"dex":929,"slug":"dolliv","name":"Dolliv","types":["Grass","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/929-dolliv-shiny.png"},{"dex":930,"slug":"arboliva","name":"Arboliva","types":["Grass","Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/930-arboliva-shiny.png"},{"dex":931,"slug":"squawkabilly","name":"Squawkabilly","types":["Normal","Flying"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/931-squawkabilly-shiny.png"},{"dex":932,"slug":"nacli","name":"Nacli","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/932-nacli-shiny.png"},{"dex":933,"slug":"naclstack","name":"Naclstack","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/933-naclstack-shiny.png"},{"dex":934,"slug":"garganacl","name":"Garganacl","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/934-garganacl-shiny.png"},{"dex":935,"slug":"charcadet","name":"Charcadet","types":["Fire"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/935-charcadet-shiny.png"},{"dex":936,"slug":"armarouge","name":"Armarouge","types":["Fire","Psychic"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/936-armarouge-shiny.png"},{"dex":937,"slug":"ceruledge","name":"Ceruledge","types":["Fire","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/937-ceruledge-shiny.png"},{"dex":938,"slug":"tadbulb","name":"Tadbulb","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/938-tadbulb-shiny.png"},{"dex":939,"slug":"bellibolt","name":"Bellibolt","types":["Electric"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/939-bellibolt-shiny.png"},{"dex":940,"slug":"wattrel","name":"Wattrel","types":["Electric","Flying"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/940-wattrel-shiny.png"},{"dex":941,"slug":"kilowattrel","name":"Kilowattrel","types":["Electric","Flying"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/941-kilowattrel-shiny.png"},{"dex":942,"slug":"maschiff","name":"Maschiff","types":["Dark"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/942-maschiff-shiny.png"},{"dex":943,"slug":"mabosstiff","name":"Mabosstiff","types":["Dark"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/943-mabosstiff-shiny.png"},{"dex":944,"slug":"shroodle","name":"Shroodle","types":["Poison","Normal"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/944-shroodle-shiny.png"},{"dex":945,"slug":"grafaiai","name":"Grafaiai","types":["Poison","Normal"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/945-grafaiai-shiny.png"},{"dex":946,"slug":"bramblin","name":"Bramblin","types":["Grass","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/946-bramblin-shiny.png"},{"dex":947,"slug":"brambleghast","name":"Brambleghast","types":["Grass","Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/947-brambleghast-shiny.png"},{"dex":948,"slug":"toedscool","name":"Toedscool","types":["Ground","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/948-toedscool-shiny.png"},{"dex":949,"slug":"toedscruel","name":"Toedscruel","types":["Ground","Grass"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/949-toedscruel-shiny.png"},{"dex":950,"slug":"klawf","name":"Klawf","types":["Rock"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/950-klawf-shiny.png"},{"dex":951,"slug":"capsakid","name":"Capsakid","types":["Grass"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/951-capsakid-shiny.png"},{"dex":952,"slug":"scovillain","name":"Scovillain","types":["Grass","Fire"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/952-scovillain-shiny.png"},{"dex":953,"slug":"rellor","name":"Rellor","types":["Bug"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/953-rellor-shiny.png"},{"dex":954,"slug":"rabsca","name":"Rabsca","types":["Bug","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/954-rabsca-shiny.png"},{"dex":955,"slug":"flittle","name":"Flittle","types":["Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/955-flittle-shiny.png"},{"dex":956,"slug":"espathra","name":"Espathra","types":["Psychic"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/956-espathra-shiny.png"},{"dex":957,"slug":"tinkatink","name":"Tinkatink","types":["Fairy","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/957-tinkatink-shiny.png"},{"dex":958,"slug":"tinkatuff","name":"Tinkatuff","types":["Fairy","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/958-tinkatuff-shiny.png"},{"dex":959,"slug":"tinkaton","name":"Tinkaton","types":["Fairy","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/959-tinkaton-shiny.png"},{"dex":960,"slug":"wiglett","name":"Wiglett","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/960-wiglett-shiny.png"},{"dex":961,"slug":"wugtrio","name":"Wugtrio","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/961-wugtrio-shiny.png"},{"dex":962,"slug":"bombirdier","name":"Bombirdier","types":["Flying","Dark"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/962-bombirdier-shiny.png"},{"dex":963,"slug":"finizen","name":"Finizen","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/963-finizen-shiny.png"},{"dex":964,"slug":"palafin","name":"Palafin","types":["Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/964-palafin-shiny.png"},{"dex":965,"slug":"varoom","name":"Varoom","types":["Steel","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/965-varoom-shiny.png"},{"dex":966,"slug":"revavroom","name":"Revavroom","types":["Steel","Poison"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/966-revavroom-shiny.png"},{"dex":967,"slug":"cyclizar","name":"Cyclizar","types":["Dragon","Normal"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/967-cyclizar-shiny.png"},{"dex":968,"slug":"orthworm","name":"Orthworm","types":["Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/968-orthworm-shiny.png"},{"dex":969,"slug":"glimmet","name":"Glimmet","types":["Rock","Poison"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/969-glimmet-shiny.png"},{"dex":970,"slug":"glimmora","name":"Glimmora","types":["Rock","Poison"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/970-glimmora-shiny.png"},{"dex":971,"slug":"greavard","name":"Greavard","types":["Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/971-greavard-shiny.png"},{"dex":972,"slug":"houndstone","name":"Houndstone","types":["Ghost"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/972-houndstone-shiny.png"},{"dex":973,"slug":"flamigo","name":"Flamigo","types":["Flying","Fighting"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/973-flamigo-shiny.png"},{"dex":974,"slug":"cetoddle","name":"Cetoddle","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/974-cetoddle-shiny.png"},{"dex":975,"slug":"cetitan","name":"Cetitan","types":["Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/975-cetitan-shiny.png"},{"dex":976,"slug":"veluza","name":"Veluza","types":["Water","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/976-veluza-shiny.png"},{"dex":977,"slug":"dondozo","name":"Dondozo","types":["Water"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/977-dondozo-shiny.png"},{"dex":978,"slug":"tatsugiri-curly","name":"Tatsugiri Curly","types":["Dragon","Water"],"category":"base","shinyReleased":false,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/978-tatsugiri-curly-shiny.png"},{"dex":979,"slug":"annihilape","name":"Annihilape","types":["Fighting","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/979-annihilape-shiny.png"},{"dex":980,"slug":"clodsire","name":"Clodsire","types":["Poison","Ground"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/980-clodsire-shiny.png"},{"dex":981,"slug":"farigiraf","name":"Farigiraf","types":["Normal","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/981-farigiraf-shiny.png"},{"dex":982,"slug":"dudunsparce","name":"Dudunsparce","types":["Normal"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/982-dudunsparce-shiny.png"},{"dex":983,"slug":"kingambit","name":"Kingambit","types":["Dark","Steel"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/983-kingambit-shiny.png"},{"dex":984,"slug":"great-tusk","name":"Great Tusk","types":["Ground","Fighting"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/984-great-tusk-shiny.png"},{"dex":985,"slug":"scream-tail","name":"Scream Tail","types":["Fairy","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/985-scream-tail-shiny.png"},{"dex":986,"slug":"brute-bonnet","name":"Brute Bonnet","types":["Grass","Dark"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/986-brute-bonnet-shiny.png"},{"dex":987,"slug":"flutter-mane","name":"Flutter Mane","types":["Ghost","Fairy"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/987-flutter-mane-shiny.png"},{"dex":988,"slug":"slither-wing","name":"Slither Wing","types":["Bug","Fighting"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/988-slither-wing-shiny.png"},{"dex":989,"slug":"sandy-shocks","name":"Sandy Shocks","types":["Electric","Ground"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/989-sandy-shocks-shiny.png"},{"dex":990,"slug":"iron-treads","name":"Iron Treads","types":["Ground","Steel"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/990-iron-treads-shiny.png"},{"dex":991,"slug":"iron-bundle","name":"Iron Bundle","types":["Ice","Water"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/991-iron-bundle-shiny.png"},{"dex":992,"slug":"iron-hands","name":"Iron Hands","types":["Fighting","Electric"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/992-iron-hands-shiny.png"},{"dex":993,"slug":"iron-jugulis","name":"Iron Jugulis","types":["Dark","Flying"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/993-iron-jugulis-shiny.png"},{"dex":994,"slug":"iron-moth","name":"Iron Moth","types":["Fire","Poison"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/994-iron-moth-shiny.png"},{"dex":995,"slug":"iron-thorns","name":"Iron Thorns","types":["Rock","Electric"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/995-iron-thorns-shiny.png"},{"dex":996,"slug":"frigibax","name":"Frigibax","types":["Dragon","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/996-frigibax-shiny.png"},{"dex":997,"slug":"arctibax","name":"Arctibax","types":["Dragon","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/997-arctibax-shiny.png"},{"dex":998,"slug":"baxcalibur","name":"Baxcalibur","types":["Dragon","Ice"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/998-baxcalibur-shiny.png"},{"dex":999,"slug":"gimmighoul","name":"Gimmighoul","types":["Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/999-gimmighoul-shiny.png"},{"dex":1000,"slug":"gholdengo","name":"Gholdengo","types":["Steel","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1000-gholdengo-shiny.png"},{"dex":1001,"slug":"wo-chien","name":"Wo-Chien","types":["Dark","Grass"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1001-wo-chien-shiny.png"},{"dex":1002,"slug":"chien-pao","name":"Chien-Pao","types":["Dark","Ice"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1002-chien-pao-shiny.png"},{"dex":1003,"slug":"ting-lu","name":"Ting-Lu","types":["Dark","Ground"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1003-ting-lu-shiny.png"},{"dex":1004,"slug":"chi-yu","name":"Chi-Yu","types":["Dark","Fire"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1004-chi-yu-shiny.png"},{"dex":1005,"slug":"roaring-moon","name":"Roaring Moon","types":["Dragon","Dark"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1005-roaring-moon-shiny.png"},{"dex":1006,"slug":"iron-valiant","name":"Iron Valiant","types":["Fairy","Fighting"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1006-iron-valiant-shiny.png"},{"dex":1007,"slug":"koraidon","name":"Koraidon","types":["Fighting","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1007-koraidon-shiny.png"},{"dex":1008,"slug":"miraidon","name":"Miraidon","types":["Electric","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1008-miraidon-shiny.png"},{"dex":1009,"slug":"walking-wake","name":"Walking Wake","types":["Water","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1009-walking-wake-shiny.png"},{"dex":1010,"slug":"iron-leaves","name":"Iron Leaves","types":["Grass","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1010-iron-leaves-shiny.png"},{"dex":1011,"slug":"dipplin","name":"Dipplin","types":["Grass","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1011-dipplin-shiny.png"},{"dex":1012,"slug":"poltchageist","name":"Poltchageist","types":["Grass","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1012-poltchageist-shiny.png"},{"dex":1013,"slug":"sinistcha","name":"Sinistcha","types":["Grass","Ghost"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1013-sinistcha-shiny.png"},{"dex":1014,"slug":"okidogi","name":"Okidogi","types":["Poison","Fighting"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1014-okidogi-shiny.png"},{"dex":1015,"slug":"munkidori","name":"Munkidori","types":["Poison","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1015-munkidori-shiny.png"},{"dex":1016,"slug":"fezandipiti","name":"Fezandipiti","types":["Poison","Fairy"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1016-fezandipiti-shiny.png"},{"dex":1017,"slug":"ogerpon","name":"Ogerpon","types":["Grass"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1017-ogerpon-shiny.png"},{"dex":1018,"slug":"archaludon","name":"Archaludon","types":["Steel","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1018-archaludon-shiny.png"},{"dex":1019,"slug":"hydrapple","name":"Hydrapple","types":["Grass","Dragon"],"category":"base","shinyReleased":true,"released":true,"shinyImage":"https://assets.dittobase.com/go/pokemon/1019-hydrapple-shiny.png"},{"dex":1020,"slug":"gouging-fire","name":"Gouging Fire","types":["Fire","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1020-gouging-fire-shiny.png"},{"dex":1021,"slug":"raging-bolt","name":"Raging Bolt","types":["Electric","Dragon"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1021-raging-bolt-shiny.png"},{"dex":1022,"slug":"iron-boulder","name":"Iron Boulder","types":["Rock","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1022-iron-boulder-shiny.png"},{"dex":1023,"slug":"iron-crown","name":"Iron Crown","types":["Steel","Psychic"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1023-iron-crown-shiny.png"},{"dex":1024,"slug":"terapagos","name":"Terapagos","types":["Normal"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1024-terapagos-shiny.png"},{"dex":1025,"slug":"pecharunt","name":"Pecharunt","types":["Poison","Ghost"],"category":"base","shinyReleased":false,"released":false,"shinyImage":"https://assets.dittobase.com/go/pokemon/1025-pecharunt-shiny.png"}];
const REGIONS = [["kanto","Kanto",1,151],["johto","Johto",152,251],["hoenn","Hoenn",252,386],["sinnoh","Sinnoh",387,493],["unova","Unova",494,649],["kalos","Kalos",650,721],["alola","Alola",722,807],["other","Outros · Meltan e Melmetal",808,809],["galar","Galar",810,898],["hisui","Hisui",899,905],["paldea","Paldea",906,1025]];
REGIONS.forEach(([id,name,first,last]) => {
 const tabId='region-'+id;
 TABS[tabId]={id:tabId,list:REGIONAL_DEX.filter(p=>p.dex>=first&&p.dex<=last),storageKey:'pokemonRegion_'+id+'_v1',regional:true,
 pageTitle:name+' · Shinies e Shundos',pageSubtitle:'1 clique: shiny · 2 cliques: shundo (shiny + IV 100%). Clique novamente para desmarcar. No teclado: Enter para shiny, Shift + Enter para shundo.',
 exportTitle:name+' · Coleção regional',exportSubtitle:'Uma forma principal por espécie',exportFilePrefix:'pokemon-'+id,unitLabel:'shinies',searchPlaceholder:'Buscar Pokémon, número ou tipo...',hasWaitingState:true,useShinyImages:true,categoryLabels:{base:'Forma principal'},statusLabels:{all:'Todos',caught:'Shinies coletados (inclui shundos)',missing:'Shinies que faltam',waiting:'Shundos coletados',missingShundo:'Shundos que faltam',owned:'Somente shiny (sem shundo)'},statusOrder:['all','caught','missing','waiting','missingShundo','owned'],emptyMessage:'Nenhum Pokémon corresponde aos filtros.',allLabel:'Todos os Pokémon',footerNote:'Pokédex nacional completa, incluindo espécies ainda não lançadas. ⚠ indica shiny não liberado para a forma principal. Avisos atualizados em 20/10/2026; disponibilidade não atualiza automaticamente.',footerSource:'https://www.dittobase.com/pokemon-go/pokedex'};
});

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

    if (s.statusFilter === "missingShundo" && mark === MARK_WAITING) return false;
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

        const actionTabId = currentTabId;
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

            if (currentTabId !== actionTabId) return;
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

            if(Array.isArray(data.archivedTabs)){archivedTabs=new Set(data.archivedTabs.filter(id=>TABS[id]&&id!=='region-other'));saveArchives();}
            if(archivedTabs.has(currentTabId)){const next=navigableTabIds().find(id=>!archivedTabs.has(id));if(next)currentTabId=next;}
            const allArchived=navigableTabIds().every(id=>archivedTabs.has(id));
            document.querySelector('header.top').hidden=allArchived;document.querySelector('.controls').hidden=allArchived;filterPanelWrap.hidden=allArchived;legend.hidden=allArchived;
            refreshTabUI();if(allArchived)grid.replaceChildren();renderTabNavigation();
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

function collectionExportItems(mode){
 const s=st();if(mode==='view')return list().filter(matchesFilters);
 const saved=s.statusFilter;let items;
 try{s.statusFilter='all';items=list().filter(matchesFilters);}finally{s.statusFilter=saved;}
 return items.filter(p=>{const mark=markOf(p);switch(mode){
  case 'shinyCollected':case 'collected':return mark!==MARK_NONE;
  case 'shinyMissing':case 'missing':return mark===MARK_NONE;
  case 'shundoCollected':return mark===MARK_WAITING;
  case 'shundoMissing':return mark!==MARK_WAITING;
  default:return false;
 }});
}

// Regional collections use owned = shiny, waiting = shundo; legacy tabs retain their meanings.
let archivedTabs = new Set();
try { const saved=JSON.parse(localStorage.getItem('pokemonArchivedTabs_v1')); if(Array.isArray(saved)) archivedTabs=new Set(saved.filter(id=>TABS[id]&&id!=='region-other')); } catch {}
const archivePanel=document.createElement('details');
archivePanel.className='archive-panel';
tabs.after(archivePanel);
function saveArchives(){try{localStorage.setItem('pokemonArchivedTabs_v1',JSON.stringify([...archivedTabs]));}catch{showToast('Não foi possível salvar as abas arquivadas.');}}
function eyeIcon(hidden){return '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'+(hidden?'<path d="m3 3 18 18"/>':'')+'</svg>';}
function navigableTabIds(){return Object.keys(TABS).filter(id=>id!=='region-other');}
function renderTabNavigation(){
 tabs.replaceChildren();
 for(const [regional,label] of [[false,'Trackers'],[true,'Coleções por região']]){
  const heading=document.createElement('div');heading.className='tab-group-title';heading.textContent=label;tabs.append(heading);
  Object.entries(TABS).filter(([id,c])=>id!=='region-other'&&!!c.regional===regional&&!archivedTabs.has(id)).forEach(([id,c])=>{
   const entry=document.createElement('div');entry.className='tab-entry';
   const btn=document.createElement('button');btn.type='button';btn.className='tab-btn'+(id===currentTabId?' active':'');btn.dataset.tab=id;btn.setAttribute('role','tab');btn.setAttribute('aria-selected',id===currentTabId?'true':'false');
   const name=document.createElement('span');name.textContent=c.regional?REGIONS.find(r=>'region-'+r[0]===id)[1]:c.pageTitle;
   const count=document.createElement('span');count.className='tab-count';count.dataset.count=id;btn.append(name,count);
   const hide=document.createElement('button');hide.className='archive-icon';hide.type='button';hide.innerHTML=eyeIcon(false);hide.title='Ocultar '+name.textContent;hide.setAttribute('aria-label',hide.title);
   hide.onclick=()=>{archivedTabs.add(id);saveArchives();if(id===currentTabId){const next=navigableTabIds().find(t=>!archivedTabs.has(t));if(next)switchTab(next);else{document.querySelector('header.top').hidden=true;grid.replaceChildren();document.querySelector('.controls').hidden=true;filterPanelWrap.hidden=true;legend.hidden=true;}}renderTabNavigation();};
   entry.append(btn,hide);tabs.append(entry);
  });
 }
 archivePanel.replaceChildren();const summary=document.createElement('summary');summary.textContent='Abas arquivadas ('+archivedTabs.size+') · restaurar';archivePanel.append(summary);
 if(!archivedTabs.size){const note=document.createElement('p');note.textContent='Use o ícone de olho ao lado de uma aba para ocultá-la. O progresso é mantido.';archivePanel.append(note);}
 archivedTabs.forEach(id=>{const btn=document.createElement('button');btn.type='button';btn.innerHTML=eyeIcon(true);const name=document.createElement('span');name.textContent=TABS[id].pageTitle;btn.append(name);btn.title='Mostrar '+TABS[id].pageTitle;btn.setAttribute('aria-label',btn.title);btn.onclick=()=>{archivedTabs.delete(id);saveArchives();document.querySelector('header.top').hidden=false;document.querySelector('.controls').hidden=false;filterPanelWrap.hidden=false;legend.hidden=false;if(currentTabId===id)refreshTabUI();else switchTab(id);renderTabNavigation();};archivePanel.append(btn);});
 updateTabCounts();
}
const shundoProgress=document.createElement('div');shundoProgress.className='progress-secondary';shundoProgress.innerHTML='<div class="num" id="shundoNum"></div><div class="bar-track"><div class="bar-fill" id="shundoBar"></div></div><div class="label" id="shundoLabel"></div>';
const progressCard=progressLabel.parentElement;
const shinyProgress=document.createElement('div');shinyProgress.className='progress-primary';
progressCard.append(shinyProgress);[progressNum,progressBar.parentElement,progressLabel].forEach(el=>shinyProgress.append(el));
progressCard.append(shundoProgress);
const originalProgress=updateProgress;
updateProgress=function(){originalProgress();shundoProgress.hidden=!config().regional;if(!config().regional)return;
 const total=list().length,shiny=list().filter(p=>isCaught(p)).length,shundo=list().filter(p=>markOf(p)===MARK_WAITING).length;
 progressBar.style.width=shiny/total*100+'%';progressWaitBar.style.width='0%';progressLabel.textContent=Math.round(shiny/total*100)+'% · Shinies (inclui shundos)';
 document.getElementById('shundoNum').innerHTML=shundo+'<span class="total">/ '+total+' shundos</span>';document.getElementById('shundoBar').style.width=shundo/total*100+'%';document.getElementById('shundoLabel').textContent=Math.round(shundo/total*100)+'% · Shundos';
};
const originalChrome=applyTabChrome,legacyLegend=legend.innerHTML;
applyTabChrome=function(){originalChrome();document.querySelector('header.top').classList.toggle('regional-header',!!config().regional);progressCard.classList.toggle('dual-progress',!!config().regional);legend.innerHTML=config().regional?'<span class="legend-item">✨ Shiny · 1 clique</span><span class="legend-item">🌟 Shundo · 2 cliques</span><span class="legend-hint">Shundo também conta como shiny. ⚠ Shiny não liberado.</span>':legacyLegend;};
const originalMark=refreshCardMark;
refreshCardMark=function(card,p){originalMark(card,p);if(!config().regional&&currentTabId!=='starters')return;const mark=markOf(p);let label=card.querySelector('.collection-label');if(!label){label=document.createElement('div');label.className='collection-label';card.append(label);}label.textContent=config().regional?(mark===MARK_WAITING?'🌟 Shundo':mark===MARK_OWNED?'✨ Shiny':'Ainda falta'):(mark===MARK_WAITING?'◷ Aguardando evento':mark===MARK_OWNED?'✓ Já tenho':'Ainda falta');card.setAttribute('aria-label',p.name+' — '+label.textContent);
 if(config().regional){const icon=card.querySelector('.icon-wait');if(icon)icon.innerHTML='<path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9Z"/>';}
 if(p.shinyReleased===false&&!card.querySelector('.shiny-alert')){const warning=document.createElement('span');warning.className='shiny-alert';warning.textContent='⚠';warning.title=p.released?'Shiny da forma principal ainda não liberado no Pokémon GO (aviso atualizado em 20/10/2026).':'Pokémon ainda não lançado no GO; shiny também não liberado (aviso atualizado em 20/10/2026).';warning.setAttribute('role','img');warning.setAttribute('aria-label',warning.title);card.append(warning);}
};
const originalImages=imageCandidates;
imageCandidates=function(p){if(!config().regional)return originalImages(p);return [...new Set([p.shinyImage,'https://assets.dittobase.com/go/pokemon/'+p.dex+'-'+p.slug+'-shiny.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/'+p.dex+'.png'].filter(Boolean))];};
const textMenu=document.createElement('div');textMenu.innerHTML='<div class="menu-title">Conteúdo da lista TXT</div><select aria-label="Conteúdo da lista em texto" id="textListMode"></select><button type="button" id="exportTextBtn">📄 Baixar lista em texto</button>';exportDropdown.prepend(textMenu);
const oldRefresh=refreshTabUI;
refreshTabUI=function(){oldRefresh();const sel=document.getElementById('textListMode');sel.replaceChildren();const modes=config().regional?{view:'Visualização atual',shinyCollected:'Shinies coletados (inclui shundos)',shinyMissing:'Shinies que faltam',shundoCollected:'Shundos coletados',shundoMissing:'Shundos que faltam'}:{view:'Visualização atual',collected:'Pokémon coletados',missing:'Pokémon que faltam'};Object.entries(modes).forEach(([value,label])=>{const o=document.createElement('option');o.value=value;o.textContent=label;sel.append(o);});sel.value='view';};
function textExportContent(mode){
 const s=st(),items=collectionExportItems(mode);
 const labels={shinyCollected:'Shinies já coletados, incluindo os shundos',shinyMissing:'Pokémon que faltam na coleção shiny',shundoCollected:'Shundos já coletados (shiny + IV 100%)',shundoMissing:'Pokémon que faltam na coleção shundo',collected:'Pokémon já coletados',missing:'Pokémon que faltam',view:'Visualização atual: '+exportFilterText()};
 const extras=[...s.selectedTypes].map(t=>TYPE_LABELS[t]).concat([...s.selectedCategories].map(c=>config().categoryLabels[c]),[...s.selectedRegions].map(r=>config().regionLabels[r]));if(s.search)extras.push('Busca: '+s.search);
 if(config().regional)extras.push("Disponibilidade indicada nas cartas");
 return config().exportTitle+'\nDescrição: '+labels[mode]+(extras.length?'\nFiltros: '+extras.join(' · '):'')+'\n\n'+(items.length?items.map(p=>'- #'+String(p.dex).padStart(3,'0')+' '+p.name+(config().regional?(markOf(p)===MARK_WAITING?' — Shundo':markOf(p)===MARK_OWNED?' — Shiny':' — Não coletado'):'')).join('\n'):'Nenhum Pokémon nesta lista.')+'\n';
}
document.getElementById('exportTextBtn').onclick=()=>{const mode=document.getElementById('textListMode').value;const url=URL.createObjectURL(new Blob(['\uFEFF'+textExportContent(mode)],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=config().exportFilePrefix+'-'+mode+'.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);closeExportMenu();showToast('Lista em texto exportada.');};
// Include archived navigation in backups; accept older backups without it.
const legacyExportJSON=exportJSON;
exportJSON=function(){const result={exportedAt:new Date().toISOString(),archivedTabs:[...archivedTabs]};Object.values(TABS).forEach(c=>result[c.storageKey]=state[c.id].marks);const url=URL.createObjectURL(new Blob([JSON.stringify(result,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='pokemon-go-progresso.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast('Backup de todas as abas exportado.');};
if(archivedTabs.has(currentTabId)){const available=navigableTabIds().find(id=>!archivedTabs.has(id));if(available)currentTabId=available;}

renderTabNavigation();
refreshTabUI();



if(navigableTabIds().every(id=>archivedTabs.has(id))){document.querySelector('header.top').hidden=true;document.querySelector('.controls').hidden=true;filterPanelWrap.hidden=true;legend.hidden=true;grid.replaceChildren();}
