import React from "react";
import "./checkOutPage.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart-selectors";
import { connect } from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item";

const CheckOutPage = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>
      ))}
      <div className="total">
        <span>Total: ${props.cartTotal}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
