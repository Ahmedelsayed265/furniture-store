import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./productdetails.css";
class Details extends Component {
  render() {
    const product = this.props.products.filter(
      (product) =>
        `${product.category}-${product.id}` === this.props.match.params.id
    )[0];
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / {product.category}
        </div>
        <section className="productdetials">
          <div className="pro_card">
            <div className="image">
              <img src={product.url} alt={`product${product.id}`} />
            </div>
            <div className="pro_details">
              <h2>
                {product.name} <br /> ${product.price}
              </h2>
              <div className="add">
                <div className="count">
                  <button
                    onClick={() => {
                      this.props.onDecrement(product);
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span> {product.count + 1}</span>
                  <button
                    onClick={() => {
                      this.props.onIncrement(product);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <button
                  onClick={() => {
                    this.props.onCartAddfd(product);
                  }}
                  className="add_btn"
                >
                  <ion-icon name="bag-outline"></ion-icon>Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Details;
