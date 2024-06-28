// Using ES Module imports
import jwt from "jsonwebtoken";
import { Sequelize, sequelize } from "../models/index.js";
import User from "../models/User.js";
import { Booking } from "../models/Booking.js";

// signIn function
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, "your_secret_key", {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ message: "Sign-in successful", token, name: user.name });
  } catch (error) {
    console.error("Sign-in error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// signUp function
export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const name = `${firstName} ${lastName}`;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Sign-up error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// getUserProfile function
export const getUserProfile = async (req, res) => {
  const userId = req.user.id; // Assumes `id` is set in `req.user` by the authentication middleware

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User profile retrieved successfully", user });
  } catch (error) {
    console.error("User profile retrieval error:", error);
    res.status(500).json({
      message: "Failed to retrieve user profile",
      error: error.message,
    });
  }
};
