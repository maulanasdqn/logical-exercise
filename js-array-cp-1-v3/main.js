const er1 = "Invalid input";
const er2 = "Data not available";
const splitToArr = (t) =>
  t === undefined
    ? er1
    : t.length === 0
    ? er2
    : t.split(/[;-]+/).map((x) => x.charAt(0).toUpperCase() + x.slice(1));

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
