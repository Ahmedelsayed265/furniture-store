import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / Contact us
      </div>
      <section className="contact">
        <h2>CONTACT US</h2>
        <div className="for_map"></div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
