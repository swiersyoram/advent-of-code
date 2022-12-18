import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt").map((line) =>
  line.split("").map((v) => Number(v))
);
const width = input[0].length;
const height = input.length;
let highessScore = 0;
console.log(input);

const getScore = (y, x) => {
  let score = 1;
  const treeHeight = input[y][x];
  const column = [...input].flatMap((v) => v[x]);
  if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
    score = 0;
  } else {
    for (let i = x + 1; i <= width; i++) {
      if (input[y][i] >= treeHeight || i === width - 1) {
        score *= i - x;
        break;
      }
    }
    for (let i = x - 1; i >= 0; i--) {
      if (input[y][i] >= treeHeight || i === 0) {
        score *= x - i;
        break;
      }
    }
    for (let i = y - 1; i >= 0; i--) {
      if (column[i] >= treeHeight || i === 0) {
        score *= y - i;
        break;
      }
    }
    for (let i = y + 1; i <= height; i++) {
      if (column[i] >= treeHeight || i === height - 1) {
        score *= i - y;
        break;
      }
    }
  }
  if (score > highessScore) {
    highessScore = score;
  }
};

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) getScore(i, j);
}

console.log(highessScore);
