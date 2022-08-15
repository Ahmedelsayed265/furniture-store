import React, { Component } from "react";
import "./nav.css";
import smStar from "./../assest/smStar.png";
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <div className="nav_header">
            <div className="left_head">
              <img src={smStar} alt="" />
            </div>
            <div className="right_head"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
