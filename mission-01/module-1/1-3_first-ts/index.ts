// ternary operator || optional chaining || nullish coalescing operator

const age: number = 18;

if (age >= 18) {
  // console.log("adult");
} else {
  // console.log("not adult");
}

const isAdult = age >= 18 ? "adult" : "not-adult";
// console.log({ isAdult });

// nullish coalescing operator
// null / undefined ---> decision making

const isAuthenticated = null;

const result1 = isAuthenticated ?? "Guest";
// console.log({ result1 });

type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;
  };
};

const user: User = {
  name: "abul",
  address: {
    city: "Uganda",
    road: "example road",
    presentAddress: "example town",
  },
};

const permanentAddress =
  user?.address?.permanentAddress ?? "No permanent address";
console.log({ permanentAddress });
