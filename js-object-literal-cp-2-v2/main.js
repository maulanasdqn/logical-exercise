const sum = (ob1, ob2) => {
  let sum = {};
  Object.keys(ob1).forEach(key => {
    if (ob2.hasOwnProperty(key)) {
      sum[key] = ob1[key] - ob2[key]
    }  
  })
  return sum;
}


const stockOpname = (items) => {
    let stockItems = {
        "Ram": 10,
        "Motherboard": 4,
        "Processor": 5,
        "SSD": 8,
        "PSU": 12,
        "Cooling": 5,
    }

  if (items.length === 0) return "Data not found"

  const s = items.map((x) => x[1])
  const n = items.map((x) => x[0])

  const o = n.reduce((a, e, i) => ({...a, [e]: s[i]}), {});

  return sum(stockItems, o)
}

let items1 = [
    ["PSU", 6],
    ["SSD", 3],
    ["Motherboard", 3],
    ["Ram", 2],
    ["Cooling", 4],
    ["Processor", 5],
]

let items2 = [
    ["SSD", 5],
    ["Motherboard", 4],
    ["Processor", 1],
    ["PSU", 3],
    ["Cooling", 5],
    ["Ram", 5],
]

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname
