const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

const sum = rest
  .map((i) =>
    i
      .split(" ")
      .map(Number)
      .filter((v) => v <= 10)
  )
  .reduce((a, c, i) => {
    if (i % 2 === 0) return a;

    const hap = c.reduce((z, x) => z + x);

    a.push(hap);

    return a;
  }, []);

console.log(sum.join("\n").trim());
