const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, S] = input;

let count = 0;
let chain = false;

for (let i = 0; i < +N; i++) {
  if (count === 4) break;
  if (i >= 0 || i < +N - 1) {
    const target1 = S.charCodeAt(i) - 65;
    const target2 = S.charCodeAt(i + 1) - 65;

    if (Math.abs(target2 - target1) === 1) {
      count++;
      chain = true;
    } else {
      chain = false;
      count = 0;
    }
  }
}
console.log(count === 4 ? "YES" : "NO");
