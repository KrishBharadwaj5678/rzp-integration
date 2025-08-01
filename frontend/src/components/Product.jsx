import React from 'react';
import axios from "axios";

const Cards = ({products}) => {

  let checkoutHandler = async (amount) => {
    let {data:orderData} = await axios.post("/api/v1/payment/process",{amount}); // fetch orderId from backend
    let {data:keyData} = await axios.get("/api/v1/getKey"); // fetch razorpay key from backend

    const options = {
        key: keyData.key, // Replace with your Razorpay key_id
        amount: orderData.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Furno.ai',
        description: 'Razorpay Integration',
        order_id: orderData.order.id, // This is the order_id created in the backend
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

    const rzp = new Razorpay(options);
    rzp.open();
  }

  return (
    <div className="flex justify-center items-center min-h-screen gap-8 p-4">

    {products.map((item)=>(
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full" key={item.id}>
        <img src={item.image} alt="Sofa" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 mt-2">
            Price: ₹<strong className="text-black">{item.price}</strong>
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition" onClick={()=>checkoutHandler(item.price)}>
            Pay ₹{item.price}
          </button>
        </div>
      </div>
      ))
    }
     
    </div>
  )
}

export default Cards;
