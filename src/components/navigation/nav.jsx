import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import smStar from "./../assest/smStar.png";
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <div className="nav_header">
            <div className="left_head">
              <img src={smStar} alt="" />
              <span>10% discount for registered users</span>
            </div>
            <div className="right_head">
              <div className="d-flex align-items-center justify-content-center">
                <Link to="#">
                  <i className="fab fa-facebook-square"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-twitter"></i>
                </Link>
                <span>
                  English <i class="fas fa-angle-down"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
