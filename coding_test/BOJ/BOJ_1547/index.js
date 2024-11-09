const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [M, ...rest] = input;
const changes = rest.map((i) => i.split(" ").map(Number));

let nowBall = 1;

for (let i = 0; i < M; i++) {
  if (changes[i].includes(nowBall)) {
    const [X, Y] = changes[i];
    if (X === nowBall) {
      nowBall = Y;
    } else if (Y === nowBall) nowBall = X;
  }
}

console.log(nowBall);
