

import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

// Connect to the database once during application startup
connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const hotel = await Hotel.findById(req.query.id).lean(); // Use lean() for faster querying if you don't need Mongoose features
        if (!hotel) {
          return res.status(404).json({ error: "Hotel not found" });
        }
        return res.status(200).json({ msg: "Success", hotel });
      }
    }
    return res.status(400).json({ error: "Bad request" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}