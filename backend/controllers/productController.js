import { instance } from "../server.js";
import crypto from "crypto";

// Generate Order
export let generateOrder = async (req,resp) => {

  let options = {
    amount: Number(req.body.amount * 100), // Razorpay expects the amount in paise, not rupees. 1 rupee = 100 paise
    currency: "INR",
  };

  let order = await instance.orders.create(options);
  resp.status(200).json({
    success: true,
    order
  })
}

// Send Razorpay api key to frontend
export let getKey = async (req,resp) => {
  resp.status(200).json({
    key: process.env.RAZORPAY_API_KEY
  })
}

// Payment Verification
export let paymentVerification = async (req,resp) => {
  let {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body; // extract values from frontend
  
  let body = razorpay_order_id + "|" + razorpay_payment_id; // Concatenate order_id and payment_id to generate the HMAC 

  let expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET).update(body.toString()).digest("hex");  // generating hash

  let isAuthentic = expectedSignature === razorpay_signature; // checking if both matches
  if(isAuthentic){
    return resp.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`);
  }else{
    resp.status(400).json({
      success: false
    })
  }
}