// nullable types / unknown types

const searchName = (value: string | null) => {
  if (value) {
    console.log("searching");
  } else {
    console.log("nothing to search");
  }
};

searchName(null);

// unknown typeof

const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(convertedSpeed);
  } else if (typeof value === "string") {
    const [speed, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
    console.log(convertedSpeed);
  } else {
    console.log("wrong input");
  }
};

getSpeedInMeterPerSecond(null);

// never

function throwError(msg: string): never {
  throw new Error(msg);
}

throwError("error happen");
