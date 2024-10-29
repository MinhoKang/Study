const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const obj = input.reduce(
  (a, c) => {
    a.now = (a.now || 0) - c[0] + c[1];
    if (a.max < a.now) a.max = a.now;

    return a;
  },
  { max: 0, now: 0 }
);

console.log(obj.max);
