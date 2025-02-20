const express = require("express");
const { checkAge, loginAuth } = require("./middlewares/auth");
const bodyParser = require("body-parser");
const app = express();

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  console.log(`Current directory: ${__dirname}`);
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", loginAuth, (req, res) => {
  res.json({ message: "Login successful" });
});

app.get("/:age", checkAge, (req, res) => {
  res.json({
    message: `You are ${req.params.age} years old`,
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
