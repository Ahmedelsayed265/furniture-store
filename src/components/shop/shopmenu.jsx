import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import ProductComp from "./product";
class SHOP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: props.products,
    };
  }
  chairs = () => {
    let filteredState = [...this.state.filteredProducts];
    let products = this.props.products.filter((p) => p.category === "Chairs");
    filteredState = products;
    this.setState({ filteredProducts: filteredState });
  };
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Shop
        </div>
        <section className="shop">
          <aside>
            <h3>CATEGORIES</h3>
            <ul>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>ALL PRODUCTS
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>BEST SELLERS
                </span>
              </li>
              <li>
                <span onClick={this.chairs}>
                  <i className="fas fa-arrow-right"></i>CHAIRS
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>LIGHTNING
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>COFFE TABELS
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>WOODEN CLOCKS
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>SOFAS
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-arrow-right"></i>Gifts
                </span>
              </li>
            </ul>
          </aside>
          <main>
            <h2>ALL PRODUCTS</h2>
            <div className="row">
              {this.state.filteredProducts.map((product) => (
                <ProductComp
                  key={product.id}
                  product={product}
                  onWishAdd={this.props.onWishAdd}
                  onCartChange={this.props.onCartChange}
                />
              ))}
            </div>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default SHOP;
