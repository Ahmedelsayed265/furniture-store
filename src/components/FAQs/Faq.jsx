import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
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
          <ul>
            <li>
              <Link to="/FAQs">FAQ</Link>
            </li>
            <li>
              <Link to="/FAQs/terms-condition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/FAQs/delivery-information">Delivery Information</Link>
            </li>
            <li>
              <Link to="/FAQs/returns-refunds">Returns & Refunds</Link>
            </li>
            <li>
              <Link to="/FAQs/order-tracking">Order Tracking</Link>
            </li>
            <li>
              <Link to="/FAQs/carrers">Careers</Link>
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
