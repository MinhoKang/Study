const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = +input;

const case1 = (N * 78) / 100;
const case2 = (N * 80) / 100 + (((N * 20) / 100) * 78) / 100;

console.log(case1, case2);
