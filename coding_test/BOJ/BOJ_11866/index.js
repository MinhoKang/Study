const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

const arr = Array.from({ length: N }).map((_, i) => i + 1);

console.log(arr);

const a = [];

for (let i = 0; i < N; i++) {
  if (arr.length >= K - 1) {
    const target = arr[K - 1];
    a.push(target);
    arr.splice(K - 1, 1);
  }
  if (arr.length < K - 1) {
    const index = K - 1 - arr.length;
    a.push(arr[index]);
    arr.splice(index, 1);
  }
}

// const answer = arr.reduce((a, c) => {
//   return a;
// }, []);

// console.log(answer);
console.log(a);
