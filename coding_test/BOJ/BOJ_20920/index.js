const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [NM, ...rest] = input.map((i) => i.trim());
const [N, M] = NM.split(" ").map(Number);

let max = 0;

const count = rest.reduce((a, c) => {
  a[c] = (a[c] || 0) + 1;
  if (max < a[c]) max = a[c];

  return a;
}, {});

let arr = [];

for (i of new Set([...rest])) {
  count[i] === max && arr.push(i);
}

console.log(arr);

console.log(count, max);

const removeUnderM = new Set(rest.filter((a) => a.length >= M));
console.log(removeUnderM);
