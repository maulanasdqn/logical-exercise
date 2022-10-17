const reverseUnique = (t) =>
  [...t]
    .map((x, i, z) => (z[i] === z[i + 1] ? z.splice(i + 1, 1) : x))
    .reverse()
    .join("");

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
