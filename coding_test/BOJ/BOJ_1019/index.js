const used = process.memoryUsage().heapUsed / 1024 / 1024;
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

const nums = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

const numArr = Array.from({ length: N })
  .map((_, i) => (i + 1).toString().split("").map(Number))
  .flat();

numArr.forEach((n) => nums[n]++);
console.log(Object.values(nums).join(" ").trim());

console.log(`약 ${Math.round(used * 100) / 100} MB의 메모리를 사용중입니다.`);
// for (let i = 1; i <= N; i++) {
//   const iArr = i.toString().split("").map(Number);
//   // iArr.forEach((n) => nums[n]++);
//   console.log(iArr);
// }

// console.log(Object.values(nums).join(" "));
