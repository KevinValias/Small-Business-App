import React from "react";
import { Switch, Route } from "react-router";
// import cookie from "cookie";
import Listings from "./Containers/Listings";
import Login from "./Containers/Login";
import Details from "./Containers/Details";
import Add from "./Containers/Add";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listings} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/bizz/:id" component={Details} />
      <Route exact path="/add" component={Add} />
    </Switch>
  );
};

export default Router;
