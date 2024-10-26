const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (const num of input) {
  if (num === -1) break;

  // 자기 자신을 제외한 약수를 찾음
  const divisor = Array.from({ length: num - 1 }, (_, i) => i + 1).reduce(
    (acc, cur) => {
      if (num % cur === 0) acc.push(cur);
      return acc;
    },
    []
  );

  // 약수의 합을 구함
  const sumWithoutNum = divisor.reduce((a, c) => a + c, 0);

  if (sumWithoutNum === num) {
    const sumString = divisor.join(" + ");
    console.log(`${num} = ${sumString}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
