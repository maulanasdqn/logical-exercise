const va = (v) => v.length === 0;
const vs = (v) => typeof v === "string";
const vs1 = (v) => v < 1;
const cut = (v, a, s) => v.splice(s - 1, a);

const val = (ar, am, st, c) =>
  va(ar)
    ? "Data not found"
    : vs(am) || vs(st)
    ? "Invalid command"
    : vs1(am)
    ? "Minimum amount is 1"
    : vs1(st)
    ? "Starting number cannot be below 0"
    : c;

const dataSelection = (ar, am, st) => val(ar, am, st, cut(ar, am, st));

console.log(
  dataSelection(
    ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"],
    2,
    3
  )
);
console.log(
  dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1)
);
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
