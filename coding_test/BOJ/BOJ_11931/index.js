const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, ...rest] = input;
const nums = rest.map(Number);

const decending = nums.sort((a, b) => b - a);
console.log(decending.join("\n").trim());
