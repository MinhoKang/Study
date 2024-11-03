const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

const answer = rest.reduce((a, c, i) => {
  const [f, s] = c.split(" ").map(Number);
  const sum = f + s;

  a.push(`Case ${i + 1}: ${sum}`);

  return a;
}, []);

console.log(answer.join("\n").trim());
