// generic constraint with keyof operator

interface Vehicle {
  bike: string;
  car: string;
  ship: string;
}

type Owner = "bike" | "car" | "ship"; // manually

type Owner2 = keyof Vehicle;

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const user = {
  name: "x",
  age: 33,
  address: "uganda",
};

const car = {
  model: "y",
  year: 33,
};

const result1 = getPropertyValue(car, "year");
