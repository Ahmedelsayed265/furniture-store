import React, { Component } from "react";
import "./app.css";
import Nav from "./../components/navigation/nav";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    );
  }
}

export default App;
