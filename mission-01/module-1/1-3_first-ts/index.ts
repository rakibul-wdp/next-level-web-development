// utility types
// Pick

interface Person {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}

type NameAge = Pick<Person, "name" | "age">;

// Omit
type ContactInfo = Omit<Person, "name" | "age">;

// Required
type PersonRequired = Required<Person>;

// Partial
type PersonPartial = Partial<Person>;

// Readonly
type PersonReadonly = Readonly<Person>;

const person1: PersonReadonly = {
  name: "x",
  age: 23,
  contactNo: "293849238",
};

type myObj = Record<string, number>;

const EmptyObj: Record<string, unknown> = {};
