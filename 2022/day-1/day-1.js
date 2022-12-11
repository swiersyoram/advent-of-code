import { highestSum, sort } from "./utils.js";
import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8").split(/\n/);
const sorted = sort(input);

const top3 = [];
for (let index = 0; index < 3; index++) {
  const max = highestSum(sorted);
  top3.push(max);
  sorted.splice(max.index, 1);
}

const answer = top3.reduce((a, b) => a + b.value, 0);

console.log(top3);
console.log(answer);

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// const top3 = [];

// const answer = highestSum(input);
// console.log(answer);
