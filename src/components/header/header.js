import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../assects/crown.svg";
import { auth } from "./../../fire-base/firebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cartDropdown";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {props.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIN
          </Link>
        )}
        <CartIcon />
      </div>
      {props.hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
