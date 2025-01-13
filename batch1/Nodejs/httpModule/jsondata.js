const http = require("node:http");

const server = http.createServer((req, res) => {
  // Set appropriate headers for CORS and content type
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Content-Type", "application/json");

  // Set response status code
  res.writeHead(200);

  // Define the JSON response
  const message = {
    message: "Hello, World!",
    Name: "John Doe",
    Age: 23,
    Profession: "Doctor",
  };

  // Send the response
  res.end(JSON.stringify(message));
});

// Start the server
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
