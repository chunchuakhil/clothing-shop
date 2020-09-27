import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assects/shoppingBag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "./../../redux/cart/cart-actions";
import { connect } from "react-redux";

const CartIcon = (props) => {
  const { toggleCartHidden } = props;
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">10</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCartHidden: () => {
      dispatch(toggleCartHidden());
    },
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
