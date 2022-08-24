import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./faq.css";
import MainRoute from "./main";
import Delivery from "./delivery";
import Returns from "./return";
import Order from "./order";
import Carerrs from "./carrers";
import Terms from "./conditions";
const FAQpage = () => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / FAQs
      </div>
      <section className="FAQs">
        <aside>
          <h4>CUSTOMER SUPPORT</h4>
          <a className="mailTo" href="mailto:support@example.com">
            support@example.com
          </a>
          <ul>
            <li>
              <Link to="/FAQs">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>FAQ
              </Link>
            </li>
            <li>
              <Link to="/FAQs/terms-condition">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>Terms
                & Conditions
              </Link>
            </li>
            <li>
              <Link to="/FAQs/delivery-information">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Delivery Information
              </Link>
            </li>
            <li>
              <Link to="/FAQs/returns-refunds">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/FAQs/order-tracking">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>Order
                Tracking
              </Link>
            </li>
            <li>
              <Link to="/FAQs/carrers">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Careers
              </Link>
            </li>
          </ul>
        </aside>
        <main>
          <Switch>
            <Route path="/FAQs" exact component={MainRoute} />
            <Route path="/FAQs/terms-condition" component={Terms} />
            <Route path="/FAQs/delivery-information" component={Delivery} />
            <Route path="/FAQs/returns-refunds" component={Returns} />
            <Route path="/FAQs/order-tracking" component={Order} />
            <Route path="/FAQs/carrers" component={Carerrs} />
          </Switch>
        </main>
      </section>
    </React.Fragment>
  );
};

export default FAQpage;
