const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [T, ...rest] = input;

const answer = rest.reduce((a, c) => {
  const arr = [];
  const [R, S] = c.split(" ");
  const SArr = S.split("");

  SArr.forEach((w) => {
    for (let i = 0; i < +R; i++) {
      arr.push(w);
    }
  });

  a.push(arr);

  return a;
}, []);

console.log(
  answer
    .map((a) => {
      return a.join("").trim();
    })
    .join("\n")
);
