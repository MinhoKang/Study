const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n").map(Number);

const ones = input[1] % 10;
const tens = Math.floor((input[1] % 100) / 10);
const hundreds = Math.floor(input[1] / 100);

console.log(input[0] * ones);
console.log(input[0] * tens);
console.log(input[0] * hundreds);
console.log(input[0] * input[1]);
