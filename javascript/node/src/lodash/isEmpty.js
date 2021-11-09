const { isEmpty } = require("lodash");
const _ = require("lodash");

console.log(_.isEmpty(""));

const strArr = [""];
const nilArr = [null];
const undefinedArr = [undefined];

console.log(isEmpty(strArr.join("")));
console.log(isEmpty(nilArr.join("")));
console.log(isEmpty(undefinedArr.join("")));

console.log(isEmpty(strArr.join(" ")));
console.log(isEmpty(nilArr.join(" ")));
console.log(isEmpty(undefinedArr.join(" ")));

console.log(!!strArr.join(" "));
console.log(!!nilArr.join(" "));
console.log(!!undefinedArr.join(" "));
