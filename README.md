# 💳 Razorpay Integration

A simple and secure integration of the Razorpay payment gateway using **React.js**, **Node.js**, **Express.js**. 

---

## 🚀 Features

| Feature                           | Description                                              |
|-----------------------------------|----------------------------------------------------------|
| 🔐 Secure Order Creation          | Backend securely creates payment orders using Razorpay API |
| 💳 Checkout Integration           | Clean, responsive UI to accept card, UPI, or wallet payments |
| ✅ Payment Verification           | Validates payment signature after successful checkout     |
| 🌐 Frontend UI                    | React-based interface to test the payment flow           |

---

## 🛠️ Tech Stack

| Technology            | Description                                           |
|----------------------|-----------------------------------------------------   |
| Node.js, Express      | Backend API, order creation, and payment verification |
| React                 | Frontend UI for initiating payments                   |
| Razorpay Node SDK     | Official SDK for interacting with Razorpay APIs       |

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/KrishBharadwaj5678/rzp-integration.git
cd rzp-integration
````

---

### 2. Backend Setup

```bash
cd backend
npm install
```

* Update the `.env` file inside the `backend` folder with your Razorpay keys:

```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

* Start the backend server:

```bash
npm run dev
```

The backend server will run on `http://localhost:8000`.

---

### 3. Frontend Setup

Open a new terminal, then:

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Test the Integration

* Open your browser and visit the frontend URL.
* Try making a test payment through the Razorpay checkout interface.
