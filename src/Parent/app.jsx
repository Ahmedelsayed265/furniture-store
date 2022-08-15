import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./../components/navigation/nav";
import Home from "./../components/home/home";
import "./app.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
