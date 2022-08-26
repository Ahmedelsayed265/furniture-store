import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import ProductComp from "./product";
class SHOP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: props.products,
    };
  }
  chairs = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.state.allProducts.filter(
      (p) => p.category === "Chairs"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
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
              {this.state.allProducts.map((product) => (
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
