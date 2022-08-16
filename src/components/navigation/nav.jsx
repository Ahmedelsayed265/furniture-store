import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import smStar from "./../assest/smStar.png";
import EskilLogo from "./../assest/EskilLogo.png";
class Nav extends Component {
  state = {
    isActive: false,
  };
  toggle = () => {
    let activeClass = this.state.isActive;
    activeClass = !activeClass;
    this.setState({ isActive: activeClass });
  };
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
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <span onClick={this.toggle}>
                  English <i className="fas fa-angle-down"></i>
                </span>
                <div
                  className={`down_drop ${this.state.isActive ? "active" : ""}`}
                >
                  <ul>
                    <li>
                      <i className="fas fa-arrow-right"></i>French
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i>Greek
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i>Italian
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="left_sup_nav d-flex align-items-center">
              <Link to="/home">
                <img src={EskilLogo} alt="Logo" />
              </Link>
              <ul>
                <li>
                  <NavLink to="/home">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">SHOP</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
            <div className="right_sup_nav d-flex align-items-center">
              <ul>
                <li>
                  <Link to="/login">
                    <i className="far fa-user"></i>Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <i className="far fa-heart"></i>Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <ion-icon name="bag-outline"></ion-icon>
                    Cart $0.00
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
