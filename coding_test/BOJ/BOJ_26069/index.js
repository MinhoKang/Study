const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;

const dance = new Set();
dance.add("ChongChong");

rest
  .map((i) => i.split(" "))
  .forEach((p) => {
    if (dance.has(p[0]) || dance.has(p[1])) {
      dance.add(p[0]);
      dance.add(p[1]);
    }
  });

console.log(dance.size);
