import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./checkout.css";
class Checkout extends Component {
  state = {
    active: false,
  };
  toggleCoupon = () => {
    let active = this.state.active;
    active = !active;
    this.setState({ active });
  };
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Checkout
        </div>
        <section className="Checkout">
          <h3>CHECKOUT</h3>
          <div className="copon">
            <p>
              Have a coupon?
              <span onClick={this.toggleCoupon}>
                Click here to enter your code
              </span>
            </p>
          </div>
          <div
            className={`copn_container ${
              this.state.active === true ? "active" : ""
            }`}
          >
            <p>If you have a coupon code, please apply it below.</p>
            <form>
              <input placeholder="Coupon code" type="text" />
              <button className="apply_btn">APPLY COUPON</button>
            </form>
          </div>
          <div className="billing_container">
            <h4>Billing details</h4>
            <form className="row">
              <div className="field col-6 pe-4">
                <label htmlFor="firstName">First name *</label>
                <input name="firstName" type="text" id="firstName" />
              </div>
              <div className="field col-6 ps-4">
                <label htmlFor="LastName">Last name *</label>
                <input name="LastName" type="text" id="LastName" />
              </div>
              <div className="field col-6 pe-4">
                <label htmlFor="companyName">Company name (optional)</label>
                <input name="companyName" type="text" id="companyName" />
              </div>
              <div className="field col-6 ps-4">
                <label htmlFor="country">Country / Region *</label>
                <input name="country" type="text" id="country" />
              </div>
              <div className="field col-6 pe-4">
                <label htmlFor="street">Street address</label>
                <input
                  name="street"
                  type="text"
                  id="street"
                  placeholder="House number and street name"
                />
              </div>
              <div className="field col-6 ps-4">
                <label htmlFor="apartment">Apartment</label>
                <input
                  name="apartment"
                  type="text"
                  id="apartment"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div className="field col-6 pe-4">
                <label htmlFor="zip">Postcode / ZIP *</label>
                <input name="zip" type="text" id="zip" />
              </div>
              <div className="field col-6 ps-4">
                <label htmlFor="town">Town / City *</label>
                <input name="town" type="text" id="town" />
              </div>
              <div className="field col-6 pe-4">
                <label htmlFor="phone">Phone *</label>
                <input name="phone" type="text" id="phone" />
              </div>
              <div className="field col-6 ps-4">
                <label htmlFor="email">Email address *</label>
                <input name="email" type="text" id="email" />
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Checkout;
