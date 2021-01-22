// destructuring

const user = {
  id: 345,
  name: {
    firstName: "abul",
    middleName: "babul",
    lastName: "cabul",
  },
  contactNo: "+8801580000",
  address: "sherpur",
};

const {
  contactNo,
  name: { lastName: endName },
} = user;

// array destructuring
const numbers = [2, 3, 5, 7];
const [, , luckyNum, ...rest] = numbers;
