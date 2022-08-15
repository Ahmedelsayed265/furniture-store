import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./../components/navigation/nav";
import HomeComp from "./../components/main/home";
import "./app.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container p-0">
          <Switch>
            <Route path="/home" component={HomeComp} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
