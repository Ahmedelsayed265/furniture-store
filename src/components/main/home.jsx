import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import EskilMP4 from "./../assest/EskilMP4.mp4";
import smStar from "./../assest/smStar.png";
class HomeComp extends Component {
  state = {};
  render() {
    return (
      <div className="row header_content">
        <div className="col-4">
          <div className="sitetitle">
            <div className="head">
              <h1>
                FURNITURE & <br /> DÉCOR
              </h1>
              <p>
                Made from premium non-stretch Japanese denim for a
                vintage-inspired look, the ’90s Cheeky Jean has an easy straight
                leg.
              </p>
            </div>
            <div className="read_more">
              <Link to="/about">Learn More</Link>
            </div>
            <div className="quick_access">
              <ul>
                <li>
                  <Link to="/cart">
                    <i class="fa-solid fa-arrow-right-long"></i>chair
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <i class="fa-solid fa-arrow-right-long"></i>home decor
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <i class="fa-solid fa-arrow-right-long"></i>tabels
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <i class="fa-solid fa-arrow-right-long"></i>lighting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 p-0 vid_entire">
          <div className="sm-caption">
            <div className="caption">
              <p>10% discount for registered users</p>
            </div>
            <img src={smStar} alt="star" />
          </div>
          <video loop muted autoPlay playsInline src={EskilMP4} />
        </div>
        <div className="col-3 p-0"></div>
      </div>
    );
  }
}

export default HomeComp;
