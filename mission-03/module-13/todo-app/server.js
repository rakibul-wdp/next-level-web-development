const http = require("http");

const data = [
  {
    title: "prisma",
    body: "learning node",
    createdAt: "5/18/2025, 1: 25:02 AM",
  },
  {
    title: "typescript",
    body: "learning node",
    createdAt: "5/18/2025, 1: 25:12 AM",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      // "content-type": "application/json",
      "content-type": "text/html",
      // email: "abul@gmail.com",
    });
    // res.setHeader("content-type", "text/plain");
    // res.setHeader("email", "babul@gmail.com");
    // res.statusCode = 201;
    // res.end(JSON.stringify(data));
    res.end(`<h1>hello world</h1> <h4>from the other</h4> <del>awesome</del>`);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo created");
  } else {
    res.end("route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server listening on port 5000");
});
