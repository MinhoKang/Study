const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let pass = 0;

for (let i = 1; i <= N; i++) {
  let countO = 0;

  input[i].split("").forEach((i) => i === "O" && countO++);
  if (countO >= Math.ceil(M / 2)) {
    pass++;
  }
}

console.log(pass);
