const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [J, ...rest] = input;
const [N, ...na] = rest;
const count = na.reduce((a, c) => {
  if (c.trim() === J.trim()) a++;

  return a;
}, 0);

console.log(count);
