const books = "The Alchemist:55000,The Hobit:20000,The Power of Habit:10000,";
const budget = 55000;

const re = p => p.reduce((x, y) => x + y, 0)

const afista = (t, p, u) =>
  t.length === 0
  ? `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${u}.`
  : `Afista membeli ${t.length} buku yaitu ${t.join(", ")}. Total belanja ${re(p)}, sisa uang Afista adalah ${u - re(p)}.`

const buyThemAll = (b, u) => {
 const titleArr =  b.split(/[,]\b/).map(x => x.split(":")).filter(x => u > parseInt(x[1]) && x[0] !== "Belajar HTML5").map(x => x[0])
 const priceArr =  b.split(/[,]\b/).map(x => x.split(":")).filter(x => u > parseInt(x[1]) && x[0] !== "Belajar HTML5" ).map(x => parseInt(x[1]))
 console.log(titleArr)
 return afista(titleArr, priceArr, u)
}

console.log(buyThemAll(books, budget));

module.exports = buyThemAll;
