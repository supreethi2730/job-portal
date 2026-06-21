const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB (replace with your string)
mongoose.connect("mongodb://127.0.0.1:27017/jobportal");

// USER MODEL
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
});

// REGISTER
app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed
  });
  await user.save();
  res.send({ message: "User registered" });
});

// LOGIN
app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.send({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secretkey");
  res.send({ token });
});

// SERVER
app.listen(5000, () => console.log("Server running on port 5000"));