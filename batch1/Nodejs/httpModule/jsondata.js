const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader({ "Access-Control-Allow-Origin": "*" });
  res.setHeader({ "Access-Control-Allow-Methods": "GET" });
  res.setHeader({
    "content-type": "application/json",
  });
  res.writeHead(200);
  const message = {
    message: "Hello, World!",
    name: "John Doe",
    age: 23,
    proffession: "Doctor",
  };
  res.end(JSON.stringify(message));
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
