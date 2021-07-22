const objectOne = {
  firstName: "John",
};
const undefinedObj = undefined;

const spreadObject = {
  ...objectOne,
  ...undefinedObj,
  lastName: "Doe",
};

spreadObject;
