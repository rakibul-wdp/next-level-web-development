const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    res.end("All todos");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo created");
  } else {
    res.end("route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server listening on port 5000");
});
