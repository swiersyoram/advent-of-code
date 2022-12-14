import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt");

//check if all characters in string are different
const findMarker = (str) => {
  for (let index = 0; index < str.length; index++) {
    const substring = str.substring(index, index + 4);
    if (new Set(substring).size === substring.length) {
      return index + 4;
    }
  }
};

const answer = findMarker(input[0]);
console.log(answer);

// part 2

const findMarker2 = (str) => {
  for (let index = 0; index < str.length; index++) {
    const substring = str.substring(index, index + 14);
    if (new Set(substring).size === substring.length) {
      return index + 14;
    }
  }
};

const answer2 = findMarker2(input[0]);
console.log(answer2);
