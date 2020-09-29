import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from "./cart-actionTypes";
export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
