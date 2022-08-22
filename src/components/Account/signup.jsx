import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sign extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> /{" "}
          <Link className="link2" to="/account">
            Login
          </Link>{" "}
          / Signup
        </div>
        <section className="Login">
          <h3>MY ACCOUNT</h3>
          <div className="form_wrap">
            <form>
              <div className="form_field">
                <label htmlFor="username">USERNAME *</label>
                <input type="text" id="username" />
              </div>
              <div className="form_field">
                <label htmlFor="usermail">EMAIL ADDRESS *</label>
                <input type="email" id="usermail" />
              </div>
              <div className="form_field">
                <label htmlFor="userpass">PASSWORD *</label>
                <input type="password" id="userpass" />
              </div>
              <div className="sign_link">
                <span>
                  Already have an account ? <Link to="/account">Log in</Link>
                </span>
              </div>
              <div className="submit">
                <button type="submit">SIGN UP</button>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Sign;
