const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let asnwer = "";

for (let i = 0; i < input.length - 1; i++) {
  const sorted = input[i].sort((a, b) => a - b);

  const [a, b, c] = sorted;
  if (c ** 2 === a ** 2 + b ** 2) {
    asnwer += "right" + "\n";
  } else {
    asnwer += "wrong" + "\n";
  }
}

console.log(asnwer.trim());
