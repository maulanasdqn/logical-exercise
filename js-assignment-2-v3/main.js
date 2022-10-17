function convertItems(items) {
    return []; // TODO: replace this
}

function filterItems(items) {
    console.log(items, "<<<<<<<<<<<<");
    return [[]]; // TODO: replace this
}

function generateSpareParts(items) {
    return []; // TODO: replace this
}

function itemsStatistics(items) {
    return {}; // TODO: replace this
}

function generateItemsData(items) {
    return {}; // TODO: replace this
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}