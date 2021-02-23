const ftoc = function(farenheit) {
  const celsius = (farenheit - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
}

const ctof = function(celsius) {
  const farenheit = celsius * 9/5 + 32;
  return Math.round(farenheit * 10) / 10;
}

console.log(ftoc(33));
console.log(ctof(1));

module.exports = {
  ftoc,
  ctof
}
