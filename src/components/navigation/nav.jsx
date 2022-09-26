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
    isNavActive: false
  };
  toggleLanguages = () => {
    let activeClass = this.state.isActive;
    activeClass = !activeClass;
    this.setState({ isActive: activeClass });
  };
  toggleNavigation = () => {
    let activeClass = this.state.isNavActive;
    activeClass = !activeClass;
    this.setState({ isNavActive: activeClass });
  };
  closeNav = () => {
    let activeClass = this.state.isNavActive;
    activeClass = false;
    this.setState({ isNavActive: activeClass });
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
                  <i className="fab fa-facebook-square" />
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter" />
                </Link>
                <span onClick={this.toggleLanguages}>
                  English <i className="fas fa-angle-down" />
                </span>
                <div
                  className={`down_drop ${this.state.isActive ? "active" : ""}`}
                >
                  <ul>
                    <li>
                      <i className="fas fa-arrow-right" />French
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />Greek
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />Italian
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
              <ul
                className={`nav_ul ${this.state.isNavActive ? "active" : ""}`}
              >
                <li>
                  <NavLink onClick={this.closeNav} to="/home">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.closeNav} to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.closeNav} to="/portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.closeNav} to="/shop">
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.closeNav} to="/contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="right_sup_nav d-flex align-items-center">
              <ul>
                <li>
                  <Link to="/account">
                    <i className="far fa-user" />
                    <small>Account</small>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <i className="far fa-heart" />
                    <small>Wishlist</small>
                    <span className="count">
                      {this.props.wishCount}
                    </span>
                  </Link>
                </li>
                <li onClick={this.openCart}>
                  <span className="count">
                    {this.props.productsCount}
                  </span>
                  <ion-icon name="bag-outline" />
                  <small>
                    Cart ${this.navReduce()}
                  </small>
                </li>
                <li className="toggle_nav" onClick={this.toggleNavigation}>
                  <div className="toggler">
                    {this.state.isNavActive
                      ? <ion-icon name="close-outline" />
                      : <ion-icon name="menu-outline" />}
                  </div>
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
