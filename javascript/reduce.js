const empty_array = [];
const undefined_value = [{ patient: undefined }];

const reduceOne = empty_array.reduce((acc, el) => acc.concat(el), []);

const reduceTwo = undefined_value.reduce(
  (acc, el) => el.patient && acc.concat(el.patient),
  []
);

const reduceThree = undefined_value.reduce(
  (acc, el) => acc.concat(el.patient || []),
  []
);
 
console.log(reduceOne);
console.log(reduceTwo);
console.log(reduceThree);

