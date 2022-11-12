const convertItems = (items) => items.map((x) => x.split("|"));

const filterItems = (items) =>
  items.filter((x) => x.length !== 1).map((x) => [x[0], parseInt(x[1]), x[2]]);

const generateSpareParts = (items) =>
  items.map((x) => ({ name: x[0], price: x[1], category: x[2] }));

const form = (i, a) => i.filter((x) => x[2] === a).length;

const itemsStatistics = (items) => ({
  variation: form(items, "variation"),
  bodyParts: form(items, "bodyParts"),
  electricity: form(items, "electricity"),
});

const generateItemsData = (items) => ({
  spare_parts: generateSpareParts(filterItems(convertItems(items))),
  statistics: itemsStatistics(filterItems(convertItems(items))),
});

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
