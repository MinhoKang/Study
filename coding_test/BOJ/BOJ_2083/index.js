const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const answer = input.reduce((a, c) => {
  const [name, age, weight] = c.split(" ");
  if (name === "#") return a;

  if (age > 17 || weight >= 80) {
    a.push(`${name} Senior`);
  } else {
    a.push(`${name} Junior`);
  }

  return a;
}, []);

console.log(answer.join("\n"));
