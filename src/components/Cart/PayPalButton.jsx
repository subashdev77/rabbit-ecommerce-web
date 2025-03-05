import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ onSuccess, onError, amount }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AYPKRh_EJ7Dvq3pCJz2SLWNVrH-1lR_wJL_-GcnMEhUZ3QPId9jgNsGzNz2pnxArdZtYOZQ5Mkbeb1wL",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: parseFloat(amount).toFixed(2), // Ensures valid PayPal format
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (onSuccess) {
              onSuccess(details);
            }
          });
        }}
        onError={(err) => {
          console.error("PayPal Checkout Error:", err);
          if (onError) {
            onError(err);
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
