import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Login
        </div>
        <section className="Login">
          <h3>MY ACCOUNT</h3>
          <div className="form_wrap">
            <form>
              <div className="form_field">
                <label htmlFor="usermail">USERNAME OR EMAIL ADDRESS *</label>
                <input type="email" id="usermail" />
              </div>
              <div className="form_field">
                <label htmlFor="userpass">PASSWORD *</label>
                <input type="password" id="userpass" />
              </div>
              <div className="sign_link">
                <span>
                  Don't have an account ?{" "}
                  <Link to="/account/sign-up">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
