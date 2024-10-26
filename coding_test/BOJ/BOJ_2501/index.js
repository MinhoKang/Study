const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const nums = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) nums.push(i);
}

console.log(nums[K - 1] ?? 0);

// const fs = require("fs");
// const input = fs
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// const [N, K] = input;

// const result = Array.from({ length: N }, (_, i) => i + 1).reduce((acc, cur) => {
//   if (N % cur === 0) acc.push(cur);  // 약수일 경우 배열에 추가
//   return acc.length === K ? acc : acc; // K번째에 도달하면 바로 반환
// }, []);

// console.log(result[K - 1] ?? 0);
