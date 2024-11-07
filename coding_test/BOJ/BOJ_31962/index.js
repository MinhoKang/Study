const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [NX, ...rest] = input;
const [N, X] = NX;

const Xs = rest.map((i) => i[1]);
if (Xs.every((i) => i > X)) {
  return console.log(-1);
} else {
  const cal = rest.reduce(
    (a, c, i) => {
      const [S, T] = c;
      if (S + T > X) return a;
      if (S + T <= X) {
        const diff = X - S - T;
        if (a.diff > diff) {
          a.diff = diff;
          a.index = i;
          a.time = S;
        }
      }

      return a;
    },
    {
      diff: 200,
      index: -1,
      time: 101,
    }
  );

  console.log(cal.time === 101 ? -1 : cal.time);
}
