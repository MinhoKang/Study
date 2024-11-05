const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const days = input[1].split(" ").map(Number);

const socks = days.reduce((a, c, i, arr) => {
  const day1 = c;
  const day2 = arr[i + 1];

  if (!day2) return a;

  const price = (day1 + day2) * X;

  a.push(price);

  return a;
}, []);

const sorted = socks.sort((a, b) => a - b);

console.log(sorted[0]);
