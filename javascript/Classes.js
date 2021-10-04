class Human {
  ssn = "123-45-6789";

  getName() {
    return this.name;
  }
}

class Person extends Human {
  name = "John Doe";
  age = 0;

  constructor(name) {
    super();
    this.name = name || this.name;
  }
}

const Ming = new Person();

console.log(Ming.name);
Ming.age = 10;
console.log(Ming.age);
console.log(Ming.ssn);

console.log([1, 2, 3].includes(2));

s = [2];
s.push(3);

console.log(s.length);

s = s.concat([]);
console.log(s);

console.log("ssa".repeat(1));
