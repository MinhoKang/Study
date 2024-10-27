const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const remain = input.reduce((a, c) => {
  const newRemain = c % 42;
  a.push(newRemain);

  return a;
}, []);

console.log(new Set([...remain]).size);
