const discountChecker = (c,d) => (d.split("-")[0] % 2 === 0 && c.map((x) => x[0].split(" ")[1] % 2 === 0)) ? c.filter((x) => x[0].split(" ")[1] % 2 === 0 || x[1] === "member") : c.filter((x) => x[0].split(" ")[1] % 2 !== 0 || x[1] === "member");

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
