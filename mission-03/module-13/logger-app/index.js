const path = require("path");

console.log(process.argv);

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

if (!text) process.exit(1);

const filePath = path.join(__dirname, "log.txt");

console.log(filePath);
