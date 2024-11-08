const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

if (input % 10 !== 0) return console.log(-1);

const secs = [300, 60, 10];

const low = secs.reduce(
  (a, c) => {
    const count = Math.floor(a.T / c);
    a.T -= count * c;
    a[c] += count;

    return a;
  },
  {
    T: input,
    300: 0,
    60: 0,
    10: 0,
  }
);

console.log(low[300], low[60], low[10]);
