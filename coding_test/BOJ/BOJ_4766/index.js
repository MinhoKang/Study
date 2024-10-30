const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = input.reduce((a, c, i) => {
  if (c === 999 || i === 0) return a;

  const diff = c - input[i - 1];
  a.push(diff.toFixed(2));

  return a;
}, []);

console.log(answer.join("\n"));
