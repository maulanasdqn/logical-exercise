const f = a => a.reduce((b, c) => ({...b, [c]: (b[c] || 0) + 1}), {});
const v = a => a === undefined ? "Invalid input" : a.length === 0  ? "Data not found" : f(a)
const counterApp = a => v(a) 
console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
