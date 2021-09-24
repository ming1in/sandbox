var moment = require("moment");
var today = moment().format("YYYYMMDD");
console.log(today);
function hello(person) {
    return "Hello, " + person;
}
var user = "Aamod Tiwari";
var result = hello(user);
console.log("Result", result);
