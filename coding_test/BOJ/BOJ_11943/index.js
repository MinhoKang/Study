const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const case1 = input[0][0] + input[1][1];

const case2 = input[0][1] + input[1][0];

console.log(case1 > case2 ? case2 : case1);
