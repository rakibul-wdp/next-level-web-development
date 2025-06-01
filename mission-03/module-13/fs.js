const fs = require("fs");

console.log("before");

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }

  fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.log("Something wrong", err);
      return;
    }

    console.log("after writing ", data);
  });
});

console.log("after");
