import { getInput } from "../utils/utils.js";
import { calcAdress } from "./utils.js";
const input = getInput("./input.txt");
const filesystem = [{ address: [1], type: "dir", name: "/", size: 0 }];
let depth = 0;
let maxDepth = 0;
let currentAddress = [];

const interpret = (line) => {
  if (line.indexOf("$ cd ..") === 0) {
    console.log("move up");
    currentAddress.pop();
    depth--;
    return;
  }
  if (line.indexOf("$ cd") === 0) {
    console.log("move down");

    const dirAddress = filesystem.filter(
      (item) =>
        item.name === line.replace("$ cd ", "") &&
        item.address.length === depth + 1 &&
        JSON.stringify(item.address).includes(currentAddress)
    )[0].address;

    currentAddress = [...currentAddress, dirAddress[dirAddress.length - 1]];
    depth++;
    if (depth > maxDepth) maxDepth = depth;
    return;
  }
  if (line.indexOf("$ ls") === 0) {
    console.log("ignore list");
    return;
  }
  if (line.indexOf("dir") === 0) {
    const newAdress = calcAdress(filesystem, [...currentAddress]);
    filesystem.push({
      address: newAdress,
      type: "dir",
      name: line.replace("dir ", ""),
      size: 0,
    });
    return;
  }
  if (Number(line[0])) {
    console.log("isfile");
    let size = "";
    let name = "";
    for (let index = 0; index < line.length; index++) {
      if (Number(line[index]) || line[index] === "0") {
        size += line[index];
      } else {
        name += line[index];
      }
    }
    const newAdress = calcAdress(filesystem, currentAddress);

    filesystem.push({
      address: newAdress,
      type: "file",
      name: name.trim(),
      size: Number(size),
    });
    return;
  }
};

input.forEach((line) => {
  interpret(line);
});

const directories = filesystem.filter((item) => item.type === "dir");
const files = filesystem.filter((item) => item.type === "file");
const maxDirSize = Math.max(...files.flatMap((item) => item.address));
const sub100k = [];
const checkAdress = [0];

// console.log(directories);
console.log(files.length);

const calcDirSize = (dir) => {
  console.log(dir);
  const filtered = files.filter(
    (item) =>
      JSON.stringify(item.address.slice(0, dir.address.length)) ===
      JSON.stringify(dir.address)
  );
  const totalSize = filtered.reduce((acc, item) => acc + item.size, 0);
  if (totalSize < 100000) sub100k.push(totalSize);
};

// directories.forEach((dir) => calcDirSize(dir));
// console.log(sub100k);
// const answer = sub100k.reduce((acc, item) => acc + item, 0);
// console.log(answer);

// part 2

const diskSize = 70000000;

const calcDirSize2 = (dir) => {
  const filtered = files.filter(
    (item) =>
      JSON.stringify(item.address.slice(0, dir.address.length)) ===
      JSON.stringify(dir.address)
  );
  return filtered.reduce((acc, item) => acc + item.size, 0);
};
console.log(directories[0]);
const freeSpace = diskSize - calcDirSize2(directories[0]);
console.log(freeSpace);
const goal = 30000000 - freeSpace;
console.log(goal);
const allDirSizes = directories.map((dir) => calcDirSize2(dir));
const closest = Math.min(...allDirSizes.filter((item) => item > goal));
console.log(closest);
