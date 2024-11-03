const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [L, P] = input[0].split(" ").map(Number);
const correct = L * P;
const people = input[1].split(" ").map(Number);

const diff = people.reduce((a, c) => {
  a.push(c - correct);
  return a;
}, []);

console.log(diff.join(" "));
