import React from "react";
import "./miniCart.css";
import { Link } from "react-router-dom";
import imgF5 from "./../assest/imgF5.png";
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
          <div className="product">
            <div className="pro_img">
              <img src={imgF5} alt="imgf5" />
            </div>
            <div className="pro_detail">
              <h6>Vedio Chair, Gunnared Green, solid birch frame & lacquer</h6>
              <p>
                Count: <span>1</span>
              </p>
              <p>$250.00</p>
            </div>
            <div className="del_pro">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="Total">
          <div className="total_inner">
            <h4>Total</h4>
            <span>$0.00</span>
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
