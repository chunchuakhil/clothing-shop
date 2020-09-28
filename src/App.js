import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInandSignOut from "./components/signIn-and-signOut/signIn-and-signOut";
import { auth, createUserProfileDocument } from "./fire-base/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import CheckOutPage from "./pages/checkOut/checkOutPage";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {}
          );
        });
      } else setCurrentUser(userAuth);
      // createUserProfileDocument(userAuth);
      //create user in the firestore, if dont existes
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckOutPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInandSignOut></SignInandSignOut>
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentUser: (user) => {
      return dispatch(setCurrentUser(user));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
