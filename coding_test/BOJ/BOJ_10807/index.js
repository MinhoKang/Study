const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = +input[0];
let count = 0;
const arr = input[1].split(" ").map(Number);
const criteria = +input[2];
arr.map((i) => i === criteria && count++);

console.log(count);
