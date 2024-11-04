const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, P] = input;

const dis1 = P - 500 >= 0 ? P - 500 : 0;
const dis2 = P - P * 0.1 >= 0 ? P - P * 0.1 : 0;
const dis3 = P - 2000 >= 0 ? P - 2000 : 0;
const dis4 = P - P * 0.25 >= 0 ? P - P * 0.25 : 0;

if (N >= 5 && N < 10) {
  console.log(dis1);
} else if (N >= 5 && N < 15) {
  console.log([dis1, dis2].sort((a, b) => a - b)[0]);
} else if (N >= 5 && N < 20) {
  console.log([dis1, dis2, dis3].sort((a, b) => a - b)[0]);
} else if (N >= 20) {
  console.log([dis1, dis2, dis3, dis4].sort((a, b) => a - b)[0]);
} else if (N < 5) {
  console.log(P);
}
