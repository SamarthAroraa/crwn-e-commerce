import React from "react";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const CartItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => removeItem(item)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem(item)}>
            &#10095;
          </div>
          <span className="x-multiplier">x</span>  <span className="price">${price}</span>
        </span>

        {/* <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
