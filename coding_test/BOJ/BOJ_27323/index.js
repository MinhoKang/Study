const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input.map(Number);
console.log(A * B);
