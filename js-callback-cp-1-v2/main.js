const o1 = (n1, n2) => parseInt(n1) - parseInt(n2)
const o2 = (n1, n2) => parseInt(n1) + parseInt(n2)
const o3 = (n1, n2) => parseInt(n1) * parseInt(n2)

const c = n => parseInt(n) % 2 === 0

const calculate = (n1, n2, call) => c(n1) && c(n2) ? call(o1(n1, n2)) : c(n1) ? call(o2(n1, n2)) : call(o3(n1, n2))
  
module.exports = calculate;
  
