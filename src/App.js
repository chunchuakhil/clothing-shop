import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";

import { Route, Switch } from "react-router-dom";

const Hats = () => <div>hatspage</div>;

function App(props) {
  console.log("App -> props", props);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
