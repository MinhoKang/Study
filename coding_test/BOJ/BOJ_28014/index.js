const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

const HArr = rest[0].split(" ").map(Number);

const answer = HArr.reduce((a, c, i) => {
  if (!HArr[i + 1]) return a;
  if (c > HArr[i + 1]) {
    return a;
  } else {
    return a + 1;
  }
}, 1);
console.log(answer);
