const fs = require("fs");

console.log("before");

let text = "hello world";

fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("Something wrong", err);
    return;
  }

  console.log("after writing ", data);
});

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }

  text = data;
  console.log(text, "inside callback");
});

console.log(text);

console.log("after");
