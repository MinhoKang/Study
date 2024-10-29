const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [C, ...rest] = input;

const answer = rest.reduce((a, c) => {
  const [N, ...scores] = c.split(" ").map(Number);
  const sum = scores.reduce((a, c) => a + c);
  const average = sum / N;
  const overAverage = scores.filter((s) => s > average);

  const ratio = (overAverage.length / N) * 100;

  a.push(`${ratio.toFixed(3)}%`);

  return a;
}, []);

console.log(answer.join("\n"));
