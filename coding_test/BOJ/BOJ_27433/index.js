const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

const factorial = (number) => {
  if (number === 1 || number === 0) return 1;

  return number * factorial(number - 1);
};

console.log(factorial(input));
