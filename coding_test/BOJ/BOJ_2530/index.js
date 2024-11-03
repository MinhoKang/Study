const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const D = +input[1];

const [A, B, C] = input[0].split(" ").map(Number);

const neededTime = Math.floor(D / 3600);
const neededMinute = Math.floor((D - neededTime * 3600) / 60);
const neededSec = D - neededTime * 3600 - neededMinute * 60;

const needed = [neededTime, neededMinute, neededSec];

const answer = needed.reverse().reduce(
  (a, c, i) => {
    if (i === 2) {
      a[2] += c;
      a[2] = a[2] % 24;
    } else if (i === 1) {
      a[1] += c;
      if (a[1] >= 60) {
        a[2] += Math.floor(a[1] / 60);
        a[1] = a[1] % 60;
      }
    } else if (i === 0) {
      a[0] += c;
      if (a[0] >= 60) {
        a[1] += Math.floor(a[0] / 60);
        a[0] = a[0] % 60;
      }
    }

    return a;
  },
  [C, B, A]
);
console.log(answer.reverse().join(" "));
