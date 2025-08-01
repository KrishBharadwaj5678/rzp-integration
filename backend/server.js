import dotenv from "dotenv";
import Razorpay from "razorpay";
import productRoute from "./routes/productRoute.js";
import express from "express";
dotenv.config({path:"env/.env"});

let app = express();
app.use(express.json()); // Middleware to parse incoming JSON data from frontend
app.use(express.urlencoded({extended:true})); // Middleware to parse incoming URL-encoded form data from frontend
export let instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use("/api/v1",productRoute);

app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}..`)
})
