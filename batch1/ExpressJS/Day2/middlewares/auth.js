const checkAge = (req, res, next) => {
  const { age } = req.params;
  console.log(age);
  if (age >= 18) {
    next();
  } else {
    res
      .status(401)
      .send({ message: "You are not allowed to access this resource" });
  }
};

const loginAuth = (req, res, next) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password") {
    next();
  } else {
    res.json({ message: "Invalid email or password" });
  }
};

module.exports = { checkAge, loginAuth };
