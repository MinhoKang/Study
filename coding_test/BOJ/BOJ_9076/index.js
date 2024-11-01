const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

const arr = rest.map((i) => i.split(" ").map(Number));

const answer = arr.reduce((a, c) => {
  const sorted = c.sort((q, w) => q - w); //오름차순으로 정렬
  const min = sorted[1];
  const max = sorted[3];

  if (max - min >= 4) {
    a.push("KIN");
  } else {
    const sum = sorted.reduce((z, x) => z + x) - sorted[0] - sorted[4];
    a.push(sum);
  }

  return a;
}, []);

console.log(answer.join("\n"));
