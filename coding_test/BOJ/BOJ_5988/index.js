const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

for (let i = 0; i < +N; i++) {
  const num = BigInt(rest[i]);

  const isEven = (num % 2n).toString() === "0";
  if (isEven) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
