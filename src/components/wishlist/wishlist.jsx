import React from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";
const Wish = (props) => {
  return (
    <div className="go_back">
      <Link to="/home">Home</Link> / Wishlist
    </div>
  );
};

export default Wish;
