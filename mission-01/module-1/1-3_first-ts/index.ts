// generic type

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [2, 3, 5];
const mentors: GenericArray<string> = ["x", "y", "z"];
const boolArray: GenericArray<boolean> = [true, false, true];

const user: GenericArray<{ name: string; age: number }> = [
  {
    name: "abul",
    age: 25,
  },
  {
    name: "babul",
    age: 24,
  },
];

// generic tuple

type GenericTuple<X, Y> = [X, Y];

const human: GenericTuple<string, string> = ["x", "y"];

const userWithId: GenericTuple<number, { name: string; email: string }> = [
  123,
  {
    name: "abul",
    email: "abul@gmail.com",
  },
];
