const emptyString = "";
const undefCookies = undefined;

try {
  const element = emptyString[5];
  console.log(element);

  const element2 = undefCookies[5];
  console.log(element2);
} catch (error) {
  console.log(error);
}
