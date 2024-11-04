const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [X, Y] = input;

const a = 100 - X;
const b = 100 - Y;
let c = 100 - (a + b);
let d = a * b;
const q = Math.floor(d / 100);
const r = d % 100;
console.log(a, b, c, d, q, r);

if (d >= 100) {
  const f = Math.floor(d / 100);
  c += f;
  d = d % 100;
}

console.log(c, d);
