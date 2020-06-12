import { createSelector } from "reselect";

//cart input selector
const selectCart = (state) => state.cart;

//cart Items selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
//cart item count selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, current) => accumulator + current.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
cartItems.reduce(
  (accumulator, current) => accumulator + current.quantity*current.price,
  0
))