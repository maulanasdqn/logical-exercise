// TODO: answer here
const checkDatatype = (val) =>
  Array.isArray(val) ? "array" : val === null ? "null" : typeof val;

module.exports = { checkDatatype };
