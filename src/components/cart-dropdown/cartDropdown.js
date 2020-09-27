import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>Go to CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
