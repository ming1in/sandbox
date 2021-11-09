/**
 * splice(...arg)
 *
 * inserts/deletes elements to/from the array and returns removed elem
 *
 * arg[0] - start position
 * arg[1] - number of elements to delete starting from arg[0]
 * arg[2...] - elements to insert into array starting from arg[0]
 */
const arrOne = new Array(10)
  .fill(0)
  .map((_, idx) => Math.floor(Math.random() * 20)).sort();

console.log(arrOne);

arrOne.splice();
