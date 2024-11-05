const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [A, B] = input[0];
const [K, X] = input[1];

const newPeople = Array.from({ length: B - A + 1 }).map((_, i) => i + A);

const friends = newPeople.filter((i) => Math.abs(K - i) <= X);
console.log(friends.length || 'IMPOSSIBLE');
