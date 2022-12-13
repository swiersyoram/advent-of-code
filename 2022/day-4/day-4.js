import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt")
  .map((line) => line.split(","))
  .map(([s1, s2]) => [
    s1.split("-").map((string) => Number(string)),
    s2.split("-").map((string) => Number(string)),
  ]);

// function that check wheter ether range of numbers contains the other completely
const checkRange = ([min1, max1], [min2, max2]) => {
  if (min1 <= min2 && max1 >= max2) {
    return true;
  } else if (min2 <= min1 && max2 >= max1) {
    return true;
  } else {
    return false;
  }
};

const result = [];
input.forEach(([range1, range2]) => {
  result.push(checkRange(range1, range2));
});

const answer = result.filter((bool) => bool).length;
// console.log(answer);

//part 2

// function that check wheter either range of numbers contains the other one partly
const checkRange2 = ([min1, max1], [min2, max2]) => {
  if (min1 <= min2 && max1 >= min2) {
    return true;
  } else if (min2 <= min1 && max2 >= min1) {
    return true;
  } else {
    return false;
  }
};

const result2 = [];
input.forEach(([range1, range2]) => {
  result2.push(checkRange2(range1, range2));
});

const answer2 = result2.filter((bool) => bool).length;
console.log(answer2);
