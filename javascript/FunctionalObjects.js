class PersonClass {
  name = "";
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak = () => console.log(`Hello, my name is ${this.name}`);
}

function PersonFunc(name, age) {
  this.name = name;
  this.age = age;

  this.speak = () => console.log(`Hello, my name is ${this.name}`);
}

const Ming = new PersonClass("Ming", 20);
Ming.speak();

const Appu = new PersonFunc("Appu", 21);
Appu.speak();
