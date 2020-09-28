import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import "./cartDropdown.scss";
import CartItem from "./../cart-item/cartItem";
import { connect } from "react-redux";

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {props.cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>

      <CustomButton>Go to CheckOut</CustomButton>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cartItems,
  };
};
export default connect(mapStateToProps)(CartDropdown);
