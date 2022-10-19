const o1 = (n1, n2) => parseInt(n1) - parseInt(n2)
const o2 = (n1, n2) => parseInt(n1) + parseInt(n2)
const o3 = (n1, n2) => parseInt(n1) * parseInt(n2)

const c = n => parseInt(n) % 2 === 0

const calculate = async (n1, n2) => new Promise((res, rej) =>
  n1 === 0 && n2 === 0 
  ? rej(`number1 and number2 cannot be 0`)
  : c(n1) && c(n2)
  ? res(o1(n1, n2))
  : c(n1)
  ? res(o2(n1, n2))
  : res(o3(n1, n2)))
  
module.exports = calculate;
