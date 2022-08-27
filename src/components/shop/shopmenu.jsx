import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import ProductComp from "./product";
class SHOP extends Component {
  state = {
    start: 0,
    stop: 21,
  };
  firstPage = () => {
    let state = { ...this.state };
    let start = state.start;
    let stop = state.stop;
    start = 0;
    stop = 21;
    this.setState({ start: start, stop: stop });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  secondPage = () => {
    let state = { ...this.state };
    let start = state.start;
    let stop = state.stop;
    start = 21;
    stop = 42;
    this.setState({ start: start, stop: stop });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  thirdPage = () => {
    let state = { ...this.state };
    let start = state.start;
    let stop = state.stop;
    start = 42;
    stop = 63;
    this.setState({ start: start, stop: stop });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  nextPage = () => {
    let state = { ...this.state };
    let start = state.start;
    let stop = state.stop;
    if (stop < this.props.products.length) {
      start = start + 21;
      stop = stop + 21;
    }
    this.setState({ start: start, stop: stop });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  prevPage = () => {
    let state = { ...this.state };
    let start = state.start;
    if (start > 0) {
      start = start - 21;
    }
    let stop = state.stop;
    if (stop > 21) {
      stop = stop - 21;
    }
    this.setState({ start: start, stop: stop });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  filerFunction = (category) => {
    switch (category) {
      case "all":
        break;
      case "best":
        break;
      case "chairs":
        break;
      case "lightning":
        break;
      case "tabels":
        break;
      case "clocks":
        break;
      case "sofas":
        break;
      case "gifts":
        break;
      default:
        break;
    }
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
                <span onClick={() => this.allProducts("all")}>
                  <i className="fas fa-arrow-right"></i>ALL PRODUCTS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("best")}>
                  <i className="fas fa-arrow-right"></i>BEST SELLERS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("chairs")}>
                  <i className="fas fa-arrow-right"></i>CHAIRS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("lightning")}>
                  <i className="fas fa-arrow-right"></i>LIGHTNING
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("tabels")}>
                  <i className="fas fa-arrow-right"></i>COFFE TABELS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("clocks")}>
                  <i className="fas fa-arrow-right"></i>WOODEN CLOCKS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("sofas")}>
                  <i className="fas fa-arrow-right"></i>SOFAS
                </span>
              </li>
              <li>
                <span onClick={() => this.allProducts("gifts")}>
                  <i className="fas fa-arrow-right"></i>Gifts
                </span>
              </li>
            </ul>
          </aside>
          <main>
            <h2>PRODUCTS</h2>
            <h6>
              Showing {this.state.start + 1} -{" "}
              {this.state.stop > this.props.products.length
                ? this.props.products.length
                : this.state.stop}{" "}
              <span>of {this.props.products.length} results</span>
            </h6>
            <div className="row">
              {this.props.products
                .slice(this.state.start, this.state.stop)
                .map((product) => (
                  <ProductComp
                    key={product.id}
                    product={product}
                    onWishAdd={onWishAdd}
                    onCartChange={onCartChange}
                  />
                ))}
            </div>
            <div className="navigtor">
              <i className="fas fa-angle-left" onClick={this.prevPage}></i>
              <span onClick={this.firstPage}>1</span>
              <b></b>
              <span onClick={this.secondPage}>2</span>
              <b></b>
              <span onClick={this.thirdPage}>3</span>
              <i className="fas fa-angle-right" onClick={this.nextPage}></i>
            </div>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default SHOP;
