const er = "Tidak ada huruf vokal yang ditemukan";
const re = /^[aeiou]$/i;
const rs = "Jumlah vokal yang ditemukan sebanyak";

const r = (s) => (s == "" ? er : `${rs} ${s.length} berupa ${s}`);
const vocalCounter = (v) => r(v.map((x) => (re.test(x) ? x : "")).join(""));

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
