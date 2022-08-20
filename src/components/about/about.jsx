import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import About1 from "./../assest/About1.jpg";
import material1 from "./../assest/material1.png";
import material2 from "./../assest/material2.png";
import material3 from "./../assest/material3.png";
import material4 from "./../assest/material4.png";
import material5 from "./../assest/material5.png";
const About = () => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / About Us
      </div>
      <section className="about">
        <div className="about_store">
          <div className="left_wrapper">
            <div className="ab_head">
              <h1>ABOUT STÒRE</h1>
              <p>
                psum voluptate et non. Est velit et ex laboriosam dolor est
                inven tore quo numquam. Labore voluptas
              </p>
            </div>
            <div className="text">
              <p>
                Ipsum voluptate et non. Est velit et ex laboriosam dolor est
                inven tore quo numquam. Labore voluptas nihil molestiae sint
                delectus sint sequi volup tatem. Quia id omnis aliquid suscipit*
                recusandae similique. Vero natus sed animi reiciendis. Ipsum
                voluptate et non. Est velit et ex laboriosam dolor est inventore
                quo nquam. Labore voluptas nihil molestiae sint delectus sint
                sequi voluptatem. Quia id omnis aliquid
              </p>
            </div>
            <div className="career">
              <Link to="#">SEE CAREERS</Link>
            </div>
          </div>
          <div className="right_wrapper">
            <img src={About1} alt="About1" />
          </div>
        </div>
        <div className="serv_outer">
          <div className="serv_inner">
            <h3>
              Made of high quality materials and by highest possible standards
            </h3>
          </div>
          <div className="slider">
            <div className="slide">
              <img src={material1} alt="mater1" />
              <h6>
                WATER <br /> RESISTANCE
              </h6>
            </div>
            <div className="slide">
              <img src={material2} alt="mater2" />
              <h6>
                ECO FRIENDLY <br /> MATERIALS
              </h6>
            </div>
            <div className="slide">
              <img src={material3} alt="mater3" />
              <h6>
                FROST <br /> RESISTANT
              </h6>
            </div>
            <div className="slide">
              <img src={material4} alt="mater4" />
              <h6>
                EASY <br /> ASSEMBLING
              </h6>
            </div>
            <div className="slide">
              <img src={material5} alt="mater5" />
              <h6>
                DURABLE <br /> MATERIALS
              </h6>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
