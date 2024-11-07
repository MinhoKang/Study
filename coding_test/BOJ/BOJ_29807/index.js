const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, ...rest] = input;

const scores = rest[0].split(" ").map(Number);
let scores2 = [];
const fullScores = scores.length === 5 ? scores : scores2;
if (scores.length !== 5) {
  const newScore = Array.from({ length: 5 - scores.length }).fill(0);
  scores2.push(...scores.concat(newScore));
}

const [k, m, e, i, f] = fullScores;

let sum = 0;

if (k > e) {
  sum += (k - e) * 508;
} else {
  sum += (e -k) * 108;
}

if (m > i) {
  sum += (m - i) * 212;
} else {
  sum += (i-m) * 305;
}

if (f !== 0) {
  sum += f * 707;
}

console.log(sum * 4763);
