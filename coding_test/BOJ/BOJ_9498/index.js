const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const A = Number(input);

console.log(A < 60 ? "F" : A <= 69 ? "D" : A <= 79 ? "C" : A <= 89 ? "B" : "A");
