import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
class Contact extends Component {
  state = {};
  render() {
    const style = { width: "100%", height: "100%", frameborder: "0" };
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Contact us
        </div>
        <section className="contact">
          <h2>CONTACT US</h2>
          <div className="for_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11678.8161
              46884408!2d-81.219954!3d42.963441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef24ff5ea0121%3A0xa
              83d31167b636d38!2zMjAwIEFkZWxhaWRlIFN0IFMsIExvbmRvbiwgT04gTjVaIDNMMdiMINmD2YbYr9in!5e0!3m2!1sar!2sus!4v1661434285726!5m2!1sar!2sus"
              style={style}
              title="map"
              aria-hidden="false"
            ></iframe>
          </div>
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
