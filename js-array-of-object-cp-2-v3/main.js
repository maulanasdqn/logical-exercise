const ca2 = (p, c) => p.filter((x) => x.country === c[1]).map((x) => x.name)
const cn2 = (p, c) => p.filter((x) => x.country === c[1]).map((x) => x.country)
const cm2 = (p, c) => p.filter((x) => x.country === c[1]).map((x) => x.medals).reduce((x,y) => parseInt(x) + parseInt(y), 0)

const ca1 = (p, c) => p.filter((x) => x.country === c[0]).map((x) => x.name)
const cn1 = (p, c) => p.filter((x) => x.country === c[0]).map((x) => x.country)
const cm1 = (p, c) => p.filter((x) => x.country === c[0]).map((x) => x.medals).reduce((x,y) => parseInt(x) + parseInt(y), 0)

const f2 = (p, c) => c === undefined ? "Countries not provided" : [ 
  {
    "name" : cn1(p,c)[0],
    "athlete": ca1(p, c),
    "totalMedals": cm1(p, c)
  },
  {
    "name" : cn2(p,c)[0],
    "athlete": ca2(p, c),
    "totalMedals": cm2(p, c)
  }
]

const countryMedals = (p, c) => f2(p, c)

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals
