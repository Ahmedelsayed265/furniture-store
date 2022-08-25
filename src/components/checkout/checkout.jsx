import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./checkout.css";
class Checkout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Checkout
        </div>
        <section className="Checkout">
          <h3>CHECKOUT</h3>
        </section>
      </React.Fragment>
    );
  }
}

export default Checkout;
