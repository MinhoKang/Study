const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dropsPot = input[1][0];

const hit = input[0].findIndex((i) => i === dropsPot);
console.log(hit + 1 || 0);
