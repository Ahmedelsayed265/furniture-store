import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
const PORT = (props) => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / Portfolio
      </div>
      <section className="projects">
        <h2>PROJECT CASES</h2>
        <div className="row">
          {props.projects.map((project) => (
            <div className="col-4 p-4" key={project.id}>
              <div className="img_wrap">
                <img src={project.url} alt={project.id} />
                <div className="layer">
                  <p>{project.title}</p>
                  <h5>{project.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row sub">
        <div className="sub_wrap">
          <h3>
            Subscribe to our newsletter and receive the latest product news,
            stories, invitations to exclusive design events and much, much more.
          </h3>
          <form className="field">
            <input placeholder="Enter Email Address" type="email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <p>
            BY SUBSCRIBING, YOU ACCEPT OUR{" "}
            <Link to="/terms-condition">
              PRIVACY POLCY{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </p>
        </div>
      </div>
      </section>
    </React.Fragment>
  );
};

export default PORT;
