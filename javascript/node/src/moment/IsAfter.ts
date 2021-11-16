import moment from "moment";

const now = moment();
const hour = moment('12:00', 'HH:mm')
console.log(moment());

console.log(hour)
console.log(now.isAfter(hour, "hours"));
console.log(now)

