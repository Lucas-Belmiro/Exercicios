class Animals {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("some noise");
  }
}

class Dog extends Animals {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("au au");
  }
}

const animals = new Animals("amora");
const dog = new Dog("Tody");

animals.speak();
dog.speak();

console.log(dog.name);
