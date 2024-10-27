const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [NandM, ...rest] = input;
const [N, M] = NandM;

const buckets = Array.from({ length: N }).map((_, i) => i + 1);

const answer = rest.reduce((a, c) => {
  let temp;
  const target1 = a[c[0] - 1];
  const target2 = a[c[1] - 1];

  return a;
}, buckets);
