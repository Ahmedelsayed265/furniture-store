import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import "./app.css";
import Nav from "./../components/navigation/nav";
import HomeComp from "./../components/main/home";
import About from "./../components/about/about";
import Footer from "./../components/footer/foot";
import CART from "./../components/cart/cart";
import notFound from "./../components/error/error";
import PORT from "./../components/portfolio/portfolio";
import Wish from "./../components/wishlist/wishlist";

class App extends Component {
  state = {
    products: [],
    projects: [],
  };
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:3000/products");
    let products = data.filter((pro) => pro.category !== "projects");
    this.setState({ products });
    let projects = data.filter((pro) => pro.category === "projects");
    this.setState({ projects });
  }
  inCartAdd = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].inCart = true;
    products[index].count = 1;
    this.setState({ products });
  };
  inCartDelete = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].inCart = false;
    products[index].count = 0;
    this.setState({ products });
  };
  increment = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };
  decrement = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    if (products[index].count > 0) {
      products[index].count--;
    }
    this.setState({ products });
  };
  inListDelete = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].wished = false;
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          products={this.state.products.filter((p) => p.inCart && p.count > 0)}
          onDelete={this.inCartDelete}
        />
        <div className="main_entire">
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <HomeComp
                  products={this.state.products.filter((p) => p.featured)}
                  {...props}
                  onCartChange={this.inCartAdd}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/portfolio"
              render={(props) => (
                <PORT projects={this.state.projects} {...props} />
              )}
            />
            <Route
              path="/wishlist"
              render={(props) => (
                <Wish
                  products={this.state.products.filter((p) => p.wished)}
                  onCartChange={this.inCartAdd}
                  onXChange={this.inListDelete}
                  {...props}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <CART
                  products={this.state.products.filter((p) => p.inCart)}
                  onIncrement={this.increment}
                  onDecrement={this.decrement}
                  onDelete={this.inCartDelete}
                  {...props}
                />
              )}
            />
            <Route path="/ERROR404" component={notFound} />
            <Redirect to="/ERROR404" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
