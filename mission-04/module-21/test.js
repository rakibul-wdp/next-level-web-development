// pure function

const add = (a, b) => a + b;

// impure function

let total = 0;

const addToTotal = (amount) => (total = total + amount);

console.log(addToTotal(4));

const updateDate = () => {
  new Date();
};

const randomNum = () => {
  return Math.random();
};
