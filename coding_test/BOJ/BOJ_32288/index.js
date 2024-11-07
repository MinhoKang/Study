const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, S] = input;

let answer = "";

for (let i = 0; i < +n; i++) {
  const original = S.charAt(i);
  const lower = S.charAt(i).toLocaleLowerCase();

  if (original === lower) {
    answer += original.toUpperCase();
  } else {
    answer += original.toLowerCase();
  }
}

console.log(answer)