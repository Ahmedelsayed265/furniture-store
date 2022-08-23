import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Contact us
        </div>
        <section className="contact">
          <h2>CONTACT US</h2>
          <div className="for_map"></div>
          <div className="info">
            <p>
              We are always keen to hear from people that would like to add a
              <br />
              new perspectives to our team.
            </p>
            <h5>GET IN TOUCH</h5>
            <p className="p2">
              Got any questions? We look forward to answering all your requests.
            </p>
            <p className="p2 mb-5">
              Monday – Friday: 08.00 – 17.00
              <br />
              Saturday: 09.00 – 16.30
            </p>
            <p className="p2">E-MAIL:</p>
            <p className="p2">
              Orders:{" "}
              <a href="mailto:salesorder@qodestoir.com">
                salesorder@qodestoir.com
              </a>
              <br />
              General inquiries:{" "}
              <a href="mailto:customerservice@qodestoir.com">
                customerservice@qodestoir.com
              </a>
              <br />
              Service/claims:{" "}
              <a href="mailto:service@qodestoir.com">service@qodestoir.com</a>
            </p>
            <p className="p2 mt-4 mb4">PHONE:</p>
            <p className="p2">
              <a href="tel:+355 0992 8855">+355 0992 8855</a>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
