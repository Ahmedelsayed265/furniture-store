import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./../components/navigation/nav";
import HomeComp from "./../components/main/home";
import "./app.css";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:3000/products");
    this.setState({ products: data });
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="main_entire">
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <HomeComp
                  products={this.state.products.filter((p) => p.featured)}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
