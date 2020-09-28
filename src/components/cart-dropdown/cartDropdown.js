import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import "./cartDropdown.scss";
import CartItem from "./../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart-actions";

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span>Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          props.dispatch(toggleCartHidden());
        }}
      >
        CheckOut
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
