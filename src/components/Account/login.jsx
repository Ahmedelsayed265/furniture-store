import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
class Login extends Component {
  state = {
    userEmail: "",
    password: "",
    errors: {},
  };
  Schema = {
    userEmail: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .max(25)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password"
      ),
  };
  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.Schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    this.setState({ errors });
    return errors;
  };
  change = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  submit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
  };
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Login
        </div>
        <section className="Login">
          <h3>MY ACCOUNT</h3>
          <div className="form_wrap">
            <form onSubmit={this.submit}>
              <div className="form_field">
                <label htmlFor="usermail">USERNAME OR EMAIL ADDRESS *</label>
                <input
                  name="userEmail"
                  type="email"
                  id="usermail"
                  vlaue={this.state.userEmail}
                  onChange={this.change}
                />
              </div>
              <div className="form_field">
                <label htmlFor="userpass">PASSWORD *</label>
                <input
                  type="password"
                  name="password"
                  id="userpass"
                  value={this.state.password}
                  onChange={this.change}
                />
              </div>
              <div className="sign_link">
                <span>
                  Don't have an account ?{" "}
                  <Link to="/account/sign-up">Sign up</Link>
                </span>
              </div>
              <div className="submit">
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
