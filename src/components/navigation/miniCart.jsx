import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./miniCart.css";
import PRO from "./pro";
import cart from "./../assest/cart.png";
class MINCART extends Component {
  cartEmpty() {
    if (this.props.products.length !== 0) {
      return this.props.products.map((product) => (
        <PRO
          product={product}
          key={product.id}
          onDelete={this.props.onDelete}
        />
      ));
    } else {
      return <img src={cart} alt="emptyCart" />;
    }
  }
  render() {
    const { isCartActive, closeCart, navReduce } = this.props;
    return (
      <div className={`mini_cart ${isCartActive ? "active" : ""}`}>
        <div className="close">
          <ion-icon onClick={closeCart} name="close-outline"></ion-icon>
        </div>
        <div className="cart_container">
          <div className="head">
            <h3>Shopping Cart</h3>
          </div>
          <div className="products">{this.cartEmpty()}</div>
          <div className="Total">
            <div className="total_inner">
              <h4>Total</h4>
              <span>${navReduce}</span>
            </div>
          </div>
        </div>
        <div className="Route_links">
          <Link className="black_Link" to="/cart">
            <ion-icon name="bag-outline"></ion-icon>
            <span> VIEW SHOPPING CART</span>
          </Link>
          <Link to="/checkout" className="check">
            GO TO CHECKOUT{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default MINCART;
