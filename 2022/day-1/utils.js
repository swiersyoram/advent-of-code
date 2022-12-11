export const highestSum = (arr) => {
  let max = { value: 0, index: 0 };
  arr.forEach((item, index) => {
    const sum = item.reduce((a, b) => a + b, 0);
    if (sum > max.value) {
      max = { value: sum, index };
    }
  });
  return max;
};

export const sort = (arr) => {
  const sorted = [];
  let temp = [];
  arr.forEach((item, index) => {
    const value = parseInt(item);
    if (isNaN(value) || index === arr.length) {
      sorted.push(temp);
      temp = [];
    } else {
      temp.push(value);
    }
  });
  return sorted;
};
