const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

for (let i = 0; i < +T; i++) {
  const nums = rest[i].split(" ").map(Number);

  const evens = nums.filter((n) => n % 2 === 0);

  const sum = evens.reduce((a, c) => a + c);
  const min = Math.min(...evens);

  console.log(sum, min);
}
