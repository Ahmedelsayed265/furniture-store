import React from "react";
import { Link } from "react-router-dom";
import "./account.css";
const MyAccount = (props) => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / My Account
      </div>
      <section className="Login">
        <h3>MY ACCOUNT</h3>
      </section>
    </React.Fragment>
  );
};

export default MyAccount;
