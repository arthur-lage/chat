import express from "express";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import User from "../models/User.js";

import { verifyEmail } from "../utils/validators.js";
import { Auth } from "../middlewares/Auth.js";

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.get("/auth", Auth, async (req, res) => {
  try {
    const { id } = req.user;

    const currentUser = await User.findById(id);

    const userInfo = {
      id: currentUser._id,
      name: currentUser.name,
      username: currentUser.username,
      avatarUrl: currentUser.avatarUrl,
      isAvatarSet: currentUser.isAvatarSet,
    };

    return res.status(200).json(userInfo);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.post("/", async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;

    if (!name)
      return res.status(400).json({ message: "Name field is missing." });
    if (!username)
      return res.status(400).json({ message: "Username field is missing" });
    if (!email)
      return res.status(400).json({ message: "Email field is missing." });
    if (!password)
      return res.status(400).json({ message: "Password field is missing" });
    if (!confirmPassword)
      return res
        .status(400)
        .json({ message: "Password confirmation field is missing." });

    if (name.length == 0)
      return res
        .status(400)
        .json({ message: "Name should have at least 1 character!" });
    if (username.length < 5)
      return res
        .status(400)
        .json({ message: "Username should have at least 5 characters!" });
    if (username.length > 16)
      return res
        .status(400)
        .json({ message: "Username should have up to 16 characters!" });
    if (!verifyEmail(email))
      return res.status(400).json({
        message: 'Invalid email. It should look like "example@example.com"',
      });
    if (password.length < 5)
      return res
        .status(400)
        .json({ message: "Password should have at least 8 characters!" });
    if (password.length > 16)
      return res
        .status(400)
        .json({ message: "Password should have up to 16 characters!" });
    if (confirmPassword !== password)
      return res.status(400).json({ message: "Passwords should match!" });

    const isEmailAlreadyBeingUsed = await User.findOne({ email });
    const isUsernameAlreadyBeingUsed = await User.findOne({ username });

    if (isEmailAlreadyBeingUsed)
      return res
        .status(409)
        .json({ message: "This email is already being used." });
    if (isUsernameAlreadyBeingUsed)
      return res
        .status(409)
        .json({ message: "This username is already being used." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      avatarUrl: "",
      isAvatarSet: false,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res
      .status(201)
      .json({ token, message: "User created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res.status(400).json({ message: "Email field is missing." });
    if (!password)
      return res.status(400).json({ message: "Password field is missing" });

    if (!verifyEmail(email))
      return res.status(400).json({
        message: 'Invalid email. It should look like "example@example.com"',
      });

    const userExists = await User.findOne({ email });

    if (!userExists)
      return res
        .status(401)
        .json({ message: "Email or password are incorrect." });

    const isPasswordCorrect = bcrypt.compare(password, userExists.password);

    if (!isPasswordCorrect)
      return res
        .status(401)
        .json({ message: "Email or password are incorrect." });

    const token = jwt.sign(
      {
        id: userExists._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res
      .status(200)
      .json({ token, message: "User logged in successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.patch("/avatar", Auth, async (req, res) => {
  try {
    const { id } = req.user;
    const { newAvatarUrl } = req.body;

    console.log(id)

    await User.findByIdAndUpdate(id, {
      avatarUrl: newAvatarUrl,
      isAvatarSet: true,
    });

    return res
      .status(200)
      .json({ message: "Avatar was changed successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

routes.delete("/", async (req, res) => {
  try {
    await User.deleteMany();

    return res
      .status(200)
      .json({ message: "Users were deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

export { routes };
