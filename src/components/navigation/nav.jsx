import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import smStar from "./../assest/smStar.png";
import EskilLogo from "./../assest/EskilLogo.png";
import MINCART from "./miniCart";
class Nav extends Component {
  state = {
    isActive: false,
    isCartActive: false,
  };
  toggleLanguages = () => {
    let activeClass = this.state.isActive;
    activeClass = !activeClass;
    this.setState({ isActive: activeClass });
  };
  openCart = () => {
    let activeClass = this.state.isCartActive;
    activeClass = true;
    this.setState({ isCartActive: activeClass });
  };
  closeCart = () => {
    let activeClass = this.state.isCartActive;
    activeClass = false;
    this.setState({ isCartActive: activeClass });
  };
  navReduce() {
    return this.props.products
      .reduce((acc, product) => acc + product.count * product.price, 0)
      .toFixed(2);
  }
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
                <span onClick={this.toggleLanguages}>
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
                  <NavLink to="/portfolio">PORTFOLIO</NavLink>
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
                  <Link to="/account">
                    <i className="far fa-user"></i>Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <i className="far fa-heart"></i>Wishlist{" "}
                    <span className="count">{this.props.wishCount}</span>
                  </Link>
                </li>
                <li onClick={this.openCart}>
                <span className="count">{this.props.productsCount}</span>
                  <ion-icon name="bag-outline"></ion-icon>
                  Cart ${this.navReduce()}
                </li>
              </ul>
            </div>
            <MINCART
              closeCart={this.closeCart}
              isCartActive={this.state.isCartActive}
              products={this.props.products}
              navReduce={this.navReduce()}
              onDelete={this.props.onDelete}
            />
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
