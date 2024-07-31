import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./CheckOutForm.css";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false); // Ensure processing state is defined
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment intent on the server
    try {
      const {
        data: { clientSecret },
      } = await axios.post("/create-payment-intent", {
        amount: 1000, // Amount in cents
      });

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setSucceeded(true);
        setProcessing(false);
      }
    } catch (error) {
      setError(`Payment failed ${error.message}`);
      setProcessing(false);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button type="submit" disabled={!stripe || processing || succeeded}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <div className="error-message">{error}</div>}
      {succeeded && <div className="success-message">Payment succeeded!</div>}
    </form>
  );
};

export default CheckOutForm;
