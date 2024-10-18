const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [S, i] = input;
console.log(S[+i - 1]);
