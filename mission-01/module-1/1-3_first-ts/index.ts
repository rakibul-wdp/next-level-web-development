// spread operator
// rest operator
// destructuring

const numbers: number[] = [2, 3, 5];
const number2: number[] = [8, 9, 3, 7];

numbers.push(...number2);

const greetFriends = (...frd: string[]) => {
  frd.forEach((friend: string) => console.log(`hi ${friend}`));
};

greetFriends("abul", "babul", "cabul", "dabul");
