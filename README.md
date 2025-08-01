# 💳 Razorpay Integration

A simple and secure integration of the Razorpay payment gateway using **React.js**, **Node.js**, **Express.js**. 

---

## 🚀 Features

| Feature                           | Description                                              |
|-----------------------------------|----------------------------------------------------------|
| 🔐 Secure Order Creation          | Backend securely creates payment orders using Razorpay API |
| 💳 Razorpay Checkout Integration  | Clean, responsive UI to accept card, UPI, or wallet payments |
| ✅ Payment Verification           | Validates payment signature after successful checkout     |
| 🌐 Frontend UI                    | React-based interface to test the payment flow           |
| 🔧 Easy Configuration             | Use `.env` file to manage Razorpay keys securely         |

---

## 🛠️ Tech Stack

| Technology            | Description                                           |
|----------------------|-----------------------------------------------------   |
| Node.js, Express      | Backend API, order creation, and payment verification |
| React                 | Frontend UI for initiating payments                   |
| Razorpay Node SDK     | Official SDK for interacting with Razorpay APIs       |

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rzp-integration.git
   cd rzp-integration
    ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root and add your Razorpay keys:

   ```env
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Test the integration**

   Visit `http://localhost:3000` in your browser to try a test payment.

---
