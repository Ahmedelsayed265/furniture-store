import React from "react";
import "./error.css";
import img from "./../assest/404-img-1.png";
import { Link } from "react-router-dom";
const notFound = () => {
  return (
    <div className="error_container">
      <img src={img} alt="error" />
      <h2>404 ERROR</h2>
      <p>
        The page requested couldn’t be found. This could be a spelling error in
        the URL or a removed page.
      </p>
      <Link to="/home">BACK TO HOME PAGE</Link>
    </div>
  );
};

export default notFound;
