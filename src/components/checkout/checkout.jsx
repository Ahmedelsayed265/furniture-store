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
              <div className="order_details">
                <h4>Your order</h4>
                <div className="head_order">
                  <span>PRODUCT</span>
                  <span>SUBTOTAL</span>
                </div>
                {this.props.products.map((p) => (
                  <div key={p.id} className="head_order">
                    <span>
                      {p.name} <i>× {p.count}</i>
                    </span>
                    <span>${p.price}</span>
                  </div>
                ))}
                <div className="shiping head_order">
                  <span>SHIPPING</span>
                  <div>
                    <div className="ship">
                      <input
                        type="radio"
                        value="flatRate"
                        id="flatRate"
                        name="shipping"
                      />
                      <label htmlFor="flatRate">Flat rate</label>
                    </div>
                    <div className="ship">
                      <input
                        type="radio"
                        value="freeShipping"
                        id="freeShipping"
                        name="shipping"
                      />
                      <label htmlFor="freeShipping">Free shipping</label>
                    </div>
                    <div className="ship">
                      <input
                        type="radio"
                        value="localPickup"
                        id="localPickup"
                        name="shipping"
                      />
                      <label htmlFor="localPickup">Local pickup</label>
                    </div>
                  </div>
                </div>
                <div className="head_order">
                  <span>TOTAL</span>
                  <b>
                    $
                    {this.props.products
                      .reduce((acc, p) => acc + p.count * p.price, 0)
                      .toFixed(2)}
                  </b>
                </div>
                <div className="payment">
                  <input
                    type="radio"
                    value="directTransfer"
                    id="directTransfer"
                    name="payment_method"
                  />
                  <label htmlFor="directTransfer">DIRECT BANK TRANSFER</label>
                </div>
                <div className="payment">
                  <input
                    type="radio"
                    value="checkPayment"
                    id="checkPayment"
                    name="payment_method"
                  />
                  <label htmlFor="checkPayment">CHECK PAYMENTS</label>
                </div>
                <div className="payment">
                  <input
                    type="radio"
                    value="cachOnDelevery"
                    id="cachOnDelevery"
                    name="payment_method"
                  />
                  <label htmlFor="cachOnDelevery">CASH ON DELIVERY</label>
                </div>
                <p className="term">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>
              <button type="submit">PLACE ORDER</button>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Checkout;
