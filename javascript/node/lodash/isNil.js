const _ = require("lodash");

const undefinedObj = { undefined };

const x = undefined && (() => "hello");

console.log(x);

console.log(_.isNil(undefinedObj));
console.log(_.isNil(undefined));
