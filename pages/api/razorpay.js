
import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

// Connect to the database once during application startup
connectDB();

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const hotelId = req.body.id;
            
            // Find hotel by id
            const hotel = await Hotel.findById(hotelId);
            if (!hotel) {
                return res.status(404).json({ error: "Hotel not found" });
            }

            const amount = hotel.price;

            const options = {
                amount: (amount * 100).toString(), // Amount in paisa
                currency: "INR",
                receipt: shortid.generate(),
                payment_capture: 1
            };

            // Create Razorpay order
            const razorpay = new Razorpay({
                key_id: process.env.RAZORPAY_KEY,
                key_secret: process.env.RAZORPAY_SECRET,
            });

            const order = await razorpay.orders.create(options);

            return res.status(201).json({
                id: order.id,
                currency: order.currency,
                amount: order.amount,
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}