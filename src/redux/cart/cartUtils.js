export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (eachCartItem) => eachCartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((eachCartItem) => {
      return eachCartItem.id === cartItemToAdd.id
        ? { ...eachCartItem, quantity: eachCartItem.quantity + 1 }
        : eachCartItem;
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
