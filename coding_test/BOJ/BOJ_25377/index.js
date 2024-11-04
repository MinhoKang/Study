const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

let count = -1;

const answer = rest.reduce((a, c) => {
  const [n1, n2] = c.split(" ").map(Number);

  if (n2 < n1) {
    return a;
  } else if (n2 >= n1) {
    a.push(n2);
    return a;
  }
}, []);

console.log(answer.length ? Math.min(...answer) : -1);
