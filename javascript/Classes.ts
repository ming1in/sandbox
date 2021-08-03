class Horse {
  name: string;
  age: number;
  height: number;
  weight: number;
  speed: number;
  position: string;

  constructor(
    name: string,
    age: number,
    height: number,
    weight: number,
    speed: number,
    position: string = "happy data"
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.speed = speed;
    this.position = position;
  }
}

const luckyHorse = new Horse("Lucky", 5, 150, 100, 50);

console.log(luckyHorse.position)
