// function
// normal function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 5);

const sum = (x: number, y: number): number => {
  return x + y;
};

// object -> function -> method
const normalUser = {
  name: "abul",
  balance: 0,
  addBalance(balance: number): string {
    return `new balance: ${this.balance + balance}`;
  },
};

const arr: number[] = [2, 3, 5];
const newArr: number[] = arr.map((item: number): number => item * item);
