


import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Connect to the database once during application startup
connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, password } = req.body;

      // Validate request body
      if (!name || !email || !password) {
        return res.status(400).json({ msg: "All fields are mandatory!" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: "User already registered!" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Save new user to the database
      const savedUser = await newUser.save();

      // Sign JWT token
      const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      // Return success response with token
      return res.status(201).json({ msg: "Registered successfully!", token });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}