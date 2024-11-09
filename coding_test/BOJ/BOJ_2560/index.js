const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, results] = input;

const sums = results.split("0").reduce((a, c) => {
  const ones = c.trim().split(" ");
  if (!ones[0]) return a;
  const combo = ones.length;
  const sum = (combo * (combo + 1)) / 2;
  a += sum;
  return a;
}, 0);

console.log(sums);
