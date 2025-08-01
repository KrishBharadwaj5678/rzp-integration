import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Hero icon

const Success = () => {
  const query = new URLSearchParams(useLocation().search); // gives you access to the current URL
  const reference = query.get("reference"); // extract the reference params value

  return (
    <div className="flex items-center justify-center h-screen bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">Thank you for your purchase. We’ve received your payment.</p>

        {reference && (
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500">Reference ID</p>
            <p className="font-mono text-lg text-gray-800">{reference}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
