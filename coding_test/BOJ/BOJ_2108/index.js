const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...rest] = input;

const sum = rest.reduce((a, b) => a + b);
const ascend = rest.sort((a, b) => a - b);

let max = 0;

const frequency = rest.reduce((a, c) => {
  const num = Number(c);
  a[num] = (a[num] || 0) + 1;
  if (a[num] > max) {
    max = a[num];
  }
  return a;
}, {});

let f = [];

for (i of new Set([...rest])) {
  if (frequency[i] === max) {
    f.push(i);
  }
}

const sortedf = f.sort((a, b) => a - b);

// 산술평균
console.log(
  Number((sum / rest.length).toFixed(0)) === 0
    ? 0
    : Number((sum / rest.length).toFixed(0))
);
// 중앙값
console.log(ascend[(rest.length + 1) / 2 - 1]);
// 최빈값
console.log(sortedf.length === 1 ? sortedf[0] : sortedf[1]);
// 범위
console.log(ascend[ascend.length - 1] - ascend[0]);
