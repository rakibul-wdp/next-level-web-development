// mapped types

const numbers: number[] = [2, 3, 5];

// const strings: string[] = ["2", "3", "5"];

const strings: string[] = numbers.map((number) => number.toString());

console.log(strings);

interface AreaNumber {
  height: number;
  width: number;
}

// interface AreaString {
//   height: string;
//   width: string;
// }

// keyof AreaNumber => "height" | "width"

type Height = AreaNumber["height"]; // look up type

type AreaString<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaString<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
