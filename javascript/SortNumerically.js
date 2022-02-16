const testArr = [
  { value: 10 },
  { value: 6 },
  { value: 0 },
  { value: 1 },
  { value: 2 },
  { value: 5 },
];

const sortedTestArr = testArr.sort((a, b) => b.value - a.value);

console.log(sortedTestArr);
