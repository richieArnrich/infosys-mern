// import user schema
const user = require("../models/users.js");

const express = require("express");

// build backend routes
const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router to insert data
router.post("/register", async (req, res) => {
  const { fullName, email, contact } = req.body;

  try {
    const newUser = new user({ fullName, email, contact });
    await newUser.save();
    res.json({ user: newUser, message: "user registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
