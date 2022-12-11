const { readFileSync, promises: fsPromises } = require("fs");
const input = [];
const contents = readFileSync("./input.txt", "utf-8");
const arr = contents.split(/\n/);

let temp = [];
arr.forEach((item, index) => {
  const value = parseInt(item);
  if (isNaN(value) || index === arr.length) {
    input.push(temp);
    temp = [];
  } else {
    temp.push(value);
  }
});
const highestSum = (arr) => {
  let max = 0;
  arr.forEach((item) => {
    const sum = item.reduce((a, b) => a + b, 0);
    if (sum > max) {
      max = sum;
    }
  });
  return max;
};
const answer = highestSum(input);
console.log(answer);
