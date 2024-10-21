const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, k] = input[0].split(" ").map(Number);

const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(nums[k-1]);
