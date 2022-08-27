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
  allProducts = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products;
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  chairs = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Chairs"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  lightning = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Lamps"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  bestSellers = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter((p) => p.bestSeller);
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  Tabels = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Tables"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  clockes = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Clocks"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  Sofas = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Sofas"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  gifts = () => {
    let allProducts = [...this.state.allProducts];
    let filteredProducts = this.props.products.filter(
      (p) => p.category === "Gifts"
    );
    allProducts = filteredProducts;
    this.setState({ allProducts });
  };
  render() {
    const { onCartChange, onWishAdd } = this.props;
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
                <span onClick={this.allProducts}>
                  <i className="fas fa-arrow-right"></i>ALL PRODUCTS
                </span>
              </li>
              <li>
                <span onClick={this.bestSellers}>
                  <i className="fas fa-arrow-right"></i>BEST SELLERS
                </span>
              </li>
              <li>
                <span onClick={this.chairs}>
                  <i className="fas fa-arrow-right"></i>CHAIRS
                </span>
              </li>
              <li>
                <span onClick={this.lightning}>
                  <i className="fas fa-arrow-right"></i>LIGHTNING
                </span>
              </li>
              <li>
                <span onClick={this.Tabels}>
                  <i className="fas fa-arrow-right"></i>COFFE TABELS
                </span>
              </li>
              <li>
                <span onClick={this.clockes}>
                  <i className="fas fa-arrow-right"></i>WOODEN CLOCKS
                </span>
              </li>
              <li>
                <span onClick={this.Sofas}>
                  <i className="fas fa-arrow-right"></i>SOFAS
                </span>
              </li>
              <li>
                <span onClick={this.gifts}>
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
                  onWishAdd={onWishAdd}
                  onCartChange={onCartChange}
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
