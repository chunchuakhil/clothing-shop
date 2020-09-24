import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInandSignOut from "./components/signIn-and-signOut/signIn-and-signOut";
import { auth, createUserProfileDocument } from "./fire-base/firebaseUtils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(
          (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          },
          () => {
            console.log(this.state);
          }
        );
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInandSignOut}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
