const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

const factorial = (n) => {
  if (n === 1) return 1;

  return factorial(n - 1) * n;
};

const NFac = factorial(N);

const week = NFac / 60 / 60 / 24 / 7;

console.log(week);
