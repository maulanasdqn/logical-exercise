const { v, c } = require("./helper.js");

const travelSeat = (p, s) => v(p, s, c(p, s));

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Ayah", "Ibu", "Kakak", "Adik"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat(["Kakek", "Nenek"], 9));
console.log(travelSeat(["Paman", "Bibi","Sepupu"], 2));
console.log(travelSeat([], 4));

module.exports = travelSeat;
