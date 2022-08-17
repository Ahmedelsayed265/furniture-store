import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./../components/navigation/nav";
import HomeComp from "./../components/main/home";
import Footer from './../components/footer/foot';
import "./app.css";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:3000/products");
    this.setState({ products: data });
  }
  inCartAdd = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].inCart = true;
    products[index].count = 1;
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Nav products={this.state.products} />
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
          </Switch>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
