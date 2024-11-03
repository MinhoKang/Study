const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const sum1 = input[0].reduce((a, c) => a + c);
const sum2 = input[1].reduce((a, c) => a + c);

console.log(sum1 >= sum2 ? sum1 : sum2);
