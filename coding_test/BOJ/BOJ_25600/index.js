const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, ...rest] = input;
const N = +n;

const sum = rest.reduce((acc, c) => {
  const [a, d, g] = c.split(" ").map(Number);

  let score = 0;

  if (a === d + g) {
    score = a * (d + g) * 2;
  } else {
    score = a * (d + g);
  }

  acc.push(score);

  return acc;
}, []);

const sorted = sum.sort((a, b) => b - a);
console.log(sorted[0]);
