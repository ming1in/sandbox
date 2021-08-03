const patientList = [
  "appu rana",
  "bryan tran",
  "hayden daly",
  "joey mckenna",
  "ming lin",
].sort();

const UpdatedPatientList = [
  "appu rana",
  "bryan tran",
  "hayden daly",
  "joey mckenna",
  "greg naratil",
  "ming lin",
];

// How can we tell that the patientList has been updated and greg was added?

const hasAddedElementSortedArray = (arr, newArr) => {
  const sortedArr = arr.sort(),
    sortedArrLength = sortedArr.length;
  const sortedNewArr = newArr.sort();

  const index = sortedNewArr.indexOf(sortedArr[sortedArrLength - 1]);

  if (index !== sortedArrLength - 1)
    return sortedNewArr.filter((x) => !sortedArr.includes(x));

  return "no added elements";
};

console.log(hasAddedElementSortedArray(patientList, UpdatedPatientList));
