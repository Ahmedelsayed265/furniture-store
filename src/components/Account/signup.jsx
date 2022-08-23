import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
class Sign extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: {},
  };
  Schema = {
    username: Joi.string().required(),
    emailaddress: Joi.string().email().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{8,30}$/)
      .required(),
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
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      if (this.state.username === "") {
        toast.error("User name is required");
      }
      if (this.state.email === "") {
        toast.error("Email address is Required");
      }
      if (this.state.password === "") {
        toast.error("Passsword is Required");
      }
    } else {
      for (const error of res.error.details) {
        if (error.message === '"email" must be a valid email') {
          toast.error("unvalid username or Emailaddress");
        }
        if (
          error.message ===
          `"password" with value "${this.state.password}" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/`
        ) {
          toast.error("incorrect password");
        }
      }
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
        <ToastContainer />
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
            <form onSubmit={this.submit}>
              <div className="form_field">
                <label htmlFor="username">USERNAME *</label>
                <input
                  name="username"
                  type="text"
                  id="username"
                  value={this.state.username}
                  onChange={this.change}
                />
              </div>
              <div className="form_field">
                <label htmlFor="usermail">EMAIL ADDRESS *</label>
                <input
                  name="email"
                  type="text"
                  id="usermail"
                  value={this.state.email}
                  onChange={this.change}
                />
              </div>
              <div className="form_field">
                <label htmlFor="userpass">PASSWORD *</label>
                <input
                  name="password"
                  type="password"
                  id="userpass"
                  value={this.state.password}
                  onChange={this.change}
                />
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
