import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import ProductComp from "./product";
class SHOP extends Component {
  state = {};
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
                <span>BEST SELLERS</span>
              </li>
            </ul>
          </aside>
          <main>
            <h2>ALL PRODUCTS</h2>
            <div className="row">
              {this.props.products.map((product) => (
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
