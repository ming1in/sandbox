const { compact } = require("lodash");

const strArr = [""];
const nilArr = [null];

const undefinedArr = [undefined];

const x = undefined?.join(", ");
console.log(x);

console.log(compact([strArr, nilArr, undefinedArr, x]));
