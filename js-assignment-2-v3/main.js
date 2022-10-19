const convertItems = items => items.map(x => x.split("|"))

const filterItems = items => items.filter(x => x.length !== 1).map(x => [x[0], parseInt(x[1]), x[2]])

const generateSpareParts = items => items.map(x => ({name: x[0], price: x[1], category: x[2]}))

const f = (i, a) => i.filter(x => x[2] === a).length

const itemsStatistics = items => ({
  "variation": f(items, "variation"),
  "bodyParts": f(items, "bodyParts"),
  "electricity": f(items, "electricity")
})

const generateItemsData = items => ({
  'spare_parts': generateSpareParts(filterItems(convertItems(items))),
  'statistics' : itemsStatistics(filterItems(convertItems(items)))
})

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

console.log(generateSpareParts(filterItems(convertItems(items))));

console.log(itemsStatistics(filterItems(convertItems(items))))

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}
