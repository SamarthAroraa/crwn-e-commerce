import cardActionTypes from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
//   console.log(action.type);
  switch (action.type) {
    case cardActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default: {
      return state;
    }
  }
};

export default cartReducer;