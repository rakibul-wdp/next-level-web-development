// oop - class

class Animal {
  // parameter properties

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(this.name, this.sound);
  }
}

const dog = new Animal("german shepard", "dog", "ghew ghew");
const cat = new Animal("asian cat", "cat", "mew mew");
dog.makeSound();
