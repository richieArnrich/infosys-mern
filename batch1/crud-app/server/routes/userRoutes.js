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

module.exports = router;
