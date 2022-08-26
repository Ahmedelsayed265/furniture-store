import React, { Component } from "react";
import "./product.css";
import { Link } from "react-router-dom";
class ProductComp extends Component {
  state = {};
  heartCase() {
    if (!this.props.product.wished) {
      return "far fa-heart";
    } else {
      return "fa-solid fa-heart";
    }
  }
  render() {
    const { product, onWishAdd } = this.props;
    const { id, url2, category } = this.props.product;
    return (
      <div className=" col-4 p-3 pro_card">
        <div className="inner_card">
          <div className="img_wraper">
            <img src={url2} alt={`product-${id}`} />
            <div className="menu">
              <span>
                <Link to={`/products-details/${category}-${id}`}>
                  <i className="fas fa-eye"></i> QUICK VIEW
                </Link>
              </span>
              <span onClick={() => onWishAdd(product)}>
                <i className={this.heartCase()}></i>{" "}
                {!this.props.product.wished
                  ? "ADD WISHLIST"
                  : "WISHLIST"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComp;
