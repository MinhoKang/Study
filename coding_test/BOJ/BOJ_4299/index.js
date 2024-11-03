const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [sum, diff] = input;
const possibles = [];

for (let i = 0; i <= sum; i++) {
  for (let j = 0; j <= sum; j++) {
    if (i + j === sum) {
      possibles.push([i, j]);
    }
  }
}

const filtered = possibles.filter((i) => {
  const [a, b] = i;

  if (Math.abs(a - b) === Math.abs(diff)) {
    return i;
  }
});

const sorted = filtered.sort((a, b) => b[0] - a[0]);

console.log(sorted.length === 0 ? -1 : sorted[0].join(" "));
