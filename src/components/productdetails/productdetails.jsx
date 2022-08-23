import React, { Component } from "react";
import { Link } from "react-router-dom";
class Details extends Component {
  state = {};
  render() {
    return (
      <div className="go_back">
        <Link to="/home">Home</Link> / About Us
      </div>
    );
  }
}

export default Details;
