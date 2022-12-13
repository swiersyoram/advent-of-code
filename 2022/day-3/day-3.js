import { getInput } from "../utils/utils.js";

const input = getInput("./input.txt");

const alphabet = [null];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

// function that splits array into two arrays of the same size
function splitArray(array) {
  const half = Math.ceil(array.length / 2);
  return [array.slice(0, half), array.slice(half)];
}

// function that finds a common character in two strings at any index
function findCommonCharacter(string1, string2) {
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        return string1[i];
      }
    }
  }
}

const getPriority = (char) => {
  const index = alphabet.indexOf(char);
  return index;
};

const priorities = [];
input.forEach((line) => {
  const compartments = splitArray(line);
  const common = findCommonCharacter(compartments[0], compartments[1]);
  const priority = getPriority(common);
  priorities.push(priority);
});

const answer = priorities.reduce((acc, curr) => acc + curr, 0);
// console.log(answer);

// Part 2

const groupedInput = [];

for (let i = 0; i < input.length; i += 3) {
  const chunk = input.slice(i, i + 3);
  groupedInput.push(chunk);
}

// find common character in array of 3 strings at any index
function findCommonCharacterInArray(array) {
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array[1].length; j++) {
      for (let k = 0; k < array[2].length; k++) {
        if (array[0][i] === array[1][j] && array[1][j] === array[2][k]) {
          return array[0][i];
        }
      }
    }
  }
}

const priorities2 = [];
groupedInput.forEach((line) => {
  const common = findCommonCharacterInArray(line);
  const priority = getPriority(common);
  priorities2.push(priority);
});

const answer2 = priorities2.reduce((acc, curr) => acc + curr, 0);
console.log(answer2);
