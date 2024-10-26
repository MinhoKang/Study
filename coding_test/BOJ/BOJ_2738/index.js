const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const nums = input.splice(1).map((i) => i.split(" ").map(Number));
const [A, B] = input[0].split(" ").map(Number);

let newArr = Array.from({ length: A }, () =>
  Array.from({ length: B }, () => 0)
);

for (let i = 0; i < A; i++) {
  // console.log(i);
  for (j = 0; j < B; j++) {
    newArr[i][j] = +nums[i][j] + nums[i + A][j];
  }
}
console.log(newArr.map(i=>i.join(' ')).join('\n'));
