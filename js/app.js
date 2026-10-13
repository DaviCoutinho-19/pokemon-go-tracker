

const POKEMON = [

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

const STORAGE_KEY = "megaDexProgress_v1";

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

const CATEGORY_LABELS = {
    normal: "Normal",
    pseudo: "Pseudo-lendário",
    legendary: "Lendário",
    mythical: "Mítico"
};

let owned = {};
let currentSearch = "";
let statusFilter = "all";
let selectedCategories = new Set();
let selectedTypes = new Set();

try {
    owned = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
} catch (e) {
    owned = {};
}

const grid = document.getElementById("grid");
const progressNum = document.getElementById("progressNum");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");

const filterToggle = document.getElementById("filterToggle");
const filterPanelWrap = document.getElementById("filterPanelWrap");
const filterBadge = document.getElementById("filterBadge");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const activeSummary = document.getElementById("activeSummary");

const exportToggle = document.getElementById("exportToggle");
const exportDropdown = document.getElementById("exportDropdown");
const exportPngBtn = document.getElementById("exportPngBtn");
const exportSvgBtn = document.getElementById("exportSvgBtn");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const importJsonBtn = document.getElementById("importJsonBtn");
const importFile = document.getElementById("importFile");

const toast = document.getElementById("toast");
const exportStage = document.getElementById("exportStage");

const TYPE_ORDER = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
];

function persist() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(owned));
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

function updateProgress() {

    const total = POKEMON.length;

    const count = POKEMON.filter(
        p => owned[p.slug]
    ).length;

    const pct = Math.round(
        (count / total) * 100
    );

    progressNum.innerHTML =
        count +
        '<span class="total">/ ' +
        total +
        ' capturadas</span>';

    progressBar.style.width =
        pct + "%";

    progressLabel.textContent =
        pct + "% completo";
}

function getImageUrls(p) {

    const normal =
        "https://assets.dittobase.com/go/pokemon/" +
        p.dex +
        "-" +
        p.slug +
        ".png";

    const placeholder =
        "https://assets.dittobase.com/go/pokemon-placeholder/" +
        p.dex +
        "-" +
        p.slug +
        ".png";

    return {
        normal,
        placeholder
    };
}

function attachImageFallback(img, p) {

    const urls = getImageUrls(p);

    img.src = urls.normal;

    img.addEventListener("error", function () {

        if (this.dataset.fallback !== "true") {

            this.dataset.fallback = "true";
            this.src = urls.placeholder;

        } else {

            this.dataset.failed = "true";
            this.style.opacity = "0.12";

        }

    });
}

function matchesFilters(p) {

    const isOwned =
        !!owned[p.slug];

    if (
        statusFilter === "owned" &&
        !isOwned
    ) {
        return false;
    }

    if (
        statusFilter === "missing" &&
        isOwned
    ) {
        return false;
    }

    if (
        selectedCategories.size > 0 &&
        !selectedCategories.has(p.category)
    ) {
        return false;
    }

    if (
        selectedTypes.size > 0 &&
        !p.types.some(type =>
            selectedTypes.has(type)
        )
    ) {
        return false;
    }

    if (currentSearch) {

        const q =
            currentSearch.toLowerCase();

        const inName =
            p.name.toLowerCase().includes(q);

        const inDex =
            String(p.dex).includes(q);

        const inTypes =
            p.types.some(type =>
                TYPE_LABELS[type]
                    .toLowerCase()
                    .includes(q)
            );

        const inCategory =
            CATEGORY_LABELS[p.category]
                .toLowerCase()
                .includes(q);

        if (
            !inName &&
            !inDex &&
            !inTypes &&
            !inCategory
        ) {
            return false;
        }
    }

    return true;
}

function renderTypeFilters() {

    const container =
        document.getElementById("typeFilterOptions");

    container.innerHTML = "";

    TYPE_ORDER.forEach(type => {

        const label =
            document.createElement("label");

        label.className =
            "filter-chip type-chip";

        label.style.setProperty(
            "--type-color",
            TYPE_COLORS[type]
        );

        const input =
            document.createElement("input");

        input.type = "checkbox";
        input.value = type;

        const dot =
            document.createElement("span");

        dot.className =
            "type-dot";

        const text =
            document.createElement("span");

        text.textContent =
            TYPE_LABELS[type];

        label.appendChild(input);
        label.appendChild(dot);
        label.appendChild(text);

        input.addEventListener(
            "change",
            () => {

                if (input.checked) {
                    selectedTypes.add(type);
                } else {
                    selectedTypes.delete(type);
                }

                updateFilterChips();
                render();

            }
        );

        container.appendChild(label);

    });

}

function updateFilterChips() {

    document
        .querySelectorAll(".status-chip")
        .forEach(chip => {

            const radio =
                chip.querySelector("input");

            chip.classList.toggle(
                "active",
                radio.checked
            );

        });

    document
        .querySelectorAll(".category-chip")
        .forEach(chip => {

            const checkbox =
                chip.querySelector("input");

            chip.classList.toggle(
                "active",
                checkbox.checked
            );

        });

    document
        .querySelectorAll(".type-chip")
        .forEach(chip => {

            const checkbox =
                chip.querySelector("input");

            chip.classList.toggle(
                "active",
                checkbox.checked
            );

        });

    const totalActive =
        (statusFilter !== "all" ? 1 : 0) +
        selectedCategories.size +
        selectedTypes.size;

    filterBadge.textContent =
        totalActive;

    updateActiveSummary();

}

function updateActiveSummary() {

    const active = [];

    if (statusFilter !== "all") {
        active.push(
            statusFilter === "owned"
                ? "Tenho"
                : "Faltam"
        );
    }

    selectedCategories.forEach(category => {
        active.push(
            CATEGORY_LABELS[category]
        );
    });

    selectedTypes.forEach(type => {
        active.push(
            TYPE_LABELS[type]
        );
    });

    if (active.length === 0) {

        activeSummary.innerHTML =
            "<strong>Filtros ativos:</strong> nenhum";

    } else {

        activeSummary.innerHTML =
            "<strong>Filtros ativos:</strong> " +
            active.join(" · ");

    }

}

function render() {

    grid.innerHTML = "";

    const visible =
        POKEMON.filter(matchesFilters);

    if (visible.length === 0) {

        const empty =
            document.createElement("div");

        empty.className =
            "empty-state";

        empty.textContent =
            "Nenhuma Mega Evolução encontrada com esses filtros.";

        grid.appendChild(empty);

        updateProgress();
        return;
    }

    visible.forEach(p => {

        const card =
            document.createElement("div");

        card.className =
            "card" +
            (owned[p.slug]
                ? " owned"
                : "");

        card.setAttribute(
            "role",
            "button"
        );

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "aria-pressed",
            owned[p.slug]
                ? "true"
                : "false"
        );

        const typesHtml =
            p.types.map(type => {

                const label =
                    TYPE_LABELS[type];

                const color =
                    TYPE_COLORS[type];

                return (
                    '<span class="type-badge" ' +
                    'style="background:' +
                    color +
                    '22;color:' +
                    color +
                    ';border-color:' +
                    color +
                    '55;">' +
                    label +
                    '</span>'
                );

            }).join("");

        card.innerHTML =

            '<div class="dex">#' +
            String(p.dex).padStart(3, "0") +
            '</div>' +

            '<div class="check">' +

                '<svg ' +
                    'viewBox="0 0 24 24" ' +
                    'fill="none" ' +
                    'stroke="#0e0a1a" ' +
                    'stroke-width="3" ' +
                    'stroke-linecap="round" ' +
                    'stroke-linejoin="round">' +

                    '<polyline points="20 6 9 17 4 12"></polyline>' +

                '</svg>' +

            '</div>' +

            '<img ' +
                'alt="' +
                p.name +
                '" ' +
                'loading="lazy">' +

            '<div class="name">' +
                p.name +
            '</div>' +

            '<div class="type-row">' +
                typesHtml +
            '</div>' +

            '<div class="category-badge">' +
                CATEGORY_LABELS[p.category] +
            '</div>';

        const image =
            card.querySelector("img");

        attachImageFallback(
            image,
            p
        );

        function toggle() {

            owned[p.slug] =
                !owned[p.slug];

            persist();

            card.classList.toggle(
                "owned",
                !!owned[p.slug]
            );

            card.setAttribute(
                "aria-pressed",
                owned[p.slug]
                    ? "true"
                    : "false"
            );

            updateProgress();

            render();

        }

        card.addEventListener(
            "click",
            toggle
        );

        card.addEventListener(
            "keydown",
            e => {

                if (
                    e.key === "Enter" ||
                    e.key === " "
                ) {

                    e.preventDefault();
                    toggle();

                }

            }
        );

        grid.appendChild(card);

    });

    updateProgress();
}

function clearFilters() {

    statusFilter = "all";
    selectedCategories.clear();
    selectedTypes.clear();

    document
        .querySelectorAll(
            'input[name="statusFilter"]'
        )
        .forEach(radio => {

            radio.checked =
                radio.value === "all";

        });

    document
        .querySelectorAll(
            ".category-chip input, .type-chip input"
        )
        .forEach(input => {

            input.checked = false;

        });

    updateFilterChips();
    render();

}

function makeExportItems() {

    const items =
        POKEMON.filter(matchesFilters);

    return items;

}

async function prepareExport() {

    const items =
        makeExportItems();

    if (items.length === 0) {

        showToast(
            "Não há Pokémon para exportar com os filtros atuais."
        );

        return null;
    }

    exportStage.innerHTML = "";

    const exportCard =
        document.createElement("div");

    exportCard.className =
        "export-card";

    const count =
        items.filter(
            p => owned[p.slug]
        ).length;

    const total =
        POKEMON.length;

    const pct =
        Math.round(
            (count / total) * 100
        );

    const active =
        [];

    if (statusFilter !== "all") {
        active.push(
            statusFilter === "owned"
                ? "Tenho"
                : "Faltam"
        );
    }

    selectedCategories.forEach(category => {
        active.push(
            CATEGORY_LABELS[category]
        );
    });

    selectedTypes.forEach(type => {
        active.push(
            TYPE_LABELS[type]
        );
    });

    const filterText =
        active.length > 0
            ? active.join(" · ")
            : "Todos os Pokémon";

    exportCard.innerHTML =

        '<div class="export-head">' +

            '<div>' +

                '<h1 class="export-title">' +
                    'Mega Dex' +
                '</h1>' +

                '<div class="export-subtitle">' +
                    'Meu progresso de Mega Evoluções' +
                '</div>' +

            '</div>' +

            '<div class="export-stat">' +

                '<div class="big">' +
                    count +
                    ' / ' +
                    total +
                '</div>' +

                '<div class="small">' +
                    pct +
                    '% completo · ' +
                    filterText +
                '</div>' +

            '</div>' +

        '</div>' +

        '<div class="export-info">' +

            '<span class="export-pill">' +
                'Visualização: ' +
                items.length +
                ' Pokémon' +
            '</span>' +

            '<span class="export-pill">' +
                'Gerado em ' +
                new Date().toLocaleDateString(
                    "pt-BR"
                ) +
            '</span>' +

        '</div>' +

        '<div class="export-grid"></div>' +

        '<div class="export-footer">' +

            '<div>' +
                'Mega Dex · Progresso pessoal' +
            '</div>' +

            '<div class="export-watermark">' +
                'X: @Jopdot · Insta: @coutinho_.davi · GitHub: DaviCoutinho-19' +
            '</div>' +

        '</div>';

    const exportGrid =
        exportCard.querySelector(
            ".export-grid"
        );

    for (const p of items) {

        const item =
            document.createElement("div");

        item.className =
            "export-pokemon" +
            (owned[p.slug] ? " owned" : "");

        const typeText =
            p.types
                .map(type =>
                    TYPE_LABELS[type]
                )
                .join(" / ");

        item.innerHTML =

            '<div class="export-dex">' +
                "#" +
                String(p.dex).padStart(3, "0") +
            '</div>' +

            '<img alt="' +
                p.name +
            '">' +

            '<div class="p-name">' +
                p.name +
            '</div>' +

            '<div class="p-types">' +
                typeText +
            '</div>' +

            '<div class="p-category">' +
                CATEGORY_LABELS[p.category] +
            '</div>';

        const img =
            item.querySelector("img");

        const urls =
            getImageUrls(p);

        img.crossOrigin = "anonymous";
        img.src = urls.normal;

        img.addEventListener(
            "error",
            function () {

                if (
                    this.dataset.fallback !== "true"
                ) {

                    this.dataset.fallback =
                        "true";

                    this.src =
                        urls.placeholder;

                }

            }
        );

        exportGrid.appendChild(item);

    }

    exportStage.appendChild(
        exportCard
    );

    return exportCard;
}

async function exportPNG() {

    const exportCard =
        await prepareExport();

    if (!exportCard) {
        return;
    }

    showToast(
        "Preparando a imagem..."
    );

    /*
     * Aguarda um pouco para que as imagens
     * externas tenham tempo de carregar.
     */
    await new Promise(resolve =>
        setTimeout(resolve, 1300)
    );

    try {

        const canvas =
            await html2canvas(
                exportCard,
                {
                    backgroundColor: "#0e0a1a",
                    scale: 2,
                    useCORS: true,
                    allowTaint: false,
                    logging: false
                }
            );

        const link =
            document.createElement("a");

        link.download =
            "mega-dex-" +
            new Date()
                .toISOString()
                .slice(0, 10) +
            ".png";

        link.href =
            canvas.toDataURL(
                "image/png"
            );

        link.click();

        showToast(
            "PNG exportado com sucesso."
        );

    } catch (e) {

        console.error(e);

        showToast(
            "O PNG não pôde ser gerado. Use o SVG, que mantém o visual e as imagens."
        );

    }

}

function escapeXml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

}

function exportSVG() {

    const items =
        makeExportItems();

    if (items.length === 0) {

        showToast(
            "Não há Pokémon para exportar com os filtros atuais."
        );

        return;
    }

    const width = 1400;
    const cardWidth = 205;
    const cardHeight = 240;
    const gap = 16;
    const columns = 6;

    const rows =
        Math.ceil(
            items.length / columns
        );

    const top = 220;
    const footer = 100;

    const height =
        top +
        rows * (cardHeight + gap) +
        footer;

    const count =
        items.filter(
            p => owned[p.slug]
        ).length;

    const total =
        POKEMON.length;

    const pct =
        Math.round(
            (count / total) * 100
        );

    const active =
        [];

    if (statusFilter !== "all") {
        active.push(
            statusFilter === "owned"
                ? "Tenho"
                : "Faltam"
        );
    }

    selectedCategories.forEach(category => {
        active.push(
            CATEGORY_LABELS[category]
        );
    });

    selectedTypes.forEach(type => {
        active.push(
            TYPE_LABELS[type]
        );
    });

    const filterText =
        active.length > 0
            ? active.join(" · ")
            : "Todos os Pokémon";

    let svg = "";

    svg +=
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'width="' + width + '" ' +
        'height="' + height + '" ' +
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

    svg +=
        '<rect width="100%" height="100%" fill="url(#bg)"/>';

    svg +=
        '<text x="60" y="82" fill="url(#title)" ' +
        'font-family="Rajdhani, Arial, sans-serif" ' +
        'font-size="64" font-weight="700">Mega Dex</text>';

    svg +=
        '<text x="60" y="118" fill="#9c8fc0" ' +
        'font-family="Inter, Arial, sans-serif" font-size="20">' +
        'Meu progresso de Mega Evoluções</text>';

    svg +=
        '<text x="1335" y="87" fill="#f2eefc" text-anchor="end" ' +
        'font-family="Rajdhani, Arial, sans-serif" font-size="40" font-weight="700">' +
        count + ' / ' + total +
        '</text>';

    svg +=
        '<text x="1335" y="118" fill="#9c8fc0" text-anchor="end" ' +
        'font-family="Inter, Arial, sans-serif" font-size="16">' +
        pct + '% completo · ' +
        escapeXml(filterText) +
        '</text>';

    svg +=
        '<line x1="60" y1="160" x2="1340" y2="160" ' +
        'stroke="#3a2d52" stroke-width="1"/>';

    items.forEach((p, index) => {

        const col =
            index % columns;

        const row =
            Math.floor(
                index / columns
            );

        const x =
            60 +
            col *
            (cardWidth + gap);

        const y =
            top +
            row *
            (cardHeight + gap);

        const border =
            owned[p.slug]
                ? "#4fe0c4"
                : "#453565";

        svg +=
            '<rect x="' + x + '" y="' + y +
            '" width="' + cardWidth +
            '" height="' + cardHeight +
            '" rx="16" fill="#1d1633" stroke="' +
            border +
            '" stroke-opacity="' +
            (owned[p.slug] ? "0.65" : "0.85") +
            '"/>';

        svg +=
            '<text x="' + (x + 15) +
            '" y="' + (y + 25) +
            '" fill="#6a5d8f" ' +
            'font-family="Rajdhani, Arial, sans-serif" ' +
            'font-size="14">' +
            "#" +
            String(p.dex).padStart(3, "0") +
            '</text>';

        const urls =
            getImageUrls(p);

        svg +=
            '<image href="' +
            urls.normal +
            '" xlink:href="' +
            urls.normal +
            '" x="' +
            (x + 62) +
            '" y="' +
            (y + 35) +
            '" width="80" height="80" preserveAspectRatio="xMidYMid meet"/>';

        svg +=
            '<text x="' +
            (x + cardWidth / 2) +
            '" y="' +
            (y + 142) +
            '" fill="#d5cae8" text-anchor="middle" ' +
            'font-family="Rajdhani, Arial, sans-serif" ' +
            'font-size="16" font-weight="600">' +
            escapeXml(p.name) +
            '</text>';

        svg +=
            '<text x="' +
            (x + cardWidth / 2) +
            '" y="' +
            (y + 166) +
            '" fill="#9c8fc0" text-anchor="middle" ' +
            'font-family="Inter, Arial, sans-serif" ' +
            'font-size="11">' +
            escapeXml(
                p.types
                    .map(type => TYPE_LABELS[type])
                    .join(" / ")
            ) +
            '</text>';

        svg +=
            '<text x="' +
            (x + cardWidth / 2) +
            '" y="' +
            (y + 187) +
            '" fill="#6a5d8f" text-anchor="middle" ' +
            'font-family="Inter, Arial, sans-serif" ' +
            'font-size="10">' +
            escapeXml(CATEGORY_LABELS[p.category]) +
            '</text>';

        if (owned[p.slug]) {

            svg +=
                '<circle cx="' +
                (x + cardWidth - 21) +
                '" cy="' +
                (y + 21) +
                '" r="9" fill="#4fe0c4"/>';

            svg +=
                '<path d="M' +
                (x + cardWidth - 26) +
                ' ' + (y + 21) +
                ' l3 3 l6 -7" ' +
                'fill="none" stroke="#0e0a1a" stroke-width="2.3" ' +
                'stroke-linecap="round" stroke-linejoin="round"/>';

        }

    });

    const footerY =
        height - 55;

    svg +=
        '<line x1="60" y1="' +
        (height - 82) +
        '" x2="1340" y2="' +
        (height - 82) +
        '" stroke="#3a2d52" stroke-width="1"/>';

    svg +=
        '<text x="60" y="' +
        footerY +
        '" fill="#6a5d8f" ' +
        'font-family="Inter, Arial, sans-serif" font-size="13">' +
        'Mega Dex · Progresso pessoal' +
        '</text>';

    svg +=
        '<text x="1340" y="' +
        footerY +
        '" fill="#9c8fc0" text-anchor="end" ' +
        'font-family="Inter, Arial, sans-serif" font-size="13">' +
        'X: @Jopdot · Insta: @coutinho_.davi · GitHub: DaviCoutinho-19' +
        '</text>';

    svg +=
        '</svg>';

    const blob =
        new Blob(
            [svg],
            {
                type: "image/svg+xml;charset=utf-8"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.download =
        "mega-dex-" +
        new Date()
            .toISOString()
            .slice(0, 10) +
        ".svg";

    link.href = url;
    link.click();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);

    showToast(
        "SVG exportado com sucesso."
    );

}

function exportJSON() {

    const data = {
        megaDexProgress_v1: owned,
        exportedAt: new Date().toISOString()
    };

    const json =
        JSON.stringify(
            data,
            null,
            2
        );

    const blob =
        new Blob(
            [json],
            {
                type: "application/json;charset=utf-8"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download =
        "mega-dex-progresso.json";

    link.click();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);

    showToast(
        "Progresso exportado."
    );

}

function importJSONFile(file) {

    const reader =
        new FileReader();

    reader.onload = () => {

        try {

            const data =
                JSON.parse(
                    reader.result
                );

            const imported =
                (data.megaDexProgress_v1 || data.owned || data);

            if (
                !imported ||
                typeof imported !== "object" ||
                Array.isArray(imported)
            ) {
                throw new Error(
                    "Formato inválido"
                );
            }

            const clean = {};

            POKEMON.forEach(p => {

                if (
                    imported[p.slug] === true
                ) {
                    clean[p.slug] = true;
                }

            });

            owned = clean;

            persist();
            render();

            showToast(
                "Progresso importado com sucesso."
            );

        } catch (e) {

            showToast(
                "O arquivo selecionado não é um backup válido do Mega Dex."
            );

        }

    };

    reader.readAsText(
        file,
        "UTF-8"
    );

}

/* Painel de filtros */

filterToggle.addEventListener(
    "click",
    () => {

        const open =
            filterPanelWrap.classList.toggle(
                "open"
            );

        filterToggle.classList.toggle(
            "open",
            open
        );

    }
);

/* Filtro de status */

document
    .querySelectorAll(
        'input[name="statusFilter"]'
    )
    .forEach(radio => {

        radio.addEventListener(
            "change",
            () => {

                statusFilter =
                    radio.value;

                updateFilterChips();
                render();

            }
        );

    });

/* Filtro de categorias */

document
    .querySelectorAll(
        ".category-chip input"
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            () => {

                if (input.checked) {
                    selectedCategories.add(
                        input.value
                    );
                } else {
                    selectedCategories.delete(
                        input.value
                    );
                }

                updateFilterChips();
                render();

            }
        );

    });

clearFiltersBtn.addEventListener(
    "click",
    clearFilters
);

/* Busca */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value.trim();

            render();

        }
    );

/* Reset do progresso */

document
    .getElementById("resetBtn")
    .addEventListener(
        "click",
        () => {

            if (
                confirm(
                    "Tem certeza que deseja apagar todo o seu progresso marcado?"
                )
            ) {

                owned = {};

                persist();
                render();

                showToast(
                    "Progresso apagado."
                );

            }

        }
    );

/* Menu de exportação */

exportToggle.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        const open =
            exportDropdown.classList.toggle(
                "open"
            );

        exportToggle.classList.toggle(
            "open",
            open
        );

    }
);

document.addEventListener(
    "click",
    event => {

        if (
            !exportDropdown.contains(event.target) &&
            !exportToggle.contains(event.target)
        ) {

            exportDropdown.classList.remove(
                "open"
            );

            exportToggle.classList.remove(
                "open"
            );

        }

    }
);

exportPngBtn.addEventListener(
    "click",
    async () => {

        exportDropdown.classList.remove(
            "open"
        );

        exportToggle.classList.remove(
            "open"
        );

        await exportPNG();

    }
);

exportSvgBtn.addEventListener(
    "click",
    () => {

        exportDropdown.classList.remove(
            "open"
        );

        exportToggle.classList.remove(
            "open"
        );

        exportSVG();

    }
);

exportJsonBtn.addEventListener(
    "click",
    () => {

        exportDropdown.classList.remove(
            "open"
        );

        exportToggle.classList.remove(
            "open"
        );

        exportJSON();

    }
);

importJsonBtn.addEventListener(
    "click",
    () => {

        importFile.click();

    }
);

importFile.addEventListener(
    "change",
    () => {

        const file =
            importFile.files[0];

        if (file) {
            importJSONFile(file);
        }

        importFile.value = "";

    }
);

/* Inicialização */

renderTypeFilters();
updateFilterChips();
render();

