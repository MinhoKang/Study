const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const count = input.reduce((a, c) => {
  a[c] = (a[c] || 0) + 1;

  return a;
}, {});

console.log(input.reduce((a, c) => a + c) / input.length);

let max = 0;
let arr = [];

for (i of new Set([...input])) {
  if (count[i] > max) {
    max = count[i];
    arr.push(i);
  }
}
console.log(arr[arr.length - 1]);
