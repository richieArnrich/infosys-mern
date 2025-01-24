/*
    Steps to build a simple express app
    1. Set up the environment
    2. import express
    3. create an instance of express
    4. define routes
    5. start the server (npm run dev)
*/

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// app.get(Route, requestHandler)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my home page",
  });
});

// arrays of users
const users = [
  { userId: 10, name: "Ronnie", age: 22, occupation: "Student" },
  { userId: 5, name: "John", age: 25, occupation: "Teacher" },
  { userId: 1, name: "Jane", age: 28, occupation: "Doctor" },
  { userId: 51, name: "Bob", age: 30, occupation: "Engineer" },
  { userId: 15, name: "Alice", age: 32, occupation: "Lawyer" },
  { userId: 17, name: "Amith", age: 28, occupation: "Software Engg" },
  { userId: 18, name: "Sarah", age: 26, occupation: "Software Engg" },
  { userId: 20, name: "Sadiq", age: 26, occupation: "Data Engg" },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});
// get single user
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.userId === parseInt(id));
  console.log(user);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
