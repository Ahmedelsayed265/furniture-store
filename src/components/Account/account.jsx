import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./account.css";
import Login from "./login";
import Sign from "./signup";
class MyAccount extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/account" component={Login} />
          <Route path="/account/sign-up" component={Sign} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MyAccount;
