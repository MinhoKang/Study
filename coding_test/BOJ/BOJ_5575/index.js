const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [aTimeWork, aMinuteWork, aSecWork, aTimeHome, aMinuteHome, aSecHome] =
  input[0];
const [bTimeWork, bMinuteWork, bSecWork, bTimeHome, bMinuteHome, bSecHome] =
  input[1];

const aWork = [];
const bWork = [];

