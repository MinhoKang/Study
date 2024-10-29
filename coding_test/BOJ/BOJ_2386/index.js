const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const answer = input.reduce((a, c) => {
  if (c === "#") return a;
  const alphabet = c[0];

  const line = c
    .split(" ")
    .slice(1)
    .map((i) => i.trim().split(""))
    .flat()
    .map((w) => w.toLowerCase());

  const count = line.filter((w) => w === alphabet).length;

  a += `${alphabet} ${count} \n`;
  return a;
}, ``);

console.log(answer);
