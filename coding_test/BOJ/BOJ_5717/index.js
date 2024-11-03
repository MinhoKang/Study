const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const count = input.reduce((a, c) => {
  const [m, w] = c;
  if (m === 0 && w === 0) return a;
  a.push(m + w);
  return a;
}, []);

console.log(count.join("\n"));
