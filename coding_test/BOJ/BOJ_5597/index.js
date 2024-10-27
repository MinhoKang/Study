const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arrTo30 = Array.from({ length: 30 }).map((_, i) => i + 1);

const answer = arrTo30.reduce((a, c) => {
  if (input.includes(c)) {
    return a;
  } else {
    a.push(c);
  }

  return a;
}, []);

console.log(Math.min(...answer));
console.log(Math.max(...answer));
