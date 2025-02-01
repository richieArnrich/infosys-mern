const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
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

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API WORKING..." });
});

app.use("/users", userRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port http://localhost:${port}`);
});
