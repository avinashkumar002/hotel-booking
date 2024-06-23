
import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

// Connect to the database once during application startup
connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      let hotels;
      if (req.query.city) {
        hotels = await Hotel.find({ location: req.query.city }).lean();
      } else {
        hotels = await Hotel.find({}).lean();
      }
      
      if (hotels.length === 0) {
        return res.status(404).json({ error: "No hotels found" });
      }
      
      return res.status(200).json({ msg: "Success", hotels });
    }
    
    return res.status(400).json({ error: "Bad request" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



  // //     //  to add new hotel:-------------
  //    if(req.method=== "POST"){
  //       const newHotel = new Hotel(req.body);
  //       const result = await newHotel.save();
  //       4;
  //       res.status(201).json({msg: "Hotel added !", result});
  //   }
}