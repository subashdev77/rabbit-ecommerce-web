import React from "react";

const RazorpayButton = ({ onSuccess, onError, amount }) => {
  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: parseFloat(amount) * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Payment for Order",
      handler: (response) => {
        if (onSuccess) {
          onSuccess(response);
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", (response) => {
        console.error("Razorpay Payment Error:", response);
        if (onError) {
          onError(response);
        }
      });
    } else {
      console.error("Razorpay SDK not loaded");
    }
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        background: "#3399cc",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Pay with RazorPay
    </button>
  );
};

export default RazorpayButton;
