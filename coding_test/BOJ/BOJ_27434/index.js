const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = BigInt(input);

const factorial = (num) => {
  let result = 1n;

  for (let i = 1n; i <= N; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(N).toString());
