const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, ...rest] = input;
const dice = rest.map((i) => i.split(" ").map(Number));

const prices = dice.reduce((a, c) => {
  const only = new Set([...c]);

  if (only.size === 1) {
    a.push(10000 + c[0] * 1000);
  } else if (only.size === 2) {
    const onlyArr = Array.from(only);
    let twoValue = 0;
    for (let i = 0; i < onlyArr.length; i++) {
      const count = c.filter((v) => v === c[i]);
      if (count.length === 2) {
        twoValue += count[0];
        break;
      }
    }
    a.push(1000 + twoValue * 100);
  } else if (only.size === 3) {
    const big = Math.max(...c);
    a.push(big * 100);
  }
  return a;
}, []);

console.log(Math.max(...prices));
