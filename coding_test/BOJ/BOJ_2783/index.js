const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const calculate = (price, gram) => {
  return Number(((price / gram) * 1000).toFixed(2));
};

let cheap = calculate(input[0][0], input[0][1]);

for (i = 2; i < input.length; i++) {
  const p = calculate(input[i][0], input[i][1]);
  if (cheap > p) cheap = p;
}

console.log(cheap);
