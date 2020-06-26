import React from "react";
import "./stripe.styless.scss";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GyBz5EnQTpgOORBZqhJOV8itTltfGjMv1dopUXChPobEOeEfAhRPe4WqZaz8oOIjb1apKz1j3u7BiZIgclozv4G00GfSuNgIb";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://i.ibb.co/jyjjTp1/logo.png"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
