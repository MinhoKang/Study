const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [K, ...rest] = input;

const arr = rest.reduce((a, c) => {
  if (c !== 0) {
    a.push(c);
  } else {
    a.pop();
  }
  return a;
}, []);

console.log(!arr.length ? 0 : arr.reduce((a, c) => a + c, 0));
