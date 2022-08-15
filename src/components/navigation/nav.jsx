import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import smStar from "./../assest/smStar.png";
import EskilLogo from "./../assest/EskilLogo.png";
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
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <span>
                  English <i className="fas fa-angle-down"></i>
                </span>
                <div className="down_drop">
                <ul>
                <li><i class="fas fa-arrow-right"></i>French</li>
                <li><i class="fas fa-arrow-right"></i>Greek</li>
                <li><i class="fas fa-arrow-right"></i>Italian</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="left_sup_nav d-flex align-items-center">
              <Link to="#">
                <img src={EskilLogo} alt="Logo" />
              </Link>
              <ul>
                <li>
                  <Link to="#">HOME</Link>
                </li>
                <li>
                  <Link to="#">ABOUT</Link>
                </li>
                <li>
                  <Link to="#">Gallery</Link>
                </li>
                <li>
                  <Link to="#">SHOP</Link>
                </li>
                <li>
                  <Link to="#">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="right_sup_nav d-flex align-items-center">
              <ul>
                <li>
                  <Link to="#">
                    <i className="far fa-user"></i>Account
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="far fa-heart"></i>Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="#">
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
