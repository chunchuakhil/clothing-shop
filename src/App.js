import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

function App(props) {
  console.log("App -> props", props);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
