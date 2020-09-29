import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assects/shoppingBag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "./../../redux/cart/cart-actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = (props) => {
  const { toggleCartHidden, itemCount } = props;
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
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
const mapStateToProps = createStructuredSelector({
  //when *any state changes in the store, this is called.
  //if this value changes CartIcon will reRender, else not reRender
  //the calculations in this method needs to happen multiple times, without actual requirements
  //so we use Selectors concept to avoid complex unwanted calculations
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
