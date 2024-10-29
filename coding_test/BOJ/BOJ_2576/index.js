const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const count = input.reduce((a, c) => {
  c % 2 === 1 && a.push(c);

  return a;
}, []);

if (count.length === 0) return console.log(-1);

console.log(count.reduce((a, c) => a + c));
console.log(Math.min(...count));
