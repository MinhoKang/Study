const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, _] = input.map(Number);

const nums = input[1].split("").map(Number);
const sum = nums.reduce((a, c) => a + c, 0);

console.log(sum);
