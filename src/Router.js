import React from "react";
import { Switch, Route } from "react-router";
import Listings from "./components/Listings";
import Login from "./components/Login";

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Listings} />
        <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default Router;
