import React, { Component } from "react";
import "./featured.css";
import { Link } from "react-router-dom";
class FeaturedComponent extends Component {
  ifInCart() {
    if (!this.props.product.inCart) {
      return (
        <b>
          <ion-icon name="bag-outline"></ion-icon>ADD TO CART
        </b>
      );
    } else {
      return (
        <b>
          <Link to="/cart">VIEW CART</Link>
        </b>
      );
    }
  }
  render() {
    const { product, onCartChange } = this.props;
    const { url, name, price } = this.props.product;
    return (
      <React.Fragment>
        <div className="col-4 p-0 pro_card">
          <div className="inner_card">
            <div className="img_wraper">
              <img src={url} alt="" />
              <div className="menu">
                <span>
                  <i className="fas fa-eye"></i>
                </span>
                <span>
                  <i className="far fa-heart"></i>
                </span>
              </div>
            </div>
            <div className="img_caption">
              <p>{name}</p>
            </div>
            <div className="add_cart">
              <span>{price}</span>
              <div className="link" onClick={() => onCartChange(product)}>
                {this.ifInCart()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeaturedComponent;
