const fs = require("fs");

const text = "learning file system";

fs.writeFileSync("./hello.txt", text);

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

console.log(data);
