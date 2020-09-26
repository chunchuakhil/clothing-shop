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

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log("App -> componentDidMount -> userAuth", userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log("App -> componentDidMount -> snapShot", snapShot.data());
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log("onSnapshot");
            }
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
          <Route exact path="/shop" component={ShopPage}></Route>
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

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
