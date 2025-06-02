const http = require("http");

const server = http.createServer((req, res) => {
  res.end("welcome to todo app server");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server listening on port 5000");
});
