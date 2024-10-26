const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

for (const nums of input) {
  const [first, second] = nums.split(" ").map(Number);

  if (first === 0 && second === 0) break;

  if (second % first === 0) {
    console.log("factor");
  } else if (first % second === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
