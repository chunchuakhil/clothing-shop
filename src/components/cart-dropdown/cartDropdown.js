import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import "./cartDropdown.scss";
import CartItem from "./../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";

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
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};
export default connect(mapStateToProps)(CartDropdown);
