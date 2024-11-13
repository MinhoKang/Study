const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, nums] = input;

const numArr = nums.split(" ").map(Number);
let deleteDuplicationArr = [];

const deleteDuplication = new Set([...numArr]);
deleteDuplication.forEach((i) => deleteDuplicationArr.push(i));
const sorted = deleteDuplicationArr.sort((a, b) => a - b);

console.log(sorted.join(" ").trim());
