

import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/db";

// Connect to the database once during application startup
connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      // Validate request body
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password required!" });
      }

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Please register first!" });
      }

      // Compare passwords
      const passwordMatched = await bcrypt.compare(password, user.password);
      if (!passwordMatched) {
        return res.status(400).json({ msg: "Invalid credentials!" });
      }

      // Sign JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      return res.status(200).json({ msg: "Logged in successfully!", token });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}