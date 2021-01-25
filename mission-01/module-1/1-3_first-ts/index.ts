// type alias

type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

const student1: Student = {
  name: "abul",
  age: 24,
  gender: "male",
  contactNo: "+8801580530",
  address: "Uganda",
};

const student2: Student = {
  name: "babul",
  age: 25,
  gender: "male",
  address: "Ghana",
};

type UserName = string;
type IsAdmin = boolean;

const userName: UserName = "cabul";
const isAdmin: IsAdmin = true;

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
