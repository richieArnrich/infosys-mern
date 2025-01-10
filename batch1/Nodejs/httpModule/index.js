// http module is used to make http requests to other resources etc
const http = require("node:http");

// creating a simple webserver
const server = http.createServer((req, res) => {
  res.write("Hello from nodejs server");
  res.end();
});

// server is listening on port 4000
server.listen(4000, () => {
  console.log("server is running on port 4000");
});
