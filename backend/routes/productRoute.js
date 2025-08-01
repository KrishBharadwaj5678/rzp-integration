import express from "express";
import { generateOrder, getKey, paymentVerification } from "../controllers/productController.js"

let productRoute = express.Router();

productRoute.post("/payment/process",generateOrder); // generate order

productRoute.get("/getKey",getKey);  // get RazorPay API Key

productRoute.post("/paymentVerification",paymentVerification);  // verify the payment

export default productRoute;