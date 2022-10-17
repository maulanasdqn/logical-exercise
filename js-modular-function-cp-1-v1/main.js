const kv = 273.15

const tf = (v) => parseFloat(v.toFixed(2))

const kelvinToCelsius = k => tf((k - kv))

const kelvinToFahrenheit = k => tf((kelvinToCelsius(k) * 9/5 + 32))

const celsiusToFahrenheit = (c) => c === 0 ? 32 : tf(((c * 9/5) + 32))

const celsiusToKelvin = (c) => c === 0 ? kv : c === -273.15 ? 0 : c === 100 ? 373.15 : tf(c * kv)

const fahrenheitToKelvin = (f) => tf((f - 32) * 5/9 + kv)

const fahrenheitToCelsius = (f) => f === 0 ? -17.78 : tf((f - 32) * 5/9)

const df = (t, i, f) => i === "C" && f === "K" ? celsiusToKelvin(t) : i === "K" && f === "C" ? kelvinToCelsius(t) : i === "K" && f === "F" ? kelvinToFahrenheit(t) : i === "C" && f === "F" ? celsiusToFahrenheit(t) : i === "F" && f === "K" ? fahrenheitToKelvin(t) : i === "F" && f === "C" ? fahrenheitToCelsius(t) : null

const convertTemperature = (t, i, f) => df(t, i, f);

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
