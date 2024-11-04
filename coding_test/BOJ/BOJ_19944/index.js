const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

if (M === 1 || M === 2) {
  console.log("NEWBIE!");
} else if (M > 2 && M <= N) {
  console.log("OLDBIE!");
} else {
  console.log("TLE!");
}
