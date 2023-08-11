import React, { useState } from "react";
import axios from "axios";
import querystring from "query-string";

const PaymentComponent = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    // Replace 'YOUR_API_KEY' with your Instamojo API Key
    const apiKey = "test_c39baa71ddda2a796dcbe02b1a6";
    // Replace 'YOUR_AUTH_TOKEN' with your Instamojo Auth Token
    const authToken = "test_8c4ac4948528d182f980af6411b";
    const data = {
      purpose: "Order Payment",
      amount: 100, // Replace with the amount you want to charge
      buyer_name: "John Doe", // Replace with the buyer's name
      email: "john.doe@example.com", // Replace with the buyer's email
      phone: "9876543210", // Replace with the buyer's phone number
      redirect_url: "http://yourwebsite.com/success", // Replace with your success URL
      webhook: "http://yourwebsite.com/webhook", // Replace with your webhook URL (optional)
    };

    axios
      .post("https://api.instamojo.com/v2/gateway/orders/", querystring.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Api-Key": apiKey,
          "X-Auth-Token": authToken,
        },
      })
      .then((response) => {
        setLoading(false);
        const paymentUrl = response.data.payment_request.longurl;
        window.location.href = paymentUrl;
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing Payment..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentComponent;
