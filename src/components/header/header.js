import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../assects/crown.svg";
import { auth } from "./../../fire-base/firebaseUtils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  console.log("Header -> currentUser", currentUser);
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps -> state", state);
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Header);
