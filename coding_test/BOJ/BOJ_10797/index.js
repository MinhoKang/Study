const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);

const count = nums.reduce((a, c) => {
  c === N && a++;
  return a;
}, 0);

console.log(count);
