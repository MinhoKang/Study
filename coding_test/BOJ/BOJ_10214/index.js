const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [T, ...rest] = input;
console.log(rest);
for (let i = 0; i < +T; i++) {}
