const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const filtedInput = input.filter((i) => i !== "");

const answer = filtedInput.reduce((a, c) => {
  const obj = {
    lower: 0,
    upper: 0,
    number: 0,
    space: 0,
  };
  const words = c.split("");

  words.forEach((i) => {
    if (i === "\r") {
      return;
    }
    if (i === i.toLowerCase() && i !== " " && isNaN(Number(i))) {
      obj.lower = obj.lower + 1;
    } else if (i === i.toUpperCase() && i !== " " && isNaN(Number(i))) {
      obj.upper = obj.upper + 1;
    } else if (parseInt(i) >= 0) {
      obj.number = obj.number + 1;
    } else if (i === " ") {
      obj.space = obj.space + 1;
    }
  });

  a.push(Object.values(obj));

  return a;
}, []);

console.log(answer.map((i) => i.join(" ")).join("\n"));
