import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
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
            <div className="row"></div>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default SHOP;
