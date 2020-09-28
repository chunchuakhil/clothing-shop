const { createSelector } = require("reselect");

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  //this is memorize selector
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
