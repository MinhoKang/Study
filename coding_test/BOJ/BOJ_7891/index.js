const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(BigInt));

const [N, ...rest] = input;

rest.forEach((i) => {
  const [a, b] = i;
  const sum = (a + b).toString();
  console.log(sum);
});
