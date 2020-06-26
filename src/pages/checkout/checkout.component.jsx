import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CartItem from "../../components/cart-item/cart-item.component";
import StripeCheckoutButton from "../../components/stripe_button/stripe.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={CartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
    <span class="text-warning">
      *Please use the card number 4242 4242 4242 4242 for test payments with any 3 digit CVV and any future expiry date
    </span>
    <div className="payment-button">
        <StripeCheckoutButton price={total} />
    </div>
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
