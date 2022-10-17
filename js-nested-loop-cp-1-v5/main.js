const Helper = require("./helper.js");

const books = "The Alchemist:55000,The Hobit:20000,The Power of Habit:10000,";
const budget = 1000000;

const buyThemAll = (b, u) =>
  Helper.c1 ? Helper.rf(u) : c2 ? Helper.rs(b, u) : Helper.cfb(b, u);

console.log(buyThemAll(books, budget));

module.exports = buyThemAll;
