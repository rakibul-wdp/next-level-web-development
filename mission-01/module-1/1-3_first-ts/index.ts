// abstraction 1. interface 2. abstract

// idea
interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

// real implementation
class Car1 implements Vehicle1 {
  startEngine(): void {
    console.log("starting");
  }
  stopEngine(): void {
    console.log("stop");
  }
  move(): void {
    console.log("moving");
  }
  test() {
    console.log("testing");
  }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();

// abstract class
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
  test() {
    console.log("testing");
  }
}

class ToyotaCar extends Car2 {
  startEngine(): void {
    console.log("starting");
  }
  stopEngine(): void {
    console.log("stop");
  }
  move(): void {
    console.log("move");
  }
}
