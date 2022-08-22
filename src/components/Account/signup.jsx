import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sign extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / <Link className="link2" to="/account">Login</Link> /
          Signup
        </div>
        <section className="Login">
          <h3>MY ACCOUNT</h3>
          <div className="form_wrap">
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Sign;
