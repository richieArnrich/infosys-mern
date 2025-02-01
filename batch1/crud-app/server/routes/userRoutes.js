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

// get single profile
router.get("/getsingle/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const userDoc = await user.findById(id);
    console.log(userDoc);
    if (!userDoc) return res.status(404).json({ message: "User not found" });
    res.json(userDoc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// update a user by id
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { fullName, email, contact } = req.body;
  try {
    const userDoc = await user.findByIdAndUpdate(
      id,
      { fullName, email, contact },
      { new: true }
    );
    if (!userDoc) return res.status(404).json({ message: "User not found" });
    res.json({ user: userDoc, message: "User updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// delete user based on id
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDoc = await user.findByIdAndDelete(id);
    if (!userDoc) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
