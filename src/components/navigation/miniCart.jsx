import React from "react";
import "./miniCart.css";
import { Link } from "react-router-dom";
import PRO from "./pro";
const MINCART = (props) => {
  return (
    <div className={`mini_cart ${props.isCartActive ? "active" : ""}`}>
      <div className="close">
        <ion-icon onClick={props.closeCart} name="close-outline"></ion-icon>
      </div>
      <div className="cart_container">
        <div className="head">
          <h3>Shopping Cart</h3>
        </div>
        <div className="products">
          {props.products.map((product) => (
            <PRO product={product} key={product.id} />
          ))}
        </div>
        <div className="Total">
          <div className="total_inner">
            <h4>Total</h4>
            <span>${props.navReduce}</span>
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
};

export default MINCART;
