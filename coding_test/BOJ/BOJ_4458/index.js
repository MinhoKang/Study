const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;
const lines = rest.map((i) => i.split(""));
let newLines = "";

for (let i = 0; i < +N; i++) {
  const line = lines[i];
  const first = line[0];
  if (first.toUpperCase() === first) {
    newLines += line.join("") + "\n";
  } else {
    newLines += first.toUpperCase() + line.slice(1).join("") + "\n";
  }
}

console.log(newLines.trim());
