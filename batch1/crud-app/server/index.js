const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 4000;

const connect = async () => {
  // connect mongodb
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Info-Crud-App");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
  }
};

app.get("/api", (req, res) => {
  res.json({ message: "API WORKING..." });
});

app.listen(port, () => {
  connect();
  console.log(`Server is running on port http://localhost:${port}`);
});
