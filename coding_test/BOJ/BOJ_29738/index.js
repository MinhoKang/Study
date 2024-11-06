const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [T, ...rest] = input;

for (let i = 0; i < T; i++) {
  const rate = rest[i];

  if (rate <= 25) {
    console.log(`Case #${i + 1}: World Finals`);
  } else if (rate <= 1000) {
    console.log(`Case #${i + 1}: Round 3`);
  } else if (rate <= 4500) {
    console.log(`Case #${i + 1}: Round 2`);
  } else {
    console.log(`Case #${i + 1}: Round 1`);
  }
}
