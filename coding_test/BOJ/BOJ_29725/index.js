const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(""))
  .flat();

const vs = input.reduce(
  (a, c) => {
    const isBlack = c === c.toLowerCase();
    let score = 0;

    if (c === "." || c === "K" || c === "k") return a;

    if (c.toLowerCase() === "p") {
      score += 1;
    } else if (c.toLowerCase() === "n") {
      score += 3;
    } else if (c.toLowerCase() === "b") {
      score += 3;
    } else if (c.toLowerCase() === "r") {
      score += 5;
    } else if (c.toLowerCase() === "q") {
      score += 9;
    }

    if (isBlack) {
      a.black += score;
    } else {
      a.white += score;
    }

    return a;
  },
  {
    white: 0,
    black: 0,
  }
);

console.log(vs.white - vs.black);
