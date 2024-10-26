const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

if (N === 1) return;

const divisions = Array.from({ length: N - 2 }).map((_, i) => i + 2);

const primeFactors = divisions.reduce((acc, cur) => {
  let n = N;
  while (n % cur === 0) {
    acc.push(cur);

    n = n / cur;
  }

  return acc;
}, []);

console.log(primeFactors);
