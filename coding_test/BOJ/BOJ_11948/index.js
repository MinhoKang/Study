const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const science = input.slice(0, 4).sort((a, b) => a - b);
const social = input.slice(4, 6).sort((a, b) => a - b);
const sumScience = science.reduce((a, b) => a + b) - science[0];

console.log(sumScience + social[1]);
