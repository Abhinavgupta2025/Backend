const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// Dummy user
const USER = {
  email: "admin@gmail.com",
  password: "12345"
};


// 🔐 LOGIN → Generate Token
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== USER.email || password !== USER.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: USER.email },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});


// 🔒 PROTECTED ROUTE
app.get("/profile", (req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({
      message: "Protected data",
      user: decoded
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));