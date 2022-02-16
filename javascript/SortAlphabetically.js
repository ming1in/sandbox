// Sorts a array of objects alphabetically

function SortAlphabetically(array) {
  var sortedArray = array.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

const testArr = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "A",
  },
  {
    name: "B",
  },
];

console.log(SortAlphabetically(testArr));




