import React from "react";
import { Link } from "react-router-dom";
import "./foot.css";
import EskilLogo from "./../assest/EskilLogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row inner_footer">
        <div className="col-3">
          <h5>COMPANY</h5>
          <ul>
            <li>
              <Link to="/about">
                <i className="fa-solid fa-arrow-right-long"></i> What we do
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fa-solid fa-arrow-right-long"></i> Available
                Services
              </Link>
            </li>
            <li>
              <Link to="/carrers">
                <i className="fa-solid fa-arrow-right-long"></i> Careers
              </Link>
            </li>
            <li>
              <Link to="/faq=page">
                <i className="fa-solid fa-arrow-right-long"></i> FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5>CUSTOMER SERVICE</h5>
          <ul>
            <li>
              <Link to="/contact">
                <i className="fa-solid fa-arrow-right-long"></i> Help & Contact
                Us
              </Link>
            </li>
            <li>
              <Link to="/returns-refunds">
                <i className="fa-solid fa-arrow-right-long"></i> Returns &
                Refunds
              </Link>
            </li>
            <li>
              <Link to="/delivery-information">
                <i className="fa-solid fa-arrow-right-long"></i> Delivery
                Information
              </Link>
            </li>
            <li>
              <Link to="/terms-condition">
                <i className="fa-solid fa-arrow-right-long"></i> Terms &
                Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5>SOCIAL MEDIA</h5>
          <ul>
            <li>
              <Link to="#">
                <i className="fa-solid fa-arrow-right-long"></i> Twitter
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-solid fa-arrow-right-long"></i> Instagram
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-solid fa-arrow-right-long"></i> Facebook
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-solid fa-arrow-right-long"></i> Pinterest
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5>PROFILE</h5>
          <ul>
            <li>
              <Link to="/account">
                <i className="fa-solid fa-arrow-right-long"></i> My Account
              </Link>
            </li>
            <li>
              <Link to="/checkout">
                <i className="fa-solid fa-arrow-right-long"></i> Checkout
              </Link>
            </li>
            <li>
              <Link to="order/tracking">
                <i className="fa-solid fa-arrow-right-long"></i> Order Tracking
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fa-solid fa-arrow-right-long"></i> Help & Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub_footer">
        <div className="left_sub">
          <Link to="/home">
            <img src={EskilLogo} alt="logo" />
          </Link>
          <p>© 2022 Kong Coder, All Rights Reserved</p>
        </div>
        <div className="right_sub">
          <i className="fab fa-paypal"></i>
          <i className="fab fa-amazon-pay"></i>
          <i className="fab fa-apple-pay"></i>
          <i className="fab fa-cc-mastercard"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
