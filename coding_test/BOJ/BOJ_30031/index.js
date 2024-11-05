const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;
let sum = 0;

const jipye = rest.map((i) => i.split(" ").map(Number));
for (let i = 0; i < +N; i++) {
  const [w, h] = jipye[i];
  if (w === 136) {
    sum += 1000;
  } else if (w === 142) {
    sum += 5000;
  } else if (w === 148) {
    sum += 10000;
  } else if (w === 154) {
    sum += 50000;
  }
}
console.log(sum);
