const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("break", () => {
  console.log("class end");
});

schoolBell.emit("break");
