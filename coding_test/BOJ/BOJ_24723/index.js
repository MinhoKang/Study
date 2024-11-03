const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

// 1 => 2
// 2 => 4
// 3 => 8

console.log(2 ** N);
